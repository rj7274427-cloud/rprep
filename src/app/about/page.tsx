
export default function AboutPage() {
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
              About RPrep Nursing
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              A focused learning platform for
              <span style={{ color: "var(--accent)" }}>
                {" "}nursing aspirants.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing is an independent educational platform created to
              make nursing examination preparation more organized, accessible,
              and practice-focused.
            </p>
          </div>
        </section>

        {/* OUR STORY */}
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
                What We Do
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Making nursing preparation easier to practice
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  Preparing for a competitive nursing examination requires
                  regular practice, repeated revision, and access to useful
                  study material. RPrep Nursing is built around this simple
                  idea.
                </p>

                <p>
                  The platform provides nursing-focused MCQ PDFs and revision
                  resources that students can use alongside their regular
                  preparation. Resources are organized to make it easier to
                  find material and practice important areas of nursing.
                </p>

                <p>
                  Our primary focus is the preparation of nursing aspirants
                  appearing for competitive examinations such as the RRB
                  Nursing Superintendent examination.
                </p>

                <p>
                  We aim to keep the learning experience simple: find a
                  resource, practice the questions, revise the concepts, and
                  continue preparing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU FIND */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              What You Can Find
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              Resources built around practice
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing focuses on practical study resources that can fit
              into your regular examination preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black"
                  style={{ color: "var(--accent)" }}
                >
                  MCQ
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Nursing MCQs
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Practice nursing questions through subject-wise and
                topic-focused PDF resources.
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
                  REV
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Revision Resources
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Use concise study material to revisit important nursing
                concepts during your preparation.
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
                  FREE
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Accessible Learning
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Access available study resources online without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
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
                  Our Approach
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Keep preparation simple and consistent.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  We believe that effective examination preparation is not
                  only about collecting study material. Regular practice and
                  revision are equally important.
                </p>

                <p>
                  That is why RPrep Nursing is designed around accessible
                  practice resources that students can return to whenever
                  they need them.
                </p>

                <p>
                  The platform will continue to evolve as new study resources
                  and features are added.
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
              RPrep Nursing is an independent educational website. It is not
              affiliated with or officially operated by the Railway Recruitment
              Board or any other government examination authority.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
