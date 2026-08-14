import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FadeUp } from "../Constants/Oee_constants";
import {
  commonCapabilities,
  industries,
} from "../Constants/industriesConstants";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import SEO from "../component/SEO";

const Industries = () => {
  return (
    <>
      <SEO
        title="Manufacturing Industry Solutions | OEE & Shopfloor Digitalization"
        description="Discover DigiFabrix solutions for manufacturers across industries, including OEE monitoring, production tracking, shopfloor digitalization and manufacturing analytics."
        canonical="https://digifabrix.com/industries"
      />

      <main className="bg-slate-950 text-white">
        {/* Hero */}
        <section
          id="industries"
          className="xl:py-24 py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-center font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Manufacturing digitalization solutions for diverse industries
            </h1>

            <p className="mt-7 max-w-4xl text-center text-lg leading-8 text-slate-400">
              DigiFabrix helps automotive, FMCG, textile, electronics, and
              battery manufacturers improve production visibility, monitor OEE,
              automate reporting, reduce downtime, and achieve end-to-end
              manufacturing traceability.
            </p>

            <div className="mt-9 flex items-center justify-center flex-col gap-4 sm:flex-row">
              <a
                href="https://digifabrix.com/book-demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Book a Demo
                <IconArrowRight size={18} />
              </a>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Industry navigation */}
        <section
          aria-label="Industry navigation"
          className="border-b border-slate-800 bg-slate-900/30 px-4 pb-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex items-center justify-center max-w-7xl gap-3 overflow-x-auto">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="shrink-0 rounded-md border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                {industry.title}
              </a>
            ))}
          </div>
        </section>

        {/* Industry sections */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <FadeUp key={industry.id} delay={80}>
                  <article
                    id={industry.id}
                    className="scroll-mt-24 border-b border-slate-800 pb-20 last:border-b-0 last:pb-0"
                  >
                    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                      <div>
                        <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
                          {industry.title}
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-400">
                          {industry.summary}
                        </p>

                        <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900/40 p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Typical applications
                          </p>

                          <p className="mt-3 text-sm leading-6 text-slate-300">
                            {industry.useCases}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-5 text-base leading-8 text-slate-400">
                          {industry.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        <div className="mt-8">
                          <h3 className="text-lg font-semibold text-white">
                            Key DigiFabrix capabilities
                          </h3>

                          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                            {industry.capabilities.map((capability) => (
                              <li
                                key={capability}
                                className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/30 px-4 py-3 text-sm text-slate-300"
                              >
                                <IconCheck
                                  size={17}
                                  className="mt-0.5 shrink-0 text-slate-400"
                                />
                                <span>{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </section>

        {/* Common platform capabilities */}
        <section className="border-y border-slate-800 bg-slate-900/30 px-4 py-20 sm:px-6 lg:px-8">
          <FadeUp className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Common Platform Capabilities
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  One platform configured for your manufacturing process
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  DigiFabrix can be adapted to different machines, production
                  workflows, quality checks, reporting formats, traceability
                  requirements, and plant-level operating processes.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {commonCapabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-slate-300"
                  >
                    <IconCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </section>

        {/* FAQ */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <FadeUp className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Frequently Asked Questions
              </p>

              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Manufacturing industry solutions
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-800 border-y border-slate-800">
              <details className="group py-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-white">
                  Can DigiFabrix work with existing machines?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Yes. DigiFabrix can collect data from existing machines using
                  PLC integration, sensors, digital signals, industrial IoT
                  devices, APIs, barcode systems, and manual operator inputs
                  where required.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-white">
                  Is DigiFabrix suitable for different manufacturing processes?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Yes. The platform can be configured for discrete, batch-based,
                  assembly, testing, inspection, packaging, and machine-based
                  manufacturing processes.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-white">
                  Can the platform provide product traceability?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  DigiFabrix can track materials, components, operators,
                  machines, process stages, test results, quality checks, serial
                  numbers, and finished products throughout manufacturing.
                </p>
              </details>

              <details className="group py-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-white">
                  Does DigiFabrix support cloud and on-premise deployment?
                </summary>
                <p className="mt-4 leading-7 text-slate-400">
                  Deployment can be planned according to the customer’s
                  infrastructure, security, connectivity, and data-management
                  requirements.
                </p>
              </details>
            </div>
          </FadeUp>
        </section>
      </main>
    </>
  );
};

export default Industries;
