import {
  IconActivityHeartbeat,
  IconAlertTriangle,
  IconChartBar,
  IconClockExclamation,
  IconDatabase,
  IconEyeOff,
  IconFileSpreadsheet,
  IconRoute,
  IconTimeline,
  IconTopologyStar3,
} from "@tabler/icons-react";
import { FadeUp } from "../Constants/Oee_constants";
import SEO from "../component/SEO";

const challenges = [
  {
    number: "01",
    icon: IconEyeOff,
    title: "No Real-Time Production Visibility",
    description:
      "Many manufacturing teams do not have a live view of what is happening across the shopfloor. Machine status, production output, downtime, rejection, and target achievement may remain scattered across manual records or disconnected systems.",
    impact:
      "Without real-time visibility, supervisors and management have limited awareness of production conditions and cannot respond quickly when performance starts to decline.",
  },
  {
    number: "02",
    icon: IconFileSpreadsheet,
    title: "Manual Production Reporting",
    description:
      "Paper records and spreadsheets can make production reporting dependent on manual data collection and operator input. This increases reporting delays, repetitive work, and the possibility of human error.",
    impact:
      "When production information has to be collected and consolidated manually, accurate information is harder to obtain quickly and consistently.",
  },
  {
    number: "03",
    icon: IconClockExclamation,
    title: "Delayed Production Decisions",
    description:
      "Production information often reaches supervisors and management after a delay. By the time a problem becomes visible, the production loss may already have occurred.",
    impact:
      "Delayed information makes it harder to respond quickly to machine stoppages, production shortfalls, process deviations, and other operational issues.",
  },
  {
    number: "04",
    icon: IconChartBar,
    title: "Hidden Production Losses",
    description:
      "Minor stoppages, slow cycles, idle time, bottlenecks, and recurring inefficiencies can remain unidentified when production data is not continuously analyzed.",
    impact:
      "These small and recurring losses can accumulate over time and reduce overall productivity without being immediately visible.",
  },
  {
    number: "05",
    icon: IconRoute,
    title: "Lack of End-to-End Traceability",
    description:
      "Manufacturing processes involve materials, components, machines, operators, process stages, quality results, and finished products. When these records are disconnected, tracking the complete production lifecycle becomes difficult.",
    impact:
      "Limited traceability makes it harder to understand the complete history of production and connect information across different stages of the process.",
  },
];

const solutions = [
  {
    icon: IconActivityHeartbeat,
    title: "Real-Time Production Monitoring",
    description:
      "DigiFabrix provides live visibility into production output, machine status, downtime, rejection, cycle time, targets, and OEE through production dashboards.",
  },
  {
    icon: IconDatabase,
    title: "Digital Production Reporting",
    description:
      "DigiFabrix replaces paper records and spreadsheets with structured digital production information and automatically generated reports.",
  },
  {
    icon: IconChartBar,
    title: "Production Analytics",
    description:
      "Production data can be used to identify downtime reasons, slow cycles, bottlenecks, recurring losses, and opportunities for improvement.",
  },
  {
    icon: IconAlertTriangle,
    title: "Real-Time Alerts",
    description:
      "DigiFabrix can notify the right teams about machine stoppages, production shortfalls, quality issues, and abnormal conditions so they can respond faster.",
  },
  {
    icon: IconTopologyStar3,
    title: "End-to-End Traceability",
    description:
      "DigiFabrix helps track raw materials, components, machines, operators, quality results, process stages, and finished products from start to dispatch.",
  },
  {
    icon: IconTimeline,
    title: "Loss and Downtime Analysis",
    description:
      "Manufacturing teams can use production analytics to understand recurring downtime, slow cycles, bottlenecks, and other sources of production loss.",
  },
];

const ChallengeCard = ({ challenge }) => {
  const Icon = challenge.icon;

  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-6 md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-800">
          <Icon className="text-slate-300" size={20} stroke={1.7} />
        </div>

        <span className="font-mono text-xs text-slate-600">
          {challenge.number}
        </span>
      </div>

      <h3 className="mb-4 text-xl font-medium leading-snug text-white">
        {challenge.title}
      </h3>

      <p className="text-base leading-7 text-slate-400">
        {challenge.description}
      </p>

      <div className="mt-6 border-t border-slate-800 pt-5">
        <p className="text-sm font-medium text-slate-300">Why it matters</p>

        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {challenge.impact}
        </p>
      </div>
    </article>
  );
};

const SolutionCard = ({ solution }) => {
  const Icon = solution.icon;

  return (
    <article className="rounded-lg border border-slate-800 bg-black p-6 transition duration-300 hover:border-slate-700 md:p-7">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-slate-900">
        <Icon className="text-blue-500" size={18} stroke={1.7} />
      </div>

      <h3 className="mb-3 text-base font-medium leading-snug text-white md:text-lg">
        {solution.title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">
        {solution.description}
      </p>
    </article>
  );
};

const ManufacturingChallenges = () => {
  return (
    <>
      <SEO
        title="Manufacturing Challenges & Digital Solutions | DigiFabrix"
        description="Explore common manufacturing challenges including limited production visibility, manual reporting, delayed decisions, hidden production losses, and traceability issues, and learn how DigiFabrix helps manufacturers address them."
        canonical="https://digifabrix.com/manufacturing-challenges"
      />

      <main className="bg-slate-950 text-white">
        {/* HERO */}
        <section className="bg-slate-900 py-24 md:py-28">
          <FadeUp>
            <div className="mx-auto max-w-6xl px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                  Manufacturing Challenges and How Digitalization Can Help
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                  Manufacturing teams face challenges across production
                  visibility, reporting, decision-making, downtime,
                  productivity, and traceability. DigiFabrix connects production
                  data, machines, operators, and processes to improve real-time
                  operational visibility and control.
                </p>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* INTRO */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="mx-auto max-w-3xl">
                <p className="mb-3 text-sm font-medium text-blue-500">
                  MANUFACTURING OPERATIONS
                </p>

                <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                  Why manufacturing challenges are difficult to manage
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Modern manufacturing operations depend on information from
                  machines, operators, processes, production records, and
                  quality activities. When this information is fragmented or
                  delayed, it becomes difficult for teams to understand what is
                  happening on the shopfloor and where production losses are
                  occurring.
                </p>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Digitalizing production processes gives manufacturers a way to
                  bring this information together, improve visibility, and make
                  production information available when it is needed.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="mb-14 max-w-3xl">
                <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                  Common manufacturing challenges
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  These operational challenges can affect production visibility,
                  productivity, reporting, and the speed at which teams can
                  respond to problems.
                </p>
              </div>
            </FadeUp>

            <div className="grid gap-5 md:grid-cols-2">
              {challenges.map((challenge, index) => (
                <FadeUp key={challenge.title} delay={index * 60}>
                  <ChallengeCard challenge={challenge} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* DIGIFABRIX APPROACH */}
        <section className="bg-slate-900 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                  How DigiFabrix helps manufacturers
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  DigiFabrix brings production monitoring, digital reporting,
                  analytics, alerts, and traceability together to help
                  manufacturers improve shopfloor visibility and
                  decision-making.
                </p>
              </div>
            </FadeUp>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution, index) => (
                <FadeUp key={solution.title} delay={index * 60}>
                  <SolutionCard solution={solution} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* REAL-TIME VISIBILITY */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-medium text-blue-500">
                    01 — PRODUCTION VISIBILITY
                  </p>

                  <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                    Turn production data into real-time operational visibility
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-7 text-slate-400">
                    DigiFabrix enables manufacturers to monitor machine status,
                    production output, downtime, rejection, cycle time, targets,
                    and OEE through live dashboards.
                  </p>

                  <p className="mt-5 text-base leading-7 text-slate-400">
                    Instead of relying only on delayed production records, teams
                    can use live manufacturing information to understand current
                    shopfloor conditions and respond more quickly.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* REPORTING + ANALYTICS */}
        <section className="bg-slate-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-lg border border-slate-800 bg-slate-900 p-7 md:p-8">
                  <IconDatabase
                    className="mb-5 text-blue-500"
                    size={22}
                    stroke={1.7}
                  />

                  <h2 className="text-xl font-medium text-white">
                    Digital production reporting
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    Replace paper records and spreadsheets with structured
                    digital production information and automatically generated
                    reports. This helps reduce manual reporting effort and
                    improves the availability of production information.
                  </p>
                </article>

                <article className="rounded-lg border border-slate-800 bg-slate-900 p-7 md:p-8">
                  <IconChartBar
                    className="mb-5 text-blue-500"
                    size={22}
                    stroke={1.7}
                  />

                  <h2 className="text-xl font-medium text-white">
                    Loss and downtime analysis
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    Production analytics can help identify downtime reasons,
                    slow cycles, bottlenecks, recurring losses, and other
                    performance gaps that may otherwise remain hidden.
                  </p>
                </article>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* TRACEABILITY */}
        <section className="bg-slate-900 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <IconRoute
                  className="mx-auto mb-6 text-blue-500"
                  size={28}
                  stroke={1.7}
                />

                <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                  Connect the complete production lifecycle
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  DigiFabrix helps manufacturers track raw materials,
                  components, machines, operators, quality results, process
                  stages, and finished products from start to dispatch.
                  Connecting these production elements improves traceability
                  across the manufacturing lifecycle.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-6xl px-6">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                  From fragmented production data to operational clarity
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  DigiFabrix connects machines, operators, processes, and
                  production data to help manufacturers improve visibility,
                  traceability, reporting, downtime control, productivity, and
                  shopfloor decision-making.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://app.digifabrix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                >
                  Start Free Trial
                </a>

                <a
                  href="/book-demo"
                  className="rounded-xl border border-slate-700 bg-slate-200 px-8 py-4 font-bold text-slate-900 transition-all hover:border-slate-600"
                >
                  Book Demo
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </>
  );
};

export default ManufacturingChallenges;
