import { CTAButton } from "@/components/ui/cta-button";
import { CheckCircle, Award, TrendingUp } from "lucide-react";


export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pb-20 pt-28 sm:pt-32 lg:pt-32">
      {/* Background Image with Overlay - Nueva imagen de Unsplash */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Emprendedores trabajando en digital" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        {/* Degradado right más marcado y destellos amarillos - Responsivo */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(251,191,36,0.12) 55%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.85) 100%)"
        }} />
        {/* Destellos amarillos Coinnecta - Ajustados para mobile */}
        <div className="absolute right-4 top-1/4 w-16 h-16 sm:right-6 sm:w-20 sm:h-20 lg:right-10 lg:top-1/3 lg:w-32 lg:h-32 bg-golden/30 rounded-full blur-2xl opacity-70 pointer-events-none" />
        <div className="absolute right-16 bottom-8 w-12 h-12 sm:right-20 sm:w-16 sm:h-16 lg:right-32 lg:bottom-10 lg:w-24 lg:h-24 bg-golden/40 rounded-full blur-2xl opacity-60 pointer-events-none" />
      </div>
      
      {/* Logo en posición destacada - Mejorado para mobile */}
      <div className="absolute top-4 left-4 z-20 w-28 sm:w-36 sm:top-6 sm:left-6 lg:w-52 lg:left-auto lg:top-6 lg:right-auto">
        <img src={'images/logo3.png'} alt="COINNECTA" className="w-full h-auto" />
      </div>

      {/* Animated Background Elements - Más sutiles y responsivos */}
      <div className="absolute top-8 right-8 w-12 h-12 sm:top-10 sm:right-10 sm:w-16 sm:h-16 lg:top-20 lg:right-20 lg:w-32 lg:h-32 bg-golden/15 rounded-full blur-xl animate-float opacity-70" />
      <div className="absolute bottom-8 left-8 w-16 h-16 sm:bottom-10 sm:left-10 sm:w-24 sm:h-24 lg:bottom-20 lg:left-20 lg:w-48 lg:h-48 bg-golden/10 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 xl:gap-12 items-center max-w-7xl mx-auto">
          {/* Content - Diseño mobile optimizado - 60% del espacio */}
          <div className="text-center lg:text-left animate-fade-in space-y-6 lg:space-y-6 max-w-4xl lg:max-w-none mx-auto">
            
            {/* Título Principal */}
            <div className="space-y-4 lg:space-y-4">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight">
                <span className="block mb-2">DESCUBRE CÓMO GENERAR</span>
                <span className="block mb-2">5000 USD EN MENOS</span>
                <span className="block mb-3">DE 30 DÍAS</span>
                <span className="text-transparent bg-gradient-golden bg-clip-text block text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                  O TE PAGAMOS 50 USD
                </span>
              </h1>
            </div>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <span className="inline-block px-4 py-2 rounded-full bg-golden/20 text-golden font-bold text-sm tracking-wider shadow-golden/20 shadow-md animate-fade-in">
                Método Europeo
              </span>
              <span className="inline-block px-4 py-2 rounded-full bg-black/30 text-white font-semibold text-sm tracking-wider shadow-md animate-fade-in">
                Exclusivo en LATAM
              </span>
            </div>

            {/* Descripción */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                <span className="font-bold text-golden block mb-2">El MÉTODO EUROPEO <span className="text-muted-foreground">que nos hace facturar millones en Europa y en Latinoamérica con contra entrega.</span> </span>
              </p>
          
            </div>
            {/* Features List */}
            <div className="space-y-3 max-w-lg mx-auto lg:mx-0">
              <div className="relative flex items-center justify-center lg:justify-start gap-3 p-3 bg-gradient-to-r from-golden/20 via-golden/15 to-golden/5 rounded-xl border-2 border-golden/30 hover:border-golden/50 hover:shadow-golden/30 hover:shadow-xl transition-all duration-400 group hover:scale-[1.01] animate-slide-up backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative flex-shrink-0 w-7 h-7 bg-gradient-to-br from-golden to-golden-glow rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md shadow-golden/30 group-hover:shadow-golden/40">
                  <Award className="w-3.5 h-3.5 text-black font-bold" />
                </div>
                <span className="relative text-sm text-foreground font-semibold group-hover:text-golden-glow transition-colors duration-300">5 productos ganadores</span>
                <div className="absolute -right-0.5 -top-0.5 w-2 h-2 bg-golden rounded-full animate-pulse opacity-75" />
              </div>
              
              <div className="relative flex items-center justify-center lg:justify-start gap-3 p-3 bg-gradient-to-r from-golden/20 via-golden/15 to-golden/5 rounded-xl border-2 border-golden/30 hover:border-golden/50 hover:shadow-golden/30 hover:shadow-xl transition-all duration-400 group hover:scale-[1.01] animate-slide-up backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative flex-shrink-0 w-7 h-7 bg-gradient-to-br from-golden to-golden-glow rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md shadow-golden/30 group-hover:shadow-golden/40">
                  <TrendingUp className="w-3.5 h-3.5 text-black font-bold" />
                </div>
                <span className="relative text-sm text-foreground font-semibold group-hover:text-golden-glow transition-colors duration-300">Cómo hacer anuncios de marca</span>
                <div className="absolute -right-0.5 -top-0.5 w-2 h-2 bg-golden rounded-full animate-pulse opacity-75" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <div className="relative flex items-center justify-center lg:justify-start gap-3 p-3 bg-gradient-to-r from-golden/20 via-golden/15 to-golden/5 rounded-xl border-2 border-golden/30 hover:border-golden/50 hover:shadow-golden/30 hover:shadow-xl transition-all duration-400 group hover:scale-[1.01] animate-slide-up backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative flex-shrink-0 w-7 h-7 bg-gradient-to-br from-golden to-golden-glow rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md shadow-golden/30 group-hover:shadow-golden/40">
                  <CheckCircle className="w-3.5 h-3.5 text-black font-bold" />
                </div>
                <span className="relative text-sm text-foreground font-semibold group-hover:text-golden-glow transition-colors duration-300">De 0 a 100 sin experiencia previa</span>
                <div className="absolute -right-0.5 -top-0.5 w-2 h-2 bg-golden rounded-full animate-pulse opacity-75" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <CTAButton 
                size="lg" 
                className="flex-1 sm:flex-none sm:w-auto hover:scale-105 transition-transform duration-300 shadow-lg shadow-golden/30 text-sm sm:text-base lg:text-base py-4 px-6 sm:px-8 lg:px-8"
              >
                🚀 COMENZAR AHORA
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="lg"
                className="flex-1 sm:flex-none sm:w-auto hover:bg-white/10 transition-colors text-sm sm:text-base lg:text-base py-4 px-6 sm:px-8 lg:px-8"
              >
                VER TESTIMONIOS
              </CTAButton>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start p-4 bg-black/20 rounded-lg space-y-1">
                <span className="font-bold text-golden text-xl">1,200+</span>
                <span className="text-sm">Estudiantes</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 bg-black/20 rounded-lg space-y-1">
                <span className="font-bold text-golden text-xl">4.9★</span>
                <span className="text-sm">Calificación</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 bg-black/20 rounded-lg space-y-1">
                <span className="font-bold text-golden text-xl">30d</span>
                <span className="text-sm">Garantía</span>
              </div>
            </div>

          </div>
          {/* Image Section - 40% del espacio - Imagen más grande */}
          <div className="relative hidden lg:block animate-scale-in lg:scale-125 xl:scale-115" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-golden/30 shadow-2xl shadow-golden/20">
              <img 
                src="/images/pascu3.png" 
                alt="Resultados con COINNECTA" 
                className="w-full h-auto transition-all duration-500 object-cover"
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
      
      {/* Scroll indicator - Más discreto y responsivo */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-slow text-golden/80 hover:text-golden transition-colors cursor-pointer">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="sr-only">Desplazarse</span>
        </div>
      </div>
    </section>
  );
}