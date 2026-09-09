"use client";

import { useState, useRef, useEffect } from "react";
import { SERVICES } from "../../Constants/Solutions";

// Crossfade image — fades old out, new in
function ServiceImage({ src, alt }) {
  const [displayed, setDisplayed] = useState(src);
  const [fading, setFading] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (src === displayed) return;

    setFading(true);
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDisplayed(src);
      setFading(false);
    }, 220);

    return () => clearTimeout(timer.current);
  }, [src, displayed]);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-950">
      <img
        key={displayed}
        src={displayed}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transition: "opacity 220ms ease",
          opacity: fading ? 0 : 1,
        }}
      />
    </div>
  );
}

export default function OtherServices() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="overflow-hidden bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight md:text-4xl">
            End-to-end solutions for modern manufacturing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Explore the digital manufacturing solutions DigiFabrix provides to
            improve production visibility, efficiency, and control.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* LEFT — service selector */}
          <div className="space-y-3">
            <p className="mb-4 text-sm font-medium text-slate-300">
              Our Services
            </p>

            {SERVICES.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`group w-full rounded-lg border p-5 text-left transition duration-300 ${
                    isActive
                      ? "border-slate-700 bg-slate-950"
                      : "border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-950"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`w-5 shrink-0 pt-0.5 font-mono text-xs transition-colors ${
                        isActive ? "text-blue-500" : "text-slate-500"
                      }`}
                    >
                      {service.index}
                    </span>

                    <div className="min-w-0 flex-1">
                      {/* Title row */}
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p
                          className={`text-base font-medium leading-snug transition-colors md:text-lg ${
                            isActive
                              ? "text-white"
                              : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </p>

                        <span
                          className={`shrink-0 rounded-md border px-2 py-1 text-xs transition-colors ${
                            isActive
                              ? "border-slate-700 bg-slate-900 text-blue-400"
                              : "border-slate-800 bg-slate-900 text-slate-400"
                          }`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      {/* Tagline */}
                      <p className="text-sm leading-relaxed text-slate-400">
                        {service.tagline}
                      </p>

                      {/* Expanded content */}
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: isActive ? "120px" : "0",
                        }}
                      >
                        <ul className="mt-4 space-y-2">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-sm leading-relaxed text-slate-400"
                            >
                              <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — image + description */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <ServiceImage src={current.img} alt={current.title} />

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-medium leading-snug text-white">
                  {current.title}
                </h3>
              </div>

              <p className="text-base leading-7 text-slate-400">
                {current.desc}
              </p>

              <a
                href="/solutions"
                className="group inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-400"
              >
                Learn more about {current.title}
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
