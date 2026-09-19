
export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <main>
        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Disclaimer
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              Important information about
              <span style={{ color: "var(--accent)" }}>
                {" "}RPrep Nursing.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing provides educational resources for nursing
              examination preparation. Please read the following information
              before using the resources available on this website.
            </p>
          </div>
        </section>

        {/* EDUCATIONAL PURPOSE */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-20">
            <div className="max-w-3xl">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Educational Purpose
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Created to support your preparation
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  RPrep Nursing is an independent educational platform
                  designed to provide nursing MCQs, revision resources, and
                  other study material for nursing aspirants.
                </p>

                <p>
                  The resources available on this website are intended to
                  support learning, practice, and revision. They should be
                  used as supplementary study material alongside appropriate
                  textbooks, classes, and other reliable educational sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACCURACY */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Content Accuracy
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              We aim to provide useful resources
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              We make reasonable efforts to maintain the quality of the
              educational content available on RPrep Nursing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  01
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                No Guarantee
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                We cannot guarantee that every question, explanation, note,
                or resource will always be complete, current, or completely
                free from errors.
              </p>
            </div>

            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  02
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Verify Important Information
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Important clinical, academic, recruitment, and examination
                information should be verified through reliable authoritative
                sources.
              </p>
            </div>

            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  03
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Use as Study Support
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Our resources are intended to support your preparation and
                should not be treated as a substitute for professional or
                official sources of information.
              </p>
            </div>
          </div>
        </section>

        {/* EXAMINATION INFORMATION */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Examination Information
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Always check the latest official information.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  Examination patterns, syllabi, eligibility requirements,
                  recruitment rules, schedules, and notifications can change
                  over time.
                </p>

                <p>
                  Information provided on RPrep Nursing should not be
                  considered an official examination notification or
                  recruitment notice.
                </p>

                <p>
                  For important decisions related to an examination or
                  recruitment process, always refer to the latest information
                  published by the relevant official authority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDEPENDENT PLATFORM */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-20">
          <div
            className="rounded-2xl border p-7 md:p-10 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ color: "var(--fg)" }}
            >
              An independent educational platform
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing is not an official website of the Railway
              Recruitment Board, Indian Railways, or any other government
              examination authority. The platform is independently created
              for educational and preparation purposes.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
