import { Business, RouteInfo } from '../types/Business';



export const businesses: Business[] = [
  
  {
    id: '1',
    name: 'Bar Villa Pasiega',
    description: 'Disfruta de la cocina tradicional de San Pedro del Romeral en un ambiente acogedor',
    categories: ['gastronomia'],
    contact: {
      phone: '623 15 51 79',
      address: 'La plaza La plaza, 39686 San Pedro del Romeral, Cantabria'
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
      phone: '942 59 55 67',
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
    description: 'Raquel Crespo - Nuestros cuerpos requieren unos cuidados, que muchas veces olvidamos, inmersos en el acelerado ritmo de vida de nuestra sociedad.\nDate un respiro y cuídate',
    categories: ['servicios'],
    contact: {
      phone: '658 12 80 02',
      whatsapp: '658 12 80 02'
    },
    schedule: 'V-S: 9:00-14:00, 16:00-20:00 | Cita previa'
  },
  {
    id: '5',
    name: 'Ganadería Bustamante Pérez',
    description: 'Carne de primera calidad de nuestras montañas. Carne de vacuno y oveja. Hacemos recorridos dentro de nuestra ganadería',
    categories: ['productos'],
    contact: {
      phone: '616 00 16 28',
      address: 'Finca el Pradón, 39686 San Pedro del Romeral, Cantabria'
    },
    schedule: 'L-V: 10:00-13:00, 17:00-19:00 | Sábados: 10:00-13:00'
  },

    {
    id: '6',
    name: 'Morcillas, quesadas y huevos camperos Llarira Pasiega',
    description: 'Morcillas y Quesadas caseras, hechas de la mano de María Angeles. Por encargo.',
    categories: ['productos'],
    contact: {
      phone: '638 26 32 78',
      address: ''
    },
    schedule: 'L-V: 10:00-13:00'
  },    
   {
    id: '7',
    name: 'Herrería Artesanal Fragua Norte',
    description: 'Herrería y Forja. Tenemos nuestro taller en San Pedro del Romeral, en los Valles Pasiegos de Cantabria, y trabajamos por encargo para toda España.\n Diseñamos y fabricamos muebles a medida, elementos decorativos y todo tipo de trabajos en hierro',
    categories: ['productos', 'servicios'],
    contact: {
      phone: '675 299 856 ',
      address: 'San Pedro del Romeral'
    },
    schedule: 'L-V: 10:00-15:00'
  },
     {
    id: '8',
    name: 'Farmacia Los Valles Pasiegos',
    description: 'En la Farmacia Valles Pasiegos queremos ofrecer calidad, cercanía y profesionalidad en el trato de nuestros farmacéuticos con todo lo relativo a tu hogar. ',
    categories: ['productos', 'servicios'],
    contact: {
      phone: '669 731 546 ',
      address: 'La Plaza 39686 San Pedro del Romeral, Cantabria'
    },
    schedule: 'L-V: 10:00-14:00, 17:00 a 20:00 | Sábados: 10:00 a 14:00'
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