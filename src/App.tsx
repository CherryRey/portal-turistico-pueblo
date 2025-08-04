import React, { useState, useMemo } from 'react';
import Header from './components/header';
import BusinessCard from './components/BusinessCard';
import { businesses } from './data/businesses';
import RouteCard from './components/RouteCard';
import { routes } from './data/businesses';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  //Filtramos negocios basandonos en búsqueda y categoría
  const filteredBusinesses = useMemo(() => {
    let filtered = businesses; 
    //filtrar por categoria.
    if (selectedCategory !== 'all'){
      filtered = filtered.filter( b=> b.categories.includes(selectedCategory as any));
    }
    if (searchTerm.trim()){
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(b =>
        b.name.toLowerCase().includes(searchLower)||
        b.description.toLowerCase().includes(searchLower)||
        b.contact.address?.toLowerCase().includes(searchLower));
      

    }
 return filtered;
}, [searchTerm, selectedCategory]);

//Agrupar negocios filtrados por categoria
// Agrupar negocios filtrados por categoría
  const groupedBusinesses = useMemo(() => {
    const groups: { [key: string]: typeof businesses } = {
      gastronomia: [],
      productos: [],
      servicios: [],
      naturaleza: [],
      publicos: []
    };

    //Cambio de String -> array iteramos por cada categoria
filteredBusinesses.forEach(business => {
  business.categories.forEach(category => {
    if (groups[category]) {
      groups[category].push(business);
    }
  });
});
    return groups;
  }, [filteredBusinesses]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryLabels = {
    gastronomia: { label: 'Gastronomía', emoji: '🍽️', color: 'orange' },
    productos: { label: 'Productos Locales', emoji: '🧀', color: 'green' },
    servicios: { label: 'Servicios', emoji: '🔧', color: 'blue' },
    naturaleza: { label: 'Naturaleza', emoji: '🥾', color: 'emerald' },
    publicos: { label: 'Servicios Públicos', emoji: '🏛️', color: 'purple' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Mejorado */}
      <Header 
        onSearchChange={handleSearchChange}
        onCategoryFilter={handleCategoryFilter}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Introducción */}
        <section className="text-center mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Un lugar único por descubrir
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro pueblo te ofrece una experiencia auténtica, desde nuestra rica
            gastronomía local hasta impresionantes rutas de senderismo. Aquí encontrarás
            todo lo que necesitas saber para disfrutar de tu visita.
          </p>
        </section>

        {/* Resultados de búsqueda */}
        {searchTerm && (
          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Resultados de búsqueda para "{searchTerm}"
              </h3>
              <p className="text-blue-700">
                {filteredBusinesses.length} resultado{filteredBusinesses.length !== 1 ? 's' : ''} encontrado{filteredBusinesses.length !== 1 ? 's' : ''}
              </p>
            </div>
          </section>
        )}

        {/* Mostrar categorías con negocios */}
        {Object.entries(groupedBusinesses).map(([category, businessList]) => {
          if (businessList.length === 0) return null;

          const categoryInfo = categoryLabels[category as keyof typeof categoryLabels];
          if (!categoryInfo) return null;

          return (
            <section key={category} id={category} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className={`bg-${categoryInfo.color}-100 p-3 rounded-full mr-4`}>
                  {categoryInfo.emoji}
                </span>
                {categoryInfo.label}
                <span className="ml-3 text-lg font-normal text-gray-500">
                  ({businessList.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessList.map(business => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </section>
          );
        })}

        {/* No hay resultados */}
        {filteredBusinesses.length === 0 && (
          <section className="text-center py-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm 
                  ? `No hay negocios que coincidan con "${searchTerm}"`
                  : selectedCategory !== 'all' 
                    ? `No hay negocios en la categoría seleccionada`
                    : 'No hay negocios disponibles'
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Ver todos los negocios
              </button>
            </div>
          </section>
        )}

        {/* Rutas de Senderismo */}
        <section id="naturaleza" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 p-3 rounded-full mr-4">🥾</span>
            Rutas de Senderismo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </section>

        {/* Rutas de Senderismo */}
        <section id="naturaleza" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-green-100 p-3 rounded-full mr-4">🥾</span>
            Rutas de Senderismo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </section>

        {/* Próximamente */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">🚧</span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">
                ¡Más contenido próximamente!
              </h3>
              <p className="mt-2 text-yellow-700">
                Estamos añadiendo más negocios, rutas de senderismo, y servicios públicos.
                Este es tu proyecto en desarrollo.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Portal Turístico del Pueblo</p>
          <p className="text-gray-400 mt-2">Desarrollado con React + TypeScript</p>
        </div>
      </footer>
    </div>
  );
}

export default App;