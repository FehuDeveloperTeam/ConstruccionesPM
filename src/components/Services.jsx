import { Zap, Hammer, CheckCircle2, Phone } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

export const Services = () => {
  return (
    <section id="servicios" className="bg-white">
      {/* Título de Sección */}
      <div className="py-16 text-center bg-gray-50 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Nuestros Servicios</h2>
        <p className="text-gray-500 mt-2">Soluciones certificadas para Hogar e Industria</p>
      </div>

      <div className="flex flex-col md:flex-row">
        {SERVICE_AREAS.map((area, index) => (
          <div 
            key={area.id} 
            className={`flex-1 p-10 md:p-16 flex flex-col items-center text-center border-b md:border-b-0 ${
              index === 0 ? 'bg-white md:border-r border-gray-100' : 'bg-gray-50'
            }`}
          >
            {/* Icono Grande */}
            <div className={`p-6 rounded-full mb-6 ${
              area.id === 'electricidad' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
            }`}>
              <area.icon className="w-12 h-12" />
            </div>

            <h3 className="text-3xl font-bold text-brand-dark mb-4">{area.title}</h3>
            <p className="text-gray-500 mb-8 max-w-md">{area.description}</p>

            {/* Lista simple y legible */}
            <ul className="text-left space-y-4 mb-10 w-full max-w-xs">
              {area.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-1 ${
                    area.id === 'electricidad' ? 'text-blue-500' : 'text-orange-500'
                  }`} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botón de Acción Específico */}
            <a 
              href="#contacto" 
              className={`px-8 py-3 rounded-lg font-bold text-white transition-all shadow-lg ${
                area.id === 'electricidad' 
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' 
                  : 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
              }`}
            >
              Cotizar {area.id === 'electricidad' ? 'Electricidad' : 'Construcción'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};