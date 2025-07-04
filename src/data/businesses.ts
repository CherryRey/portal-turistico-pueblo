import { Business, RouteInfo } from '../types/Business';

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Bar VillaPasiega',
    description: 'Disfruta de la cocina tradicional en un ambiente acogedor',
    category: 'gastronomia',
    contact: {
      phone: '942 XXX XXX',
      address: 'Plaza del Pueblo, 1'
    },
    schedule: 'M - D: 10:00-00:00',
    isOpen: true
  },
  {
    id: '2',
    name: 'Quesería Los Tiemblos',
    description: 'Quesos artesanales de la máxima calidad',
    category: 'gastronomia',
    contact: {
      phone: '942 XXX XXX',
      email: 'info@lostiemblos.com'
    },
    schedule: 'L-V: 9:00-14:00, 16:00-19:00 | S-D: 9:00-14:00'
  },
  {
    id: '3',
    name: 'Obrador La Braniza',
    description: 'Auténticos Sobaos y Quesadas cántabras',
    category: 'gastronomia',
    contact: {
      phone: '646 02 65 69',
      address: 'Bo. San Pedro, 57, San Pedro del Romeral, Cantabria'
    },
    schedule: 'L,X,J: 10:30-14:30 | V-D: 10:30-14:30, 17:00-20:00 | Martes cerrado'
  },
  {
    id: '4',
    name: 'Fisioterapia El Casar',
    description: 'Raquel Crespo - Cuidado profesional de tu salud',
    category: 'servicios',
    contact: {
      phone: '942 XXX XXX',
      whatsapp: '6XX XXX XXX'
    },
    schedule: 'L-V: 9:00-14:00, 16:00-20:00 | Cita previa'
  },
  {
    id: '5',
    name: 'Ganadería Bustamante',
    description: 'Carne de primera calidad de nuestras montañas',
    category: 'productos',
    contact: {
      phone: '942 XXX XXX',
      address: 'Barrio Las Cuevas'
    },
    schedule: 'L-V: 10:00-13:00, 17:00-19:00 | Sábados: 10:00-13:00'
  }
];

export const routes: RouteInfo[] = [
  {
    id: '1',
    name: 'Ruta del Molino',
    description: 'Senderismo entre molinos y naturaleza',
    duration: '2 horas',
    distance: '6 km',
    difficulty: 'Moderado',
    tips: 'Llevar agua y calzado adecuado.',
    category: 'naturaleza'
  },
  {
    id: '2',
    name: 'Ruta del Reloj Solar',
    description: 'Descubre nuestro patrimonio histórico caminando',
    duration: '1-2 horas',
    distance: '3.5 km',
    difficulty: 'Fácil',
    tips: 'Mejor en mañanas soleadas.',
    category: 'naturaleza'
  },
  {
    id: '3',
    name: 'Túnel de la Engaña – Senda del Arroyo Aján',
    description: 'Recorrido circular por la ribera del arroyo Aján hasta el túnel abandonado de La Engaña',
    duration: '3–4 horas',
    distance: '9.85 km',
    difficulty: 'Moderado',
    tips: 'IMPRESCINDIBLE llevar linterna para el túnel y calzado resistente.',
    category: 'naturaleza'
  },
  {
    id: '5',
    name: 'Cascada del Aguasal – Circular desde Vega de Pas',
    description: 'Recorrido circular desde Vega de Pas hasta la cascada del Aguasal, ideal para todos los niveles.',
    duration: '1-2 horas',
    distance: '5.74 km',
    difficulty: 'Fácil',
    tips: 'Sendas accesibles para todos. Llevar calzado antideslizante y agua.',
    category: 'naturaleza'
  }
];