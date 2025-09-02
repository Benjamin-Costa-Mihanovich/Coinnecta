import { CTAButton } from "@/components/ui/cta-button";

export function CreatorSection() {
  return (
    <section className="relative px-4 py-20 lg:py-28 bg-gray-50 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-golden/5 via-transparent to-transparent opacity-40"></div>
      </div>
            {/* Fondo con overlay sutil */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1652195057379-62ecfa7dc04d?q=80&w=3558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=95" 
          alt="Fondo abstracto digital" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-600/80 via-gray-200/50 to-gray-50/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Imagen del creador - Circular y destacada */}
          <div className="w-full lg:w-1/2 xl:w-5/12 flex justify-center items-center">
            <div className="relative group flex flex-col items-center">
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl border-8 border-white transform group-hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-golden/10 to-white">
                <img 
                  src="/images/pascu2.png" 
                  alt="Pascu Moreno - Creador de COINNECTA" 
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              {/* Sellos de credibilidad */}
              <div className="absolute -bottom-4 right-1/2 translate-x-1/2 bg-gray-900 text-golden px-5 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-golden">
                +$4,500,000 en ventas
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-golden text-gray-900 px-4 py-1 rounded-full text-xs font-bold shadow-md">
                TOP 1% 
              </div>
            </div>
          </div>

          {/* Contenido - Versión potente */}
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <span className="inline-block bg-golden/10 text-golden px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-5 uppercase">
              Creador de la Formula Europeo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              El único europeo en facturar millones en Europa y LATAM
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden/80 font-bold">Pascu Moreno</span> formando emprendedores digitales
            </p>
            <div className="prose-xl text-gray-700 mb-8 space-y-4">
              <p>
                <strong className="text-golden">"Deja de complicarte"</strong> - Aquí está el sistema exacto que usé para generar <strong>$4,500,000+</strong> en ventas y que ahora enseño a mis alumnos.
              </p>

              <ul className="space-y-3 pl-5">
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>Método probado</strong> que funciona incluso si empiezas desde $0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>Upsells automatizados</strong> que duplican tu ticket promedio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">▸</span>
                  <span><strong>1,500+ alumnos</strong> ya aplicaron el sistema con éxito</span>
                </li>
              </ul>
            </div>

            {/* Logros destacados */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">$2M+</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Generado por alumnos</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">+15</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Países</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">89%</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Tasa de éxito</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-golden">4.9★</div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Rating</div>
              </div>
            </div>

            {/* CTA poderoso */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton 
                size="xl" 
                className="bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden text-gray-900 font-bold shadow-xl hover:shadow-golden/50 transition-all hover:-translate-y-0.5"
              >
                🤑 QUIERO GENERAR +$10K/MES
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="xl"
                className="border-gray-400 bg-white hover:bg-gray-100 font-semibold shadow-sm text-gray-800"
              >
                Ver Resultados Reales
              </CTAButton>
            </div>
          </div>
        </div>
        {/* Historia de Pascu - Primer millón */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-golden/15 via-white to-gray-100 rounded-3xl p-8 md:p-14 shadow-2xl border border-golden/30 overflow-hidden animate-fade-in">
            <img
              src="/images/logo.png"
              alt="Planeta Coinnecta"
              className="absolute -right-0 -top-0 w-80 opacity-10 md:opacity-20 pointer-events-none"
            />
            <div className="absolute left-10 top-10 w-24 h-24 bg-golden/20 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col items-center mb-6">
                <span className="inline-block px-4 py-1 rounded-full bg-golden/20 text-golden font-bold text-xs tracking-wider shadow-golden/20 shadow-md mb-2">Historia real</span>
                <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Septiembre 2019</p>
                <h3 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-6 bg-gradient-to-r from-golden via-amber-400 to-golden bg-clip-text text-transparent">Los últimos $20 que lo cambiaron todo</h3>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-gray-700 space-y-4">
                  <p className="text-lg font-medium">
                    <span className="font-bold text-golden">Con solo $20</span> en el bolsillo, Pascu apostó por su visión y lanzó su primer anuncio. En menos de un año transformó esa inversión en su <span className="font-bold text-golden">primer millón</span>.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-900 border border-golden/40 text-golden font-bold text-xs shadow-lg backdrop-blur-md ">Mentalidad europea</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-golden/15 text-golden font-semibold text-xs shadow-md animate-fade-in">Upsell desde el día 1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="space-y-6 relative">
                    {/* Timeline visual */}
                    <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-golden/60 via-amber-300/40 to-golden/10 rounded-full" />
                    <li className="flex items-center gap-4">
                      <span className="w-5 h-5 rounded-full bg-golden/80 border-2 border-white shadow-lg" />
                      <span className="font-medium text-gray-800">Primer mes</span>
                      <span className="font-bold text-golden">$873 USD</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-5 h-5 rounded-full bg-golden/70 border-2 border-white shadow-lg" />
                      <span className="font-medium text-gray-800">Tercer mes</span>
                      <span className="font-bold text-golden">$4,200 USD</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-5 h-5 rounded-full bg-golden/60 border-2 border-white shadow-lg" />
                      <span className="font-medium text-gray-800">Sexto mes</span>
                      <span className="font-bold text-golden">$12,000 USD</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg" />
                      <span className="font-medium text-gray-800">Primer año</span>
                      <span className="font-bold text-golden">Su primer millón</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}