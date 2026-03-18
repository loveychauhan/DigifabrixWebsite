import { Check } from "lucide-react";
import whatsappUpdate2 from "../../assets/mobileUpdate/whatsappUpdate2.jpg";

const OperatorEngagement = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
          {/* Visual Side */}
          <div className="rounded-2xl overflow-hidden border border-slate-700 h-full">
            <img
              src={whatsappUpdate2}
              alt="Operator mobile dashboard"
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-100">
                Empower operators with real-time insights
              </h2>
              <p className="font-light text-slate-400 leading-relaxed max-w-lg">
                Give your shop floor team clear, actionable data on mobile and
                desktop — faster decisions, better accountability, and smoother
                operations.
              </p>
            </div>

            {/* Grouped Features - Reduced visual noise */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Core Capabilities */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium uppercase tracking-widest text-slate-200">
                  Core Capabilities
                </h3>
                <ul className="space-y-5">
                  {[
                    "Role-based dashboards tailored to responsibilities",
                    "Offline-ready mobile app with auto-sync",
                    "Instant alerts for downtime & critical events",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 text-emerald-600 flex-shrink-0">
                        <Check className="w-5 h-5" strokeWidth={3} />
                      </div>
                      <p className="text-slate-100 leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Tools */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium uppercase tracking-widest text-slate-200">
                  Workflow Tools
                </h3>
                <ul className="space-y-5">
                  {[
                    "Direct access to SOPs and maintenance procedures",
                    "Integrated quality checkpoints",
                    "Shift-level reporting & performance analytics",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 text-emerald-600 flex-shrink-0">
                        <Check className="w-5 h-5" strokeWidth={3} />
                      </div>
                      <p className="text-slate-100 leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatorEngagement;
