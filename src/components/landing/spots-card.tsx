import React, { useEffect, useMemo, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { motion, AnimatePresence } from "framer-motion";

export type SpotsCardProps = {
  total?: number;
  taken?: number;
  deadline?: Date;
  title?: string;
  note?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  // Caja comparativa
  includeTitle?: string;
  features?: string[];
  price?: number;
  priceCurrency?: string;
  priceBadge?: string;
  includeNote?: string;
  benefitsLeft?: string;
  benefitsRight?: string;
  bottomImageSrc?: string;
};

export default function SpotsCard({
  total = 50,
  taken = 27,
  deadline,
  title = "50 personas por semana",
  note = "No es táctica de ventas. Es logística real.",
  ctaLabel = "Reservar mi lugar",
  onCta,
  className = "",
  includeTitle = "INCLUYE:",
  features = [
    "Curso completo",
    "Tienda online configurada",
    "Productos + anuncios validados",
    "Soporte personal",
    "Acceso inmediato",
  ],
  price = 17,
  priceCurrency = "USD",
  priceBadge = "ÚNICO PAGO",
  includeNote = "Esto no es un gasto. Es la inversión más accesible que vas a hacer para cambiar tu situación financiera.",
  benefitsLeft = "Garantía de $1,000 o te pagamos $40",
  benefitsRight = "30 días de reembolso total",
  bottomImageSrc = "./images/pascu.png",
}: SpotsCardProps) {
  const available = Math.max(total - taken, 0);
  const pct = Math.min(100, Math.max(0, (taken / total) * 100));
  const isLow = available <= 10;

  // Countdown sincronizado
  const remaining = useCountdown();

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl p-6 sm:p-10",
        "text-white font-sans border border-white/10 shadow-2xl",
        className,
      ].join(" ")}
      aria-label="Disponibilidad de cupos"
    >
      {/* Fondo negro moderno con degradés y halos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(255,255,255,.08),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Encabezado */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-300" />
          <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase">
            {title}
          </span>
          <span className="text-[11px] text-white/70">Alta demanda</span>
        </div>
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
          {note}
        </p>
      </div>

      {/* Número principal + urgencia */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          className="relative rounded-3xl border-2 border-amber-400/50 bg-black/60 px-12 py-8 backdrop-blur shadow-amber-400/20 shadow-2xl"
          title={`${available} lugares disponibles`}
          aria-live="polite"
        >
          {/* Glow animado detrás del número */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-amber-400/20 blur-2xl " />
          </div>
          <div className="relative z-10 text-8xl sm:text-9xl font-extrabold leading-none tracking-tight animate-bounce">
            <span className="bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_8px_28px_rgba(251,191,36,0.45)]">
              {available}
            </span>
          </div>
        </motion.div>

        <p className="mt-4 text-base sm:text-lg font-bold tracking-wide text-amber-300 uppercase drop-shadow-lg">
          LUGARES DISPONIBLES
        </p>

        <AnimatePresence>
          {isLow && (
            <motion.div
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-amber-400/60 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300 shadow-lg backdrop-blur animate-pulse"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-amber-300 animate-ping" />
              ¡Quedan pocos lugares!
            </motion.div>
          )}
        </AnimatePresence>
        {/* Número de lugares ocupados destacado */}
        <div className="mt-6 text-lg sm:text-xl font-bold text-white/90 bg-black/40 px-4 py-2 rounded-xl border border-amber-400/30 shadow-md flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 0 1 .894.553l7 14A1 1 0 0 1 17 18H3a1 1 0 0 1-.894-1.447l7-14A1 1 0 0 1 10 2zm0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
          <span className="text-amber-300 font-extrabold">{taken}</span> de <span className="font-bold">{total}</span> lugares ocupados
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mx-auto mt-8 p-4 w-full max-w-3xl">
        <div className="relative h-6 w-full overflow-visible flex items-center">
          {/* Fondo barra */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-6 rounded-full bg-gradient-to-r from-black/60 via-amber-900/20 to-black/80 border border-amber-400/20 shadow-lg" />
          {/* Barra animada */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-6 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-amber-400/30 shadow-lg"
            style={{ width: `${pct}%` }}
          />
          {/* Glow urgente si quedan pocos lugares */}
          {isLow && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-400/40 rounded-full blur-xl animate-pulse" />
          )}
          {/* Icono de alerta si quedan pocos lugares */}
          {isLow && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <svg className="w-6 h-6 text-amber-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 0 1 .894.553l7 14A1 1 0 0 1 17 18H3a1 1 0 0 1-.894-1.447l7-14A1 1 0 0 1 10 2zm0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
            </div>
          )}
          {/* Texto de porcentaje sobre la barra, destacado y flotante */}
          <div className="absolute left-1/2 -top-9 -translate-x-1/2 z-10">
            <span className="px-3 py-1 rounded-full bg-black/80 border border-amber-400/40 text-amber-300 font-bold text-sm shadow-lg backdrop-blur-md">
              {Math.round(pct)}% ocupado
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-sm">
          {remaining ? (
            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-white/5 px-3 py-1 text-base backdrop-blur ">
              <span className="inline-block h-1.5 w-1.5  rounded-full bg-amber-300" />
              <span className="font-bold text-amber-300">¡Cupos por cerrar!</span>
              <span className="ml-1 font-bold text-amber-300">
                {remaining.days}d {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
              </span>
            </div>
          ) : (
            <div className="text-white/80">Próxima apertura muy pronto</div>
          )}
        </div>
      </div>

      {/* CTA (hover renovado) */}
      <div className="mt-8 flex items-center justify-center">
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCta}
          className={[
            "group relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-extrabold text-black",
            "bg-gradient-to-r from-amber-400 to-amber-300",
            "shadow-[0_12px_28px_-10px_rgba(251,191,36,.45)]",
            "transition-all duration-300 ease-out",
            "hover:from-amber-300 hover:to-amber-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60",
          ].join(" ")}
        >
          {/* brillo diagonal al hover */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full  transition-transform duration-700 group-hover:translate-x-full" />
          {ctaLabel}
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>

      {/* ============ Caja comparativa ============ */}
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-amber-300 p-[1.5px]">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-6 sm:p-8 backdrop-blur">
            {/* Marca */}
            <div className="mb-4 flex justify-center">
              <span className="rounded-full border border-amber-400/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
                COINNECTA PREMIUM
              </span>
            </div>

            <h3 className="mb-6 text-center text-3xl font-extrabold">{includeTitle}</h3>

            {/* Features */}
            <ul className="mb-8 grid gap-3 text-white/90">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-300">
                    <svg className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-medium leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            {/* Precio */}
            <div className="mb-6 rounded-2xl border border-amber-400/30 bg-white/5 p-6 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
                ACCESO COMPLETO POR
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-white/60 line-through">$197</span>
                <div className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-5xl sm:text-6xl font-black text-transparent drop-shadow-lg">
                  ${price}
                </div>
                <span className="text-lg text-white/80">{priceCurrency}</span>
              </div>
              <div className="mt-2 inline-block rounded-full border border-amber-400/30 bg-white/5 px-3 py-1">
                <p className="text-xs font-bold tracking-wide text-amber-300 uppercase">{priceBadge}</p>
              </div>
            </div>

            {/* Nota */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/85">
              {includeNote}
            </div>

            {/* CTA en caja (hover renovado igual que el principal) */}
            <div className="mb-5 flex justify-center">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCta}
                className={[
                  "group relative inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-extrabold text-black",
                  "bg-gradient-to-r from-amber-400 to-amber-300",
                  "shadow-[0_12px_28px_-10px_rgba(251,191,36,.45)]",
                  "transition-all duration-300 ease-out",
                  "hover:from-amber-300 hover:to-amber-500",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60",
                ].join(" ")}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                Quiero acceder por ${price}
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Urgencia línea */}
            <div className="mb-5 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-2">
                <svg className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.596c.75 1.335-.213 2.995-1.742 2.995H3.48c-1.53 0-2.492-1.66-1.742-2.995L8.257 3.1zM10 7a1 1 0 00-1 1v3.5a1 1 0 002 0V8a1 1 0 00-1-1zm0 7a1.25 1.25 0 100 2.5A1.25 1.25 0 0010 14z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">
                  Solo quedan <span className="font-bold text-white">{available}</span> lugares disponibles
                </span>
              </div>
            </div>

            {/* Beneficios */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-green-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-white/90">{benefitsLeft}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-green-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-white/90">{benefitsRight}</span>
              </div>
            </div>

            {/* Imagen inferior */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={bottomImageSrc}
                alt="Equipo / caso de éxito Coinnecta"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
