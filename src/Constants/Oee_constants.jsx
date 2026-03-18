import { useEffect, useRef, useState } from "react";
import screenshot_1 from "../assets/oee/Screenshot_1.png";
import screenshot_2 from "../assets/oee/Screenshot_2.png";
import screenshot_3 from "../assets/oee/Screenshot_3.png";
import screenshot_4 from "../assets/oee/Screenshot_4.png";
import screenshot_5 from "../assets/oee/Screenshot_5.png";
import screenshot_6 from "../assets/oee/Screenshot_6.png";
import screenshot_7 from "../assets/oee/Screenshot_7.png";
import { steps } from "motion";

//reusable function

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCounter(target, duration = 1600, trigger = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return val;
}

export function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}

export function FadeSide({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(28px)",
      }}
    >
      {children}
    </div>
  );
}

export function SectionTag({ children }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
      {children}
    </p>
  );
}

// ─── Animated Counter Card ────────────────────────────────────────────────────
export function StatCard({ value, suffix = "", label, color }) {
  const [ref, visible] = useInView(0.4);
  const count = useCounter(value, 1600, visible);
  return (
    <div
      ref={ref}
      className="bg-slate-900 border border-white/8 rounded-2xl p-6 text-center hover:border-white/15 transition-colors duration-300"
    >
      <div className={`text-4xl font-bold tabular-nums ${color}`}>
        {count}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2 leading-snug">{label}</div>
    </div>
  );
}

// ─── Hero stat with counter ───────────────────────────────────────────────────
export function HeroStat({ target, suffix, label, color }) {
  const [ref, visible] = useInView(0.1);
  const count = useCounter(target, 1400, visible);
  return (
    <div ref={ref}>
      <div className={`text-3xl font-bold ${color}`}>
        {count}
        {suffix}
      </div>
      <div className="text-slate-500 text-xs mt-0.5">{label}</div>
    </div>
  );
}
// constants
export const SCREENSHOTS = [
  {
    src: screenshot_1,
    alt: "DigiFabrix Analysis Dashboard – live OEE 76%, Avg 46 units/hr, Quality 98%",
    label: "Analysis Dashboard",
    tag: "Live OEE",
  },
  {
    src: screenshot_2,
    alt: "Shift Hourly Analysis – minute-by-minute running, idle, stopped, breakdown timeline",
    label: "Hourly Status Timeline",
    tag: "Shift View",
  },
  {
    src: screenshot_3,
    alt: "Production Summary – CNC/1 working, CNC/2 idle, overall status pie chart",
    label: "Production Summary",
    tag: "Multi-Machine",
  },
  {
    src: screenshot_4,
    alt: "Analysis Dashboard – hourly production output line chart across shift",
    label: "Hourly Output Chart",
    tag: "Trends",
  },
  {
    src: screenshot_5,
    alt: "Production Reports – downtime analysis with group breakdown and percentages",
    label: "Downtime Analysis",
    tag: "Reports",
  },
  {
    src: screenshot_6,
    alt: "Analysis Dashboard Shift B – CNC/1 OEE 71%, 59 units/hr, Quality 98%",
    label: "Shift B Dashboard",
    tag: "Multi-Shift",
  },
  {
    src: screenshot_7,
    alt: "Yesterday downtime report – Technical 28%, Work arrangement 26%, Maintenance 20%",
    label: "Yesterday's Report",
    tag: "Historical",
  },
];

export function PillarRow({
  title,
  formula,
  pct,
  color,
  barColor,
  desc,
  losses,
}) {
  const [ref, visible] = useInView(0.3);

  return (
    <div ref={ref} className="py-10 border-b border-white/10 last:border-none">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left */}
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-widest ${color}`}
          >
            {title}
          </p>

          <p className="text-slate-500 text-xs mt-1">{formula}</p>
        </div>

        {/* Middle */}
        <div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>

          <p className="text-slate-600 text-xs">Losses tracked: {losses}</p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end">
          <p className="text-4xl font-bold text-white mb-3">{pct}%</p>

          <div className="w-full max-w-[220px] h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full ${barColor} transition-all duration-1000 ease-out`}
              style={{ width: visible ? `${pct}%` : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const OEE_FORMULA = [
  {
    label: "Availability",
    sub: "Run Time / Planned Time",
    cls: "border-cyan-400/30 bg-cyan-400/8 text-cyan-300",
  },
  { label: "×", sub: null, cls: "text-slate-600 text-3xl" },
  {
    label: "Performance",
    sub: "Actual Speed / Ideal Speed",
    cls: "border-amber-400/30 bg-amber-400/8 text-amber-300",
  },
  { label: "×", sub: null, cls: "text-slate-600 text-3xl" },
  {
    label: "Quality",
    sub: "Good Parts / Total Parts",
    cls: "border-emerald-400/30 bg-emerald-400/8 text-emerald-300",
  },
  { label: "=", sub: null, cls: "text-slate-600 text-3xl" },
  {
    label: "OEE Score",
    sub: "79% × 98% × 98% = 76%",
    cls: "border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-white font-bold",
  },
];

export const OEE_IMPACT_CARD = [
  {
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "Pinpoint Downtime",
    desc: "The hourly timeline shows exactly when each machine stopped — to the minute, every shift.",
  },
  {
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "Classify Every Loss",
    desc: "Technical, Maintenance, Work Arrangement, Setup — every stop auto-categorised into a group.",
  },
  {
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    title: "Monitor Every Machine",
    desc: "All machines' statuses from one summary screen — running, idle or breakdown, live.",
  },
  {
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    title: "Measure Improvement",
    desc: "Weekly and monthly OEE trends prove whether floor changes are actually moving the needle.",
  },
];

export const How_It_Works = [
  {
    step: 1,
    title: "Connect Machines",
    desc: "DigiFabrix connects to CNC machines, PLC signals and IoT sensors to capture machine state and part counts automatically.",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
  },
  {
    step: 2,
    title: "Data Auto-Collected",
    desc: "Runtime, downtime events, cycle counts and quality data are all recorded without operator input — OEE calculates itself.",
    color: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    step: 3,
    title: "Live Dashboards",
    desc: "OEE, downtime analysis, production trends and quality metrics are instantly visible on dashboards — updating every minute.",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
  },
];

export const FAQS = [
  {
    q: "What exactly is OEE and why should I track it?",
    a: "OEE (Overall Equipment Effectiveness) is a single percentage that tells you how productively your machines are running against their theoretical maximum. It combines Availability (are they running?), Performance (at full speed?) and Quality (making good parts?). Tracking OEE lets you quantify every production loss and prioritise improvement with real data — not intuition.",
  },
  {
    q: "How does DigiFabrix calculate OEE automatically?",
    a: "DigiFabrix connects to your CNC machines and production counters to read machine state (Running, Idle, Stopped, Breakdown) and part counts in real time. Availability comes from actual run time vs planned shift time. Performance from cycle counts vs theoretical max. Quality from good vs rejected parts. All three multiply to give you a live OEE% — no spreadsheets, no manual entry.",
  },
  {
    q: "How does OEE monitoring impact my shop floor?",
    a: "Immediately: supervisors know exactly when and why each machine stopped — the hourly timeline makes it obvious. Medium-term: downtime category reports reveal your biggest loss groups, guiding maintenance priorities. Long-term: OEE trends improve as teams respond faster to data. Most DigiFabrix customers see 10–15% OEE improvement within the first few months.",
  },
  {
    q: "What is a good OEE score for my factory?",
    a: "85% is considered world-class OEE. Most manufacturers start between 65–77%. The goal isn't 100% — it's to identify your specific losses and fix them in order. Moving from 70% to 80% OEE on a single machine recovers significant capacity without any capital investment.",
  },
  {
    q: "Is DigiFabrix suitable for small manufacturers and job shops?",
    a: "Absolutely. DigiFabrix was designed for job shops and small-to-mid-size discrete manufacturers. You can start with one machine and expand as you grow. No dedicated IT team or complex ERP required. Most facilities go live with real OEE data within the first shift.",
  },
  {
    q: "Can I monitor multiple machines and shifts simultaneously?",
    a: "Yes. The Production Summary Dashboard gives a real-time bird's-eye view of every machine on the floor — status, product, output and OEE — across multiple shifts. Drill into any machine's detailed dashboard with one click.",
  },
];

export const BENCHMARKS = [
  {
    range: "< 65%",
    label: "Poor",
    color: "text-red-400",
    glow: "bg-red-400",
    pct: 65,
    desc: "Major losses — urgent action needed",
  },
  {
    range: "65–75%",
    label: "Average",
    color: "text-amber-400",
    glow: "bg-amber-400",
    pct: 75,
    desc: "Acceptable but significant room to grow",
  },
  {
    range: "75–85%",
    label: "Good",
    color: "text-blue-400",
    glow: "bg-blue-400",
    pct: 85,
    desc: "Above industry average — keep pushing",
  },
  {
    range: "85%+",
    label: "World-Class",
    color: "text-emerald-400",
    glow: "bg-emerald-400",
    pct: 100,
    desc: "Top-tier global manufacturing performance",
  },
];

export const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    title: "Real-Time OEE Dashboard",
    desc: "Availability, Performance, and Quality update live every minute — no polling delays, no stale numbers.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "Multi-Shift Support",
    desc: "Configure Shift A, B, C with different timings. OEE numbers auto-segment per shift and machine.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    title: "Hourly Status Timeline",
    desc: "See every minute of Running, Idle, Stopped and Breakdown across each shift — down to the exact second.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M13 21l2-2 4 4m0-4l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    title: "Downtime Classification",
    desc: "Every stop auto-categorised — Technical, Maintenance, Work Arrangement, Setup, Uncommented — with ranked reports.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Quality Tracking",
    desc: "Good vs rejected parts tracked per hour and fed directly into OEE Quality factor with zero manual input.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="14,2 14,8 20,8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="16"
          y1="13"
          x2="8"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="17"
          x2="8"
          y2="17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    title: "Exportable Reports",
    desc: "Downtime, Speed Loss, Quantities, Time Usage — exportable across any date range: today to last 30 days.",
  },
];
