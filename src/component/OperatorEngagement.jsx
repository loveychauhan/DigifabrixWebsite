import { Check } from "lucide-react";
import whatsappUpdate2 from "../assets/mobileUpdate/whatsappUpdate2.jpg";

const OperatorEngagement = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full">
            <div
              className="aspect-[9/16] sm:aspect-[4/5] lg:aspect-[3/4] 
                  rounded-2xl overflow-hidden 
                  border border-slate-200 shadow-sm"
            >
              <img
                src={whatsappUpdate2}
                alt="Operator dashboard mobile view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                Empower Operators with Real-Time Production Insights
              </h2>

              <p className="mt-5 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                Provide your workforce with clear, actionable data across mobile
                and desktop. Improve response time, enhance accountability, and
                streamline decision-making directly on the shop floor.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Role-based dashboards tailored to operator responsibilities",
                "Offline-ready mobile application with automatic synchronization",
                "Instant alerts for downtime and critical production events",
                "Direct access to SOPs and maintenance procedures",
                "Integrated quality checkpoints and scheduling visibility",
                "Shift-level reporting with performance analytics",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 text-emerald-600">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatorEngagement;
