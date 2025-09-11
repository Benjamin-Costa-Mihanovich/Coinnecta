import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTAButton } from "@/components/ui/cta-button";
import sectionBg3 from "@/assets/section-bg-3.jpg";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Necesito experiencia previa para realizar este curso?",
      answer: "No, el curso está diseñado específicamente para tanto personas sin conocimiento hasta personas con un alto conocimiento y experiencia. Comenzamos desde los conceptos más básicos hasta los más complejos y avanzados que poca gente conoce y domina para que aprendas todo lo necesario."
    },
    {
      question: "¿Qué es el eCommerce y cómo funciona?",
      answer: "Es un modelo de negocio en el que puedes vender productos sin tener stock propio. En nuestro caso contamos con los mejores proveedores para que tengas y vendas los mejores productos al mejor precio en tu tienda."
    },
    {
      question: "¿Cuánto dinero necesito para empezar?",
      answer: "Recomendamos una inversión inicial de al menos 1.000 € (sin incluir la formación) para destinar a publicidad. En cuanto a los productos, os ofrecemos financiación, ya que confiamos plenamente en vuestro éxito."
    },
    {
      question: "¿El eCommerce sigue siendo rentable en 2025?",
      answer: "Por supuesto que sí, no cabe duda. Tanto nosotros como nuestros alumnos hemos facturado cantidades muy elevadas este 2024, es un modelo de negocio que está en auge. Se esperan grandes cosas para este 2025 y 2026 si eres alumno."
    },
    {
      question: "¿La formación se irá actualizando?",
      answer: "Los tiempos cambian, y con ellos, las estrategias y formas de vender. Como expertos en venta online, nos mantenemos siempre actualizados. Por eso, nuestra formación se actualiza constantemente y, lo mejor de todo, sin coste adicional."
    },
    {
      question: "¿Cómo funciona la formación?",
      answer: "Es una combinación de videos y seguimiento personalizado. Tendrás acceso de por vida a todos los videos, desde lo más básico hasta lo más avanzado, para que aprendas todo sobre este modelo de negocio. Además, contarás con un mentor que te guiará en tus primeros pasos, resolviendo todas tus dudas y brindándote apoyo continuo."
    },
    {
      question: "¿Con quién voy a realizar el seguimiento?",
      answer: "Estarás mano a mano con los mejores expertos de cada rama en función a tus necesidades en ese preciso momento."
    }
  ];

  return (
    <section id="faq" className="relative py-16 lg:py-28 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background">
        <img 
          src={sectionBg3} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado con estilo premium */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block bg-golden/10 px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-golden uppercase mb-4">
            Soporte y Ayuda
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Preguntas <span className="text-transparent bg-gradient-golden bg-clip-text">Frecuentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-golden/30 via-golden to-golden/30 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encuentra respuestas a las consultas más comunes sobre nuestro programa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Acordeón Premium con altura uniforme */}
          <Accordion type="single" collapsible className="grid gap-4 mb-16 lg:mb-24">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="group px-6 py-5 w-full text-left flex items-start justify-between gap-4 hover:no-underline">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-6 h-6 rounded-full bg-golden/10 flex items-center justify-center">
                        <svg 
                          className="w-3 h-3 text-golden transition-transform duration-300 group-data-[state=open]:rotate-45" 
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-golden transition-colors text-left">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                  <div className="pl-10 border-l-2 border-golden/20">
                    <div className="prose prose-sm text-muted-foreground max-w-none">
                      {faq.answer}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA de conversión mejorado */}
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-background via-background to-background/80 border border-golden/20 rounded-2xl p-8 lg:p-10 overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-golden blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-golden blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  ¿Listo para <span className="text-transparent bg-gradient-golden bg-clip-text">empezar</span> a ganar?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Únete a nuestra comunidad de emprendedores y transforma tu forma de vender online.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <CTAButton 
                    size="xl" 
                    className="w-full sm:w-auto"
                    onClick={() => window.open('https://academia.coinnecta.es/producto/suscripcion-mensual-academia/', '_blank')}
                  >
                    🚀 Comenzar ahora
                  </CTAButton>
                  <CTAButton 
                    variant="secondary" 
                    size="xl" 
                    className="w-full sm:w-auto bg-transparent border-2 border-golden/30 text-golden hover:bg-golden/10 hover:border-golden hover:text-white transition-all duration-300"
                    onClick={() => {
                      const testimonialsSection = document.getElementById('testimonios');
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    ⭐ Ver testimonios
                  </CTAButton>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Garantía de 30 días
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Acceso inmediato
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Soporte prioritario
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}