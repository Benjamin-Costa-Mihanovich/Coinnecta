import { CTAButton } from "@/components/ui/cta-button";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Coach de Vida",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      result: "+150% en ventas",
      text: "Antes de COINNECTA vendía esporádicamente. Ahora tengo un sistema automatizado que me genera ingresos consistentes todos los meses. El módulo de upsell cambió completamente mi negocio.",
      highlight: "De $2,000 a $5,000 mensuales en 3 meses"
    },
    {
      name: "Carlos Rodríguez",
      role: "Consultor Digital",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      result: "+300% ROI en anuncios",
      text: "La estrategia de funnel que enseñan es oro puro. Logré optimizar mis anuncios y ahora cada peso invertido me regresa tres. Mi negocio finalmente es predecible y escalable.",
      highlight: "Pasó de perder dinero a ganar $12,000 en un mes"
    }
  ];


  return (
    <section id="testimonios" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Fondo con overlay sutil */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1705023868869-92166eff39c1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fondo abstracto digital" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-gray-50/50 to-gray-60/80" />
      </div>

      {/* Elementos decorativos glassmorph */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-golden/10 rounded-full blur-3xl backdrop-filter backdrop-blur-sm" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-golden/5 rounded-full blur-3xl backdrop-filter backdrop-blur-sm" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4 backdrop-blur-sm backdrop-filter">
            RESULTADOS REALES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-5">
            Transformaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-amber-500">comprobadas</span>
          </h2>
          <p className="text-lg text-gray-950 max-w-3xl mx-auto">
            Historias verificadas de emprendedores que escalaron sus negocios
          </p>
        </div>


        {/* Testimonios - Fondo oscuro con glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-gray-950/90 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-golden/80 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-golden rounded-full p-1 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm mb-2">{testimonial.role}</p>
                    <span className="inline-block bg-golden/20 text-golden px-3 py-1 rounded-full text-xs font-bold backdrop-filter backdrop-blur-sm">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-gray-200 italic mb-6 pl-4 border-l-2 border-golden">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="bg-golden/10 backdrop-filter backdrop-blur-sm border border-golden/20 rounded-lg p-4 group-hover:bg-golden/15 transition-all duration-300">
                  <p className="text-golden font-semibold text-center flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA con fondo oscuro */}
        <div className="max-w-4xl mx-auto bg-gray-950/90 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <div className="p-8 lg:p-10 text-center">
            <div className="w-20 h-20 bg-golden/20 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto backdrop-filter backdrop-blur-sm text-golden">
              🎥
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4">
              Mira los testimonios en video
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Descubre cómo nuestros estudiantes lograron resultados extraordinarios
            </p>
            <button className="relative bg-gradient-to-r from-golden to-amber-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 group">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ver Videos de Éxito
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}