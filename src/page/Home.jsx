import { useState } from "react";
import HowItWorks from "../component/Home/HowItWorks";
import OperatorEngagement from "../component/Home/OperatorEngagement";
import CTASection from "../component/Home/CTASection";
import { Helmet } from "react-helmet-async";
import LogoMarquee from "../component/Home/LogoMarquee";
import DigifabrixHomeIntro from "../component/Home/DigifabrixHomeIntro";
import OtherServices from "../component/Home/OtherServices";
import { FadeUp } from "../Constants/Oee_constants";
import ManufacturingChallenges from "../component/Home/ManufacturingChallenges";
import IndustriesWeServe from "../component/Home/IndustriesWeServe";
import FAQSection from "../component/Home/FaqSection";
import SEO from "../component/SEO";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <SEO
        title="OEE & Manufacturing Digitalization Software | DigiFabrix"
        description="DigiFabrix provides OEE monitoring, production monitoring, shopfloor digitalization and manufacturing intelligence software for manufacturers."
        canonical="https://digifabrix.com/"
      />

      <main className="bg-slate-900">
        {/* ==================== HERO SECTION ==================== */}
        <section id="home" className="xl:py-32 py-24">
          <FadeUp className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-10 text-center">
              <h1 className="text-5xl lg:text-6xl font-bold ">
                Digitalize Your Shopfloor & <br /> Improve Manufacturing
                Efficiency.
              </h1>
              <p className="text-slate-400 text-lg mx-auto max-w-2xl leading-relaxed">
                DigiFabrix is an Industry 4.0 manufacturing platform that
                enables real-time OEE monitoring, shopfloor digitalization, and
                production analytics.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-2">
              <a
                href="https://app.digifabrix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-semibold  bg-blue-700 text-white px-8 py-4   rounded-xl   hover:bg-blue-800 transition-all hover:shadow-xl "
              >
                Start Free Trial
              </a>
              <a
                href="https://digifabrix.com/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-200 text-slate-900 border-1 border-slate-800 px-8 py-4 rounded-xl font-bold hover:border-slate-700 transition-all"
              >
                Book Demo
              </a>
            </div>
            <i className="text-center block leading-relaxed text-slate-400 text-[12px]">
              30-Day Free Trial. Cancel anytime
            </i>
          </FadeUp>
        </section>
        {/* Brands Marquee */}
        <LogoMarquee />

        <ManufacturingChallenges />

        <DigifabrixHomeIntro />

        {/* ==================== HOW IT WORKS TIMELINE ==================== */}
        <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />

        <OtherServices />

        <IndustriesWeServe />
        {/* ==================== OPERATOR ENGAGEMENT SECTION ==================== */}
        <OperatorEngagement />

        <FAQSection />
        {/* ==================== CTA SECTION ==================== */}
        <CTASection />
      </main>
    </>
  );
};

export default Home;
