export default function Loading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-5"
      style={{ background: "var(--bg)" }}
      aria-label="Loading RPrep Nursing"
    >
      <div className="w-full max-w-sm text-center">
        <div
          className="font-black tracking-[-0.06em] leading-none"
          style={{
            color: "var(--fg)",
            fontSize: "clamp(2.5rem, 10vw, 4rem)",
          }}
        >
          RPREP<span style={{ color: "var(--accent)" }}>.</span>
        </div>

        <p
          className="mt-2 text-[9px] font-black uppercase tracking-[0.22em]"
          style={{ color: "var(--fg-muted)" }}
        >
          Nursing
        </p>

        <div
          className="mt-10 h-[2px] w-full overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          <div
            className="h-full w-1/3 animate-pulse"
            style={{ background: "var(--accent)" }}
          />
        </div>

        <p
          className="mt-4 text-[10px] font-black uppercase tracking-[0.18em]"
          style={{ color: "var(--fg-muted)" }}
        >
          Loading
        </p>
      </div>
    </main>
  );
}
