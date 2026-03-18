"use client";

import {
  IconChartAreaLine,
  IconBell,
  IconDatabaseFilled,
  IconAiAgents,
  IconEyeFilled,
} from "@tabler/icons-react";

const BentoCard = ({
  icon: Icon,
  title,
  desc,
  className = "",
  stat,
  children,
}) => {
  return (
    <div
      className={`p-6 rounded-lg border border-slate-800 bg-slate-900 
      flex flex-col ${className}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-800 mb-4">
        <Icon className="text-blue-600" size={18} />
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-medium text-white mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>

      {/* Stat */}
      {stat && (
        <div className="mt-4 text-sm text-slate-300 font-medium">{stat}</div>
      )}

      {/* Optional content */}
      {children}

      {/* CTA */}
      <div className="mt-auto pt-6">
        <button className="text-xs text-slate-400 hover:text-white transition cursor-pointer">
          Learn more →
        </button>
      </div>
    </div>
  );
};

const BentoSection = () => {
  return (
    <section className="py-20 bg-slate-00 text-white bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Turn shopfloor data into{" "}
            <span className="text-white">operational clarity</span>
          </h2>

          <p className="mt-5 text-slate-400 text-base">
            Real-time visibility across machines, operators, and production
            lines — designed for modern manufacturing teams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5 xl:grid-rows-2">
          {/* BIG */}
          <BentoCard
            icon={IconChartAreaLine}
            title="Real-time downtime tracking"
            desc="Identify machine stoppages instantly and uncover root causes with accurate event data."
            stat="22% reduction in downtime"
            className="xl:col-span-2 xl:row-span-2"
          />

          {/* WIDE */}
          <BentoCard
            icon={IconBell}
            title="Production monitoring"
            desc="Track output against targets and detect deviations across lines in real time."
            className="xl:col-span-2"
          />

          {/* SMALL */}
          <BentoCard
            icon={IconEyeFilled}
            title="Bottleneck detection"
            desc="Surface inefficiencies and optimize throughput with data-backed insights."
          />

          {/* SMALL */}
          <BentoCard
            icon={IconAiAgents}
            title="Shopfloor digitization"
            desc="Replace manual logs with structured, real-time digital workflows."
          />

          {/* WIDE */}
          <BentoCard
            icon={IconDatabaseFilled}
            title="Automated data capture"
            desc="Collect accurate machine data without manual intervention or operator dependency."
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
