import {
  BENCHMARKS,
  FadeSide,
  FadeUp,
  OEE_FORMULA,
} from "../../Constants/Oee_constants";

const OEEPillars = () => {
  const pillars = [
    {
      letter: "A",
      title: "Availability",
      desc: "Availability takes into account Unplanned and Planned Stops. An Availability score of 100% means the process is always running during Planned Production Time.",
    },
    {
      letter: "P",
      title: "Performance",
      desc: "Performance takes into account Slow Cycles and Small Stops. A Performance score of 100% means when the process is running it is running as fast as possible.",
    },
    {
      letter: "Q",
      title: "Quality",
      desc: "Quality takes into account Defects (including parts that need Rework). A Quality score of 100% means there are no Defects.",
    },
    {
      letter: "OEE",
      title: "Overall Equipment Effectiveness",
      desc: "OEE takes into account all losses. A score of 100% means you are producing only Good Parts, as fast as possible, with no Stop Time.",
    },
  ];

  return (
    <FadeSide className="max-w-6xl mx-auto px-6 my-10">
      <div className="grid md:grid-cols-4 gap-6">
        {pillars.map((item) => (
          <div
            key={item.title}
            className=" border border-slate-700 rounded-xl p-6 text-center hover:shadow-sm transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center text-lg font-semibold text-slate-200">
              {item.letter}
            </div>

            <h3 className="text-lg font-semibold text-slate-300 mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </FadeSide>
  );
};

const What_Is_OEE = () => {
  return (
    <section id="what-is-oee" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
          What is OEE?
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Overall Equipment Effectiveness (OEE) is the gold standard metric for
          measuring manufacturing productivity. It combines three critical
          factors into one number that honestly reflects how well your machines
          are being used.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 my-10">
          {OEE_FORMULA.map((item, i) =>
            item.sub ? (
              <div
                key={i}
                className={`px-5 py-4 rounded-xl border text-center ${item.cls}`}
              >
                <p className="font-semibold">{item.label}</p>
                <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
              </div>
            ) : (
              <span key={i} className={item.cls}>
                {item.label}
              </span>
            ),
          )}
        </div>

        <OEEPillars />

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            OEE Performance Benchmarks
          </h3>

          <div className="divide-y divide-white/10 border border-white/10 rounded-lg">
            {BENCHMARKS.map((b) => (
              <div
                key={b.label}
                className="grid grid-cols-3 gap-4 px-6 py-4 items-center"
              >
                <p className={`text-sm font-semibold ${b.color}`}>{b.label}</p>

                <p className="text-white font-medium">{b.range}</p>

                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default What_Is_OEE;
