import { Zap, TrendingUp, Clock, Shield } from "lucide-react";
import { useState } from "react";

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Zap,
      title: "Real-Time Intelligence",
      description: "Traffic Light system instantly identifies bottlenecks and production issues as they happen",
      metric: "< 1 second",
      benefit: "Response time"
    },
    {
      icon: TrendingUp,
      title: "Plug & Play Setup",
      description: "Deploy IoT sensors without complex wiring or extensive technical integration",
      metric: "30 mins",
      benefit: "Avg setup time"
    },
    {
      icon: Clock,
      title: "Smart Reporting",
      description: "Automated PDF/Excel reports delivered via email on your schedule",
      metric: "90% less",
      benefit: "Manual work"
    },
    {
      icon: Shield,
      title: "Cloud Access Anywhere",
      description: "View production data from any tablet, mobile, or desktop device",
      metric: "24/7",
      benefit: "Cloud uptime"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden relative">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            From Data to <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unlike traditional MES systems that just record data, Digifabrix empowers your operators with real-time insights and actionable intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className={`relative bg-slate-800/60 backdrop-blur-xl border transition-all duration-300 p-8 rounded-2xl h-full flex flex-col ${
                  isHovered 
                    ? "border-teal-500/50 bg-slate-800/80 shadow-2xl" 
                    : "border-slate-700/50 hover:border-slate-600"
                }`}>
                  {/* Icon */}
                  <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-br from-teal-500 to-cyan-500 scale-110"
                      : "bg-teal-500/20"
                  }`}>
                    <Icon className={`w-7 h-7 ${isHovered ? "text-white" : "text-teal-400"}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Metric */}
                  <div className={`pt-6 border-t transition-colors duration-300 ${
                    isHovered ? "border-teal-500/30" : "border-slate-700/30"
                  }`}>
                    <div className="text-2xl font-bold text-teal-400 mb-1">
                      {feature.metric}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Example Section */}
        <div className="relative mt-20 md:mt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Key Points */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                See It In Action
              </h3>
              
              {[
                { title: "Instant Issue Detection", desc: "Traffic Light system turns red when production stops" },
                { title: "Shift-Based Analytics", desc: "Gantt charts visualize downtime patterns across shifts" },
                { title: "One-Click Reports", desc: "Export production metrics to PDF or Excel automatically" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-teal-400 to-transparent rounded-full group-hover:h-20 transition-all duration-300"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl">
                <div className="space-y-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="font-mono text-sm text-slate-300">CNC_Machine_01</span>
                    </div>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-semibold uppercase">
                      Production Halted
                    </span>
                  </div>

                  {/* Status Details */}
                  <div className="space-y-3 py-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Issue</span>
                      <span className="text-white font-medium">Material Supply Error</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Duration</span>
                      <span className="text-white font-mono font-bold">14:23</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 transform hover:scale-105">
                    Resolve & Log Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs
