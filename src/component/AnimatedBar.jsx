import { useEffect, useState } from "react";

export default function AnimatedBar({
  top,
  running,
  idle,
  stopped,
  breakdown,
}) {
  const total = 240;
  const percent = (v) => (v / total) * 100;

  const [progress, setProgress] = useState({
    running: 0,
    idle: 0,
    stopped: 0,
    breakdown: 0,
  });

  useEffect(() => {
    let delay = 0;

    const animate = (key, value) => {
      setTimeout(() => {
        setProgress((prev) => ({
          ...prev,
          [key]: percent(value),
        }));
      }, delay);
      delay += 300;
    };

    animate("running", running);
    animate("idle", idle);
    animate("stopped", stopped);
    animate("breakdown", breakdown);
  }, []);

  return (
    <svg
      style={{
        position: "absolute",
        top: top,
        left: "8.1%", // adjust after checking alignment
        width: "100%",
        height: "26px",
      }}
    >
      <rect width="100%" height="26" fill="transparent" />

      <rect
        x="0"
        height="26"
        fill="#2FA84F"
        width={`${progress.running}%`}
        style={{ transition: "width 0.7s ease" }}
      />

      <rect
        x={`${progress.running}%`}
        height="26"
        fill="#FFC107"
        width={`${progress.idle}%`}
        style={{ transition: "width 0.7s ease" }}
      />

      <rect
        x={`${progress.running + progress.idle}%`}
        height="26"
        fill="#E63946"
        width={`${progress.stopped}%`}
        style={{ transition: "width 0.7s ease" }}
      />

      <rect
        x={`${progress.running + progress.idle + progress.stopped}%`}
        height="26"
        fill="#C1121F"
        width={`${progress.breakdown}%`}
        style={{
          transition: "width 0.7s ease",
          animation: breakdown > 0 ? "pulse 1s infinite alternate" : "none",
        }}
      />
    </svg>
  );
}
