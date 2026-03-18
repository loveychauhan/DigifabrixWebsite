import { Link } from "react-router-dom";
import {
  IconDesk,
  IconSunWind,
  IconChartBarPopular,
  IconAssemblyFilled,
  IconZoomExclamationFilled,
  IconAiAgents,
} from "@tabler/icons-react";

const SolutionsList = () => {
  const solutionLists = [
    {
      label: "DOJO 2.0 Workforce Intelligence",
      to: "/solutions/dojo-workforce-intelligence",
      icon: IconDesk,
    },
    {
      label: "Environment Monitoring System",
      to: "/solutions/environment-monitoring-system",
      icon: IconSunWind,
    },
    {
      label: "OEE Monitoring Software",
      to: "/solutions/oee-monitoring-software",
      icon: IconChartBarPopular,
    },
    {
      label: "Manufacturing Execution System (MES)",
      to: "/solutions/manufacturing-execution-system",
      icon: IconAssemblyFilled,
    },
    {
      label: "Product Traceability System",
      to: "/solutions/product-traceability",
      icon: IconZoomExclamationFilled,
    },
    {
      label: "Shopfloor Digitization Platform",
      to: "/solutions/shopfloor-digitization",
      icon: IconAiAgents,
    },
  ];
  return (
    <section
      aria-label="Manufacturing software solutions"
      className="
    absolute top-full left-1/2 -translate-x-1/2 mt-3
    w-[88vw] max-w-2xl
    bg-slate-900
    border border-slate-700
    shadow-lg
    rounded-[8px]
    p-4
  "
    >
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-[11px] font-medium text-slate-100 uppercase tracking-wider">
          Solutions
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        {solutionLists.map((item) => {
          return (
            <Link
              key={item.label}
              to={item.to}
              className="
            group flex items-start gap-2
            py-2 px-2
            transition-colors duration-150
            rounded-lg
            hover:bg-slate-950
          "
            >
              <div className="text-slate-100 hover:text-slate-700 mt-[2px] transition">
                {(() => {
                  const Icon = item.icon;
                  return <Icon className="w-4 h-4 text-blue-500" />;
                })()}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-100 leading-tight">
                  {item.label}
                </p>

                {item.desc && (
                  <p className="text-[12px] text-slate-100 mt-0.5 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsList;
