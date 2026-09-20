"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Question = {
  id: string;
  questionNumber: number;
  subject?: string;
};

const SECTION_SIZE = 40;
const TOTAL_SECTIONS = 4;

function getSectionQuestions(
  questions: Question[],
  sectionNumber: number
) {
  const start = (sectionNumber - 1) * SECTION_SIZE + 1;
  const end = sectionNumber * SECTION_SIZE;

  return questions.filter(
    (question) =>
      question.questionNumber >= start &&
      question.questionNumber <= end
  );
}

export default function Norcet11Overview() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const q = query(
          collection(db, "norcet11"),
          orderBy("questionNumber", "asc")
        );

        const snap = await getDocs(q);

        const data = snap.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        })) as Question[];

        setQuestions(data);
      } catch (error) {
        console.error("Failed to load NORCET 11 questions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const sections = useMemo(() => {
    return Array.from({ length: TOTAL_SECTIONS }, (_, index) => {
      const number = index + 1;
      const start = (number - 1) * SECTION_SIZE + 1;
      const end = number * SECTION_SIZE;

      return {
        number,
        start,
        end,
        questions: getSectionQuestions(questions, number),
      };
    });
  }, [questions]);

  const subjects = useMemo(() => {
    return new Set(
      questions
        .map((question) => question.subject)
        .filter(Boolean)
    ).size;
  }, [questions]);

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
        className="relative overflow-hidden border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 md:pt-20 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-end">
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
                  NORCET 11 · MAINS PRACTICE
                </p>
              </div>

              <h1
                className="mt-7 font-black tracking-[-0.075em] leading-[0.78]"
                style={{
                  fontSize: "clamp(4.5rem, 14vw, 10rem)",
                  color: "var(--fg)",
                }}
              >
                NORCET
                <br />
                <span style={{ color: "var(--accent)" }}>11.</span>
              </h1>

              <p
                className="mt-9 max-w-2xl text-lg sm:text-xl md:text-2xl font-medium leading-8"
                style={{ color: "var(--fg-soft)" }}
              >
                Mains-level nursing MCQ practice divided into four focused
                sections of 40 questions each.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#sections"
                  className="inline-flex items-center justify-center min-h-[58px] px-7 sm:px-8 border-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] transition-transform hover:-translate-y-1"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "6px 6px 0 var(--fg)",
                  }}
                >
                  Choose Section
                  <span className="ml-3 text-base">→</span>
                </a>

                <div
                  className="inline-flex items-center justify-center min-h-[58px] px-5 border-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.12em]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg-muted)",
                    background: "var(--bg-soft)",
                  }}
                >
                  Practice Mode · No Timer
                </div>
              </div>
            </div>

            <div
              className="hidden lg:block border-2 p-6"
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
                Mains Structure
              </p>

              <p
                className="mt-5 text-6xl font-black tracking-[-0.06em]"
                style={{ color: "var(--fg)" }}
              >
                4×40
              </p>

              <p
                className="mt-3 text-sm leading-6 font-semibold"
                style={{ color: "var(--fg-soft)" }}
              >
                Four independent practice sections covering the complete
                160-question structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="border-b"
        style={{ borderColor: "var(--fg)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            ["160", "Questions"],
            ["04", "Sections"],
            ["40", "Per Section"],
            [String(subjects || "—"), "Subjects"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-5 sm:px-7 py-7 sm:py-9 ${
                index < 3 ? "md:border-r" : ""
              } ${
                index < 2 ? "border-b md:border-b-0" : ""
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="font-black tracking-[-0.05em] leading-none"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--fg)",
                }}
              >
                {value}
              </p>

              <p
                className="mt-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.17em]"
                style={{ color: "var(--fg-muted)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <section
        id="sections"
        className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24"
      >
        <div className="grid md:grid-cols-[1fr_280px] gap-8 md:gap-16 items-end mb-12">
          <div>
            <p
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Practice Sections
            </p>

            <h2
              className="mt-4 font-black tracking-[-0.055em] leading-none"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                color: "var(--fg)",
              }}
            >
              Choose.
              <br />
              Practice.
            </h2>
          </div>

          <p
            className="text-sm sm:text-base leading-7 font-medium"
            style={{ color: "var(--fg-soft)" }}
          >
            Practice each section independently. Questions are loaded directly
            from the RPrep question bank.
          </p>
        </div>

        {loading ? (
          <div
            className="border-2 p-8 sm:p-10"
            style={{
              borderColor: "var(--fg)",
              background: "var(--bg-soft)",
              boxShadow: "6px 6px 0 var(--fg)",
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="w-3 h-3 animate-pulse"
                style={{ background: "var(--accent)" }}
              />

              <p className="text-sm font-black uppercase tracking-wide">
                Loading practice sections...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-7">
            {sections.map((section) => {
              const available = section.questions.length > 0;
              const percentage = Math.min(
                100,
                Math.round(
                  (section.questions.length / SECTION_SIZE) * 100
                )
              );

              return (
                <article
                  key={section.number}
                  className="group border-2 p-6 sm:p-8 transition-transform hover:-translate-y-1"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--bg-soft)",
                    boxShadow: "7px 7px 0 var(--fg)",
                  }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className="font-black leading-[0.8] tracking-[-0.08em]"
                      style={{
                        fontSize: "clamp(4rem, 9vw, 6rem)",
                        color: "var(--accent)",
                      }}
                    >
                      {String(section.number).padStart(2, "0")}
                    </span>

                    <span
                      className="pt-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      SECTION
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3
                      className="text-3xl sm:text-4xl font-black tracking-[-0.04em]"
                      style={{ color: "var(--fg)" }}
                    >
                      Section {String(section.number).padStart(2, "0")}
                    </h3>

                    <p
                      className="mt-2 text-sm sm:text-base font-bold"
                      style={{ color: "var(--fg-soft)" }}
                    >
                      Questions {section.start}–{section.end}
                    </p>
                  </div>

                  <div className="mt-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p
                          className="text-2xl font-black tracking-tight"
                          style={{ color: "var(--fg)" }}
                        >
                          {section.questions.length}
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--fg-muted)" }}
                          >
                            {" "}
                            / 40
                          </span>
                        </p>

                        <p
                          className="mt-1 text-[10px] font-black uppercase tracking-[0.15em]"
                          style={{ color: "var(--fg-muted)" }}
                        >
                          Questions available
                        </p>
                      </div>

                      <span
                        className="text-[10px] font-black uppercase tracking-[0.14em]"
                        style={{
                          color: available
                            ? "var(--accent)"
                            : "var(--fg-muted)",
                        }}
                      >
                        {available ? "Ready" : "Coming Soon"}
                      </span>
                    </div>

                    <div
                      className="mt-4 h-2 w-full"
                      style={{ background: "var(--border)" }}
                    >
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${percentage}%`,
                          background: available
                            ? "var(--accent)"
                            : "var(--fg-muted)",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="mt-8 pt-6 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {available ? (
                      <Link
                        href={`/norcet-11/practice/section-${String(
                          section.number
                        ).padStart(2, "0")}`}
                        className="inline-flex w-full items-center justify-between min-h-[58px] px-5 sm:px-6 border-2 text-xs font-black uppercase tracking-[0.14em] transition-all group-hover:translate-x-0.5"
                        style={{
                          borderColor: "var(--fg)",
                          background: "var(--accent)",
                          color: "#fff",
                          boxShadow: "5px 5px 0 var(--fg)",
                        }}
                      >
                        <span>Start Practice</span>
                        <span className="text-lg">→</span>
                      </Link>
                    ) : (
                      <div
                        className="w-full min-h-[58px] flex items-center justify-between px-5 sm:px-6 border-2 text-xs font-black uppercase tracking-[0.14em]"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--bg)",
                          color: "var(--fg-muted)",
                        }}
                      >
                        <span>Coming Soon</span>
                        <span>—</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* INFO STRIP */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--border)",
          background: "var(--accent-bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                01
              </p>
              <h3 className="mt-3 text-xl font-black">
                Section-wise
              </h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--fg-soft)" }}
              >
                Move directly to the section you want to practice.
              </p>
            </div>

            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                02
              </p>
              <h3 className="mt-3 text-xl font-black">
                Instant Practice
              </h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--fg-soft)" }}
              >
                Submit answers and review explanations question by question.
              </p>
            </div>

            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                03
              </p>
              <h3 className="mt-3 text-xl font-black">
                No Pressure
              </h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--fg-soft)" }}
              >
                This is practice mode — no timer and no forced section
                transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
          <p
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            RPrep Nursing · NORCET 11
          </p>

          <h2
            className="mt-5 max-w-5xl font-black tracking-[-0.06em] leading-[0.9]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--bg)",
            }}
          >
            STUDY.
            <br />
            PRACTICE.
            <br />
            REPEAT.
          </h2>

          <p
            className="mt-7 max-w-xl text-base sm:text-lg leading-7"
            style={{ color: "var(--fg-muted)" }}
          >
            Start with an available section and work through the Mains-level
            nursing question bank at your own pace.
          </p>

          <a
            href="#sections"
            className="mt-8 inline-flex items-center gap-4 min-h-[58px] px-7 border-2 text-xs font-black uppercase tracking-[0.15em] transition-transform hover:-translate-y-1"
            style={{
              borderColor: "var(--bg)",
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "6px 6px 0 var(--accent)",
            }}
          >
            Start Practising
            <span className="text-lg">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
