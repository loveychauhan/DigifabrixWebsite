import { motion } from "motion/react";

export const Metric = ({ number, label }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
    <p className="text-3xl font-semibold text-[#f08209]">{number}</p>
    <p className="text-sm text-slate-400 mt-2">{label}</p>
  </div>
);

export const OEEBar = ({ label, value }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-slate-400 text-sm">{label}</span>
      <span className="text-[#f08209] font-semibold">{value}%</span>
    </div>
    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-full bg-[#f08209]"
      />
    </div>
  </div>
);
