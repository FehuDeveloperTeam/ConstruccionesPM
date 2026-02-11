import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PerimeterSection } from './components/PerimeterSection';
import { ProjectCard } from './components/ProjectCard';
import { Testimonials } from './components/Testimonials'; // <--- Importar Testimonios
import { WhatsAppButton } from './components/WhatsappButton';
import { Footer } from './components/Footer';

import { PROJECTS } from './constants'; 

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <PerimeterSection />
        
        {/* Sección de Proyectos (Ahora soporta 4 columnas) */}
        <section id="proyectos" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Portafolio Reciente</span>
              <h2 className="text-4xl font-bold text-brand-dark mt-2">Nuestros Proyectos</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Calidad certificada en Electricidad, Construcción y Cierres.
              </p>
            </div>
            
            {/* Grid ajustado para 4 items: en móvil 1, tablet 2, desktop grande 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Nueva Sección de Testimonios */}
        <Testimonials />

      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;