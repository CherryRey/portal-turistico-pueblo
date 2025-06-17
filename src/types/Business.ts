export interface Business {
  id: string;
  name: string;
  description: string;
  category: 'gastronomia' | 'productos' | 'servicios' | 'naturaleza' | 'publicos';
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
}