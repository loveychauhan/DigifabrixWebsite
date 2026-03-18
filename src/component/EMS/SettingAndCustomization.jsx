import {
  IconAdjustments,
  IconMapPin,
  IconTemperature,
  IconDroplet,
  IconMail,
  IconTool,
} from "@tabler/icons-react";

import settingImg from "../../assets/EMS/settingImg.png";
import deviceManagementImg from "../../assets/EMS/deviceManagementImg.png";

const SettingAndCustomization = () => {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ROW 1 — DEVICE MANAGEMENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
              Device Management
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Centralized Device Configuration
            </h2>

            <p className="text-slate-400 text-sm mb-8 max-w-lg leading-relaxed">
              Solution is designed for user-friendly configuration and seamless
              device setup, enabling precise environmental control across your
              facility.
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <IconMapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Device name and location management
                </span>
              </div>

              <div className="flex gap-3">
                <IconTemperature className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Temperature min and max threshold settings
                </span>
              </div>

              <div className="flex gap-3">
                <IconDroplet className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Humidity range configuration
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
            <img
              src={deviceManagementImg}
              alt="Device Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ROW 2 — SETTINGS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900 order-1 lg:order-none">
            <img
              src={settingImg}
              alt="Settings Configuration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <div className="text-cyan-400 text-xs tracking-widest uppercase mb-4">
              System Settings
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Advanced Alerts & Calibration
            </h2>

            <p className="text-slate-400 text-sm mb-8 max-w-lg leading-relaxed">
              Configure alerts, calibrate devices, and manage notifications to
              ensure reliable monitoring and quick response to environmental
              changes.
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <IconTool className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Online device calibration support
                </span>
              </div>

              <div className="flex gap-3">
                <IconMail className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Email alert configuration with multiple recipients
                </span>
              </div>

              <div className="flex gap-3">
                <IconAdjustments className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-sm text-slate-300">
                  Flexible system-wide customization options
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingAndCustomization;
