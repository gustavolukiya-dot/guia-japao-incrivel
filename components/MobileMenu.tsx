"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const WA_LINK = "https://wa.me/819065931930";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const menu = (
    <div
      className={`fixed inset-0 z-[999] flex flex-col text-white transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ backgroundColor: "#c62828" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-serifDisplay text-xl text-white">Guia Japão Incrível</span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
          className="grid h-8 w-8 place-items-center text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Links centralizados */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {[
          { href: "#inicio", label: "Inicio" },
          { href: "#sobre", label: "Sobre" },
          { href: "#servicos", label: "Serviços" },
          { href: "#destinos", label: "Destinos" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-serifDisplay text-4xl text-white transition hover:text-white/70"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Botão CTA */}
      <div className="px-6 pb-12">
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold text-white transition hover:opacity-80"
          style={{ backgroundColor: "#12100f" }}
        >
          Entre em contato
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Botão hamburger — fica dentro da navbar normalmente */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex flex-col items-end gap-[6px] md:hidden"
      >
        <span className="h-[1.5px] w-6 bg-white" />
        <span className="h-[1.5px] w-4 bg-white" />
      </button>

      {/* Menu renderizado direto no body via portal */}
      {mounted && createPortal(menu, document.body)}
    </>
  );
}