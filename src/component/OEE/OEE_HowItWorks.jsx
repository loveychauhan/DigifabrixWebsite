import { How_It_Works, SectionTag } from "../../Constants/Oee_constants";

const OEE_HowItWorks = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center ">
        <SectionTag>How It Works</SectionTag>
        <h2 className="text-4xl font-bold text-white mb-5">
          Up and Running in One Shift
        </h2>
        <p className="text-slate-400 text-lg">
          No complex ERP integration. No dedicated IT team required.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {How_It_Works.map((s, i) => (
            <div
              className={`relative bg-slate-950 border ${s.border} rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-transform duration-300`}
            >
              <span
                className={`text-6xl font-bold ${s.color} opacity-10 absolute top-3 right-4 select-none`}
              >
                {s.step}
              </span>
              <p
                className={`text-xs font-bold uppercase tracking-widest ${s.color} mb-3`}
              >
                Step {s.step}
              </p>
              <h3 className="text-white font-semibold text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEE_HowItWorks;
