import { Business, RouteInfo } from '../types/Business';



export const businesses: Business[] = [
  {
    id: '1',
    name: 'Bar VillaPasiega',
    description: 'Disfruta de la cocina tradicional en un ambiente acogedor',
    categories: ['gastronomia'],
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
    categories: ['productos','gastronomia'],
    contact: {
      phone: '609 40 77 45',
      address: 'Barrio La Sota s/n, 39686, San Pedro del Romeral (Cantabria)'
    },
    schedule: 'L-V: 9:00-14:00, 16:00-19:00 | S-D: 9:00-14:00'
  },
  {
    id: '3',
    name: 'Obrador La Braniza',
    description: 'Auténticos Sobaos y Quesadas cántabras',
    categories: ['productos','gastronomia'],
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
    categories: ['servicios'],
    contact: {
      phone: '658128002',
      whatsapp: '658128002'
    },
    schedule: 'V-S: 9:00-14:00, 16:00-20:00 | Cita previa'
  },
  {
    id: '5',
    name: 'Ganadería Bustamante Pérez',
    description: 'Carne de primera calidad de nuestras montañas',
    categories: ['productos'],
    contact: {
      phone: '616 00 16 28',
      address: 'Finca el Pradón, 39686 San Pedro del Romeral, Cantabria'
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
    tips: 'Llevar agua y calzado adecuado'
  },
  {
    id: '2',
    name: 'Ruta del Reloj Solar',
    description: 'Descubre nuestro patrimonio histórico caminando',
    duration: '1-2 horas',
    distance: '3.5 km',
    difficulty: 'Fácil',
    tips: 'Mejor en mañanas soleadas'
  }
];