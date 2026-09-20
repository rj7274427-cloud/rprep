"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
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

export default function Norcet11Page() {
  const params = useParams<{ section?: string }>();

  const sectionNumber = useMemo(() => {
    const value = String(params?.section || "section-01");
    const match = value.match(/section-(\d+)/i);

    if (!match) return 1;

    const number = Number(match[1]);

    return Number.isFinite(number) && number >= 1 && number <= 4
      ? number
      : 1;
  }, [params?.section]);

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

  const sectionQuestions = useMemo(() => {
    const start = (sectionNumber - 1) * 40 + 1;
    const end = sectionNumber * 40;

    return questions.filter(
      (q) =>
        q.questionNumber >= start &&
        q.questionNumber <= end
    );
  }, [questions, sectionNumber]);

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

    return sectionQuestions.filter(
      (q) => q.subject === subject
    );
  }, [sectionQuestions, subject]);

  useEffect(() => {
    setCurrentIndex(0);
    setSubject("All Subjects");
  }, [sectionNumber]);

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

    return sectionQuestions.filter(
      (q) => q.subject === name
    ).length;
  };

  const answeredCount = sectionQuestions.filter(
    (q) => Boolean(selectedAnswers[q.id])
  ).length;

  const sectionStart = (sectionNumber - 1) * 40 + 1;
  const sectionEnd = sectionNumber * 40;

  const progressPercentage =
    filteredQuestions.length > 0
      ? ((currentIndex + 1) / filteredQuestions.length) * 100
      : 0;

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      {/* HEADER */}
      <section
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-9 sm:pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
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
                  NORCET 11 · MAINS
                </p>
              </div>

              <h1
                className="mt-5 font-black tracking-[-0.065em] leading-[0.86]"
                style={{
                  fontSize: "clamp(3.4rem, 9vw, 7rem)",
                }}
              >
                SECTION{" "}
                <span style={{ color: "var(--accent)" }}>
                  {String(sectionNumber).padStart(2, "0")}.
                </span>
              </h1>

              <p
                className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-7 font-medium"
                style={{ color: "var(--fg-soft)" }}
              >
                Questions {sectionStart}–{sectionEnd}. Practice one question
                at a time with instant answer feedback and explanations.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px border-2">
              <div
                className="px-5 py-4"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--bg-soft)",
                }}
              >
                <p
                  className="text-2xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {sectionQuestions.length}
                </p>

                <p
                  className="mt-1 text-[9px] font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Available
                </p>
              </div>

              <div
                className="px-5 py-4"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--bg-soft)",
                }}
              >
                <p
                  className="text-2xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {answeredCount}
                </p>

                <p
                  className="mt-1 text-[9px] font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Answered
                </p>
              </div>

              <div
                className="px-5 py-4 col-span-2 sm:col-span-1"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--accent-bg)",
                }}
              >
                <p
                  className="text-sm font-black uppercase tracking-wide"
                  style={{ color: "var(--accent)" }}
                >
                  Practice
                </p>

                <p
                  className="mt-1 text-[9px] font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  No Timer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTION AREA */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-10 md:py-12">

        {/* NAVIGATION + FILTER */}
        {!loading && filteredQuestions.length > 0 && (
          <>
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div
                className="flex-1 border-2 p-3 overflow-x-auto"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--bg-soft)",
                }}
              >
                <div className="flex gap-2 min-w-max">
                  {filteredQuestions.map((q, index) => {
                    const active = index === currentIndex;
                    const answered = Boolean(selectedAnswers[q.id]);

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => goToQuestion(index)}
                        className="relative shrink-0 min-w-[62px] h-11 px-3 border text-[10px] font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                        style={{
                          borderColor: active
                            ? "var(--fg)"
                            : "var(--border)",
                          background: active
                            ? "var(--accent)"
                            : answered
                            ? "var(--accent-bg)"
                            : "var(--bg)",
                          color: active
                            ? "#fff"
                            : "var(--fg)",
                        }}
                      >
                        Q{q.questionNumber}

                        {answered && !active && (
                          <span
                            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--accent)" }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:w-[240px]">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full h-full min-h-[58px] border-2 px-4 text-xs font-black uppercase tracking-wide outline-none"
                  style={{
                    borderColor: "var(--fg)",
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

            {/* PROGRESS */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Question Progress
                </p>

                <p
                  className="text-[10px] font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--fg)" }}
                >
                  {currentIndex + 1} / {filteredQuestions.length}
                </p>
              </div>

              <div
                className="h-2 w-full"
                style={{ background: "var(--border)" }}
              >
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${progressPercentage}%`,
                    background: "var(--accent)",
                  }}
                />
              </div>
            </div>
          </>
        )}

        {/* LOADING */}
        {loading && (
          <div
            className="border-2 p-10 sm:p-14"
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

              <p className="text-xs sm:text-sm font-black uppercase tracking-wide">
                Loading NORCET 11 Mains questions...
              </p>
            </div>
          </div>
        )}

        {/* EMPTY */}
        {!loading && filteredQuestions.length === 0 && (
          <div
            className="border-2 p-10 sm:p-14"
            style={{
              borderColor: "var(--fg)",
              background: "var(--bg-soft)",
              boxShadow: "6px 6px 0 var(--fg)",
            }}
          >
            <p
              className="text-[10px] font-black uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              Section unavailable
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
              No questions available.
            </h2>

            <p
              className="mt-3 max-w-xl text-sm sm:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              Questions will appear here as they are added to the RPrep
              question bank.
            </p>

            <a
              href="/norcet-11"
              className="mt-7 inline-flex items-center gap-3 min-h-[52px] px-6 border-2 text-xs font-black uppercase tracking-[0.14em]"
              style={{
                borderColor: "var(--fg)",
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "5px 5px 0 var(--fg)",
              }}
            >
              Back to Sections
              <span>→</span>
            </a>
          </div>
        )}

        {/* QUESTION */}
        {!loading && currentQuestion && (
          <section
            className="border-2"
            style={{
              borderColor: "var(--fg)",
              background: "var(--bg-soft)",
              boxShadow: "7px 7px 0 var(--fg)",
            }}
          >
            {/* QUESTION HEADER */}
            <div
              className="border-b-2 px-5 sm:px-8 py-5 sm:py-6"
              style={{ borderColor: "var(--fg)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-2xl sm:text-3xl font-black tracking-tight"
                    style={{ color: "var(--fg)" }}
                  >
                    Q{currentQuestion.questionNumber}
                  </span>

                  <span
                    className="px-3 py-1.5 border text-[9px] sm:text-[10px] font-black uppercase tracking-[0.14em]"
                    style={{
                      borderColor: "var(--border)",
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
                    className="min-h-[42px] px-4 border-2 text-[10px] font-black uppercase tracking-wide transition-opacity disabled:opacity-30"
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
                    className="min-h-[42px] px-4 border-2 text-[10px] font-black uppercase tracking-wide transition-opacity disabled:opacity-30"
                    style={{
                      borderColor: "var(--fg)",
                      background: "var(--fg)",
                      color: "var(--bg)",
                    }}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

            {/* QUESTION CONTENT */}
            <div className="px-5 sm:px-8 py-8 sm:py-10">
              <h2
                className="max-w-4xl text-xl sm:text-2xl md:text-3xl font-black tracking-[-0.025em] leading-[1.35]"
                style={{ color: "var(--fg)" }}
              >
                {currentQuestion.question}
              </h2>

              {/* OPTIONS */}
              <div className="mt-9 space-y-3">
                {optionLetters.map((letter) => {
                  const isSelected = selectedAnswer === letter;
                  const isCorrect =
                    currentQuestion.correctAnswer === letter;

                  let borderColor = "var(--border)";
                  let background = "var(--bg)";
                  let textColor = "var(--fg)";

                  if (answerSubmitted && isCorrect) {
                    borderColor = "#16a34a";
                    background =
                      "color-mix(in srgb, #16a34a 8%, var(--bg-soft))";
                    textColor = "#166534";
                  } else if (
                    answerSubmitted &&
                    isSelected &&
                    !isCorrect
                  ) {
                    borderColor = "#dc2626";
                    background =
                      "color-mix(in srgb, #dc2626 7%, var(--bg-soft))";
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
                      className="w-full text-left border-2 px-4 sm:px-5 py-4 sm:py-5 transition-all hover:-translate-y-0.5 disabled:cursor-default"
                      style={{
                        borderColor,
                        background,
                        color: textColor,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="w-9 h-9 shrink-0 flex items-center justify-center border-2 text-xs font-black"
                          style={{
                            borderColor:
                              answerSubmitted && isCorrect
                                ? "#16a34a"
                                : answerSubmitted &&
                                  isSelected &&
                                  !isCorrect
                                ? "#dc2626"
                                : isSelected
                                ? "var(--accent)"
                                : "var(--border)",
                            background:
                              answerSubmitted && isCorrect
                                ? "#16a34a"
                                : answerSubmitted &&
                                  isSelected &&
                                  !isCorrect
                                ? "#dc2626"
                                : isSelected
                                ? "var(--accent)"
                                : "var(--bg-soft)",
                            color:
                              answerSubmitted &&
                              (isCorrect || isSelected)
                                ? "#fff"
                                : "var(--fg)",
                          }}
                        >
                          {letter}
                        </span>

                        <span className="flex-1 text-sm sm:text-base leading-7 pt-1">
                          {currentQuestion.options?.[letter]}
                        </span>

                        {answerSubmitted && isCorrect && (
                          <span
                            className="text-lg font-black"
                            style={{ color: "#16a34a" }}
                          >
                            ✓
                          </span>
                        )}

                        {answerSubmitted &&
                          isSelected &&
                          !isCorrect && (
                            <span
                              className="text-lg font-black"
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

              {/* SUBMIT */}
              {answerSelected && !answerSubmitted && (
                <button
                  type="button"
                  onClick={submitAnswer}
                  className="mt-7 w-full min-h-[58px] border-2 text-xs sm:text-sm font-black uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "5px 5px 0 var(--fg)",
                  }}
                >
                  Submit Answer →
                </button>
              )}

              {/* FEEDBACK */}
              {answerSubmitted && (
                <div
                  className="mt-8 border-2 p-5 sm:p-7"
                  style={{
                    borderColor:
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "#16a34a"
                        : "#dc2626",
                    background: "var(--bg)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p
                      className="text-sm sm:text-base font-black uppercase tracking-wide"
                      style={{
                        color:
                          selectedAnswer ===
                          currentQuestion.correctAnswer
                            ? "#16a34a"
                            : "#dc2626",
                      }}
                    >
                      {selectedAnswer === currentQuestion.correctAnswer
                        ? "✓ Correct Answer"
                        : "✕ Incorrect Answer"}
                    </p>

                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--fg)" }}
                    >
                      Correct: {currentQuestion.correctAnswer}
                    </p>
                  </div>

                  {currentQuestion.explanation && (
                    <div
                      className="mt-6 pt-5 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.18em]"
                        style={{ color: "var(--accent)" }}
                      >
                        Explanation
                      </p>

                      <p
                        className="mt-3 text-sm sm:text-base leading-7"
                        style={{ color: "var(--fg-soft)" }}
                      >
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={
                      currentIndex === filteredQuestions.length - 1
                    }
                    className="mt-6 inline-flex items-center gap-3 min-h-[48px] px-5 border-2 text-[10px] font-black uppercase tracking-[0.14em] disabled:opacity-30"
                    style={{
                      borderColor: "var(--fg)",
                      background: "var(--fg)",
                      color: "var(--bg)",
                    }}
                  >
                    Next Question
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* BOTTOM PROGRESS */}
        {!loading && currentQuestion && (
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]"
              style={{ color: "var(--fg-muted)" }}
            >
              Section {String(sectionNumber).padStart(2, "0")} · Question{" "}
              {currentIndex + 1} of {filteredQuestions.length}
            </p>

            {answerSubmitted && (
              <p
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em]"
                style={{
                  color:
                    selectedAnswer === currentQuestion.correctAnswer
                      ? "#16a34a"
                      : "#dc2626",
                }}
              >
                {selectedAnswer === currentQuestion.correctAnswer
                  ? "Answer marked correct"
                  : "Answer marked incorrect"}
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
