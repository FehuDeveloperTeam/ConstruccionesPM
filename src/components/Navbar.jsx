import { useState } from 'react'; // Importamos useState
import { Zap, Menu, X } from 'lucide-react'; // Importamos X para cerrar

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  const menuItems = ['Quiénes Somos', 'Servicios', 'Cierres', 'Proyectos'];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2">
          <div className="bg-brand-primary p-2 rounded-lg">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-dark uppercase">
            Construcciones <span className="text-brand-primary">PM</span>
          </span>
        </a>
        
        {/* MENÚ DESKTOP (Pantallas grandes) */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-semibold text-gray-600 hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contacto" className="bg-brand-dark text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-brand-primary transition-all">
            Contacto
          </a>
        </div>
        
        {/* BOTÓN MÓVIL (Hamburguesa) */}
        <button 
          className="md:hidden text-brand-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {/* Si isOpen es true, mostramos este bloque */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-brand-primary"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-brand-primary text-white text-center py-3 rounded-lg font-bold mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};