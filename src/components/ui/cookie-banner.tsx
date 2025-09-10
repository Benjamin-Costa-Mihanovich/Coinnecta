import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings, ChevronRight } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('coinnecta-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('coinnecta-cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('coinnecta-cookie-consent', JSON.stringify({
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: Date.now()
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('coinnecta-cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }));
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-black/95 via-gray-950/95 to-black/95 backdrop-blur-2xl border border-golden/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-golden/10 overflow-hidden">
          {/* Enhanced decorative effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-golden/10 via-transparent to-golden/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-golden to-transparent blur-sm" />
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-16 h-px bg-golden" />
          
          {/* Floating particles effect - reduced size */}
          <div className="absolute top-3 left-6 w-0.5 h-0.5 bg-golden/40 rounded-full animate-pulse" />
          <div className="absolute top-6 right-10 w-0.5 h-0.5 bg-golden/30 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-4 left-12 w-0.5 h-0.5 bg-golden/20 rounded-full animate-pulse delay-700" />
          
          {/* Enhanced close button */}
          <button
            onClick={closeBanner}
            className="absolute top-3 right-3 p-2 text-white/50 hover:text-white hover:bg-golden/10 rounded-lg transition-all duration-300 z-10 group border border-white/10 hover:border-golden/30"
            aria-label="Cerrar banner de cookies"
          >
            <X size={14} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="relative p-4 sm:p-6 lg:p-7">
            {!showDetails ? (
              // Enhanced main cookie banner
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Icon and content */}
                <div className="flex items-start gap-5 flex-1">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-golden/25 to-golden/10 rounded-2xl flex items-center justify-center border border-golden/20 shadow-lg shadow-golden/10">
                    <Cookie className="w-7 h-7 text-golden" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
                      🍪 Respetamos tu privacidad
                      <div className="h-1 w-8 bg-gradient-to-r from-golden to-transparent rounded-full" />
                    </h3>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-4">
                      Utilizamos cookies para mejorar tu experiencia, analizar nuestro tráfico y personalizar el contenido. 
                      <span className="text-golden/90 font-medium"> Tu privacidad es importante para nosotros.</span>
                    </p>
                    
                    {/* Enhanced links */}
                    <div className="flex flex-wrap gap-6 items-center">
                      <button
                        onClick={() => setShowDetails(true)}
                        className="flex items-center gap-2 text-golden hover:text-golden-glow text-sm font-semibold transition-all duration-300 group"
                      >
                        <Settings size={14} />
                        Personalizar cookies
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <a
                        href="/privacidad"
                        className="flex items-center gap-2 text-white/60 hover:text-white/90 text-sm transition-all duration-300 group"
                      >
                        <Shield size={14} />
                        Política de privacidad
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[280px]">
                  <button
                    onClick={acceptNecessary}
                    className="px-4 py-2.5 sm:px-5 sm:py-3 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium hover:bg-white/5 backdrop-blur-sm group relative overflow-hidden"
                  >
                    <span className="relative z-10">Solo esenciales</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-golden to-golden-glow hover:from-golden-glow hover:to-golden text-black font-bold rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-lg shadow-golden/25 hover:shadow-golden/40 hover:scale-[1.02] group relative overflow-hidden"
                  >
                    <span className="relative z-10">Aceptar todas</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-45 scale-150" />
                  </button>
                </div>
              </div>
            ) : (
              // Enhanced detailed cookie settings - optimized for mobile
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-2 text-golden hover:text-golden-glow transition-all duration-300 hover:bg-golden/10 rounded-lg border border-golden/20"
                  >
                    ← 
                  </button>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    Configuración de cookies
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Necessary cookies */}
                  <div className="bg-gradient-to-r from-white/5 to-white/2 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-golden/20 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies esenciales</h4>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                          Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                        </p>
                      </div>
                      <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20 whitespace-nowrap">
                        Activas
                      </div>
                    </div>
                  </div>

                  {/* Analytics cookies */}
                  <div className="bg-gradient-to-r from-white/5 to-white/2 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-golden/20 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg flex items-center justify-center">
                        <Settings className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies analíticas</h4>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                          Nos ayudan a entender cómo interactúas con nuestro sitio web de forma anónima.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                        <input 
                          type="checkbox" 
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                          className="sr-only peer" 
                        />
                        <div className="w-10 h-5 sm:w-11 sm:h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-golden shadow-inner" />
                      </label>
                    </div>
                  </div>

                  {/* Marketing cookies */}
                  <div className="bg-gradient-to-r from-white/5 to-white/2 border border-white/10 rounded-xl p-3 sm:p-4 hover:border-golden/20 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg flex items-center justify-center">
                        <Cookie className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies de marketing</h4>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                          Se utilizan para personalizar los anuncios y medir la efectividad de las campañas.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                        <input 
                          type="checkbox" 
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                          className="sr-only peer" 
                        />
                        <div className="w-10 h-5 sm:w-11 sm:h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-golden shadow-inner" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Enhanced action buttons for detailed view */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={acceptSelected}
                    className="flex-1 px-4 py-3 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 text-xs sm:text-sm font-medium hover:bg-white/5 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Guardar configuración</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-golden to-golden-glow hover:from-golden-glow hover:to-golden text-black font-bold rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-lg shadow-golden/25 hover:shadow-golden/40 hover:scale-[1.02] group relative overflow-hidden"
                  >
                    <span className="relative z-10">Aceptar todas</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-45 scale-150" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
