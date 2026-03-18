import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Manufacturing Intelligence Platform</title>
        <meta
          name="description"
          content="Learn about our mission to digitize manufacturing with real-time insights, monitoring systems, and intelligent automation."
        />
        <meta
          name="keywords"
          content="about manufacturing software, industrial automation, MES, EMS, OEE"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      <div className="bg-slate-950 text-slate-200 px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              About Us
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              We build intelligent manufacturing solutions that bring clarity,
              control, and efficiency to shopfloor operations.
            </p>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-medium text-white mb-3">
                Our Mission
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To digitize and simplify industrial operations by providing
                real-time insights and data-driven decision systems.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-3">
                Our Vision
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To become the operating system for modern manufacturing
                enterprises across the globe.
              </p>
            </div>
          </div>

          {/* What we do */}
          <div>
            <h2 className="text-xl font-medium text-white mb-6">
              What We Build
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 text-sm">
              <div>
                <p className="text-white mb-2">Production Systems</p>
                <p className="text-slate-400">
                  MES, OEE, and shopfloor digitization tools.
                </p>
              </div>

              <div>
                <p className="text-white mb-2">Monitoring Solutions</p>
                <p className="text-slate-400">
                  Environmental and process monitoring systems.
                </p>
              </div>

              <div>
                <p className="text-white mb-2">Workforce Intelligence</p>
                <p className="text-slate-400">
                  Data-driven manpower planning and analytics.
                </p>
              </div>

              <div>
                <p className="text-white mb-2">Traceability</p>
                <p className="text-slate-400">
                  End-to-end product tracking and compliance systems.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-10 border-t border-slate-800">
            <p className="text-slate-400 text-sm">
              Trusted by manufacturing teams to improve efficiency and
              visibility.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
