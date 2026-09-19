"use client";

import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import toast from "react-hot-toast";

const ADMIN_EMAIL = "pbhupeshk2022@gmail.com";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [email] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");

  /* PDF STATES */
  const [title, setTitle] = useState("");
  const [driveUrl, setDriveUrl] = useState("");
  const [category, setCategory] = useState("Daily MCQ");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [uploading, setUploading] = useState(false);
  const [pdfs, setPdfs] = useState<any[]>([]);

  /* NOTE STATES */
  const [noteTitle, setNoteTitle] = useState("");
  const [noteCategory, setNoteCategory] = useState("Nursing Guidelines");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteTags, setNoteTags] = useState("");
  const [noteSource, setNoteSource] = useState("");
  const [noteSaving, setNoteSaving] = useState(false);
  const [notes, setNotes] = useState<any[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  /* NORCET 11 STATES */
  const [norcetQuestion, setNorcetQuestion] = useState("");
  const [norcetOptionA, setNorcetOptionA] = useState("");
  const [norcetOptionB, setNorcetOptionB] = useState("");
  const [norcetOptionC, setNorcetOptionC] = useState("");
  const [norcetOptionD, setNorcetOptionD] = useState("");
  const [norcetAnswer, setNorcetAnswer] = useState("A");
  const [norcetExplanation, setNorcetExplanation] = useState("");
  const [norcetSubject, setNorcetSubject] = useState("Medical-Surgical Nursing");
  const [norcetSaving, setNorcetSaving] = useState(false);
  const [norcetQuestions, setNorcetQuestions] = useState<any[]>([]);
  const [editingNorcetId, setEditingNorcetId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userEmail = u.email?.toLowerCase();

      if (userEmail !== ADMIN_EMAIL.toLowerCase()) {
        await signOut(auth);
        setUser(null);
        setLoading(false);
        toast.error("This account is not authorized for the admin panel.");
        return;
      }

      setUser(u);
      setLoading(false);

      loadPdfs();
      loadNotes();
      loadNorcetQuestions();
    });

    return () => unsub();
  }, []);

  /* ================= PDF FUNCTIONS ================= */

  const loadPdfs = async () => {
    try {
      const q = query(
        collection(db, "pdfs"),
        orderBy("date", "desc")
      );

      const snap = await getDocs(q);

      setPdfs(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    } catch (e: any) {
      toast.error(e.message || "Failed to load PDFs");
    }
  };

  const extractDriveId = (url: string) => {
    const patterns = [
      /\/file\/d\/([-\w]{25,})/,
      /[?&]id=([-\w]{25,})/,
      /\/d\/([-\w]{25,})/,
    ];

    for (const p of patterns) {
      const m = url.match(p);
      if (m) return m[1];
    }

    return "";
  };

  const uploadPdf = async () => {
    if (!title.trim()) {
      toast.error("Enter PDF title");
      return;
    }

    if (!driveUrl.trim()) {
      toast.error("Enter Google Drive URL");
      return;
    }

    const driveId = extractDriveId(driveUrl);

    if (!driveId) {
      toast.error("Invalid Google Drive URL");
      return;
    }

    setUploading(true);

    try {
      const slug =
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") +
        "-" +
        Date.now().toString().slice(-4);

      await addDoc(collection(db, "pdfs"), {
        title: title.trim(),
        slug,
        driveId,
        description: description.trim(),
        category: category.trim() || "Daily MCQ",
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        date: new Date().toISOString(),
        views: 0,
        downloads: 0,
        createdAt: serverTimestamp(),
      });

      toast.success("PDF added successfully!");

      setTitle("");
      setDriveUrl("");
      setDescription("");
      setTags("");

      await loadPdfs();
    } catch (e: any) {
      toast.error(e.message || "Failed to upload PDF");
    } finally {
      setUploading(false);
    }
  };

  const removePdf = async (id: string) => {
    if (!confirm("Are you sure you want to delete this PDF?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "pdfs", id));
      toast.success("PDF deleted");
      await loadPdfs();
    } catch (e: any) {
      toast.error(e.message || "Failed to delete PDF");
    }
  };

  /* ================= NOTE FUNCTIONS ================= */

  const loadNotes = async () => {
    try {
      const q = query(
        collection(db, "notes"),
        orderBy("date", "desc")
      );

      const snap = await getDocs(q);

      setNotes(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    } catch (e: any) {
      toast.error(e.message || "Failed to load notes");
    }
  };

  const makeSlug = (value: string) => {
    return (
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") +
      "-" +
      Date.now().toString().slice(-4)
    );
  };

  const saveNote = async () => {
    if (!noteTitle.trim()) {
      toast.error("Enter note title");
      return;
    }

    if (!noteContent.trim()) {
      toast.error("Enter HTML note content");
      return;
    }

    setNoteSaving(true);

    try {
      const noteData = {
        title: noteTitle.trim(),
        category: noteCategory.trim() || "Nursing Guidelines",
        description: noteDescription.trim(),
        content: noteContent,
        tags: noteTags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        source: noteSource.trim(),
        date: new Date().toISOString(),
      };

      if (editingNoteId) {
        await updateDoc(
          doc(db, "notes", editingNoteId),
          noteData
        );

        toast.success("Note updated successfully!");
      } else {
        await addDoc(collection(db, "notes"), {
          ...noteData,
          slug: makeSlug(noteTitle),
          createdAt: serverTimestamp(),
        });

        toast.success("Note published successfully!");
      }

      resetNoteForm();
      await loadNotes();
    } catch (e: any) {
      toast.error(e.message || "Failed to save note");
    } finally {
      setNoteSaving(false);
    }
  };

  const editNote = (note: any) => {
    setEditingNoteId(note.id);
    setNoteTitle(note.title || "");
    setNoteCategory(note.category || "Nursing Guidelines");
    setNoteDescription(note.description || "");
    setNoteContent(note.content || "");
    setNoteTags(
      Array.isArray(note.tags) ? note.tags.join(", ") : ""
    );
    setNoteSource(note.source || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetNoteForm = () => {
    setEditingNoteId(null);
    setNoteTitle("");
    setNoteCategory("Nursing Guidelines");
    setNoteDescription("");
    setNoteContent("");
    setNoteTags("");
    setNoteSource("");
  };

  const removeNote = async (id: string) => {
    if (!confirm("Are you sure you want to delete this note?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "notes", id));

      toast.success("Note deleted");
      await loadNotes();

      if (editingNoteId === id) {
        resetNoteForm();
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to delete note");
    }
  };

  /* ================= NORCET 11 FUNCTIONS ================= */

  const loadNorcetQuestions = async () => {
    try {
      const q = query(
        collection(db, "norcet11"),
        orderBy("questionNumber", "asc")
      );

      const snap = await getDocs(q);

      setNorcetQuestions(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    } catch (e: any) {
      toast.error(e.message || "Failed to load NORCET 11 questions");
    }
  };

  const resetNorcetForm = () => {
    setEditingNorcetId(null);
    setNorcetQuestion("");
    setNorcetOptionA("");
    setNorcetOptionB("");
    setNorcetOptionC("");
    setNorcetOptionD("");
    setNorcetAnswer("A");
    setNorcetExplanation("");
    setNorcetSubject("Medical-Surgical Nursing");
  };

  const saveNorcetQuestion = async () => {
    if (!norcetQuestion.trim()) {
      toast.error("Enter the question");
      return;
    }

    if (
      !norcetOptionA.trim() ||
      !norcetOptionB.trim() ||
      !norcetOptionC.trim() ||
      !norcetOptionD.trim()
    ) {
      toast.error("Enter all four options");
      return;
    }

    if (!norcetExplanation.trim()) {
      toast.error("Enter the explanation");
      return;
    }

    setNorcetSaving(true);

    try {
      if (editingNorcetId) {
        await updateDoc(
          doc(db, "norcet11", editingNorcetId),
          {
            question: norcetQuestion.trim(),
            options: {
              A: norcetOptionA.trim(),
              B: norcetOptionB.trim(),
              C: norcetOptionC.trim(),
              D: norcetOptionD.trim(),
            },
            correctAnswer: norcetAnswer,
            explanation: norcetExplanation.trim(),
            subject: norcetSubject,
            updatedAt: serverTimestamp(),
          }
        );

        toast.success("NORCET 11 question updated!");
      } else {
        const nextNumber =
          norcetQuestions.length > 0
            ? Math.max(
                ...norcetQuestions.map(
                  (q) => Number(q.questionNumber) || 0
                )
              ) + 1
            : 1;

        await addDoc(collection(db, "norcet11"), {
          questionNumber: nextNumber,
          question: norcetQuestion.trim(),
          options: {
            A: norcetOptionA.trim(),
            B: norcetOptionB.trim(),
            C: norcetOptionC.trim(),
            D: norcetOptionD.trim(),
          },
          correctAnswer: norcetAnswer,
          explanation: norcetExplanation.trim(),
          subject: norcetSubject,
          createdAt: serverTimestamp(),
        });

        toast.success(`NORCET 11 Question ${nextNumber} added!`);
      }

      resetNorcetForm();
      await loadNorcetQuestions();
    } catch (e: any) {
      toast.error(e.message || "Failed to save NORCET 11 question");
    } finally {
      setNorcetSaving(false);
    }
  };

  const editNorcetQuestion = (q: any) => {
    setEditingNorcetId(q.id);
    setNorcetQuestion(q.question || "");
    setNorcetOptionA(q.options?.A || "");
    setNorcetOptionB(q.options?.B || "");
    setNorcetOptionC(q.options?.C || "");
    setNorcetOptionD(q.options?.D || "");
    setNorcetAnswer(q.correctAnswer || "A");
    setNorcetExplanation(q.explanation || "");
    setNorcetSubject(q.subject || "Medical-Surgical Nursing");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeNorcetQuestion = async (id: string) => {
    if (!confirm("Are you sure you want to delete this NORCET 11 question?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "norcet11", id));

      toast.success("NORCET 11 question deleted");
      await loadNorcetQuestions();

      if (editingNorcetId === id) {
        resetNorcetForm();
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to delete question");
    }
  };

  /* ================= LOGIN ================= */

  const login = async () => {
    if (!password) {
      toast.error("Enter your password");
      return;
    }

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        ADMIN_EMAIL,
        password
      );

      if (
        credential.user.email?.toLowerCase() !==
        ADMIN_EMAIL.toLowerCase()
      ) {
        await signOut(auth);
        toast.error("This account is not authorized.");
        return;
      }

      toast.success("Login successful!");
      setPassword("");
    } catch {
      toast.error("Invalid email or password");
    }
  };

  const logout = async () => {
    await signOut(auth);
    toast.success("Logged out");
  };

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "var(--bg)",
          color: "var(--fg)",
        }}
      >
        <p className="text-sm font-medium">
          Loading admin panel...
        </p>
      </div>
    );
  }

  /* ================= LOGIN ================= */

  if (!user) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-5 py-12"
        style={{ background: "var(--bg)" }}
      >
        <div className="w-full max-w-md">

          <div className="text-center mb-8">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              RPrep Nursing
            </p>

            <h1
              className="text-3xl sm:text-4xl font-black tracking-tight"
              style={{ color: "var(--fg)" }}
            >
              Admin Panel
            </h1>

            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--fg-soft)" }}
            >
              Sign in to manage nursing MCQ PDFs and notes.
            </p>
          </div>

          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <div className="space-y-4">

              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  Admin Email
                </label>

                <input
                  className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg)",
                    color: "var(--fg)",
                  }}
                  type="email"
                  value={email}
                  readOnly
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  Password
                </label>

                <input
                  className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg)",
                    color: "var(--fg)",
                  }}
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") login();
                  }}
                />
              </div>

              <button
                onClick={login}
                className="w-full rounded-xl py-3 font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                Sign In
              </button>

            </div>
          </div>

          <p
            className="text-center text-xs mt-5"
            style={{ color: "var(--fg-soft)" }}
          >
            Authorized access only.
          </p>

        </div>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      <main className="max-w-5xl mx-auto px-5 py-8 md:py-12">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              RPrep Nursing
            </p>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Admin Dashboard
            </h1>

            <p
              className="text-sm mt-1"
              style={{ color: "var(--fg-soft)" }}
            >
              Manage your nursing resources.
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-xl border px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{
              borderColor: "var(--border)",
              color: "var(--fg)",
              background: "var(--bg-soft)",
            }}
          >
            Logout
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">

          <div
            className="rounded-2xl border p-5"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--fg-soft)" }}
            >
              Total PDFs
            </p>

            <p className="text-3xl font-black mt-2">
              {pdfs.length}
            </p>
          </div>

          <div
            className="rounded-2xl border p-5"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--fg-soft)" }}
            >
              Total Notes
            </p>

            <p className="text-3xl font-black mt-2">
              {notes.length}
            </p>
          </div>

          <div
            className="rounded-2xl border p-5 col-span-2 md:col-span-1"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--fg-soft)" }}
            >
              Admin
            </p>

            <p
              className="text-sm font-semibold mt-3 break-all"
              style={{ color: "var(--accent)" }}
            >
              {user.email}
            </p>
          </div>

        </div>

        {/* ================= NORCET 11 ================= */}

        <section
          className="rounded-2xl border p-6 sm:p-8 mb-10"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >

          <div className="mb-6">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              NORCET 11
            </p>

            <h2 className="text-xl md:text-2xl font-black">
              {editingNorcetId
                ? "Edit NORCET 11 question"
                : "Add NORCET 11 question"}
            </h2>

            <p
              className="text-sm mt-2"
              style={{ color: "var(--fg-soft)" }}
            >
              Add one question at a time. Questions are automatically numbered.
            </p>
          </div>

          <div className="space-y-4">

            <textarea
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm resize-y"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Question"
              rows={4}
              value={norcetQuestion}
              onChange={(e) => setNorcetQuestion(e.target.value)}
            />

            <select
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              value={norcetSubject}
              onChange={(e) => setNorcetSubject(e.target.value)}
            >
              <option>Fundamentals of Nursing</option>
              <option>Medical-Surgical Nursing</option>
              <option>Obstetric & Gynecological Nursing</option>
              <option>Child Health Nursing</option>
              <option>Mental Health Nursing</option>
              <option>Community Health Nursing</option>
              <option>Pharmacology</option>
              <option>Anatomy & Physiology</option>
              <option>Nutrition</option>
              <option>Microbiology</option>
              <option>Nursing Research</option>
              <option>Nursing Management</option>
              <option>Integrated / Case Scenario</option>
            </select>

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Option A"
              value={norcetOptionA}
              onChange={(e) => setNorcetOptionA(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Option B"
              value={norcetOptionB}
              onChange={(e) => setNorcetOptionB(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Option C"
              value={norcetOptionC}
              onChange={(e) => setNorcetOptionC(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Option D"
              value={norcetOptionD}
              onChange={(e) => setNorcetOptionD(e.target.value)}
            />

            <select
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              value={norcetAnswer}
              onChange={(e) => setNorcetAnswer(e.target.value)}
            >
              <option value="A">Correct Answer: A</option>
              <option value="B">Correct Answer: B</option>
              <option value="C">Correct Answer: C</option>
              <option value="D">Correct Answer: D</option>
            </select>

            <textarea
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm resize-y"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Explanation / Rationale"
              rows={5}
              value={norcetExplanation}
              onChange={(e) => setNorcetExplanation(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row gap-3">

              <button
                onClick={saveNorcetQuestion}
                disabled={norcetSaving}
                className="flex-1 rounded-xl py-3 font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                {norcetSaving
                  ? "Saving..."
                  : editingNorcetId
                  ? "Update Question"
                  : "Add Question"}
              </button>

              {editingNorcetId && (
                <button
                  onClick={resetNorcetForm}
                  className="rounded-xl border px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                    background: "var(--bg)",
                  }}
                >
                  Cancel Edit
                </button>
              )}

            </div>

          </div>
        </section>

        {/* ================= NORCET 11 LIBRARY ================= */}

        <section className="mb-12">

          <div className="flex items-end justify-between gap-4 mb-5">

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                NORCET 11 Library
              </p>

              <h2 className="text-xl md:text-2xl font-black">
                Questions
              </h2>
            </div>

            <span
              className="text-sm font-semibold"
              style={{ color: "var(--fg-soft)" }}
            >
              {norcetQuestions.length} total
            </span>

          </div>

          {norcetQuestions.length === 0 ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-semibold">
                No NORCET 11 questions yet.
              </p>

              <p
                className="text-sm mt-2"
                style={{ color: "var(--fg-soft)" }}
              >
                Add your first question above.
              </p>
            </div>
          ) : (
            <div className="space-y-3">

              {norcetQuestions.map((q) => (
                <div
                  key={q.id}
                  className="rounded-2xl border p-4 sm:p-5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                  }}
                >

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

                    <div className="min-w-0">

                      <div className="flex flex-wrap gap-2 mb-2">

                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          Q{q.questionNumber}
                        </span>

                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: "var(--bg)",
                            color: "var(--fg-soft)",
                          }}
                        >
                          {q.subject}
                        </span>

                      </div>

                      <h3 className="font-bold leading-6">
                        {q.question}
                      </h3>

                    </div>

                    <div className="flex gap-2 shrink-0">

                      <button
                        onClick={() => editNorcetQuestion(q)}
                        className="rounded-xl px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{
                          background: "var(--accent)",
                          color: "white",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => removeNorcetQuestion(q.id)}
                        className="rounded-xl border px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-70"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--fg)",
                          background: "var(--bg)",
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* ================= NOTE FORM ================= */}

        <section
          className="rounded-2xl border p-6 sm:p-8 mb-10"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >

          <div className="mb-6">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              {editingNoteId ? "Edit Note" : "Add Note"}
            </p>

            <h2 className="text-xl md:text-2xl font-black">
              {editingNoteId
                ? "Edit nursing note"
                : "Publish a nursing note"}
            </h2>

            <p
              className="text-sm mt-2"
              style={{ color: "var(--fg-soft)" }}
            >
              Add formatted HTML content for nursing notes and guideline
              updates.
            </p>
          </div>

          <div className="space-y-4">

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Note Title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Category (e.g. Nursing Guidelines, MSN, OBG)"
              value={noteCategory}
              onChange={(e) => setNoteCategory(e.target.value)}
            />

            <textarea
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm resize-none"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Short description"
              rows={3}
              value={noteDescription}
              onChange={(e) => setNoteDescription(e.target.value)}
            />

            <textarea
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm resize-y font-mono"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="<h2>Heading</h2><p>Your nursing note...</p>"
              rows={14}
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Tags (e.g. nursing, guidelines, revision)"
              value={noteTags}
              onChange={(e) => setNoteTags(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Source / Reference"
              value={noteSource}
              onChange={(e) => setNoteSource(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row gap-3">

              <button
                onClick={saveNote}
                disabled={noteSaving}
                className="flex-1 rounded-xl py-3 font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                {noteSaving
                  ? "Saving..."
                  : editingNoteId
                  ? "Update Note"
                  : "Publish Note"}
              </button>

              {editingNoteId && (
                <button
                  onClick={resetNoteForm}
                  className="rounded-xl border px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                    background: "var(--bg)",
                  }}
                >
                  Cancel Edit
                </button>
              )}

            </div>

          </div>
        </section>

        {/* ================= NOTES LIBRARY ================= */}

        <section className="mb-12">

          <div className="flex items-end justify-between gap-4 mb-5">

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                Notes Library
              </p>

              <h2 className="text-xl md:text-2xl font-black">
                Nursing Notes
              </h2>
            </div>

            <span
              className="text-sm font-semibold"
              style={{ color: "var(--fg-soft)" }}
            >
              {notes.length} total
            </span>

          </div>

          {notes.length === 0 ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-semibold">
                No notes yet.
              </p>

              <p
                className="text-sm mt-2"
                style={{ color: "var(--fg-soft)" }}
              >
                Publish your first nursing note above.
              </p>
            </div>
          ) : (
            <div className="space-y-3">

              {notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-2xl border p-4 sm:p-5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                  }}
                >

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    <div className="min-w-0">

                      <h3 className="font-bold">
                        {note.title}
                      </h3>

                      <div
                        className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs"
                        style={{ color: "var(--fg-soft)" }}
                      >
                        <span>{note.category}</span>

                        {note.date && (
                          <span>
                            {new Date(note.date).toLocaleDateString(
                              "en-IN"
                            )}
                          </span>
                        )}
                      </div>

                      {note.description && (
                        <p
                          className="text-sm mt-2 line-clamp-2"
                          style={{ color: "var(--fg-soft)" }}
                        >
                          {note.description}
                        </p>
                      )}

                    </div>

                    <div className="flex gap-2 shrink-0">

                      <button
                        onClick={() => editNote(note)}
                        className="rounded-xl px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{
                          background: "var(--accent)",
                          color: "white",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => removeNote(note.id)}
                        className="rounded-xl border px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-70"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--fg)",
                          background: "var(--bg)",
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* ================= PDF FORM ================= */}

        <section
          className="rounded-2xl border p-6 sm:p-8 mb-10"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >

          <div className="mb-6">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              Add Resource
            </p>

            <h2 className="text-xl md:text-2xl font-black">
              Add a new MCQ PDF
            </h2>

            <p
              className="text-sm mt-2"
              style={{ color: "var(--fg-soft)" }}
            >
              Add the PDF details and its Google Drive share link.
            </p>
          </div>

          <div className="space-y-4">

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="PDF Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Google Drive share link"
              value={driveUrl}
              onChange={(e) => setDriveUrl(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Category (e.g. Daily MCQ, MSN, OBG)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <textarea
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm resize-none"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Short description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className="w-full rounded-xl border px-4 py-3 outline-none text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg)",
                color: "var(--fg)",
              }}
              placeholder="Tags (e.g. nursing, mcq, rrb)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />

            <button
              onClick={uploadPdf}
              disabled={uploading}
              className="w-full rounded-xl py-3 font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{
                background: "var(--accent)",
                color: "white",
              }}
            >
              {uploading ? "Adding PDF..." : "Add PDF Resource"}
            </button>

          </div>
        </section>

        {/* ================= PDF LIBRARY ================= */}

        <section>

          <div className="flex items-end justify-between gap-4 mb-5">

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: "var(--accent)" }}
              >
                Library
              </p>

              <h2 className="text-xl md:text-2xl font-black">
                PDF Resources
              </h2>
            </div>

            <span
              className="text-sm font-semibold"
              style={{ color: "var(--fg-soft)" }}
            >
              {pdfs.length} total
            </span>

          </div>

          {pdfs.length === 0 ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-semibold">
                No PDF resources yet.
              </p>

              <p
                className="text-sm mt-2"
                style={{ color: "var(--fg-soft)" }}
              >
                Add your first nursing MCQ PDF above.
              </p>
            </div>
          ) : (
            <div className="space-y-3">

              {pdfs.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg-soft)",
                  }}
                >

                  <div className="min-w-0">

                    <h3 className="font-bold truncate">
                      {p.title}
                    </h3>

                    <div
                      className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs"
                      style={{ color: "var(--fg-soft)" }}
                    >
                      <span>{p.category}</span>

                      <span>
                        {p.date
                          ? new Date(p.date).toLocaleDateString()
                          : "No date"}
                      </span>
                    </div>

                    {p.description && (
                      <p
                        className="text-sm mt-2 line-clamp-2"
                        style={{ color: "var(--fg-soft)" }}
                      >
                        {p.description}
                      </p>
                    )}

                  </div>

                  <button
                    onClick={() => removePdf(p.id)}
                    className="shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                      background: "var(--bg)",
                    }}
                  >
                    Delete
                  </button>

                </div>
              ))}

            </div>
          )}

        </section>

      </main>
    </div>
  );
}
