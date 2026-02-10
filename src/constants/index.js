import { Zap, Hammer, ShieldCheck } from 'lucide-react';

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
      'Proyectos Residenciales (Urbano/Rural)',
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

export const FENCE_TYPES = [
  {
    name: 'Malla Acmafor 3D',
    desc: 'Alta seguridad y estética moderna. Ideal para parcelas y empresas.',
    image: 'https://images.unsplash.com/photo-1621262077726-2c1b211a586d?q=80&w=400' 
  },
  {
    name: 'Malla Bizcocho',
    desc: 'La solución clásica y económica. Galvanizada con postes de pino impregnado.',
    image: 'https://images.unsplash.com/photo-1599156486088-724393699742?q=80&w=400'
  },
  {
    name: 'Pandereta Bulldog',
    desc: 'Privacidad total y máxima robustez. Placas de hormigón reforzado.',
    image: 'https://images.unsplash.com/photo-1597587823528-9f170e5c986c?q=80&w=400'
  },
  {
    name: 'Cierres Agrícolas',
    desc: 'Polines y alambre de púas para delimitación de grandes extensiones.',
    image: 'https://images.unsplash.com/photo-1563297129-d546059cb274?q=80&w=400'
  }
];