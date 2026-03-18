import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import dash1 from "../../assets/Dojo/dashboardMain.jpg";
import dash2 from "../../assets/Dojo/dashboardExam.png";
import dash3 from "../../assets/Dojo/dashboardSkills.png";

const dashboards = [
  {
    image: dash1,
    title: "Management Overview Dashboard",
    description:
      "Shift-level manpower allocation and attendance visibility for leadership.",
  },

  {
    image: dash2,
    title: "Exam & Certification Tracking",
    description:
      "Track operator assessment results and certification readiness in real time.",
  },

  {
    image: dash3,
    title: "Skill Matrix & Availability",
    description:
      "Live view of L1–L4 skill distribution and buffer manpower readiness.",
  },
];

const DashboardCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % dashboards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? dashboards.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white">
            Dashboard Walkthrough
          </h2>
          <p className="mt-4 text-slate-400">
            Explore the intelligence layers inside DOJO 2.0
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-slate-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={dashboards[index].image}
                alt={dashboards[index].title}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[500px] object-contain bg-slate-900"
              />
            </AnimatePresence>
          </div>

          {/* Title & Description */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              {dashboards[index].title}
            </h3>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              {dashboards[index].description}
            </p>
          </div>

          {/* Controls */}
          <div className="mt-10 mx-2 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="px-4 py-2 border border-slate-700 rounded-md hover:bg-slate-900 transition"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {dashboards.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-8 rounded-full transition-all ${
                    i === index ? "bg-orange-500" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 border border-slate-700 rounded-md hover:bg-slate-900 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardCarousel;
