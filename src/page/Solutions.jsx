import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { solutions } from "../Constants/Solutions";
import LogoMarquee from "../component/Home/LogoMarquee";

const categories = [
  "All",
  "Production",
  "Quality",
  "Workforce",
  "Automation",
  "Other",
];

function CategoryTabs({ active, setActive }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`text-xs px-4 py-2 rounded-lg border transition-colors
            ${
              active === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "border-slate-700 text-slate-200 hover:border-slate-800"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function SolutionRow({ solution, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <div className="border-b border-slate-800 py-16">
      <div
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center ${
          isReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className={`${isReverse ? "md:order-2" : ""}`}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
            {solution.title}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6 max-w-xl">
            {solution.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {solution.features.slice(0, 8).map((f, i) => (
              <span
                key={i}
                className="text-xs text-slate-400 border border-slate-700 px-3 py-1 rounded-lg"
              >
                {f}
              </span>
            ))}
          </div>

          <Link to={solution.link} className="text-sm text-blue-400">
            Explore →
          </Link>
        </div>

        {/* IMAGE */}
        <div className={`${isReverse ? "md:order-1" : ""}`}>
          <div className="w-full h-[260px] md:h-[320px] bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <img
              src={solution.image || "/placeholder.jpg"}
              alt={solution.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions = useMemo(() => {
    if (activeCategory === "All") return solutions;
    if (activeCategory === "Other")
      return solutions.filter((s) => !categories.includes(s.category));
    return solutions.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Helmet>
        <title>
          Manufacturing Solutions | OEE, MES, Industry 4.0 | DigiFabrix
        </title>
        <meta
          name="description"
          content="Explore DigiFabrix manufacturing solutions including OEE monitoring, MES, workforce intelligence, traceability, and Industry 4.0 systems."
        />
        <link rel="canonical" href="https://www.digifabrix.com/solutions" />
      </Helmet>

      {/* HERO */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Manufacturing <span className="text-blue-500">software</span> built
            <br />
            for clarity & control.
          </h1>

          <p className="mx-auto text-slate-400 max-w-2xl mt-6 leading-relaxed">
            A unified platform to monitor production, manage operations, and
            enable data-driven decisions across your factory.
          </p>

          <p className="text-blue-500 text-sm mt-8">
            Find the right solution for your plant
          </p>

          {/* CATEGORY TABS */}
        </div>
      </section>

      <LogoMarquee />
      {/* SOLUTIONS */}
      <CategoryTabs active={activeCategory} setActive={setActiveCategory} />
      <section>
        {filteredSolutions.map((solution, index) => (
          <SolutionRow key={solution.title} solution={solution} index={index} />
        ))}

        {filteredSolutions.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No solutions found.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Need a custom solution?
          </h2>
          <p className="text-slate-400 mb-10">
            We build tailored systems based on your manufacturing workflows.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm">
              Talk to Experts
            </button>
            <button className="px-6 py-3 border border-slate-700 text-slate-300 rounded-md text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
