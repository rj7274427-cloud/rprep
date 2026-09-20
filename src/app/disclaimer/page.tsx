import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | RPrep Nursing",
  description:
    "Read the RPrep Nursing disclaimer regarding educational resources, nursing exam preparation content, clinical information, examination updates, and official-source verification.",
  keywords: [
    "RPrep Nursing disclaimer",
    "nursing exam disclaimer",
    "NORCET preparation disclaimer",
    "nursing MCQ disclaimer",
    "nursing study resources",
  ],
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-4xl">
            <p
              className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              Legal & Information
            </p>

            <h1
              className="font-black tracking-[-0.05em] leading-[0.92] mb-7"
              style={{
                color: "var(--fg)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
              }}
            >
              DISCLAIMER<span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p
              className="text-base md:text-xl leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              Important information about the educational resources,
              examination content, clinical information, and other material
              available on RPrep Nursing.
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
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  01 / Purpose
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Built for learning and exam preparation.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  RPrep Nursing is an independent educational platform created
                  to provide nursing MCQs, study notes, revision resources,
                  practice material, and other learning resources for nursing
                  aspirants.
                </p>

                <p>
                  The content available on this website is intended to support
                  learning, practice, revision, and examination preparation.
                  It should be used as supplementary educational material
                  alongside appropriate textbooks, institutional teaching,
                  professional guidance, and reliable official sources.
                </p>

                <p>
                  RPrep Nursing does not represent itself as an official
                  government examination authority, recruitment board,
                  university, hospital, or regulatory organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT ACCURACY */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              02 / Content Accuracy
            </p>

            <h2
              className="text-3xl md:text-4xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              We aim for useful and accurate resources.
            </h2>

            <p
              className="text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              Reasonable efforts are made to maintain the quality and
              usefulness of the educational content published on RPrep
              Nursing. However, no guarantee is made that every resource will
              always be complete, current, or completely free from errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              className="border p-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black tracking-[0.18em] mb-8"
                style={{ color: "var(--accent)" }}
              >
                01
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                No Absolute Guarantee
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Questions, explanations, notes, links, and other resources may
                occasionally contain omissions, outdated information,
                typographical errors, or inaccuracies.
              </p>
            </div>

            <div
              className="border p-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black tracking-[0.18em] mb-8"
                style={{ color: "var(--accent)" }}
              >
                02
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Verify Important Information
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Important academic, clinical, examination, recruitment, and
                eligibility information should always be checked against
                current authoritative sources.
              </p>
            </div>

            <div
              className="border p-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black tracking-[0.18em] mb-8"
                style={{ color: "var(--accent)" }}
              >
                03
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Study Support Only
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                RPrep resources are designed to support preparation and are not
                intended to replace professional advice, institutional
                education, or official instructions.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL INFORMATION */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  03 / Clinical Information
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Educational content is not clinical advice.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  Some resources may discuss diseases, medications, procedures,
                  nursing interventions, clinical assessment, emergency care,
                  or other healthcare-related topics.
                </p>

                <p>
                  Such information is provided for educational and examination
                  preparation purposes. It should not be used as a substitute
                  for professional clinical judgment, institutional protocols,
                  prescribing information, or guidance from a qualified
                  healthcare professional.
                </p>

                <p>
                  For patient care or clinical decision-making, always follow
                  the applicable institutional policy, current clinical
                  guidelines, approved drug information, and instructions from
                  qualified healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXAM INFORMATION */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                04 / Examination Information
              </p>

              <h2
                className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Always check the latest official notification.
              </h2>
            </div>

            <div
              className="space-y-5 text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              <p>
                Examination patterns, syllabi, eligibility criteria,
                application procedures, recruitment rules, vacancies,
                schedules, fees, admit cards, results, and other details may
                change over time.
              </p>

              <p>
                Information published on RPrep Nursing should not be treated
                as an official examination notification, recruitment notice,
                or legal announcement.
              </p>

              <p>
                Before making an important decision related to an examination
                or recruitment process, consult the latest notification and
                instructions issued by the relevant official authority.
              </p>
            </div>
          </div>
        </section>

        {/* INDEPENDENT PLATFORM */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--fg)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
            <div className="max-w-4xl">
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                05 / Independent Platform
              </p>

              <h2
                className="text-3xl md:text-5xl font-black tracking-[-0.04em] leading-tight mb-7"
                style={{ color: "var(--bg)" }}
              >
                RPrep Nursing is an independent educational platform.
              </h2>

              <p
                className="text-sm md:text-base leading-7 max-w-3xl"
                style={{ color: "var(--fg-muted)" }}
              >
                RPrep Nursing is not an official website or representative of
                the Railway Recruitment Board, Indian Railways, AIIMS, JIPMER,
                PGIMER, DSSSB, ESIC, SGPGI, RML, KGMU, any State CHO
                authority, or any other government examination or recruitment
                authority. References to examinations or organizations are
                provided for educational and informational purposes.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL NOTICE */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div
            className="border p-7 md:p-12"
            style={{
              borderColor: "var(--fg)",
              background: "var(--accent-bg)",
            }}
          >
            <div className="max-w-3xl">
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                In Short
              </p>

              <h2
                className="text-2xl md:text-4xl font-black tracking-[-0.04em] mb-5"
                style={{ color: "var(--fg)" }}
              >
                Learn here. Verify important information from the source.
              </h2>

              <p
                className="text-sm md:text-base leading-7 mb-8"
                style={{ color: "var(--fg-soft)" }}
              >
                Use RPrep Nursing as a preparation and revision resource, but
                rely on current official notifications, authoritative clinical
                resources, and qualified professionals whenever accuracy is
                critical.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/norcet-11"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 text-xs font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "3px 3px 0 var(--fg)",
                  }}
                >
                  Start Practice
                  <span>→</span>
                </Link>

                <Link
                  href="/notes"
                  className="inline-flex items-center justify-center px-5 py-3 border-2 text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--fg)",
                    color: "var(--fg)",
                    background: "var(--bg)",
                  }}
                >
                  Explore Notes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
