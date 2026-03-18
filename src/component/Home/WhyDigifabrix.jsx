import { FadeUp } from "../../Constants/Oee_constants";

// 3 strong feature blocks instead of many small cards
const CORE_FEATURES = [
  {
    number: "01",
    title: "Live OEE — no manual entry",
    desc: "Availability, Performance and Quality are calculated automatically from machine signals. Your OEE score updates every minute across all machines and shifts without a single spreadsheet.",
  },
  {
    number: "02",
    title: "Downtime classified, not just counted",
    desc: "Every machine stop is automatically grouped — Technical, Maintenance, Work Arrangement, Setup. Ranked reports tell you where to focus, not just how long machines were down.",
  },
  {
    number: "03",
    title: "Built for job shops and discrete manufacturing",
    desc: "Not an ERP add-on. Not a generic IoT dashboard. DigiFabrix is designed around the way job shops actually run — per machine, per shift, per production order.",
  },
];

const COMPARISON_ROWS = [
  ["Real-time OEE calculation", "✓ Live", "✗", "Delayed", "Varies"],
  ["Hourly status timeline", "✓", "✗", "✗", "✗"],
  ["Zero manual data entry", "✓", "✗", "Partial", "Partial"],
  [" Downtime classification", "Dropdown", "Manual", "Add-on cost", "✗"],
  ["Multi-shift support", "✓", "Workaround", "✓", "✗"],
  ["Built for job shops", "✓", "✗", "✗", "✗"],
];

const COLUMN_HEADERS = [
  "Feature",
  "DigiFabrix",
  "Spreadsheets",
  "Legacy MES",
  "Generic Tools",
];

function FeatureBlock({ number, title, desc }) {
  return (
    <div className="flex gap-6 py-8 border-b border-slate-800 last:border-none">
      <span className="text-xs font-mono text-slate-600 pt-1 w-6 flex-shrink-0">
        {number}
      </span>
      <div>
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-800">
            {COLUMN_HEADERS.map((h, i) => (
              <th
                key={h}
                className={`py-3 px-4 font-medium text-left ${
                  i === 0
                    ? "text-slate-400 w-56"
                    : i === 1
                      ? "text-blue-400"
                      : "text-slate-500"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map(([feat, df, ss, mes, gen], i) => (
            <tr
              key={feat}
              className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors duration-150"
            >
              <td className="py-3 px-4 text-slate-400">{feat}</td>
              <td className="py-3 px-4 text-blue-400 font-medium">{df}</td>
              <td className="py-3 px-4 text-orange-500">{ss}</td>
              <td className="py-3 px-4 text-orange-500">{mes}</td>
              <td className="py-3 px-4 text-orange-500">{gen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhyDigifabrix() {
  return (
    <section id="why-digifabrix" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="mb-16 text-center">
          <h2 className="text-3xl font-bold  text-white mb-4">
            Why DigiFabrix is the Right Choice
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Purpose-built for job shops and discrete manufacturers — not a
            legacy MES, not a generic dashboard bolted onto an ERP.
          </p>
        </FadeUp>

        {/* Feature blocks */}
        <FadeUp delay={80} className="mb-20">
          {CORE_FEATURES.map((f) => (
            <FeatureBlock key={f.number} {...f} />
          ))}
        </FadeUp>

        {/* Comparison */}
        <FadeUp delay={160}>
          <h3 className="text-base text-center font-semibold text-white mb-6">
            DigiFabrix vs the Alternatives
          </h3>
          <ComparisonTable />
        </FadeUp>
      </div>
    </section>
  );
}
