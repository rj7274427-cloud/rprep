export default function Loading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="text-center">

        <div
          className="mx-auto h-10 w-10 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderColor: "var(--border)",
            borderTopColor: "var(--accent)",
          }}
        />

        <p
          className="mt-5 text-sm font-semibold"
          style={{ color: "var(--fg)" }}
        >
          Loading RPrep Nursing...
        </p>

      </div>
    </main>
  );
}
