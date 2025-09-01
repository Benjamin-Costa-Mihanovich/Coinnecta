import { Footer } from "@/components/landing/footer";

const PrivacyPolicy = () => (
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
        <h1 className="text-3xl sm:text-4xl font-black text-center mb-6 bg-gradient-to-r from-golden via-amber-400 to-golden bg-clip-text text-transparent">Política de Privacidad</h1>
        <p className="mb-4 text-base leading-relaxed">
          En COINNECTA nos comprometemos a proteger tu información personal. Esta política describe qué datos recopilamos y cómo los utilizamos cuando accedes a nuestro sitio.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Información que recopilamos</h2>
        <p className="mb-4">
          Recopilamos datos que nos proporcionas directamente, como nombre y correo, además de información de navegación mediante cookies y herramientas analíticas.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Uso de la información</h2>
        <p className="mb-4">
          Utilizamos tus datos para brindarte y mejorar nuestros servicios, procesar pagos y enviarte comunicaciones relevantes.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Cookies</h2>
        <p className="mb-4">
          Empleamos cookies para recordar tus preferencias y analizar el uso del sitio. Puedes desactivarlas desde la configuración de tu navegador.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Tus derechos</h2>
        <p className="mb-4">
          Puedes acceder, actualizar o solicitar la eliminación de tus datos personales escribiéndonos a
          <a href="mailto:hola@coinnecta.com" className="text-golden underline ml-1">
            hola@coinnecta.com
          </a>
          .
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-golden">Cambios en esta política</h2>
        <p>
          Podemos modificar esta política en cualquier momento. Las actualizaciones se publicarán en esta página.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
