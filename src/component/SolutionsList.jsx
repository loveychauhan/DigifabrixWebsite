import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SolutionsList = () => {
  const solutionLists = [
    { label: "Dojo 2.0", to: "/solutions/dojo" },
    { label: "Environment Monitoring & Controlling", to: "/solutions/EMC" },
    {
      label: "OEE (Realtime Overall Equipment Efficiency)",
      to: "/solutions/OEE",
    },
    { label: "MES (Manufacturing Execution System)", to: "/solutions/MES" },
    {
      label: "End-to-End Traceability for EMS & Automation",
      to: "/solutions/EMS",
    },
    {
      label: "Shopfloor Digitization",
      to: "/solutions/shopfloor-digitization",
    },
  ];

  return (
    <section
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-4
        w-[760px]
        rounded-2xl
        bg-white/95 backdrop-blur-md
        border border-slate-200
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        p-8
        animate-in fade-in zoom-in-95 duration-200
      "
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Our Solutions
        </h3>
        <p className="text-lg font-semibold text-slate-800 mt-1">
          Smart Manufacturing Modules
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
        {solutionLists.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="
                group flex items-center justify-between
                rounded-xl px-4 py-3
                text-sm font-medium text-slate-700
                hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100
                hover:text-blue-600
                transition-all duration-200
              "
            >
              <span className="pr-4">{item.label}</span>

              <ArrowRight
                size={16}
                className="
                  opacity-0 translate-x-[-6px]
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsList;
