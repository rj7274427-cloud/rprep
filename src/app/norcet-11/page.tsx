"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Question = {
  id: string;
  questionNumber: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  explanation?: string;
  subject?: string;
};

const optionLetters = ["A", "B", "C", "D"] as const;

const getSectionNumber = (questionNumber: number) => {
  return Math.floor((questionNumber - 1) / 100) + 1;
};

const getSectionLabel = (sectionNumber: number) => {
  return `C-${String(sectionNumber).padStart(2, "0")}`;
};

export default function Norcet11Page() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const [submittedAnswers, setSubmittedAnswers] = useState<
    Record<string, boolean>
  >({});

  const [subject, setSubject] = useState("All Subjects");
  const [selectedSection, setSelectedSection] = useState(1);

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

  /*
   * Sections are generated automatically from questionNumber.
   *
   * 1-100   = C-01
   * 101-200 = C-02
   * 201-300 = C-03
   * etc.
   *
   * Only sections containing at least one question are displayed.
   */
  const sections = useMemo(() => {
    const uniqueSections = Array.from(
      new Set(
        questions.map((q) => getSectionNumber(q.questionNumber))
      )
    ).sort((a, b) => a - b);

    return uniqueSections;
  }, [questions]);

  const sectionQuestions = useMemo(() => {
    return questions.filter(
      (q) => getSectionNumber(q.questionNumber) === selectedSection
    );
  }, [questions, selectedSection]);

  const subjects = useMemo(() => {
    const uniqueSubjects = Array.from(
      new Set(
        sectionQuestions
          .map((q) => q.subject)
          .filter((value): value is string => Boolean(value))
      )
    );

    return ["All Subjects", ...uniqueSubjects];
  }, [sectionQuestions]);

  const filteredQuestions = useMemo(() => {
    if (subject === "All Subjects") return sectionQuestions;

    return sectionQuestions.filter((q) => q.subject === subject);
  }, [sectionQuestions, subject]);

  useEffect(() => {
    setCurrentIndex(0);
    setSubject("All Subjects");
  }, [selectedSection]);

  useEffect(() => {
    if (sections.length > 0 && !sections.includes(selectedSection)) {
      setSelectedSection(sections[0]);
    }
  }, [sections, selectedSection]);

  const currentQuestion = filteredQuestions[currentIndex];

  const selectedAnswer = currentQuestion
    ? selectedAnswers[currentQuestion.id]
    : undefined;

  const answerSubmitted = currentQuestion
    ? Boolean(submittedAnswers[currentQuestion.id])
    : false;

  const answerSelected = Boolean(selectedAnswer);

  const submitAnswer = () => {
    if (!currentQuestion || !selectedAnswer) return;

    setSubmittedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }));
  };

  const selectAnswer = (letter: string) => {
    if (!currentQuestion || answerSubmitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  };

  const goNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subjectCount = (name: string) => {
    if (name === "All Subjects") return sectionQuestions.length;

    return sectionQuestions.filter((q) => q.subject === name).length;
  };

  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >

      {/* ================= HERO ================= */}

      <section
        className="relative overflow-hidden border-b"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(135deg, var(--accent-bg) 0%, var(--bg) 55%, var(--bg-soft) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-12 sm:py-16 md:py-20">

          <div className="max-w-3xl">

            <p
              className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              NORCET 11 PRELIMS
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
              style={{ color: "var(--fg)" }}
            >
              NORCET 11
              <br />
              <span style={{ color: "var(--accent)" }}>
                Question Practice
              </span>
            </h1>

            <p
              className="mt-5 text-base sm:text-lg leading-7 max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              Practice nursing questions one by one with subject-wise
              navigation, instant answer feedback, and concise explanations.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">

              {/* QUESTIONS */}

              <div
                className="rounded-xl border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-soft)",
                }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Questions
                </p>

                <p className="text-xl font-black mt-1">
                  {sectionQuestions.length}
                </p>
              </div>

              {/* SUBJECTS */}

              <div
                className="rounded-xl border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-soft)",
                }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Subjects
                </p>

                <p className="text-xl font-black mt-1">
                  {Math.max(subjects.length - 1, 0)}
                </p>
              </div>

              {/* MODE / SECTION */}

              <div
                className="rounded-xl border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-soft)",
                }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Mode
                </p>

                <select
                  value={selectedSection}
                  onChange={(e) =>
                    setSelectedSection(Number(e.target.value))
                  }
                  disabled={sections.length === 0}
                  aria-label="Select question section"
                  className="mt-1 h-8 min-w-[88px] rounded-lg border px-2 text-sm font-black outline-none cursor-pointer disabled:opacity-50"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                    color: "var(--accent)",
                  }}
                >
                  {sections.length === 0 ? (
                    <option value={1}>C-01</option>
                  ) : (
                    sections.map((sectionNumber) => (
                      <option
                        key={sectionNumber}
                        value={sectionNumber}
                      >
                        {getSectionLabel(sectionNumber)}
                      </option>
                    ))
                  )}
                </select>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= QUESTION AREA ================= */}

      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-7 md:py-10">

        {/* QUESTION TABS + FILTER */}

        {!loading && filteredQuestions.length > 0 && (
          <div className="flex items-center gap-3 mb-5">

            <div
              className="flex-1 overflow-x-auto"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <div className="flex gap-3 min-w-max pb-1">

                {filteredQuestions.map((q, index) => {

                  const active = index === currentIndex;
                  const answered = Boolean(selectedAnswers[q.id]);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => goToQuestion(index)}
                      className="shrink-0 min-w-[76px] h-12 rounded-xl border text-sm font-bold transition-all"
                      style={{
                        borderColor: active
                          ? "var(--accent)"
                          : "var(--border)",
                        background: active
                          ? "var(--accent)"
                          : "var(--bg-soft)",
                        color: active
                          ? "white"
                          : "var(--fg)",
                      }}
                    >
                      Q{q.questionNumber}

                      {answered && !active && (
                        <span
                          className="ml-1"
                          style={{ color: "var(--accent)" }}
                        >
                          •
                        </span>
                      )}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* SUBJECT FILTER */}

            <div className="hidden sm:block shrink-0">

              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-12 min-w-[190px] rounded-xl border px-4 text-sm font-bold outline-none"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-soft)",
                  color: "var(--fg)",
                }}
              >
                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item} ({subjectCount(item)})
                  </option>
                ))}
              </select>

            </div>

          </div>
        )}

        {/* MOBILE FILTER */}

        {!loading && filteredQuestions.length > 0 && (
          <div className="sm:hidden mb-5">

            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full h-12 rounded-xl border px-4 text-sm font-bold outline-none"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
                color: "var(--fg)",
              }}
            >
              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item} ({subjectCount(item)})
                </option>
              ))}
            </select>

          </div>
        )}

        {/* LOADING */}

        {loading && (
          <div
            className="rounded-3xl border p-12 text-center"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--fg-soft)" }}
            >
              Loading NORCET 11 questions...
            </p>
          </div>
        )}

        {/* EMPTY */}

        {!loading && filteredQuestions.length === 0 && (
          <div
            className="rounded-3xl border p-12 text-center"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <h2 className="text-xl font-black">
              No questions available
            </h2>

            <p
              className="mt-2 text-sm"
              style={{ color: "var(--fg-soft)" }}
            >
              Questions will appear here as they are added.
            </p>
          </div>
        )}

        {/* ================= QUESTION CARD ================= */}

        {!loading && currentQuestion && (
          <>

            <section
              className="rounded-3xl border overflow-hidden"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >

              {/* CARD HEADER */}

              <div className="px-5 sm:px-7 pt-6 sm:pt-7">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <span
                      className="text-3xl sm:text-4xl font-black"
                      style={{ color: "var(--fg)" }}
                    >
                      Q{currentQuestion.questionNumber}
                    </span>

                    <span
                      className="rounded-xl px-4 py-2 text-sm sm:text-base font-semibold"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      {currentQuestion.subject || "General Nursing"}
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      onClick={goPrevious}
                      disabled={currentIndex === 0}
                      className="rounded-xl border px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--bg)",
                        color: "var(--fg)",
                      }}
                    >
                      ← Previous
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      disabled={
                        currentIndex === filteredQuestions.length - 1
                      }
                      className="rounded-xl px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      Next →
                    </button>

                  </div>

                </div>

              </div>

              {/* QUESTION BODY */}

              <div className="px-5 sm:px-7 pt-8 pb-7">

                <h2
                  className="text-lg sm:text-xl md:text-2xl font-semibold leading-8"
                  style={{ color: "var(--fg)" }}
                >
                  {currentQuestion.question}
                </h2>

                {/* OPTIONS */}

                <div className="mt-7 space-y-3">

                  {optionLetters.map((letter) => {

                    const isSelected = selectedAnswer === letter;
                    const isCorrect =
                      currentQuestion.correctAnswer === letter;

                    let borderColor = "var(--border)";
                    let background = "var(--bg)";
                    let textColor = "var(--fg)";

                    if (answerSubmitted && isCorrect) {
                      borderColor = "#22c55e";
                      background =
                        "color-mix(in srgb, #22c55e 10%, var(--bg-soft))";
                      textColor = "#166534";
                    } else if (
                      answerSubmitted &&
                      isSelected &&
                      !isCorrect
                    ) {
                      borderColor = "#ef4444";
                      background =
                        "color-mix(in srgb, #ef4444 8%, var(--bg-soft))";
                      textColor = "#991b1b";
                    } else if (isSelected) {
                      borderColor = "var(--accent)";
                      background = "var(--accent-bg)";
                    }

                    return (
                      <button
                        key={letter}
                        type="button"
                        onClick={() => selectAnswer(letter)}
                        disabled={answerSubmitted}
                        className="w-full text-left rounded-2xl border px-5 py-4 transition-all disabled:cursor-default"
                        style={{
                          borderColor,
                          background,
                          color: textColor,
                        }}
                      >

                        <div className="flex items-center gap-4">

                          <span
                            className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-sm"
                            style={{
                              background:
                                answerSubmitted &&
                                (isSelected || isCorrect)
                                  ? "var(--accent)"
                                  : isSelected
                                  ? "var(--accent-bg)"
                                  : "var(--bg-soft)",
                              color:
                                answerSubmitted &&
                                (isSelected || isCorrect)
                                  ? "white"
                                  : "var(--fg)",
                              border:
                                answerSubmitted &&
                                (isSelected || isCorrect)
                                  ? "none"
                                  : isSelected
                                  ? "1px solid var(--accent)"
                                  : "1px solid var(--border)",
                            }}
                          >
                            {letter}
                          </span>

                          <span className="text-sm sm:text-base leading-6">
                            {currentQuestion.options?.[letter]}
                          </span>

                          {answerSubmitted && isCorrect && (
                            <span
                              className="ml-auto font-black"
                              style={{ color: "#16a34a" }}
                            >
                              ✓
                            </span>
                          )}

                          {answerSubmitted &&
                            isSelected &&
                            !isCorrect && (
                              <span
                                className="ml-auto font-black"
                                style={{ color: "#dc2626" }}
                              >
                                ✕
                              </span>
                            )}

                        </div>

                      </button>
                    );
                  })}

                </div>

                {/* SUBMIT ANSWER */}

                {answerSelected && !answerSubmitted && (
                  <button
                    type="button"
                    onClick={submitAnswer}
                    className="w-full mt-6 rounded-2xl py-4 text-sm sm:text-base font-bold transition-opacity hover:opacity-90"
                    style={{
                      background: "var(--accent)",
                      color: "white",
                    }}
                  >
                    Submit Answer
                  </button>
                )}

                {/* ANSWER + EXPLANATION */}

                {answerSubmitted && (
                  <div
                    className="mt-6 rounded-2xl border p-5 sm:p-6"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg)",
                    }}
                  >

                    <div className="flex flex-wrap items-center gap-2">

                      <span
                        className="text-sm font-bold"
                        style={{
                          color:
                            selectedAnswer === currentQuestion.correctAnswer
                              ? "#16a34a"
                              : "#dc2626",
                        }}
                      >
                        {selectedAnswer === currentQuestion.correctAnswer
                          ? "✓ Correct Answer"
                          : "✕ Incorrect Answer"}
                      </span>

                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--fg)" }}
                      >
                        — {currentQuestion.correctAnswer}.{" "}
                        {
                          currentQuestion.options[
                            currentQuestion.correctAnswer
                          ]
                        }
                      </span>

                    </div>

                    {currentQuestion.explanation && (
                      <div className="mt-5">

                        <p
                          className="text-xs font-bold uppercase tracking-[0.16em] mb-2"
                          style={{ color: "var(--accent)" }}
                        >
                          Explanation
                        </p>

                        <p
                          className="text-sm sm:text-base leading-7"
                          style={{ color: "var(--fg-soft)" }}
                        >
                          {currentQuestion.explanation}
                        </p>

                      </div>
                    )}

                  </div>
                )}

              </div>

            </section>

            {/* PROGRESS */}

            <div className="flex items-center justify-between mt-4 px-1">

              <p
                className="text-xs sm:text-sm font-medium"
                style={{ color: "var(--fg-soft)" }}
              >
                Question {currentIndex + 1} of{" "}
                {filteredQuestions.length}
              </p>

              {answerSubmitted && (
                <p
                  className="text-xs sm:text-sm font-semibold"
                  style={{
                    color:
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "#16a34a"
                        : "#dc2626",
                  }}
                >
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Correct answer"
                    : "Incorrect answer"}
                </p>
              )}

            </div>

          </>
        )}

      </div>
    </main>
  );
}
