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

  const [title, setTitle] = useState("");
  const [driveUrl, setDriveUrl] = useState("");
  const [category, setCategory] = useState("Daily MCQ");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [uploading, setUploading] = useState(false);
  const [pdfs, setPdfs] = useState<any[]>([]);

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
    });

    return () => unsub();
  }, []);

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
    } catch (e: any) {
      toast.error("Invalid email or password");
    }
  };

  const logout = async () => {
    await signOut(auth);
    toast.success("Logged out");
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

  const upload = async () => {
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

  /* LOGIN */
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
              Sign in to manage nursing MCQ PDF resources.
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

  /* ADMIN DASHBOARD */
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
              Manage your nursing MCQ PDF library.
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
        <div className="grid grid-cols-2 gap-4 mb-8">

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

        {/* UPLOAD */}
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
              onClick={upload}
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

        {/* PDF LIBRARY */}
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
