import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CaseStudy from "../component/CaseStudy";
import HowItWorks from "../component/HowItWorks";
import DataVisulization from "../component/DataVisulization";
import OperatorEngagement from "../component/OperatorEngagement";
import CTASection from "../component/CTASection";
import CountUp from "react-countup";
import VideoComponent from "../component/VideoComponent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Industry 4.0 Platform for OEE Monitoring & Shopfloor Digitization |
          DigiFabrix
        </title>
        <meta
          name="description"
          content="DigiFabrix provides Industry 4.0 solutions including real-time OEE monitoring, shopfloor digitization, workforce intelligence, MES and manufacturing analytics."
        />
        <meta
          name="keywords"
          content="OEE monitoring, shopfloor digitization, industry automation, manufacturing analytics, workforce management system"
        />
      </Helmet>
      <div className="bg-white">
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="home"
          className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-8  text-center">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight  ">
                <span className="tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  {" "}
                  Still Managing Production with Spreadsheets?
                </span>
              </h1>
              <h2 className="text-lg lg:text-xl text-slate-600 mx-auto  max-w-2xl leading-relaxed">
                Upgrade to real-time factory intelligence with Digifabrix —
                monitor OEE, track downtime, and optimize performance from one
                unified dashboard.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 ">
              <a href="https://app.digifabrix.com/" target="blank">
                <button className=" font-semibold  group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4   rounded-xl   hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300  ">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="http://digifabrix.com/book-demo" target="blank">
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-blue-300 transition-all">
                  Book Demo
                </button>
              </a>
            </div>
            {/* Trust indicators */}
            <div className="pt-8 border-t border-slate-200 items-center justify-center flex gap-32">
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  <CountUp
                    end={500}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </p>
                <h2 className="text-sm text-slate-600">Factories Digitized</h2>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {" "}
                  <CountUp
                    end={25}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  %
                </p>
                <p className="text-sm text-slate-600">Avg. OEE Improvement</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  <CountUp
                    end={48}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  h
                </p>
                <p className="text-sm text-slate-600">Time to Deploy</p>
              </div>
            </div>
          </div>
        </section>
        {/* video */}

        <VideoComponent />
        {/* ==================== HOW IT WORKS TIMELINE ==================== */}
        <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />
        {/* ==================== CASE STUDY HIGHLIGHT ==================== */}
        <CaseStudy />
        {/* ==================== DATA VISUALIZATION SECTION ==================== */}
        <DataVisulization />
        {/* ==================== OPERATOR ENGAGEMENT SECTION ==================== */}
        <OperatorEngagement />
        {/* ==================== CTA SECTION ==================== */}
        <CTASection />
      </div>
    </>
  );
};

export default Home;
