import { useCallback, useEffect, useRef, useState } from "react";
import { SCREENSHOTS } from "../Constants/Oee_constants.jsx";

function LazyImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}

function Carousel() {
  const [active, setActive] = useState(0);
  const dragStart = useRef(null);
  const intervalRef = useRef(null);

  const go = useCallback(
    (idx) => setActive((idx + SCREENSHOTS.length) % SCREENSHOTS.length),
    [],
  );

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setActive((a) => (a + 1) % SCREENSHOTS.length),
      4500,
    );
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, [resetTimer]);

  const handleNav = (dir) => {
    go(active + dir);
    resetTimer();
  };

  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.clientX;
    if (Math.abs(diff) > 40) {
      go(active + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    dragStart.current = null;
  };

  const onTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      go(active + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    dragStart.current = null;
  };

  return (
    <div className="w-full">
      {/* Main frame */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/60 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {SCREENSHOTS.map((s, i) => (
            <div key={i} className="min-w-full relative">
              {console.log(s.src)}
              <LazyImage
                src={s.src}
                alt={s.alt}
                className="w-full block pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 py-4 flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/25">
                    {s.tag}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {s.label}
                  </span>
                </div>
                <span className="text-slate-500 text-xs">
                  {i + 1}/{SCREENSHOTS.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        {[
          [-1, "left-3", "M15 18l-6-6 6-6"],
          [1, "right-3", "M9 18l6-6-6-6"],
        ].map(([dir, pos, d]) => (
          <button
            key={dir}
            onClick={(e) => {
              e.stopPropagation();
              handleNav(dir);
            }}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-slate-700 transition-colors`}
            aria-label={dir === -1 ? "Previous" : "Next"}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d={d}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-6 justify-center">
        {SCREENSHOTS.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              go(i);
              resetTimer();
            }}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              i === active
                ? "border-cyan-400 opacity-100 scale-105"
                : "border-transparent opacity-35 hover:opacity-60"
            }`}
            style={{ width: 60, height: 36 }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <LazyImage
              src={s.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
