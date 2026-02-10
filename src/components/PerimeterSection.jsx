import { ShieldCheck, ArrowRight, Check, Phone} from 'lucide-react';
import { FENCE_TYPES } from '../constants';

export const PerimeterSection = () => {
  return (
    <section id="cierres" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        
        {/* Cabecera Informativa */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-gray-700 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-brand-accent">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase">Especialistas en Cierres</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Cierres Perimetrales</h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Instalamos todo tipo de cierres para parcelas, industrias y residencias. 
              <strong>Materiales duraderos y terminaciones profesionales.</strong>
            </p>
          </div>
          
          <div className="bg-brand-primary/20 p-4 rounded-xl border border-brand-primary/30 text-center min-w-[200px]">
            <span className="block text-brand-primary font-bold text-sm uppercase">Instalación desde</span>
            <span className="block text-white text-3xl font-bold my-1">5 días</span>
            <span className="block text-gray-400 text-xs">Dependiendo del metraje</span>
          </div>
        </div>

        {/* Catálogo Estático (Sin hover oculto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FENCE_TYPES.map((fence, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:border-brand-primary transition-colors">
              {/* Imagen */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={fence.image} 
                  alt={fence.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info siempre visible */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{fence.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {fence.desc}
                </p>
                <button className="w-full py-2 rounded border border-gray-600 text-gray-300 hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-sm font-semibold">
                  Me interesa este
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la Acción Final */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">¿Tienes una parcela o terreno y necesitas cerrarlo?</p>
          <a 
            href="https://wa.me/56923704145" // Reemplaza con el número real
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-green-900/50"
          >
            <Phone className="mr-2 w-5 h-5" /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};