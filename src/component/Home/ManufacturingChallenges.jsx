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
import { FadeUp } from "../../Constants/Oee_constants";

const challenges = [
  {
    icon: IconEyeOff,
    number: "01",
    title: "No Real-Time Visibility",
    description:
      "Production teams cannot see live machine status, output, downtime, rejection, or target achievement across the shopfloor.",
  },
  {
    icon: IconFileSpreadsheet,
    number: "02",
    title: "Manual Reporting",
    description:
      "Paper records and spreadsheets increase reporting delays, dependency on operators, and the possibility of human error.",
  },
  {
    icon: IconClockExclamation,
    number: "03",
    title: "Delayed Decisions",
    description:
      "Production information reaches supervisors and management too late to respond quickly to downtime and process deviations.",
  },
  {
    icon: IconChartBar,
    number: "04",
    title: "Hidden Production Losses",
    description:
      "Minor stoppages, slow cycles, idle time, and recurring inefficiencies remain unidentified and reduce overall productivity.",
  },
  {
    icon: IconRoute,
    number: "05",
    title: "Lack of Traceability",
    description:
      "Materials, operators, process stages, quality results, and finished products cannot be tracked through the complete lifecycle.",
  },
];

const solutions = [
  {
    icon: IconActivityHeartbeat,
    number: "01",
    title: "Real-Time Production Monitoring",
    description:
      "Monitor production output, machine status, downtime, rejection, cycle time, targets, and OEE through live dashboards.",
  },
  {
    icon: IconTopologyStar3,
    number: "02",
    title: "End-to-End Traceability",
    description:
      "Track raw materials, components, machines, operators, quality results, process stages, and finished products from start to dispatch.",
  },
  {
    icon: IconDatabase,
    number: "03",
    title: "Digital Production Reporting",
    description:
      "Replace paper records and spreadsheets with accurate, structured, and automatically generated digital production reports.",
  },
  {
    icon: IconAlertTriangle,
    number: "04",
    title: "Real-Time Alerts",
    description:
      "Notify the right team immediately about machine stoppages, production shortfalls, quality issues, and abnormal conditions.",
  },
  {
    icon: IconTimeline,
    number: "05",
    title: "Loss and Downtime Analysis",
    description:
      "Identify downtime reasons, slow cycles, bottlenecks, recurring losses, and improvement opportunities using production analytics.",
  },
];

const InfoCard = ({ item, type }) => {
  const Icon = item.icon;
  const isSolution = type === "solution";

  return (
    <article
      className={`group relative overflow-hidden rounded-xl border p-5 transition-all duration-300
        ${
          isSolution
            ? "border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-400/40"
            : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
        }
        hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/40`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          isSolution ? "via-cyan-400/60" : "via-slate-500/40"
        } to-transparent`}
      />

      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors
            ${
              isSolution
                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/15"
                : "border-slate-700 bg-slate-800 text-slate-300 group-hover:text-white"
            }`}
        >
          <Icon size={21} stroke={1.7} />
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex items-center justify-between gap-4">
            <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
              {item.title}
            </h3>
          </div>

          <p className="text-sm leading-6 text-slate-400">{item.description}</p>
        </div>
      </div>
    </article>
  );
};

const ManufacturingChallenges = () => {
  return (
    <section
      id="manufacturing-challenges"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-24"
    >
      {/* Background decoration */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Transform Manufacturing Challenges into{" "}
              <span className="">Real-Time Operational Clarity</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              DigiFabrix connects machines, operators, processes, and production
              data to improve visibility, traceability, reporting, and shopfloor
              decision-making.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Challenges */}
          <FadeUp delay={80}>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/30 p-5 md:p-7">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Manufacturing Problems
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {challenges.map((item) => (
                  <InfoCard key={item.title} item={item} type="challenge" />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Solutions */}
          <FadeUp delay={160}>
            <div className="relative h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-slate-900/40 p-5 md:p-7">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative mb-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    DigiFabrix Solutions
                  </h3>
                </div>
              </div>

              <div className="relative space-y-4">
                {solutions.map((item) => (
                  <InfoCard key={item.title} item={item} type="solution" />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingChallenges;
