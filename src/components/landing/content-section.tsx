import { CTAButton } from "@/components/ui/cta-button";
import { useEffect, useState } from "react";

export function ContentSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Temporizador que se reinicia cada 2 días
  useEffect(() => {
    const resetTimer = () => {
      const now = new Date().getTime(); // Get current time in milliseconds
      const resetTime = new Date();
      resetTime.setDate(resetTime.getDate() + 2);
      resetTime.setHours(0, 0, 0, 0);
      
      return Math.floor((resetTime.getTime() - now) / 1000); // Convert to seconds
    };

    let totalSeconds = resetTimer();

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = resetTimer();
      }

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      totalSeconds -= 1;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      icon: "🗺️",
      title: "MÓDULO 1: TU HOJA DE RUTA AL ÉXITO",
      features: [
        "Planificación estratégica completa",
        "Roadmap paso a paso al éxito",
        "Objetivos claros y alcanzables",
        "Metodología probada"
      ],
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🏗️",
      title: "MÓDULO 5: CONSTRUYE TU TIENDA ONLINE DESDE CERO",
      features: [
        "Diseño y estructura profesional",
        "Configuración completa de Shopify",
        "Optimización para conversiones",
        "UX/UI que vende"
      ],
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "📱",
      title: "MÓDULO 7: META ADS",
      features: [
        "Configuración avanzada de Facebook Ads",
        "Estrategias de bidding optimizadas",
        "Retargeting y lookalike audiences",
        "Escalado rentable de campañas"
      ],
      bgImage: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: "🎵",
      title: "MÓDULO 8: TIKTOK ADS",
      features: [
        "Estrategias nativas de TikTok",
        "Contenido viral que convierte",
        "Optimización para generación Z",
        "Campañas de alto ROI"
      ],
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    }
  ];

  return (
    <section id="contenido" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Fondo principal */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1704354428728-24b8ccab5c3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80" 
          alt="Fondo de dashboard digital" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
            SISTEMA COMPROBADO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Domina el <span className="text-golden">eCommerce con 17 Módulos </span><br />
            Especializados
          </h2>
          <p className="text-lg text-white/85 max-w-3xl mx-auto"> 
            Formación completa que incluye <strong className="text-golden">Meta Ads, TikTok Ads, WhatsApp Marketing</strong> y mucho más
          </p>
        </div>

        {/* Módulos con imágenes temáticas */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-golden/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Imagen de fondo para cada módulo */}
              <div className="absolute inset-0">
                <img 
                  src={module.bgImage} 
                  alt={`Fondo ${module.title}`}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="text-4xl p-3 bg-gradient-to-br from-golden/20 to-golden/5 rounded-lg">
                    {module.icon}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white flex-1">
                    {module.title}
                  </h3>
                </div>
                
                <ul className="space-y-3.5">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-white/85">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más */}
        <div className="text-center mb-20 lg:mb-24">
          <button
            onClick={() => window.open('https://coinnecta.es/', '_blank')}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-golden text-golden px-8 py-4 rounded-full font-bold hover:bg-golden hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <span>VER LOS 17 MÓDULOS COMPLETOS</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* CTA con temporizador dinámico */}
        <div className="text-center">
          <div className="inline-block w-full max-w-2xl bg-gradient-to-r from-black via-black to-golden/20 border border-golden/30 rounded-2xl px-6 py-6 sm:px-10 sm:py-8 mb-8 overflow-hidden relative">
            {/* Sello de urgencia */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 animate-pulse">
              ÚLTIMAS PLAZAS
            </div>
            
            {/* Versión móvil */}
            <div className="sm:hidden mb-4">
              <p className="text-white/80 text-sm">Valor total:</p>
              <p className="text-2xl font-black text-white">
                <span className="line-through text-white/50">$3,000</span>{" "}
                <span className="text-golden">$20 </span>
              </p>
              <p className="text-white/80 text-sm mt-2">
                Oferta termina en: <span className="text-golden">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
              </p>
            </div>
            
            {/* Versión desktop */}
            <div className="hidden sm:flex justify-between items-center gap-6 mb-6">
              <div className="text-left">
                <p className="text-white/80 text-sm">Valor total:</p>
                <p className="text-2xl font-black text-white">
                  <span className="line-through text-white/50">$3,000</span>{" "}
                  <span className="text-golden">$20 </span>
                </p>
              </div>
              
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-golden/50 to-transparent" />
              
              <div className="text-right">
                <p className="text-white/80 text-sm">Oferta termina en:</p>
                <p className="text-xl font-bold text-white">
                  <span className="text-golden">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
                </p>
              </div>
            </div>
            
            <CTAButton 
              size="xl" 
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-lg shadow-golden/30 relative overflow-hidden"
              onClick={() => window.open('https://www.skool.com/coinnecta-8616', '_blank')}
            >
              <span className="relative z-10">🚀 Quiero Comenzar Ahora</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -rotate-45 scale-150"></span>
            </CTAButton>
          </div>
          
          {/* Beneficios */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm text-white/80">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
              <span>Soporte prioritario</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
