import { CTAButton } from "@/components/ui/cta-button";


export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-hero px-4 flex items-center justify-center overflow-hidden pb-10 pt-20 lg:pt-32">
      {/* Background Image with Overlay - Nueva imagen de Unsplash */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Emprendedores trabajando en digital" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        {/* Degradado right más marcado y destellos amarillos */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(251,191,36,0.12) 55%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.85) 100%)"
        }} />
        {/* Destellos amarillos Coinnecta */}
        <div className="absolute right-10 top-1/3 w-32 h-32 bg-golden/30 rounded-full blur-2xl opacity-70 pointer-events-none" />
        <div className="absolute right-32 bottom-10 w-24 h-24 bg-golden/40 rounded-full blur-2xl opacity-60 pointer-events-none" />
      </div>
      
      {/* Logo en posición destacada */}
      <div className="absolute top-6 items-center z-20 w-40 lg:w-52">
        <img src={'images/logo3.png'} alt="COINNECTA" className="w-full h-auto" />
      </div>

      {/* Animated Background Elements - Más sutiles */}
      <div className="absolute top-10 right-10 lg:top-20 lg:right-20 w-16 h-16 lg:w-32 lg:h-32 bg-golden/15 rounded-full blur-xl animate-float opacity-70" />
      <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-24 h-24 lg:w-48 lg:h-48 bg-golden/10 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Mejor jerarquía */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 lg:mb-4 leading-tight">
              DESCUBRE CÓMO GANAR 5000 USD EN MENOS DE 30 DÍAS <br />
              <span className="text-transparent bg-gradient-golden bg-clip-text">
                O TE PAGAMOS 50 USD
              </span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-golden/20 text-golden font-bold text-xs tracking-wider shadow-golden/20 shadow-md animate-fade-in">Método Europeo</span>
              <span className="inline-block px-3 py-1 rounded-full bg-black/30 text-white font-semibold text-xs tracking-wider shadow-md animate-fade-in">Exclusivo en LATAM</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 lg:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-bold text-golden">El MÉTODO EUROPEO</span> que nos hace facturar millones en Europa del Este y en Latinoamérica con contra entrega.<br />
              Te damos el método al completo y sin secretos, con todas las herramientas necesarias y estrategias que solo usan los top sellers europeos.
            </p>
            <ul className="text-muted-foreground mb-4 lg:mb-6 space-y-2 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              <li>✅ 5 productos ganadores</li>
              <li>✅ Cómo hacer anuncios de marca</li>
              <li>✅ De 0 a 100 sin experiencia previa</li>
            </ul>
            {/* CTA mejorado */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
              <CTAButton 
                size="xl" 
                className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-golden/30"
              >
                🚀 Acceder Ahora
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="xl"
                className="hover:bg-white/10 transition-colors"
              >
                Ver Demo Gratis
              </CTAButton>
            </div>
            {/* Social proof reorganizado */}
            <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start p-3 bg-black/20 rounded-lg">
                <span className="font-bold text-golden text-lg">1,200+</span>
                <span>Estudiantes</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-3 bg-black/20 rounded-lg">
                <span className="font-bold text-golden text-lg">4.9★</span>
                <span>Calificación</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-3 bg-black/20 rounded-lg">
                <span className="font-bold text-golden text-lg">30d</span>
                <span>Garantía</span>
              </div>
            </div>
          </div>
          {/* Image Section - Más limpia */}
          <div className="relative hidden mb-24 lg:block animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-golden/30">
              <img 
                src="/images/pascu3.png" 
                alt="Resultados con COINNECTA" 
                className="w-full h-auto transition-all duration-500  object-cover"
              />
              {/* Degradado left-to-right personalizado */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(251,191,36,0.10) 40%, rgba(0,0,0,0.65) 100%)"
              }} />
              {/* Overlay de video simulado */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Más discreto */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-slow text-golden/80 hover:text-golden transition-colors cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="sr-only">Desplazarse</span>
        </div>
      </div>
    </section>
  );
}