import { Footer } from "@/components/landing/footer";

const TermsOfUse = () => (
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
        <h1 className="text-3xl sm:text-4xl font-black text-center mb-6 bg-gradient-to-r from-golden via-amber-400 to-golden bg-clip-text text-transparent">Términos de Uso</h1>
        <p className="mb-4 text-base leading-relaxed">
          Bienvenido a COINNECTA. Al acceder y utilizar este sitio aceptas los siguientes términos y condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar nuestros servicios.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Uso del Sitio</h2>
        <p className="mb-4">
          Solo puedes utilizar COINNECTA para fines personales y lícitos. Está prohibida la distribución no autorizada del contenido o cualquier acción que pueda afectar el funcionamiento de la plataforma.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Propiedad Intelectual</h2>
        <p className="mb-4">
          Los materiales disponibles, incluidos textos, imágenes y videos, son propiedad de COINNECTA o de sus autores. Su reproducción total o parcial requiere autorización previa por escrito.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Limitación de Responsabilidad</h2>
        <p className="mb-4">
          La información ofrecida tiene fines educativos y no garantiza resultados específicos. COINNECTA no se responsabiliza por pérdidas derivadas del uso del contenido.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Modificaciones</h2>
        <p className="mb-4">
          Podemos actualizar estos términos en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en este sitio.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos, escríbenos a
          <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
            hola@coinnecta.com
          </a>
          .
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsOfUse;
