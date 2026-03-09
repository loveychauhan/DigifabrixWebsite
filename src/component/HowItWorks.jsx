import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const howItWorksTimeLine = [
  {
    number: "01",
    title: "Assessment & Planning",
    description: [
      "We evaluate your production lines and define a tailored digitization roadmap.",
    ],
  },
  {
    number: "02",
    title: "Connect & Collect Machine Data",
    description: [
      "Seamless integration with machines, PLCs, and sensors.",
      "Real-time operational data collection.",
      "No manual data entry required.",
    ],
  },
  {
    number: "03",
    title: "Real-Time Monitoring & Dashboards",
    description: [
      "Live production line visibility.",
      "Machine performance charts.",
      "Shift-level trend tracking.",
      "Instant exception alerts.",
    ],
  },
  {
    number: "04",
    title: "OEE Tracking & Performance Analysis",
    description: [
      "Automatic OEE calculation.",
      "Availability, Performance, and Quality breakdown.",
      "Root cause analysis tools.",
    ],
  },
  {
    number: "05",
    title: "Custom Reporting & Export",
    description: [
      "Automated shift and weekly reports.",
      "Export to PDF, Excel, or CSV.",
      "Performance comparison dashboards.",
    ],
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [scrollDistance, setScrollDistance] = useState(0);

  // Calculate horizontal scroll distance properly
  useEffect(() => {
    const calculate = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth * 0.01;
        setScrollDistance(totalWidth + viewportWidth);
      }
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const smoothX = useSpring(x, { stiffness: 90, damping: 20 });

  return (
    <section className="bg-slate-900 text-white px-3">
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: scrollDistance }}
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Heading */}
          <div className="pt-24 pb-12 text-center px-6">
            <h2 className="text-5xl font-semibold">How It Works</h2>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              A structured implementation process designed for seamless
              integration into your manufacturing environment.
            </p>
          </div>

          {/* Cards */}
          <div className="flex-1 flex items-center ">
            <motion.div
              ref={trackRef}
              style={{
                x: smoothX,
              }}
              className="flex gap-24 px-[10vw]"
            >
              {howItWorksTimeLine.map((step) => (
                <div
                  key={step.number}
                  className="flex-shrink-0 w-[65vw] max-w-[900px]"
                >
                  <div className="bg-white text-slate-900 rounded-3xl  px-12 py-6 shadow-lg">
                    <span className="text-sm text-slate-400 tracking-widest">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold">
                      {step.title}
                    </h3>

                    <ul className="mt-8 space-y-4">
                      {step.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-lg text-slate-600 flex gap-4"
                        >
                          <span className="mt-3 w-2 h-2 rounded-full bg-emerald-500"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Carousel */}
      <div className="lg:hidden px-6 pb-16">
        <div className="text-center pt-16 pb-10">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <p className="mt-4 text-slate-300">
            A structured implementation process.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6">
          {howItWorksTimeLine.map((step) => (
            <div
              key={step.number}
              className="snap-center flex-shrink-0 w-[85%] bg-white text-slate-900 rounded-2xl p-8 shadow-md"
            >
              <span className="text-sm text-slate-400 tracking-widest">
                STEP {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

              <ul className="mt-5 space-y-3">
                {step.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
