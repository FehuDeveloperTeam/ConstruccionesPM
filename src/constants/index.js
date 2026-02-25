import { Zap, Hammer, ShieldCheck } from 'lucide-react';

// --- IMPORTACIÓN DE IMÁGENES (Asegúrate de tenerlas en assets) ---
import imgAcmafor from '../assets/images/malla-acmafor.jpg'; 
import imgBulldog from '../assets/images/pandereta-bulldog.jpg';
import imgBizcocho from '../assets/images/malla-bizcocho.jpg';
import imgParcela from '../assets/images/cierre-parcela.jpg';
import imgIndustrial from '../assets/images/proyecto-industrial.jpg';
import imgCasa from '../assets/images/casa-residencial.jpg';
import imgTablero from '../assets/images/tablero-electrico.jpg';
import imgEmpalme from '../assets/images/empalme-rural.jpg';
import imgPortada from '../assets/images/portada.jpg';

// --- SERVICIOS ---
export const SERVICE_AREAS = [
  {
    id: 'electricidad',
    title: 'Electricidad Certificada',
    icon: Zap,
    description: 'Instalaciones seguras bajo normativa SEC vigente.',
    items: [
      'Trámite de Empalmes',
      'Instalaciones Eléctricas',
      'Certificados TE1 (Firma Autorizada)',
      'Proyectos Residenciales y Rurales',
      'Montaje Industrial'
    ]
  },
  {
    id: 'construccion',
    title: 'Construcción Civil',
    icon: Hammer,
    description: 'Obra gruesa y terminaciones con estándares de calidad.',
    items: [
      'Construcción Habitacional',
      'Ampliaciones y Remodelaciones',
      'Radieres y Fundaciones',
      'Vialidad y Accesos',
      'Terminaciones Finas',
      'Instalación de Portones'
    ]
  }
];

// --- TIPOS DE CIERRES ---
export const FENCE_TYPES = [
  {
    name: 'Malla Acmafor 3D',
    desc: 'Alta seguridad y estética moderna. Ideal para parcelas y empresas.',
    image: imgAcmafor 
  },
  {
    name: 'Malla Bizcocho',
    desc: 'La solución clásica y económica. Galvanizada con postes impregnados.',
    image: imgBizcocho
  },
  {
    name: 'Pandereta Bulldog',
    desc: 'Privacidad total y máxima robustez. Placas de hormigón reforzado.',
    image: imgBulldog
  },
  {
    name: 'Cierres Agrícolas',
    desc: 'Polines y alambre de púas para delimitación de grandes extensiones.',
    image: imgParcela 
  }
];

// --- PROYECTOS REALIZADOS (4 Items: Elec, Const, Cierre, Mixto) ---
export const PROJECTS = [
  {
    id: 1,
    title: "Sala Eléctrica Industrial",
    category: "Electricidad SEC",
    description: "Montaje de tableros de fuerza y control para planta agroindustrial. Certificación TE1 aprobada sin observaciones.",
    image: imgTablero
  },
  {
    id: 2,
    title: "Cierre Parcela 5.000m²",
    category: "Cierres Perimetrales",
    description: "Instalación de 400 metros lineales de Malla Acmafor con portón automático incluido en tiempo récord.",
    image: imgAcmafor
  },
  {
    id: 3,
    title: "Casa Mediterránea",
    category: "Construcción Civil",
    description: "Construcción llave en mano de vivienda unifamiliar de 140m². Radier, obra gruesa y terminaciones finas.",
    image: imgCasa
  },
  {
    id: 4,
    title: "Empalme zona rural",
    category: "Electricidad SEC",
    description: "Implementación de empalme eléctrico para parcela en zona rural. Incluye instalación de poste, cableado y certificación final.",
    image: imgEmpalme
  }
];

// --- TESTIMONIOS (NUEVO) ---
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Roberto Gómez",
    location: "Dueño de Parcela, Chillán",
    text: "Necesitaba cerrar mi parcela urgente por seguridad. El equipo de Patricio instaló todo en 4 días. Muy prolijos y el portón quedó funcionando perfecto.",
    rating: 5
  },
  {
    id: 2,
    name: "Constructora H&M",
    location: "Gerencia de Proyectos",
    text: "Trabajamos con Construcciones PM para la certificación eléctrica de nuestras obras. Son los únicos que nos entregan los TE1 a tiempo. Socios estratégicos.",
    rating: 5
  },
  {
    id: 3,
    name: "Carmen Valenzuela",
    location: "Cliente Residencial",
    text: "Hicieron la ampliación de mi cocina y el cambio de sistema eléctrico. Me dio mucha confianza que Patricio supervisara todo personalmente. 100% recomendados.",
    rating: 5
  },
  {
    id: 4,
    name: "Agrícola Santa María",
    location: "Jefe de Planta, Los Ángeles",
    text: "La instalación de nuestros tableros de fuerza fue impecable. Patricio no solo ejecutó la obra, sino que tramitó toda la regularización SEC. Un alivio contar con expertos.",
    rating: 5
  },
  {
    id: 5,
    name: "Familia Araya",
    location: "Remodelación en Coihueco",
    text: "Transformaron nuestro patio con un radier y quincho espectacular. Lo mejor fue la limpieza durante la obra y el cumplimiento exacto de los plazos acordados.",
    rating: 5
  },
  {
    id: 6,
    name: "Esteban Ruiz",
    location: "Parcela en San Carlos",
    text: "Coticé en varios lados para el cierre bulldog (pandereta) y me quedé con ellos por la transparencia. El muro quedó alineado perfecto y terminaron antes de lo previsto.",
    rating: 5
  }
];