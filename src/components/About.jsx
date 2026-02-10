import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Columna de Texto */}
          <div className="lg:w-1/2">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
              Liderazgo Técnico
            </span>
            <h2 className="text-4xl font-bold text-brand-dark mt-4 mb-6">
              Patricio Morales
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Con más de 20 años de experiencia liderando proyectos de alta complejidad, fusiono la precisión de la ingeniería eléctrica con la robustez de la construcción civil.
            </p>
            <p className="text-gray-600 mb-8">
              Mi enfoque se basa en la eficiencia energética y la integridad estructural, garantizando obras que perduran y sistemas que operan sin fallos.
            </p>

            <div className="space-y-4">
              {[
                "Certificación SEC Clase A",
                "Gestión de Proyectos Industriales",
                "Supervisión de Obras Civiles"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent w-6 h-6" />
                  <span className="font-semibold text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de Imagen (Placeholder profesional) */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Aquí irá la foto real de Patricio. Mientras usamos una de stock técnica */}
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" 
                alt="Ingeniero Patricio Morales" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Tarjeta flotante de experiencia */}
            <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 rounded-xl shadow-xl text-white max-w-xs hidden md:block">
              <p className="text-3xl font-bold text-brand-accent mb-1">+20 Años</p>
              <p className="text-sm text-gray-400">De trayectoria en el sector industrial y habitacional.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};