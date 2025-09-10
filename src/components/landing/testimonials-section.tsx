import React, { useMemo, useRef, useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";

// IDs de YouTube sacados de la página /entrevistas
const VIDEO_IDS = [
  "__3PKcn6VE0",
  "jS3Ufjrz5OQ",
  "STQiK64ZN3M",
  "vm2JfsfIX9Q",
  "cl26XyUoi8w",
  "b79t5AMx75w",
  "7vsBDymaP9U",
  "Wb49rA3Oq-o",
  "hp6kHrDpVBQ",
  "XkIgWjd_qzc",
  "xgxnRgl9q-k",
];

function VideoModal({ videoId, onClose }: { videoId: string | null; onClose: () => void }) {
  if (!videoId) return null;
  const embed = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
      >
        ✕
      </button>
      <div className="w-[92vw] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
        <iframe
          className="w-full h-full"
          src={embed}
          title="Testimonio en video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}

function VideoThumb({ id, onPlay }: { id: string; onPlay: (id: string) => void }) {
  const thumb = useMemo(() => `https://img.youtube.com/vi/${id}/hqdefault.jpg`, [id]);
  return (
    <button
      onClick={() => onPlay(id)}
      className="relative group w-80 h-44 lg:w-96 lg:h-52 rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      aria-label="Reproducir testimonio"
    >
      <img src={thumb} alt="Miniatura del video de testimonio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg group-hover:scale-110 transition-all duration-300">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="text-gray-900 font-semibold text-xs">Ver testimonio</span>
        </div>
      </div>
    </button>
  );
}

function VideoCarousel() {
  const [active, setActive] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (offset: number) => {
    scrollerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-xl overflow-hidden">
      <div className="p-8 lg:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Testimonios en video
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escucha directamente de nuestros estudiantes sobre sus experiencias y resultados reales.
          </p>
        </div>

        {/* Carrusel moderno */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {VIDEO_IDS.map((id) => (
              <div key={id} className="snap-start flex-shrink-0">
                <VideoThumb id={id} onPlay={(vid) => setActive(vid)} />
              </div>
            ))}
          </div>
          
          {/* Controles de navegación */}
          <div className="flex justify-center gap-3 mt-6">
            <button 
              onClick={() => scrollBy(-360)} 
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scrollBy(360)} 
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA moderno */}
        <div className="mt-10 text-center">
          <CTAButton size="xl" className="bg-gradient-to-r from-golden to-amber-500 hover:from-amber-500 hover:to-golden text-gray-900 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
           QUIERO RESULTADOS ASÍ 🚀
          </CTAButton>
        </div>
      </div>

      {/* Modal */}
      <VideoModal videoId={active} onClose={() => setActive(null)} />
    </div>
  );
}

export default function TestimonialsSection() {
  // Testimonios actualizados basados en la imagen proporcionada
  const testimonials = [
    {
      name: "David Duran",
      role: "Triplicó sus pedidos diarios, pasando de 50 a 150 en solo unos días",
      image: "/images/testimonial-1.jpg",
      result: "De 50 a 150 pedidos/día",
      text: "Formación increíble ya sea para empezar de 0 y avanzar rápidamente, como para alguien avanzado para crecer sus ventas. Te ayudan en todo momento, se preocupan que estés haciendo todo bien y una atención de 10. Muy recomendado",
      highlight: "Triplicó sus pedidos diarios en pocos días",
    },
    {
      name: "Raul Galisteo",
      role: "De estancarse en el eCommerce a generar ingresos de forma estable",
      image: "/images/testimonial-2.jpg",
      result: "Ingresos estables",
      text: "El servicio que ofrecen y la atención personalizada es de las mejores que he encontrado en una comunidad. Siempre están atentos a problemas o dudas y muy serviciales a la hora de resolverlos. Sin duda de las mejores inversiones que hice el año pasado.",
      highlight: "Generó ingresos estables después del estancamiento",
    },
    {
      name: "Jesús Domínguez",
      role: "Se unió al servicio VIP, dejó de invertir sin rumbo y comenzó a generar ingresos",
      image: "/images/testimonial-3.jpg",
      result: "50.000€ facturados",
      text: "Me ayudaron en todo para empezar en el Ecommerce, acabé pagando el VIP y bueno este último mes facturé más de 50.000€ con el almacén, muy contento con ellos y trato cercano",
      highlight: "Facturó más de 50.000€ en un mes",
    },
    {
      name: "Paco Cabrera",
      role: "De trabajar en un club nocturno a tener su propia marca de éxito",
      image: "/images/testimonial-4.jpg",
      result: "Marca propia exitosa",
      text: "Tuve un poco de miedo al principio como suele ser costumbre en el tema de las formaciones en internet pero acabé sorprendido con Pascu y Raúl, dos auténticos cracks. Totalmente recomendado.",
      highlight: "Creó su propia marca de éxito",
    },
  ];

  return (
    <section id="testimonios" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Fondo con overlay sutil */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1705023868869-92166eff39c1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fondo abstracto digital" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-gray-50/50 to-gray-60/80" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-golden/20 text-gray-900 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4 backdrop-blur-sm backdrop-filter">
            CASOS DE ÉXITO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Resultados que 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden via-amber-500 to-golden">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre cómo nuestros estudiantes han transformado sus negocios digitales 
            y alcanzado el éxito financiero que siempre soñaron.
          </p>
        </div>

        {/* Testimonios actualizados con los datos de la imagen */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-gray-950/90 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-golden/80 shadow-md" />
                    <div className="absolute -bottom-1 -right-1 bg-golden rounded-full p-1 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-gray-300 text-sm mb-2">{t.role}</p>
                    <span className="inline-block bg-golden/20 text-golden px-3 py-1 rounded-full text-xs font-bold backdrop-filter backdrop-blur-sm">
                      {t.result}
                    </span>
                  </div>
                </div>
                <blockquote className="text-gray-200 italic mb-6 pl-4 border-l-2 border-golden">“{t.text}”</blockquote>
                <div className="bg-golden/10 backdrop-filter backdrop-blur-sm border border-golden/20 rounded-lg p-4 group-hover:bg-golden/15 transition-all duration-300">
                  <p className="text-golden font-semibold text-center flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrusel compacto de videos (reemplaza el bloque CTA anterior) */}
        <VideoCarousel />
      </div>
    </section>
  );
}

export { TestimonialsSection };
