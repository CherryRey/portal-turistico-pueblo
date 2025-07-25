import React from 'react';
import { Business } from '../types/Business';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {business.name}
      </h3>
      <p className="text-gray-600 mb-4">
        {business.description}
      </p>
      
      {/* Información de contacto */}
      <div className="space-y-2 mb-4">
        {business.contact.phone && (
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-6 text-blue-500">📞</span>
            <span>{business.contact.phone}</span>
          </div>
        )}
        
        {business.contact.address && (
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-6 text-green-500">📍</span>
            <span>{business.contact.address}</span>
          </div>
        )}
        
        {business.contact.email && (
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-6 text-purple-500">✉️</span>
            <span>{business.contact.email}</span>
          </div>
        )}

        {business.contact.whatsapp && (
          <div className="flex items-center text-sm text-gray-700">
            <span className="w-6 text-green-600">📱</span>
            <span>WhatsApp: {business.contact.whatsapp}</span>
          </div>
        )}
      </div>
      
      {/* Horario */}
      <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
        <div className="text-sm font-medium text-green-800">
          <span className="font-bold">Horario:</span> {business.schedule}
        </div>
      </div>

      {/* Badge de categoría */}
      <div className="mt-3">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
          business.category === 'gastronomia' ? 'bg-orange-100 text-orange-800' :
          business.category === 'servicios' ? 'bg-blue-100 text-blue-800' :
          business.category === 'productos' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {business.category}
        </span>
      </div>
    </div>
  );
};

export default BusinessCard;