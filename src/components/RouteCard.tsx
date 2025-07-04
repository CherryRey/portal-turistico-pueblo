import React from 'react';
import { RouteInfo } from '../types/Business';

interface RouteCardProps {
  route: RouteInfo;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Título */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {route.name}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mb-4">{route.description}</p>

      {/* Datos técnicos */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <div>
          <span className="font-semibold text-gray-700">⏱ Duración:</span>
          <span className="ml-2">{route.duration}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-700">📏 Distancia:</span>
          <span className="ml-2">{route.distance}</span>
        </div>
        <div className="col-span-2">
          <span className="font-semibold text-gray-700">🏔 Dificultad:</span>
          <span
            className={`ml-2 px-2 py-1 rounded text-xs ${
              route.difficulty === 'Fácil'
                ? 'bg-green-100 text-green-800'
                : route.difficulty === 'Moderado'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {route.difficulty}
          </span>
        </div>
      </div>

      {/* Consejo */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Consejo:</strong> {route.tips}
        </p>
      </div>

      {/* Pastilla de categoría al final */}
      <div className="mt-4">
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
            route.category === 'naturaleza'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {route.category}
        </span>
      </div>
    </div>
  );
};

export default RouteCard;
