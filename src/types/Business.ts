export type CategoryType = 'gastronomia' | 'productos' | 'servicios' | 'naturaleza' | 'publicos';


export interface Business {
  id: string;
  name: string;
  description: string;
  categories:  CategoryType[]; //cambios
  contact: {
    phone?: string;
    email?: string;
    address?: string;
    whatsapp?: string;
  };
  schedule: string;
  isOpen?: boolean;
}

export interface RouteInfo {
  id: string;
  name: string;
  description: string;
  duration: string;
  distance: string;
  difficulty: 'Fácil' | 'Moderado' | 'Difícil';
  tips: string;
  category: string;
}