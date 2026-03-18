import { useState } from "react";
import { FadeUp, FAQS, SectionTag } from "../../Constants/Oee_constants";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-6 group-hover:text-cyan-300 transition-colors duration-200">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-slate-400 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0" }}
      >
        <p className="text-slate-400 text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  );
}

const OEE_FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp className="text-center mb-12">
          <SectionTag>FAQ</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Everything about OEE monitoring and DigiFabrix — answered.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div>
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default OEE_FAQ;
