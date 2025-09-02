export function ProblemsSection() {
  const problems = [
    {
      img: "/images/1.png",
      title: "No sabes por dónde empezar",
      description: "Te sientes perdido entre tantas plataformas y estrategias digitales"
    },
    {
      img: "/images/2.png",
      title: "Ventas inconsistentes",
      description: "Algunas semanas vendes, otras no, y no entiendes por qué"
    },
    {
      img: "/images/3.png",
      title: "Dinero perdido en anuncios",
      description: "Inviertes en publicidad pero no ves el retorno esperado"
    },
    {
      img: "/images/4.png",
      title: "Falta de tiempo",
      description: "Trabajas muchas horas pero sientes que no avanzas lo suficiente"
    },
    {
      img: "/images/5.png",
      title: "No dominas la tecnología",
      description: "Las herramientas digitales te abruman y te frenan"
    },
    {
      img: "/images/6.png",
      title: "Sin estrategia de upsell",
      description: "Vendes una vez y no sabes cómo maximizar cada cliente"
    }
  ];


  return (
    <section id="problemas" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Fondo con nuevo degradado asimétrico */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Emprendedor frustrado frente a gráficos digitales" 
          className="w-full h-full object-cover object-bottom" 
          style={{ opacity: 0.25 }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/30" 
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Elementos decorativos dinámicos */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-golden/5 rounded-full blur-xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-golden/10 rounded-full blur-xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado con mejor contraste */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto relative px-4">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-golden animate-pulse"></div>
          <span className="inline-block bg-golden/20 text-golden px-3 sm:px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-3 sm:mb-4">
            IDENTIFICA TUS BLOQUEOS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-5 leading-tight">
            ¿Estás <span className="text-golden">perdiendo ventas</span> por esto?
          </h2>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed px-2">
            Estos errores cuestan <strong className="text-golden">$1,200 USD/mes en promedio</strong> a emprendedores digitales
          </p>
        </div>

        {/* Grid de problemas - Versión 2.0 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="relative bg-black/30 backdrop-blur-md border border-white/5 rounded-2xl p-5 sm:p-7 hover:bg-black/40 transition-all duration-500 group overflow-hidden"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
              }}
            >
              {/* Efecto de iluminación lateral al hover */}
              <div className="absolute inset-y-0 left-0 w-1 transition-all duration-300"></div>
              
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-golden/15 to-golden/5 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-transform group-hover:scale-110">
                  <img src={problem.img} alt={problem.title} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3 sm:mb-4 px-2 sm:px-4">
                  <span className="bg-gradient-to-r from-golden/30 via-golden/80 to-golden/30 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                    {problem.title}
                  </span>
                </h3>
                <p className="text-white/75 text-center text-sm sm:text-base leading-relaxed mt-auto px-2 sm:px-0">
                  {problem.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* CTA de solución - Más prominente */}
        <div className="mt-16 sm:mt-20 text-center relative px-4">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-golden/50 to-transparent"></div>
          
          <div 
            className="inline-block bg-gradient-to-r from-black via-black to-golden/10 border border-golden/30 rounded-xl px-4 sm:px-8 py-4 sm:py-6 shadow-2xl shadow-golden/10 hover:shadow-golden/20 transition-all duration-500 max-w-full"
            style={{
              backdropFilter: "blur(12px)"
            }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-golden/10 rounded-full flex items-center justify-center text-xl sm:text-2xl animate-pulse">
                🔥
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  <span className="text-golden">Solución comprobada:</span> Sistema COINNECTA
                </h4>
                <p className="text-white/80 text-sm sm:text-base">
                  Transforma estos problemas en ventajas competitivas en menos de 30 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}