import {
  SectionTag,
  StatCard,
  OEE_IMPACT_CARD,
} from "../../Constants/Oee_constants";
import Carousel from "./../Carousel";

const ShopfloorImpact = () => {
  return (
    <section id="impact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center ">
        {/* Section header */}
        <SectionTag>Why It Matters</SectionTag>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
          How OEE Impacts Your Shop Floor
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Even a small improvement in OEE can unlock hidden production capacity
          — without adding new machines or increasing labor.
        </p>

        {/* Product visual */}
        <div className="max-w-4xl mx-auto my-12">
          <Carousel />
        </div>

        {/* Impact list */}
        <div className="max-w-4xl mx-auto my-12 divide-y divide-white/10">
          {OEE_IMPACT_CARD.map((item, i) => (
            <div className="py-6 grid md:grid-cols-3 gap-6 items-start">
              <h3 className="font-semibold text-white">{item.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed md:col-span-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StatCard
            value={15}
            suffix="%"
            label="Average OEE improvement"
            color="text-cyan-500"
          />

          <StatCard
            value={3}
            suffix="×"
            label="Faster root-cause analysis"
            color="text-cyan-500"
          />

          <StatCard
            value={60}
            suffix="%"
            label="Less manual reporting"
            color="text-cyan-500"
          />

          <StatCard
            value={100}
            suffix="%"
            label="Live production data"
            color="text-cyan-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopfloorImpact;
