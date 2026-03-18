import {
  IconTemperature,
  IconTrendingUp,
  IconAlertCircle,
} from "@tabler/icons-react";
const benefits = [
  {
    icon: IconTemperature,
    title: "Product Quality",
    desc: "Prevent defects, condensation, and material degradation caused by poor environmental control.",
    advantages: [
      "Maintain ideal conditions 24/7 to eliminate defects and ensure consistent output.",
      "Detect issues early and prevent spoilage, rework, and material loss.",
      "Automated logs and insights keep you always prepared for inspections.",
    ],
    disadvantages: [
      "Fluctuating conditions lead to defects, contamination, and inconsistency.",
      "Wasted materials, failed batches, and inefficiencies silently increase costs.",
      "Lack of data delays decisions, turning small issues into major failures.",
    ],
  },
  {
    icon: IconTrendingUp,
    title: "Equipment Longevity",
    desc: "Reduce thermal stress on machines and electronics, significantly extending asset life.",
  },
  {
    icon: IconAlertCircle,
    title: "Compliance & Audit",
    desc: "Maintain documented environmental records required by regulatory bodies and customers.",
  },
];

const lossData = [
  { label: "Defects", value: 35 },
  { label: "Downtime", value: 25 },
  { label: "Rework", value: 20 },
  { label: "Energy Waste", value: 15 },
  { label: "Compliance Issues", value: 10 },
];

export default function BusinessImpact() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-blue-400 text-sm tracking-widest mb-3">
            BUSINESS IMPACT
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
            Why precise temperature & humidity control matters
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Chart Block */}
          <div className="md:col-span-2 p-4 rounded-xl border border-slate-700 bg-slate-950">
            <h3 className="text-xl font-semibold mb-6">
              Loss due to poor environment monitoring
            </h3>

            <div className="space-y-4">
              {lossData.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-100">{item.label}</span>
                    <span className="text-slate-200">{item.value}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-500 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Feature Block */}
          <div className="p-8 rounded-xl border row-span-2 border-slate-700 bg-slate-950">
            <FeatureCard data={benefits[0]} />
          </div>

          {/* Bottom Feature Cards */}
          <div className="p-8 rounded-xl border border-slate-700 bg-slate-950">
            <FeatureCard data={benefits[1]} />
          </div>

          <div className="p-8 rounded-xl border  border-slate-700 bg-slate-950">
            <FeatureCard data={benefits[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ data }) {
  const Icon = data.icon;

  return (
    <>
      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{data.desc}</p>
      {console.log(data.advantages)}

      {data.advantages && (
        <>
          {" "}
          <div className="space-y-3.5-4 text-[10px]">
            <h3 className="text-[12px] mt-8 mb-1">When Using Right Device</h3>
            {data.advantages?.map((adv, ind) => (
              <p className="py-1  text-blue-300 " key={ind}>
                {"✓"} {adv}
              </p>
            ))}
          </div>
          <div className="space-y-3.5-4 text-[10px] ">
            <h3 className="text-[12px] mt-4 mb-1">When Using default Device</h3>
            {data.disadvantages?.map((adv, ind) => (
              <p className="py-1 text-orange-400" key={ind}>
                {"✗"} {adv}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}
