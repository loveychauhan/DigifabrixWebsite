"use client";

import {
  IconChartAreaLine,
  IconBell,
  IconDatabaseFilled,
  IconAiAgents,
  IconEyeFilled,
  IconRoute,
} from "@tabler/icons-react";
import { FadeUp } from "../../Constants/Oee_constants";

const benefits = [
  {
    icon: IconEyeFilled,
    title: "Real-Time Production Visibility",
    desc: "Monitor machine status, production output, downtime, rejection, and target achievement across the shopfloor.",
    className: "xl:col-span-2 xl:row-span-2",
  },
  {
    icon: IconChartAreaLine,
    title: "Reduced Downtime",
    desc: "Identify machine stoppages quickly, capture root causes, and reduce recurring production losses.",
    className: "xl:col-span-2",
  },
  {
    icon: IconAiAgents,
    title: "Higher Productivity",
    desc: "Detect slow cycles, idle time, bottlenecks, and performance gaps across machines and shifts.",
  },
  {
    icon: IconBell,
    title: "Faster Decision-Making",
    desc: "Give supervisors and management accurate live information for faster and more informed operational action.",
  },
  {
    icon: IconDatabaseFilled,
    title: "Automated Digital Reporting",
    desc: "Replace paper records and spreadsheets with accurate, structured, and automatically generated production reports.",
    className: "md:col-span-2",
  },
];

const BenefitCard = ({ icon: Icon, title, desc, className = "" }) => {
  return (
    <article
      className={`flex flex-col rounded-lg border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-slate-700 ${className}`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-slate-800">
        <Icon className="text-blue-500" size={18} stroke={1.7} />
      </div>

      <h3 className="mb-2 text-base font-medium leading-snug text-white md:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
    </article>
  );
};

const DigifabrixHomeIntro = () => {
  return (
    <section
      id="business-benefits"
      aria-labelledby="business-benefits-heading"
      className="bg-slate-950 pb-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2
              id="business-benefits-heading"
              className="text-3xl font-medium leading-tight md:text-4xl"
            >
              Business benefits of shopfloor digitalization
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              DigiFabrix turns real-time manufacturing data into measurable
              improvements in production visibility, downtime control,
              productivity, reporting, traceability, and decision-making.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((benefit, index) => (
            <FadeUp
              key={benefit.title}
              delay={index * 60}
              className={benefit.className}
            >
              <BenefitCard {...benefit} className="h-full" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigifabrixHomeIntro;
