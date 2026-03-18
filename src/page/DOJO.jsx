import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardCarousel from "../component/DOJO/DashboardCarousel";

// ==================== METRIC CARD ====================
const MetricCard = ({ value, label, sublabel, trend }) => {
  return (
    <div className="border border-slate-800 p-6 rounded-lg bg-slate-900/40">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-2xl font-semibold text-orange-500">{trend}</span>
        <span className="text-2xl font-semibold text-slate-100">{value}</span>
      </div>
      <p className="text-slate-300 text-sm">{label}</p>
      {sublabel && <p className="text-xs text-slate-500 mt-1">{sublabel}</p>}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const DojoPage = () => {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>DOJO 2.0 | Manpower Intelligence for Manufacturing</title>
        <meta
          name="description"
          content="Real-time manpower intelligence platform for manufacturing. Improve workforce planning, visibility, and productivity with DOJO 2.0."
        />
        <meta
          name="keywords"
          content="manufacturing software, workforce management, manpower planning, industrial analytics"
        />
        <link rel="canonical" href="https://yourdomain.com/dojo" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto pt-20 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Manpower Intelligence
            <span className="block text-slate-400">
              for Modern Manufacturing
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Real-time visibility across attendance, skill levels, attrition, and
            shift-level manpower allocation — enabling proactive workforce
            decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-md text-sm font-medium">
              Request Live Demo
            </button>
            <button className="px-6 py-3 border border-slate-700 rounded-md text-sm">
              Download Product Brief
            </button>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-2xl font-semibold text-orange-500">50+</div>
              <div className="text-xs text-slate-500">Manufacturing Units</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-orange-500">10K+</div>
              <div className="text-xs text-slate-500">Operators Tracked</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-orange-500">40%</div>
              <div className="text-xs text-slate-500">Faster Planning</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-orange-500">
                95.8%
              </div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto justify-items-center grid lg:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">The Problem</h2>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Manual manpower planning using spreadsheets</li>
              <li>Delayed visibility into staffing gaps</li>
              <li>No real-time shopfloor insights</li>
              <li>Skill gaps identified too late</li>
              <li>Disconnected training and certification data</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              The DOJO Solution
            </h2>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Unified workforce intelligence platform</li>
              <li>Real-time alerts and shift-level visibility</li>
              <li>Centralized workforce data system</li>
              <li>Proactive skill gap identification</li>
              <li>Integrated training and certification tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= DASHBOARD ================= */}
      <DashboardCarousel />

      {/* ================= METRICS ================= */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl text-center font-semibold text-white mb-10">
            Business Impact
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value="40%"
              label="Reduction in Manual Reporting"
              trend="↓"
            />
            <MetricCard
              value="25%"
              label="Faster Workforce Planning"
              trend="↑"
            />
            <MetricCard
              value="18%"
              label="Improved Productivity Visibility"
              trend="↑"
            />
            <MetricCard value="30%" label="Faster Response to Gaps" trend="↓" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Transform Your Workforce Management
          </h2>

          <p className="text-slate-400 text-sm">
            Gain real-time visibility and improve workforce efficiency across
            your manufacturing operations.
          </p>

          <button className="px-6 py-3 bg-orange-600 text-white rounded-md text-sm font-medium">
            Request Live Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default DojoPage;
