import { ArrowRight } from 'lucide-react';
import imgPortada from '../assets/images/portada.jpeg'; // Asegúrate de que esta ruta sea correcta

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgPortada} 
          alt="Construcción Industrial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide bg-brand-primary/20 text-brand-primary border border-brand-primary/30 mb-6 backdrop-blur-sm">
          Ingeniería y Construcción 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Construimos el futuro con <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
            Precisión Eléctrica
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluciones integrales donde la robustez de la obra civil se une a la eficiencia energética. Liderado por Patricio Morales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all shadow-lg hover:shadow-orange-500/20">
            Cotizar Proyecto <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#proyectos" className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all backdrop-blur-sm">
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  );
};