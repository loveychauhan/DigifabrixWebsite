import { useState } from "react";
import HowItWorks from "../component/Home/HowItWorks";
import OperatorEngagement from "../component/Home/OperatorEngagement";
import CTASection from "../component/Home/CTASection";
import VideoComponent from "../component/Home/VideoComponent";
import { Helmet } from "react-helmet-async";
import LogoMarquee from "../component/Home/LogoMarquee";
import DigifabrixHomeIntro from "../component/Home/DigifabrixHomeIntro";
import OtherServices from "../component/Home/OtherServices";
import { FadeUp } from "../Constants/Oee_constants";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          OEE Monitoring Software & Shopfloor Digitization | DigiFabrix
        </title>

        <meta
          name="description"
          content="DigiFabrix provides OEE monitoring software, manufacturing execution systems (MES), shopfloor digitization and Industry 4.0 analytics for smart factories."
        />

        <link rel="canonical" href="https://digifabrix.com/" />

        <meta
          property="og:title"
          content="OEE Monitoring Software & Shopfloor Digitization | DigiFabrix"
        />

        <meta
          property="og:description"
          content="Smart factory platform for shopfloor digitization, manufacturing analytics and OEE monitoring."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digifabrix.com/" />
        <meta property="og:site_name" content="DigiFabrix" />
        <meta
          property="og:image"
          content="https://digifabrix.com/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="OEE Monitoring Software | DigiFabrix"
        />
        <meta
          name="twitter:description"
          content="Industry 4.0 platform for shopfloor digitization and manufacturing analytics."
        />
        <meta
          name="twitter:image"
          content="https://digifabrix.com/og-image.png"
        />

        <script type="application/ld+json">
          {`
            {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DigiFabrix Manufacturing Platform",
            "applicationCategory": "Manufacturing Software",
            "operatingSystem": "Web",
            "description": "Industry 4.0 platform for shopfloor digitization and OEE monitoring",
            "url": "https://digifabrix.com"
            }
          `}
        </script>
      </Helmet>

      <main className="bg-slate-900">
        {/* ==================== HERO SECTION ==================== */}
        <section id="home" className="xl:py-32 py-24">
          <FadeUp className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-10 text-center">
              <h1 className="text-5xl lg:text-6xl font-bold ">
                <span className="tracking-tight text-transparent px-2 bg-clip-text bg-gradient-to-r from-slate-50 to-blue-400">
                  Still Managing Production with Spreadsheets?
                </span>
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
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold  bg-blue-700 text-white px-8 py-4   rounded-xl   hover:bg-blue-800 transition-all hover:shadow-xl "
              >
                Start Free Trial
              </a>
              <a
                href="http://digifabrix.com/book-demo"
                target="blank"
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

        <DigifabrixHomeIntro />
        {/* video */}

        <VideoComponent />
        {/* ==================== HOW IT WORKS TIMELINE ==================== */}
        <HowItWorks activeStep={activeStep} setActiveStep={setActiveStep} />

        <OtherServices />
        {/* ==================== OPERATOR ENGAGEMENT SECTION ==================== */}
        <OperatorEngagement />
        {/* ==================== CTA SECTION ==================== */}
        <CTASection />
      </main>
    </>
  );
};

export default Home;
