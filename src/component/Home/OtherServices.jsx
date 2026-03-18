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
  }, [src]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900">
      <img
        key={displayed}
        src={displayed}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
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
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl 2xl:text-4xl text-center mx-auto font-bold text-white leading-tight max-w-3xl ">
            End-to-end solutions for modern manufacturing
          </h2>
        </div>
        <p className="text-slate-400 font-light text-[12px] ml-5 my-2">Our Services</p>
        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* LEFT — service selector */}
          <div className="space-y-1">
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left px-5 py-5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 border border-slate-700"
                      : "border border-transparent hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`text-xs font-mono pt-0.5 w-5 flex-shrink-0 transition-colors duration-200 ${
                        isActive ? "text-cyan-400" : "text-slate-200"
                      }`}
                    >
                      {s.index}
                    </span>

                    <div className="flex-1 min-w-0">
                      {/* Title row */}
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <p
                          className={`font-semibold text-base transition-colors duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-slate-100 group-hover:text-slate-200"
                          }`}
                        >
                          {s.title}
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                            isActive
                              ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/25"
                              : "bg-slate-800 text-slate-100 border border-transparent"
                          }`}
                        >
                          {s.tag}
                        </span>
                      </div>

                      {/* Tagline — always visible */}
                      <p
                        className={`text-sm transition-colors duration-200 ${
                          isActive ? "text-slate-100" : "text-slate-200"
                        }`}
                      >
                        {s.tagline}
                      </p>

                      {/* Expanded content */}
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: isActive ? "120px" : "0" }}
                      >
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-center gap-2 text-xs text-slate-200"
                            >
                              <span className="w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                              {b}
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
          <div className="lg:sticky lg:top-28 space-y-6">
            <ServiceImage src={current.img} alt={current.title} />

            <div className="space-y-4 px-1">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-slate-600">
                  {current.index}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {current.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {current.desc}
              </p>

              <a
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                Learn more about {current.title}
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
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
