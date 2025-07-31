import React, { useState } from 'react';

interface HeaderProps {
  onSearchChange?: (searchTerm: string) => void;
  onCategoryFilter?: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, onCategoryFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Todo', emoji: '🏔️' },
    { id: 'gastronomia', label: 'Gastronomía', emoji: '🍽️' },
    { id: 'productos', label: 'Productos', emoji: '🧀' },
    { id: 'servicios', label: 'Servicios', emoji: '🔧' },
    { id: 'naturaleza', label: 'Naturaleza', emoji: '🥾' },
    { id: 'publicos', label: 'Públicos', emoji: '🏛️' }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  const handleCategoryClick = (categoryId: string) => {
    onCategoryFilter?.(categoryId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo and Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-4xl">🏔️</span>
              Portal Turístico San Pedro del Romeral
            </h1>
            <p className="text-gray-600 mt-2">
              Descubre todo lo que San Pedro del Romeral tiene para ofrecerte en los Valles Pasiegos
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 text-xl">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Buscar negocios, servicios..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    onSearchChange?.('');
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <span className="text-gray-400 hover:text-gray-600 text-xl">✕</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex py-4">
            <ul className="flex flex-wrap justify-center gap-6 w-full">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex items-center gap-2 hover:text-indigo-200 transition-colors px-3 py-2 rounded-md hover:bg-indigo-700"
                  >
                    <span>{category.emoji}</span>
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between py-4">
              <span className="text-lg font-medium">Categorías</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl focus:outline-none"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
            
            {isMenuOpen && (
              <div className="pb-4">
                <ul className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className="flex items-center gap-2 w-full text-left hover:text-indigo-200 transition-colors px-3 py-2 rounded-md hover:bg-indigo-700"
                      >
                        <span>{category.emoji}</span>
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Quick Stats Bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>🍽️</span>
              <span>3 Restaurantes</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🔧</span>
              <span>2 Servicios</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🥾</span>
              <span>2 Rutas</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🕒</span>
              <span>Actualizado hoy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;