import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Confianza Garantizada</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-primary transition-colors">
              <div className="mb-6 text-brand-primary">
                <Quote className="w-10 h-10 opacity-50" />
              </div>
              
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-brand-accent">{review.location}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};