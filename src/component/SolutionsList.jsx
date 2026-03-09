import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SolutionsList = () => {
  const solutionLists = [
    {
      label: "DOJO 2.0 Workforce Intelligence",
      to: "/solutions/dojo-workforce-intelligence",
    },
    {
      label: "Environment Monitoring System",
      to: "/solutions/environment-monitoring",
    },
    {
      label: "OEE Monitoring Software",
      to: "/solutions/oee-monitoring-software",
    },
    {
      label: "Manufacturing Execution System (MES)",
      to: "/solutions/manufacturing-execution-system",
    },
    {
      label: "Product Traceability System",
      to: "/solutions/product-traceability",
    },
    {
      label: "Shopfloor Digitization Platform",
      to: "/solutions/shopfloor-digitization",
    },
  ];
  return (
    <section
      aria-label="Manufacturing software solutions"
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-4
        max-w-2xl
        2xl:max-w-3xl 
        w-[90vw]
        rounded-2xl
        bg-white/95 backdrop-blur-md
        border border-slate-200
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        p-4 2xl:p-8
        animate-in fade-in zoom-in-95 duration-200
      "
    >
      {/* Header */}
      <div className="mb-2 2xl:mb-6">
        <h3 className="text-[12px] 2xl:text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Digital Manufacturing Solutions
        </h3>
      </div>

      <ul className="grid grid-cols-2 ">
        {solutionLists.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              title={item.label}
              className="
                group flex items-center justify-between
                rounded-xl p-3 2xl:px-4 2xl:py-3
                text-[12px] 2xl:text-sm font-medium text-slate-700
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
