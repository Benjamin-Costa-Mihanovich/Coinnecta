import { Footer } from "@/components/landing/footer";

const RefundPolicy = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 relative">
    {/* Fondo decorativo */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute right-0 top-0 w-48 h-48 bg-golden/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-golden/20 rounded-full blur-2xl" />
    </div>
    <div className="flex-grow container mx-auto max-w-2xl px-4 py-16 z-10 relative">
      <div className="flex justify-center mb-8">
        <img src={"images/logo.png"} alt="COINNECTA" className="w-32 lg:w-40 drop-shadow-lg" />
      </div>
      <div className="bg-black/60 rounded-2xl shadow-2xl p-8 border border-golden/20 backdrop-blur-md animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-black text-center mb-6 bg-gradient-to-r from-golden via-amber-400 to-golden bg-clip-text text-transparent">Política de Reembolsos</h1>
        <p className="mb-4 text-base leading-relaxed">
          En COINNECTA buscamos tu satisfacción. Si el contenido no cumple con tus expectativas, puedes solicitar un reembolso dentro del plazo establecido.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Período de Reembolso</h2>
        <p className="mb-4">
          Tienes hasta 7 días desde la fecha de compra para solicitar la devolución del producto digital.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Condiciones</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>El reembolso se aplica únicamente al valor del producto adquirido.</li>
          <li>No se devolverán comisiones o cargos de la plataforma de pago.</li>
          <li>El acceso al contenido se revocará una vez aprobado el reembolso.</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Cómo solicitarlo</h2>
        <p className="mb-4">
          Escríbenos a
          <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
            hola@coinnecta.com
          </a>
          indicando el motivo y los datos de tu compra.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Actualizaciones</h2>
        <p>
          Podemos modificar esta política en cualquier momento y los cambios se publicarán en este sitio.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
