"use client";

import { useState } from "react";

type Reason = {
  title: string;
  text: string;
};

export function WhyAccordion({ reasons }: { reasons: Reason[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-28 divide-y divide-black/35 border-y border-black/35 lg:mt-32">
      {reasons.map((reason, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="accordion-item py-5" key={reason.title}>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-serifDisplay text-2xl md:text-3xl">{reason.title}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center text-2xl font-light text-japan-ink transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
              <p className="max-w-2xl pb-2 pt-4 leading-8 text-black/62">{reason.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
