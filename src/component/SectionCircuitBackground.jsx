"use client";

import { useState, useRef } from "react";

export default function SectionCircuitBackground({ isHovered = false }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    setShowGlow(true);

    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({
        x,
        y,
      });
    });
  };

  const handleMouseLeave = () => {
    setShowGlow(false);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ pointerEvents: "auto" }}
    >
      <style>{`
        @keyframes fadeInGlow {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .glow-reveal {
          animation: fadeInGlow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* Base Static Grid Layer - Subtle */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="grid-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal Grid Lines - Base */}
        {Array.from({ length: 25 }).map((_, i) => {
          const lineY = (i / 24) * 100;
          return (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${lineY}%`}
              x2="100%"
              y2={`${lineY}%`}
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="0.5"
              style={{
                transition: "stroke 0.3s ease-out",
              }}
            />
          );
        })}

        {/* Vertical Grid Lines - Base */}
        {Array.from({ length: 25 }).map((_, i) => {
          const lineX = (i / 24) * 100;
          return (
            <line
              key={`v-${i}`}
              x1={`${lineX}%`}
              y1="0"
              x2={`${lineX}%`}
              y2="100%"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="0.5"
              style={{
                transition: "stroke 0.3s ease-out",
              }}
            />
          );
        })}
      </svg>

      {/* Revealing Glow Layer - Follows Mouse */}
      <svg
        className="absolute  inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: showGlow ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <defs>
          {/* Radial gradient mask for the reveal glow */}
          <radialGradient id="glow-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <filter id="reveal-glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="glow-mask-def">
            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="250"
              fill="url(#glow-mask)"
            />
          </mask>
        </defs>

        {/* Bright Core at Cursor */}
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="120"
          fill="rgba(34, 211, 238, 0.3)"
          style={{
            filter: "blur(40px)",
          }}
        />
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="60"
          fill="rgba(147, 197, 253, 0.5)"
          style={{
            filter: "blur(25px)",
          }}
        />
      </svg>

      {/* Connection Nodes - Static Base */}
      <div className="absolute inset-0">
        {[
          { top: 25, left: 25 },
          { top: 20, left: 40 },
          { top: 40, left: 80 },
          { top: 10, left: 60 },
          { top: 10, left: 10 },
          { top: 10, left: 90 },
          { top: 86, left: 86 },
          { top: 55, left: 75 },
          { top: 70, left: 50 },
        ].map((pos, idx) => (
          <div
            key={idx}
            className="absolute rounded-full z-500 w-2 h-2 bg-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.4)] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-300 hover:bg-blue-500/80"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              width: "8px",
              height: "8px",
              backgroundColor: "rgba(59, 130, 246, 0.5)",
              boxShadow: "0 0 12px rgba(59, 130, 246, 0.4)",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease-out",
              onHover: {
                backgroundColor: "rgba(59, 130, 246, 0.8)",
              },
            }}
          />
        ))}
      </div>

      {/* Ambient Background Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.04) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
