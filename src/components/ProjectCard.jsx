import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective w-full h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRENTE DE LA TARJETA */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-3/5 object-cover" 
          />
          <div className="p-6 h-2/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-2 leading-tight">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center text-gray-400 text-sm gap-2">
              <RotateCcw className="w-4 h-4" />
              <span>Click para detalles</span>
            </div>
          </div>
        </div>

        {/* DORSO DE LA TARJETA */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-brand-dark text-white p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center shadow-xl border border-brand-primary/30">
          <div className="bg-brand-primary/20 p-3 rounded-full mb-4">
            <RotateCcw className="w-6 h-6 text-brand-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <button className="bg-brand-primary hover:bg-brand-accent text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
            Ver Ficha Técnica
          </button>
        </div>

      </div>
    </div>
  );
};