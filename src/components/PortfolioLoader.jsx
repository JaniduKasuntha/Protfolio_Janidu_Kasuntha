import { useEffect, useRef, useState } from "react";

/* ============================================================
   PORTFOLIO LOADER
   ============================================================
   Timing constants — edit these to change the loading duration:

     LOAD_DURATION_MS  : total time the ring/bar animate (ms)
     FADE_DURATION_MS  : loader fade-out duration after complete (ms)

   Example: change LOAD_DURATION_MS to 4000 for a 4-second load.
   ============================================================ */
const LOAD_DURATION_MS = 2500; // ring + bar fill time
const FADE_DURATION_MS = 500;  // fade-out time after complete

/* SVG ring geometry */
const RING_RADIUS = 54;
const STROKE_WIDTH = 3;
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/* Design-system colours (mirrors index.css @theme) */
const COLOR_BG = "#090d12";
const COLOR_TEAL = "#14b8a6";
const COLOR_TRACK = "#161d26"; // surface-1 — ring track
const COLOR_TEXT = "#f8fafc";  // foreground
const COLOR_MUTED = "#94a3b8"; // muted-foreground

export function PortfolioLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);   // 0 → 1
  const [fading, setFading]     = useState(false);
  const [done, setDone]         = useState(false);

  const startRef    = useRef(null);
  const rafRef      = useRef(null);
  const timer1Ref   = useRef(null);
  const timer2Ref   = useRef(null);

  /* ----------------------------------------------------------
     Respect prefers-reduced-motion: skip straight to done
  ---------------------------------------------------------- */
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    /* Lock scroll */
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (prefersReduced) {
      /* Skip animation entirely — defer state updates out of effect body */
      timer1Ref.current = setTimeout(() => {
        setProgress(1);
        setFading(true);
        timer2Ref.current = setTimeout(() => {
          setDone(true);
          document.body.style.overflow = prev;
          onComplete?.();
        }, 50);
      }, 50);
      return cleanup;
    }

    /* rAF-based progress animation */
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const raw = Math.min(elapsed / LOAD_DURATION_MS, 1);

      /* Ease-out cubic for a natural feel */
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(eased);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        /* Animation complete → fade out */
        timer1Ref.current = setTimeout(() => {
          setFading(true);
          timer2Ref.current = setTimeout(() => {
            setDone(true);
            document.body.style.overflow = prev;
            onComplete?.();
          }, FADE_DURATION_MS);
        }, 120); // tiny hold at 100% before fade
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return cleanup;

    function cleanup() {
      document.body.style.overflow = prev;
      if (rafRef.current)  cancelAnimationFrame(rafRef.current);
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Remove from DOM entirely once fade is done */
  if (done) return null;

  /* SVG ring stroke offset: 0 = full, CIRCUMFERENCE = empty */
  const ringOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          9999,
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
        backgroundColor: COLOR_BG,
        opacity:         fading ? 0 : 1,
        transition:      fading
          ? `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.4,0,0.2,1)`
          : "none",
        willChange:      "opacity",
      }}
    >
      {/* ── Ring + Logo ── */}
      <div
        style={{
          position: "relative",
          width:    128,
          height:   128,
          flexShrink: 0,
        }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          {/* Track ring */}
          <circle
            cx="64"
            cy="64"
            r={RING_RADIUS}
            stroke={COLOR_TRACK}
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />

          {/* Progress ring — starts from top (rotate -90deg) */}
          <circle
            cx="64"
            cy="64"
            r={RING_RADIUS}
            stroke={COLOR_TEAL}
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={ringOffset}
            style={{
              transform:       "rotate(-90deg)",
              transformOrigin: "64px 64px",
              transition:      "none",
              filter:          `drop-shadow(0 0 6px ${COLOR_TEAL}66)`,
            }}
          />
        </svg>

        {/* "JK" centred inside the ring */}
        <div
          aria-hidden="true"
          style={{
            position:        "absolute",
            inset:           0,
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            fontFamily:      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize:        "1.75rem",
            fontWeight:      700,
            letterSpacing:   "0.05em",
            lineHeight:      1,
            userSelect:      "none",
          }}
        >
          <span style={{ color: COLOR_TEXT }}>J</span>
          <span style={{ color: COLOR_TEAL }}>K</span>
        </div>
      </div>

      {/* ── Name ── */}
      <p
        style={{
          marginTop:   "1.25rem",
          fontFamily:  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize:    "0.9375rem",
          fontWeight:  500,
          letterSpacing: "0.08em",
          color:       COLOR_TEXT,
          userSelect:  "none",
        }}
      >
        Janidu Kasuntha
      </p>

      {/* ── Progress bar ── */}
      <div
        aria-hidden="true"
        style={{
          marginTop:     "1rem",
          width:         "9rem",
          height:        "2px",
          borderRadius:  "999px",
          backgroundColor: COLOR_TRACK,
          overflow:      "hidden",
          flexShrink:    0,
        }}
      >
        <div
          style={{
            height:          "100%",
            width:           `${progress * 100}%`,
            borderRadius:    "999px",
            backgroundColor: COLOR_TEAL,
            boxShadow:       `0 0 8px ${COLOR_TEAL}88`,
            transition:      "none",
          }}
        />
      </div>

      {/* ── Label ── */}
      <p
        aria-hidden="true"
        style={{
          marginTop:    "0.625rem",
          fontFamily:   "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize:     "0.6875rem",
          fontWeight:   400,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color:         COLOR_MUTED,
          userSelect:   "none",
        }}
      >
        Loading portfolio
      </p>
    </div>
  );
}
