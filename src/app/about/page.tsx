import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RPrep Nursing",
  description:
    "RPrep Nursing is an independent learning platform for nursing competitive examinations, including NORCET, RRB Nursing Superintendent, JIPMER, PGIMER, DSSSB, ESIC, State CHO and other nursing exams.",
};

const exams = [
  "NORCET",
  "RRB Nursing Superintendent",
  "JIPMER",
  "PGIMER",
  "DSSSB",
  "ESIC",
  "State CHO",
  "SGPGI",
  "RML",
  "KGMU",
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      {/* HERO */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-18 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3"
                  style={{ background: "var(--accent)" }}
                />

                <p
                  className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  About RPrep Nursing
                </p>
              </div>

              <h1
                className="mt-8 font-black tracking-[-0.075em] leading-[0.82]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                }}
              >
                PREPARE
                <br />
                <span style={{ color: "var(--accent)" }}>SMARTER.</span>
              </h1>

              <p
                className="mt-9 max-w-2xl text-lg sm:text-xl md:text-2xl leading-8 font-medium"
                style={{ color: "var(--fg-soft)" }}
              >
                RPrep Nursing is an independent learning platform built to
                make nursing competitive-exam preparation more organized,
                practice-focused and accessible.
              </p>
            </div>

            <div
              className="border-2 p-6"
              style={{
                borderColor: "var(--fg)",
                background: "var(--accent-bg)",
                boxShadow: "8px 8px 0 var(--fg)",
              }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                Our Focus
              </p>

              <p
                className="mt-5 text-5xl font-black tracking-[-0.06em]"
                style={{ color: "var(--fg)" }}
              >
                NURSING
              </p>

              <p
                className="mt-3 text-sm leading-6 font-semibold"
                style={{ color: "var(--fg-soft)" }}
              >
                Practice. Revision. Exam preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM STATS */}
      <section
        className="border-b"
        style={{ borderColor: "var(--fg)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            ["10+", "Exam Categories"],
            ["MCQs", "Practice"],
            ["Notes", "Revision"],
            ["PDFs", "Study Material"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-5 sm:px-7 py-7 sm:py-9 ${
                index < 3 ? "md:border-r" : ""
              } ${index < 2 ? "border-b md:border-b-0" : ""}`}
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="font-black tracking-[-0.05em] leading-none"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 3.3rem)",
                }}
              >
                {value}
              </p>

              <p
                className="mt-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.16em]"
                style={{ color: "var(--fg-muted)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS RPREP */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 md:gap-20">
          <div>
            <p
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              What We Do
            </p>

            <h2
              className="mt-4 font-black tracking-[-0.05em] leading-[0.95]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              }}
            >
              One place for
              <br />
              nursing prep.
            </h2>
          </div>

          <div
            className="space-y-5 text-sm sm:text-base leading-7"
            style={{ color: "var(--fg-soft)" }}
          >
            <p>
              Competitive nursing examinations require consistent practice,
              revision and familiarity with different question patterns.
              RPrep Nursing is designed around these core preparation needs.
            </p>

            <p>
              The platform brings together nursing MCQs, practice sets, study
              notes, revision resources and downloadable PDF material so that
              students can organize their preparation in one place.
            </p>

            <p>
              Our goal is to support preparation across major nursing
              competitive examinations conducted by central institutions,
              recruitment boards, hospitals, universities and state-level
              authorities.
            </p>

            <p>
              The approach is simple: learn the concept, practice the
              questions, review the explanation, revise the topic and keep
              improving.
            </p>
          </div>
        </div>
      </section>

      {/* EXAMS */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-soft)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Examination Coverage
              </p>

              <h2
                className="mt-4 font-black tracking-[-0.055em] leading-[0.95]"
                style={{
                  fontSize: "clamp(2.7rem, 6vw, 5rem)",
                }}
              >
                Built for
                <br />
                nursing exams.
              </h2>

              <p
                className="mt-6 max-w-md text-sm sm:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                RPrep is intended to support preparation for a broad range of
                nursing competitive examinations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px border-2">
              {exams.map((exam, index) => (
                <div
                  key={exam}
                  className="min-h-[82px] px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[10px] font-black"
                      style={{ color: "var(--accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm sm:text-base font-black">
                      {exam}
                    </span>
                  </div>

                  <span
                    className="text-lg font-black"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-8 border-l-4 pl-5 py-2"
            style={{ borderColor: "var(--accent)" }}
          >
            <p
              className="text-sm leading-6 font-medium"
              style={{ color: "var(--fg-soft)" }}
            >
              Coverage will continue to expand as new nursing examinations,
              vacancies and preparation resources are added.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
        <div className="mb-12">
          <p
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            What You Can Find
          </p>

          <h2
            className="mt-4 font-black tracking-[-0.055em] leading-none"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            Learn.
            <br />
            Practice.
            <br />
            Revise.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "MCQ Practice",
              text: "Nursing questions designed for regular practice, revision and exam-oriented preparation.",
            },
            {
              number: "02",
              title: "Study Notes",
              text: "Focused nursing notes and revision material covering important concepts and clinical topics.",
            },
            {
              number: "03",
              title: "PDF Resources",
              text: "Downloadable MCQ and study resources that can be used alongside your regular preparation.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="border-2 p-7 sm:p-8 transition-transform hover:-translate-y-1"
              style={{
                borderColor: "var(--fg)",
                background: "var(--bg-soft)",
                boxShadow: "6px 6px 0 var(--fg)",
              }}
            >
              <p
                className="text-5xl font-black tracking-[-0.06em]"
                style={{ color: "var(--accent)" }}
              >
                {item.number}
              </p>

              <h3 className="mt-8 text-2xl font-black tracking-tight">
                {item.title}
              </h3>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--fg)",
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <p
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Our Approach
              </p>

              <h2
                className="mt-5 font-black tracking-[-0.055em] leading-[0.9]"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  color: "var(--bg)",
                }}
              >
                Simple.
                <br />
                Consistent.
                <br />
                Focused.
              </h2>
            </div>

            <div
              className="space-y-7 text-sm sm:text-base leading-7"
              style={{ color: "var(--fg-muted)" }}
            >
              <p>
                Effective examination preparation is not only about collecting
                study material. Regular question practice and revision are
                equally important.
              </p>

              <p>
                RPrep is therefore structured around resources that students
                can return to repeatedly during their preparation journey.
              </p>

              <p>
                As the platform grows, new examination sections, question
                banks, notes and study resources can be added to support more
                nursing aspirants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <p
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Start Preparing
            </p>

            <h2
              className="mt-4 font-black tracking-[-0.06em] leading-[0.9]"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
              }}
            >
              YOUR NEXT
              <br />
              <span style={{ color: "var(--accent)" }}>QUESTION.</span>
            </h2>
          </div>

          <Link
            href="/norcet-11"
            className="inline-flex items-center justify-center gap-4 min-h-[58px] px-7 border-2 text-xs font-black uppercase tracking-[0.15em] transition-transform hover:-translate-y-1"
            style={{
              borderColor: "var(--fg)",
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "6px 6px 0 var(--fg)",
            }}
          >
            Start Practice
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* INDEPENDENT PLATFORM */}
      <section
        className="border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-soft)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="max-w-3xl">
            <p
              className="text-[10px] font-black uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              Important Information
            </p>

            <h2 className="mt-3 text-xl sm:text-2xl font-black tracking-tight">
              An independent educational platform
            </h2>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing is an independent educational website. It is not
              affiliated with, endorsed by, or officially operated by AIIMS,
              Railway Recruitment Board, JIPMER, PGIMER, DSSSB, ESIC, SGPGI,
              RML, KGMU, any State CHO authority, or any other government
              examination authority.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
