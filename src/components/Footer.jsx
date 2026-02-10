import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                Construcciones <span className="text-brand-primary">PM</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Expertos en integración de obras civiles y sistemas eléctricos. Calidad certificada y compromiso con la seguridad en cada proyecto.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'Quiénes Somos', 'Proyectos', 'Servicios'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-primary pl-3">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-primary mt-1" />
                <span>San Carlos, Ñuble, Chile.<br/>Disponible para proyectos en todo el país.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-primary" />
                <a href="tel:+56923704145" className="hover:text-white">+56 9 2370 4145</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-primary" />
                <a href="mailto:manser.pm@gmail.com" className="hover:text-white">manser.pm@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FEHU Developers para Construcciones PM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};