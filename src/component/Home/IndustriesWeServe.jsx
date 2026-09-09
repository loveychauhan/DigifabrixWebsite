import {
  IconBattery2,
  IconCar,
  IconCpu,
  IconPackage,
  IconShirt,
  IconArrowRight,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { FadeUp } from "../../Constants/Oee_constants";

const industries = [
  {
    icon: IconCar,
    name: "Automotive Manufacturing",
    description:
      "Improve production visibility across machining, assembly, inspection, and testing operations with real-time OEE, downtime, cycle-time, rejection, and component traceability.",
    capabilities: [
      "Cycle-time monitoring",
      "Part traceability",
      "Rejection and rework tracking",
    ],
  },
  {
    icon: IconPackage,
    name: "FMCG Manufacturing",
    description:
      "Monitor high-volume production lines, changeovers, downtime, batch performance, quality losses, and target achievement across shifts and manufacturing plants.",
    capabilities: [
      "Production line monitoring",
      "Batch-level reporting",
      "Quality and rejection tracking",
    ],
  },
  {
    icon: IconShirt,
    name: "Textile Manufacturing",
    description:
      "Track machine utilization, production quantity, stoppages, shift performance, operator activity, and quality issues across textile production operations.",
    capabilities: [
      "Shift production tracking",
      "Downtime monitoring",
      "Operator performance",
    ],
  },
  {
    icon: IconCpu,
    name: "Electronics Manufacturing",
    description:
      "Enable real-time production monitoring, serial-number traceability, process validation, testing integration, and quality-data capture across electronics assembly.",
    capabilities: [
      "Serial-number traceability",
      "Process-stage validation",
      "Testing data integration",
    ],
  },
  {
    icon: IconBattery2,
    name: "Battery Manufacturing",
    description:
      "Build complete battery product genealogy by tracking cells, components, BMS, assembly stages, test results, quality checks, packing, and finished battery serial numbers.",
    capabilities: [
      "Cell and BMS traceability",
      "Assembly-stage tracking",
      "Testing data capture",
    ],
  },
];

const IndustryCard = ({ industry, index }) => {
  const Icon = industry.icon;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300  hover:border-slate-700 hover:bg-slate-900/90">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-whitetransition group-hover:border-slate-600 group-hover:text-white">
          <Icon size={22} stroke={1.6} />
        </div>
        <h3 className="text-xl font-semibold leading-snug text-white">
          {industry.name}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {industry.description}
      </p>

      <div className="mt-6 border-t border-slate-800 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Key applications
        </p>

        <ul className="space-y-2.5">
          {industry.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
              />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const IndustriesWeServe = () => {
  return (
    <section
      id="industries-we-serve"
      aria-labelledby="industries-heading"
      className="bg-black py-20 text-white "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center  justify-center gap-2 border-b border-slate-800 pb-10  ">
          <h2
            id="industries-heading"
            className="text-3xl max-w-3xl font-semibold leading-tight text-white md:text-4xl lg:text-3xl"
          >
            Manufacturing solutions designed for diverse industries
          </h2>

          <p className=" max-w-3xl text-center leading-7 text-slate-400 ">
            DigiFabrix helps automotive, FMCG, textile, electronics, and battery
            manufacturers digitalize shopfloor operations with real-time
            production monitoring, OEE analysis, automated reporting, and
            end-to-end manufacturing traceability.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {industries.map((industry, index) => (
            <FadeUp
              key={industry.name}
              delay={index * 70}
              className={
                index < 2
                  ? "xl:col-span-3"
                  : index === 2
                    ? "xl:col-span-2"
                    : index === 3
                      ? "xl:col-span-2"
                      : "xl:col-span-2"
              }
            >
              <IndustryCard industry={industry} index={index} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={320}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-6 md:flex-row md:items-center md:px-8">
            <div>
              <h3 className="text-lg font-semibold text-white">
                One manufacturing platform, configured for your process
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                DigiFabrix can be adapted to different machines, workflows,
                quality checks, production stages, reporting formats, and
                traceability requirements.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
            >
              Explore industries
              <IconArrowRight size={17} stroke={1.8} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
