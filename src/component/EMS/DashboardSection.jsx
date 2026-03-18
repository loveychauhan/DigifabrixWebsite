"use client";

import { useState } from "react";
import { IconChartBar, IconTable } from "@tabler/icons-react";
import dashboard1 from "../../assets/EMS/dashboard1.png";
import dashboard2 from "../../assets/EMS/dashboard2.png";

const views = {
  table: {
    title: "Table View",
    desc: "Complete overview of all machines with live readings, status, and structured data for quick decision making.",
    icon: IconTable,
    image: dashboard1,
  },
  graph: {
    title: "Graph View",
    desc: "Visualize production trends, anomalies, and performance metrics with real-time charts and alerts.",
    icon: IconChartBar,
    image: dashboard2,
  },
};

const DashboardSection = () => {
  const [active, setActive] = useState("table");
  const data = views[active];
  const Icon = data.icon;

  return (
    <section id="features" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl text-center mx-auto mb-8">
          <p className="uppercase text-blue-400 text-sm tracking-widest mb-3">
            Control Center
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Live dashboard with real-time visibility
          </h2>
        </div>

        {/* Toggle */}
        <div className="mb-10 flex">
          <div className="flex border border-slate-700 rounded-lg p-1 bg-slate-900">
            {Object.keys(views).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  px-5 py-2 text-sm rounded-md transition
                  ${
                    active === key
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                {views[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* IMAGE */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* TEXT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center bg-slate-900">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold">{data.title}</h3>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              {data.desc}
            </p>

            {/* subtle bullets */}
            <ul className="mt-8 space-y-3 text-sm text-slate-400">
              {active === "table" ? (
                <>
                  <li className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full" />
                    Structured machine-wise data
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full" />
                    Easy filtering and sorting
                  </li>
                </>
              ) : (
                <>
                  <li className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full" />
                    Real-time performance trends
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full" />
                    Instant anomaly detection
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
