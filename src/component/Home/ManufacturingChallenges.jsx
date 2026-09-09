import {
  IconActivityHeartbeat,
  IconAlertTriangle,
  IconChartBar,
  IconClockExclamation,
  IconEyeOff,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import { FadeUp } from "../../Constants/Oee_constants";

const challenges = [
  {
    icon: IconEyeOff,
    title: "Limited Production Visibility",
    description:
      "Without live production data, teams struggle to monitor machine status, output, downtime, rejection, and targets.",
  },
  {
    icon: IconFileSpreadsheet,
    title: "Manual Reporting",
    description:
      "Paper records and spreadsheets create reporting delays, manual effort, and greater risk of human error.",
  },
  {
    icon: IconClockExclamation,
    title: "Delayed Decisions",
    description:
      "When production information arrives late, supervisors cannot respond quickly to downtime and process deviations.",
  },
];

const solutions = [
  {
    icon: IconActivityHeartbeat,
    title: "Real-Time Production Monitoring",
    description:
      "Monitor production output, machine status, downtime, rejection, targets, and OEE through live dashboards.",
  },
  {
    icon: IconChartBar,
    title: "Production Analytics",
    description:
      "Identify downtime, slow cycles, bottlenecks, recurring losses, and opportunities for improvement.",
  },
  {
    icon: IconAlertTriangle,
    title: "Real-Time Alerts",
    description:
      "Notify the right teams about machine stoppages, production shortfalls, quality issues, and abnormal conditions.",
  },
];

const InfoCard = ({ item, solution = false }) => {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${
          solution
            ? "bg-slate-800 text-blue-500"
            : "bg-slate-800 text-slate-300"
        }`}
      >
        <Icon size={18} stroke={1.7} />
      </div>

      <h3 className="mb-2 text-base font-medium leading-snug text-white md:text-lg">
        {item.title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">
        {item.description}
      </p>
    </article>
  );
};

const ManufacturingChallenges = () => {
  return (
    <section
      id="manufacturing-challenges"
      className="bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-medium leading-tight md:text-4xl">
              Manufacturing Challenges We Help Solve
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              DigiFabrix helps manufacturers replace fragmented production
              processes with real-time visibility, digital reporting, and
              data-driven decision-making.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Challenges */}
          <FadeUp delay={80}>
            <div>
              <h3 className="mb-5 text-xl font-medium text-white">
                Common Manufacturing Challenges
              </h3>

              <div className="space-y-4">
                {challenges.map((item) => (
                  <InfoCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Solutions */}
          <FadeUp delay={160}>
            <div>
              <h3 className="mb-5 text-xl font-medium text-white">
                How DigiFabrix Helps
              </h3>

              <div className="space-y-4">
                {solutions.map((item) => (
                  <InfoCard key={item.title} item={item} solution />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={220}>
          <div className="mt-10 text-center">
            <a
              href="/manufacturing-challenges"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-400"
            >
              Explore manufacturing challenges
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ManufacturingChallenges;
