import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is shopfloor digitalization?",
    answer:
      "Shopfloor digitalization is the use of connected machines, industrial IoT devices, digital workflows, and manufacturing software to replace manual production tracking. It provides real-time visibility into production output, downtime, quality, machine performance, operator activities, and manufacturing processes.",
  },
  {
    question: "What is OEE monitoring software?",
    answer:
      "OEE monitoring software measures Overall Equipment Effectiveness using Availability, Performance, and Quality. DigiFabrix automatically collects production and machine data to calculate OEE, identify downtime, detect slow cycles, monitor rejection, and highlight hidden production losses.",
  },

  {
    question: "Can DigiFabrix replace paper and Excel production reports?",
    answer:
      "Yes. DigiFabrix replaces manual paper forms and spreadsheet-based production reporting with structured digital records. It can generate machine-wise, shift-wise, product-wise, and production-line reports using automatically collected shopfloor data.",
  },
  {
    question: "Does DigiFabrix provide real-time production monitoring?",
    answer:
      "Yes. DigiFabrix provides live dashboards for production output, machine status, downtime, rejection, cycle time, production targets, shift performance, and OEE. Supervisors and management can use this information to respond faster to production deviations.",
  },

  {
    question: "Can DigiFabrix monitor machine downtime and production losses?",
    answer:
      "Yes. DigiFabrix records machine stoppages, downtime duration, idle time, slow cycles, production shortfalls, and downtime reasons. This helps manufacturing teams identify recurring losses, bottlenecks, and opportunities to improve machine utilization and productivity.",
  },

  {
    question: "How long does DigiFabrix implementation take?",
    answer:
      "Implementation time depends on the number of machines, production lines, integrations, reports, and traceability requirements. A basic production monitoring or OEE implementation may be completed in phases, while MES and end-to-end traceability projects require a detailed process study and implementation plan.",
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  const toggleFAQ = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <article className="border-b border-slate-800 last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggleFAQ}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="text-base font-medium leading-7 text-slate-100 md:text-lg">
            {faq.question}
          </span>

          <span
            aria-hidden="true"
            className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-700 text-slate-400"
          >
            <Plus
              size={16}
              strokeWidth={1.8}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-6 pr-10 md:pr-16"
      >
        <p className="max-w-4xl text-sm leading-7 text-slate-400 md:text-base">
          {faq.answer}
        </p>
      </div>
    </article>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="frequently-asked-questions"
      aria-labelledby="faq-heading"
      className="border-t border-slate-800 bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2
            id="faq-heading"
            className="text-3xl text-center font-semibold leading-tight text-white md:text-4xl"
          >
            Frequently Asked Question
          </h2>
          {/* FAQ list */}
          <div className="border-y mt-8 max-w-3xl mx-auto border-slate-800">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { faqs };
export default FAQSection;
