import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Terms & Conditions
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              Simple terms for using
              <span style={{ color: "var(--accent)" }}>
                {" "}RPrep Nursing.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              These terms explain the basic conditions that apply when you
              access and use the RPrep Nursing website and its educational
              resources.
            </p>
          </div>
        </section>

        {/* ACCEPTANCE */}
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
                Using RPrep Nursing
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Use the platform responsibly
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  By accessing or using RPrep Nursing, you agree to use the
                  website responsibly and in accordance with these Terms &
                  Conditions.
                </p>

                <p>
                  RPrep Nursing provides educational resources intended to
                  support nursing students and aspirants in their examination
                  preparation and revision.
                </p>

                <p>
                  You should not use the website in a way that could damage,
                  disrupt, overload, or interfere with the normal operation
                  of the platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE PROVIDE */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Our Resources
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              Resources created for preparation
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              The website may provide different types of educational
              resources to support nursing examination preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* MCQS */}
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
                Practice Questions
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Nursing MCQs and question-based resources may be provided for
                practice, revision, and self-assessment.
              </p>
            </div>

            {/* NOTES */}
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  PDF
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Study Resources
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Educational PDFs and other study resources may be made
                available through the platform.
              </p>
            </div>

            {/* WEBSITE */}
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  WEB
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Website Features
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Website features and available resources may change,
                improve, or be removed as the platform develops.
              </p>
            </div>

          </div>
        </section>

        {/* CONTENT */}
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
                  Content & Accuracy
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Educational information may change over time.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  We make reasonable efforts to provide useful educational
                  material. However, we cannot guarantee that every question,
                  explanation, note, or resource will always be complete,
                  accurate, or up to date.
                </p>

                <p>
                  Examination patterns, syllabi, eligibility requirements,
                  recruitment rules, dates, and notifications may change.
                </p>

                <p>
                  Important examination and recruitment information should
                  always be verified through the relevant official authority.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Content Ownership
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              Respect the resources
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Original website content, branding, design, and materials may
              be protected by applicable intellectual property laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="card p-6">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Personal Use
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Educational resources may be used for personal study and
                examination preparation, subject to any specific conditions
                displayed with the resource.
              </p>
            </div>

            <div className="card p-6">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Redistribution
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Do not reproduce, redistribute, sell, or commercially exploit
                original RPrep Nursing content without appropriate permission.
              </p>
            </div>

          </div>
        </section>

        {/* EXTERNAL LINKS */}
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
                External Links
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Links to other websites
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  RPrep Nursing may contain links to external websites,
                  services, or platforms for additional information or
                  functionality.
                </p>

                <p>
                  External websites operate independently and may have their
                  own terms, privacy policies, and practices. We are not
                  responsible for content or services provided by external
                  websites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHANGES */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-20">
          <div
            className="rounded-2xl border p-7 md:p-10 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ color: "var(--fg)" }}
            >
              Terms may be updated
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--fg-soft)" }}
            >
              These Terms & Conditions may be updated from time to time as
              RPrep Nursing develops or as requirements change. Continued use
              of the website after an update means you agree to the revised
              terms.
            </p>

            <a
              href="mailto:support@rprep.online"
              className="inline-block mt-5 font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Contact us: support@rprep.online
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
