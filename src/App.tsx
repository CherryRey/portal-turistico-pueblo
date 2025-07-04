import React from 'react';
import BusinessCard from './components/BusinessCard';
import { businesses } from './data/businesses';
import RouteCard from './components/RouteCard';
import { routes } from './data/businesses';

function App() {
  const gastronomia = businesses.filter(b => b.category === 'gastronomia');
  const productos = businesses.filter(b => b.category === 'productos');
  const servicios = businesses.filter(b => b.category === 'servicios');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            🏔️ Portal Turístico del Pueblo
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Descubre todo lo que nuestro pueblo tiene para ofrecerte
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-indigo-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6">
            <li><a href="#gastronomia" className="hover:text-indigo-200 transition-colors">🍽️ Gastronomía</a></li>
            <li><a href="#productos" className="hover:text-indigo-200 transition-colors">🧀 Productos</a></li>
            <li><a href="#servicios" className="hover:text-indigo-200 transition-colors">🔧 Servicios</a></li>
            <li><a href="#naturaleza" className="hover:text-indigo-200 transition-colors">🥾 Naturaleza</a></li>
            <li><a href="#publicos" className="hover:text-indigo-200 transition-colors">🏛️ Públicos</a></li>
          </ul>
        </div>
      </nav>

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

        {/* Gastronomía */}
        <section id="gastronomia" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-orange-100 p-3 rounded-full mr-4">🍽️</span>
            Gastronomía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gastronomia.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 p-3 rounded-full mr-4">🧀</span>
            Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="bg-blue-100 p-3 rounded-full mr-4">🔧</span>
            Servicios Locales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map(business => (
              <BusinessCard key={business.id} business={business} />
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