import { Helmet } from "react-helmet-async";
import OEE_FAQ from "../component/OEE/OEE_FAQ.jsx";
import { FadeUp } from "../Constants/Oee_constants.jsx";
import What_Is_OEE from "../component/OEE/What_Is_OEE.jsx";
import OEE_CTA from "../component/OEE/OEE_CTA.jsx";
import OEE_HowItWorks from "../component/OEE/OEE_HowItWorks.jsx";
import Shoopfloor_impact from "../component/OEE/Shoopfloor_impact.jsx";
import SEO from "../component/SEO.jsx";

export default function OEEMonitoring() {
  return (
    <>
      <SEO
        title="OEE Monitoring Software for Manufacturing | DigiFabrix"
        description="Monitor OEE, machine performance, downtime and production in real time with DigiFabrix OEE monitoring software."
        canonical="https://digifabrix.com/solutions/oee-monitoring-software"
      />

      <div className="bg-slate-950 text-white antialiased overflow-x-hidden">
        {/* ══════════════════════════════ HERO ════════════════════════════════ */}
        <section className=" py-24 overflow-hidden">
          <div className=" 2xl:max-w-5xl max-w-4xl  mx-auto px-6 w-full text-center">
            <div>
              <FadeUp delay={80}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Real-Time{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    OEE Monitoring
                  </span>{" "}
                  for Smart Manufacturing
                </h1>
              </FadeUp>

              <p className="text-slate-100 max-w-3xl mx-auto text-lg text-center leading-relaxed mb-8">
                DigiFabrix gives manufacturers live visibility into machine
                performance, production, quality and downtime. Track OEE across
                machines, shifts and factories from one dashboard —{" "}
                <i>no spreadsheets, no manual entry.</i>
              </p>

              <FadeUp delay={240}>
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                  <a
                    href="https://app.digifabrix.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg bg-cyan-400 text-slate-950 font-medium text-sm tracking-wide hover:brightness-110 transition"
                  >
                    Start Free Trial
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════════════════════════ WHAT IS OEE ════════════════════════════ */}
        <What_Is_OEE />

        {/* ═══════════════════════════ SHOPFLOOR IMPACT ═══════════════════════ */}
        <Shoopfloor_impact />

        {/* ═══════════════════════════ HOW IT WORKS ═══════════════════════════ */}
        <OEE_HowItWorks />

        {/* ═══════════════════════════════ FAQ ════════════════════════════════ */}

        <OEE_FAQ />

        {/* ════════════════════════════════ CTA ════════════════════════════════ */}
        <OEE_CTA />
      </div>
    </>
  );
}
