import {
  AlertCircle,
  BarChart3,
  Check,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const DataVisulization = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Real-Time Intelligence at Your Fingertips
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform raw production data into actionable insights with our
            powerful analytics and visualization tools.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Live OEE Dashboard",
              description:
                "Monitor Overall Equipment Effectiveness across all lines with real-time updates and historical trends.",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Predictive Analytics",
              description:
                "AI-powered forecasting predicts equipment failures before they happen, preventing costly downtime.",
            },
            {
              icon: <AlertCircle className="w-8 h-8" />,
              title: "Instant Alerts",
              description:
                "Immediate notifications for production anomalies, bottlenecks, and quality issues with contextual insights.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Energy Monitoring",
              description:
                "Track energy consumption by production line and optimize power usage patterns to reduce costs.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Team Collaboration",
              description:
                "Share data-driven insights with your team via reports, exports, and integrated communication tools.",
            },
            {
              icon: <Check className="w-8 h-8" />,
              title: "Quality Tracking",
              description:
                "Correlate quality metrics with production variables to eliminate defects and improve consistency.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-blue-100 transition-all hover:-translate-y-1 duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Live Dashboard Demo */}
        <div className="mt-20">
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div>
                <a
                  href="https://app.digifabrix.com"
                  target="blank"
                  className="ml-4 cursor-pointer  text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded font-mono border border-slate-700"
                >
                  app.digifabrix.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column - Metrics */}
              <div className="space-y-4">
                {[
                  {
                    label: "Equipment Health",
                    value: "94%",
                    color: "from-teal-500 to-teal-400",
                  },
                  {
                    label: "Production Rate",
                    value: "98.2/h",
                    color: "from-blue-500 to-blue-400",
                  },
                  {
                    label: "Quality Score",
                    value: "99.7%",
                    color: "from-green-500 to-green-400",
                  },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700/40 border border-slate-600 rounded-lg p-4"
                  >
                    <p className="text-slate-400 text-sm mb-2">
                      {metric.label}
                    </p>
                    <p
                      className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center column - Line chart simulation */}
              <div className="bg-slate-700/20 border border-slate-600 rounded-lg p-6 col-span-1 lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white font-semibold">
                    Production Throughput (Last 7 Days)
                  </h4>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    Live
                  </span>
                </div>
                <div className="flex items-end justify-between gap-1 h-40 mb-4">
                  {[72, 85, 78, 92, 88, 95, 91].map((val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#349dff] to-[#0084ff] rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${(val / 100) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisulization;
