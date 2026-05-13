"use client";

import { useState, useEffect } from "react";

const BASE = [
  { name: "Roberta L.", text: "Vocês fizeram a nossa viagem ser ainda mais inesquecível! Muito obrigada por todo o carinho, paciência e por nos apresentar esse Japão maravilhoso, já estamos com saudades!" },
  { name: "Ana Maria", text: "Jacqueline você é uma excelente profissional. Eu e o Evaldo só temos a agradecer pela sua dedicação e presteza nesses dias de convivência aqui no Japão." },
  { name: "João", text: "Vocês foram essenciais nesse nosso percurso pelo Japão, muito obrigado por tudo que vocês fizeram por nós." },
  { name: "Rafael", text: "Bruno, obrigado pela sua paciência, educação e principalmente pelo trabalho executado! Tudo foi impecável e conseguimos conhecer e tirar o máximo proveito de tudo. Muito obrigado!" },
];

const GAP = 40;
const N = BASE.length;
const items = [...BASE, ...BASE, ...BASE];

export function TestimonialsCarousel() {
  const [idx, setIdx] = useState(N);
  const [animated, setAnimated] = useState(true);
  const [cardW, setCardW] = useState(520);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCardW(mobile ? window.innerWidth - 40 : 520);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = cardW + GAP;

  const prev = () => { setAnimated(true); setIdx(i => i - 1); };
  const next = () => { setAnimated(true); setIdx(i => i + 1); };

  useEffect(() => {
    if (idx < N) {
      const t = setTimeout(() => { setAnimated(false); setIdx(i => i + N); }, 500);
      return () => clearTimeout(t);
    }
    if (idx >= N * 2) {
      const t = setTimeout(() => { setAnimated(false); setIdx(i => i - N); }, 500);
      return () => clearTimeout(t);
    }
  }, [idx]);

  return (
    <section className="overflow-hidden bg-[#faf8f3] py-24 md:py-32">
      <div className="mx-auto mb-10 max-w-7xl px-5 text-center md:mb-14 md:px-8">
        <h2 className="font-serifDisplay text-4xl md:text-5xl">Voz dos clientes</h2>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="overflow-hidden px-5">
          <div
            className="flex"
            style={{
              gap: GAP,
              transform: `translateX(${-(idx - N) * step}px)`,
              transition: animated ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {items.map((t, i) => (
              <article
                key={i}
                style={{ width: cardW, flexShrink: 0 }}
                className="rounded-xl bg-[#d9d9d9] p-7"
              >
                <h3 className="font-serifDisplay text-2xl">{t.name}</h3>
                <p className="mt-4 italic leading-8 text-black/65">"{t.text}"</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prev} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-japan-cream">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button onClick={next} aria-label="Próximo" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-japan-cream">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* Desktop / iPad */}
      <div className="relative hidden items-center md:flex">
        <button onClick={prev} aria-label="Anterior" className="absolute left-5 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-japan-cream">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex"
            style={{
              gap: GAP,
              transform: `translateX(calc(50vw - ${idx * step + cardW / 2}px))`,
              transition: animated ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {items.map((t, i) => (
              <article
                key={i}
                style={{ width: cardW, minHeight: 220, flexShrink: 0 }}
                className="rounded-xl bg-[#d9d9d9] p-8"
              >
                <h3 className="font-serifDisplay text-2xl">{t.name}</h3>
                <p className="mt-5 italic leading-8 text-black/65">"{t.text}"</p>
              </article>
            ))}
          </div>
        </div>

        <button onClick={next} aria-label="Próximo" className="absolute right-5 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-japan-cream">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
}