"use client";

import { IconArrowRight, IconCircleCheck, IconBolt } from "@tabler/icons-react";

import HTM_device from "../assets/EMS/HTM_device.png";

import BusinessImpact from "../component/EMS/BusinessImpact";
import DashboardSection from "../component/EMS/DashboardSection";
import SettingAndCustomization from "../component/EMS/SettingAndCustomization";
import MonitoringDevice from "../component/EMS/MonitoringDevice";

const HeroImage = ({ src }) => (
  <img
    src={src}
    alt="Manufacturing environment"
    className="w-full h-full object-cover"
  />
);

export default function EnvironmentMonitoringSystem() {
  return (
    <main className="">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative h-screen w-full px-6 py-24 bg-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <HeroImage src={HTM_device} className="w-full h-full " />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-6 mt-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none">
              Environment Monitoring
              <span className="block text-blue-400">System (EMS)</span>
            </h1>

            <p className="text-lg text-center text-slate-100 max-w-4xl mx-auto leading-relaxed">
              Real-time temperature and humidity monitoring for manufacturing
              plants. Protect product quality and ensure compliance with
              intelligent environmental oversight.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col md:flex-row gap-3 max-w-4xl py-8 mx-auto text-sm items-center justify-evenly text-slate-100">
              <div className="flex items-center gap-3">
                <IconCircleCheck className="w-5 h-5 text-blue-400" />
                5-second real-time refresh
              </div>
              <div className="flex items-center gap-3">
                <IconCircleCheck className="w-5 h-5 text-blue-400" />
                Multi-location factory monitoring
              </div>
              <div className="flex items-center gap-3">
                <IconCircleCheck className="w-5 h-5 text-blue-400" />
                Instant email & in-app alerts
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 mt-16 left-[20%] flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex items-center gap-3 text-slate-300">
              <IconBolt className="w-6 h-6 text-blue-600" />
              <span className="font-medium">
                Smart environmental control for production excellence
              </span>
            </div>

            <a
              href="#features"
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Explore Features
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ====================== MONITORING DEVICES ====================== */}
      <MonitoringDevice />
      {/* ====================== LIVE DASHBOARD ====================== */}
      <DashboardSection />
      <SettingAndCustomization />
      {/* why it matters */}
      <BusinessImpact />

      {/* ====================== FINAL CTA ====================== */}
      <section className="py-24 border-t border-slate-800 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to take control of your factory environment?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join leading manufacturers using DigiFabrix EMS to protect quality,
            ensure compliance, and reduce costly environmental failures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.digifabrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold text-lg flex items-center gap-3 transition-all"
            >
              Start Free Trial
              <IconArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            No credit card required • Full access for 30 days
          </p>
        </div>
      </section>
    </main>
  );
}
