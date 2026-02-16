import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Metric, OEEBar } from "./CaseStudySupport";

const CaseStudy = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-[#f08209]">
            Case Study
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Data-Driven Transformation in Automotive Manufacturing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white">
              18% OEE Increase in 12 Weeks
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed">
              A mid-sized automotive components manufacturer integrated
              Digifabrix across 42 CNC machines. Within three months, real-time
              visibility and automated downtime analysis transformed operational
              performance.
            </p>

            {/* Context */}
            <div className="grid grid-cols-2 gap-6 pt-6 text-sm text-slate-400">
              <div>
                Machines Connected: <span className="text-white">42</span>
              </div>
              <div>
                Deployment Time: <span className="text-white">36 Hours</span>
              </div>
              <div>
                Operators Trained: <span className="text-white">120</span>
              </div>
              <div>
                Shifts Monitored: <span className="text-white">3</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Metric number="+18%" label="OEE Improvement" />
              <Metric number="-27%" label="Unplanned Downtime" />
              <Metric number="+22%" label="Productivity Gain" />
              <Metric number="4 Months" label="ROI Achieved" />
            </div>

            <button className="group inline-flex items-center gap-2 border border-[#f08209] text-[#f08209] px-7 py-3 rounded-lg hover:bg-[#f08209] hover:text-white transition-all">
              View Full Case Study
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">
            <h4 className="text-white font-semibold mb-8">OEE Progression</h4>

            <OEEBar label="Baseline" value={62} />
            <OEEBar label="Month 1" value={69} />
            <OEEBar label="Month 2" value={74} />
            <OEEBar label="Month 3" value={80} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudy;
