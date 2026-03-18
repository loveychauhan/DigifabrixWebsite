import { IconEye, IconTemperature, IconWifi } from "@tabler/icons-react";
import animatedDevice from "../../assets/EMS/animatedDevice.jpg";

const DeviceImage = ({ src }) => (
  <img
    src={src}
    alt="Environmental monitoring device"
    className="w-full h-full object-cover"
  />
);

const MonitoringDevice = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="uppercase text-center text-blue-400 text-sm font-medium tracking-widest mb-12">
        Hardware
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[12/8]">
            <DeviceImage src={animatedDevice} />
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Industrial-grade devices with smart 3.5" displays
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: IconEye,
                  title: "Color-Coded Status",
                  desc: "Instant visual feedback — Green (optimal), Yellow (warning), Red (critical)",
                },
                {
                  icon: IconWifi,
                  title: "Wi-Fi Connected",
                  desc: "Real-time data streaming across your entire factory network",
                },
                {
                  icon: IconTemperature,
                  title: "Custom Thresholds",
                  desc: "Set unique temperature & humidity limits for every location",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringDevice;
