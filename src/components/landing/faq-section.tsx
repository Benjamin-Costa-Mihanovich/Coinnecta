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
      question: "¿Es COINNECTA adecuado para principiantes?",
      answer: "¡Absolutamente! COINNECTA está diseñado tanto para principiantes que nunca han vendido online como para emprendedores que quieren optimizar sus resultados. Empezamos desde lo básico y avanzamos paso a paso."
    },
    {
      question: "¿Cuánto tiempo necesito invertir por día?",
      answer: "Recomendamos dedicar al menos 1-2 horas diarias durante las primeras 4 semanas para completar la formación. Después, podrás implementar las estrategias en tu propio ritmo."
    },
    {
      question: "¿Funciona para cualquier tipo de negocio?",
      answer: "Sí, las estrategias de COINNECTA son aplicables a cualquier negocio digital: infoproductos, cursos online, coaching, consultorías, ecommerce, y más. Los principios son universales."
    },
    {
      question: "¿Qué diferencia a COINNECTA de otros cursos?",
      answer: "COINNECTA se enfoca específicamente en la implementación práctica en Hotmart y estrategias de upsell probadas. No es teoría, son sistemas reales que han generado millones en ventas."
    },
    {
      question: "¿Hay garantía de resultados?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si sigues el programa completo y no ves mejoras en tu negocio, te devolvemos el 100% de tu inversión."
    },
    {
      question: "¿Recibiré soporte personalizado?",
      answer: "Sí, tienes acceso a nuestra comunidad VIP donde puedes hacer preguntas, compartir resultados y recibir feedback. Además, hacemos sesiones en vivo mensuales de Q&A."
    },
    {
      question: "¿El contenido se actualiza?",
      answer: "Por supuesto. El marketing digital evoluciona constantemente, por eso actualizamos el contenido regularmente y todos los estudiantes reciben las actualizaciones sin costo adicional."
    },
    {
      question: "¿Puedo acceder desde cualquier dispositivo?",
      answer: "Sí, la plataforma es completamente responsive. Puedes acceder desde tu computadora, tablet o smartphone, y el progreso se sincroniza automáticamente."
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
                  ¿Listo para <span className="text-transparent bg-gradient-golden bg-clip-text">impulsar</span> tu negocio?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Únete a nuestra comunidad de emprendedores y transforma tu forma de vender online.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <CTAButton size="xl" className="w-full sm:w-auto">
                    🚀 Comenzar ahora
                  </CTAButton>
                  <CTAButton size="xl" className="w-full sm:w-auto">
                    📞 Contactar asesor
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