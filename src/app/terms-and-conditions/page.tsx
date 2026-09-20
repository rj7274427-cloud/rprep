import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | RPrep Nursing",
  description:
    "Read the Terms & Conditions for using RPrep Nursing, including educational resources, MCQs, PDFs, content usage, external links, payments, and website use.",
  keywords: [
    "RPrep Nursing terms and conditions",
    "RPrep terms",
    "nursing website terms",
    "nursing MCQ terms",
    "RPrep Nursing",
  ],
};

export default function TermsAndConditionsPage() {
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
              Legal & Usage
            </p>

            <h1
              className="font-black tracking-[-0.05em] leading-[0.92] mb-7"
              style={{
                color: "var(--fg)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
              }}
            >
              TERMS<span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p
              className="text-base md:text-xl leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              These Terms & Conditions describe the basic rules that apply
              when you access or use RPrep Nursing and its educational
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
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  01 / Acceptance
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Use the platform responsibly.
                </h2>
              </div>

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
                  support nursing students, professionals, and aspirants with
                  learning, revision, and examination preparation.
                </p>

                <p>
                  If you do not agree with these terms, please do not use the
                  website or its resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              02 / Resources
            </p>

            <h2
              className="text-3xl md:text-4xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              Resources created for preparation.
            </h2>

            <p
              className="text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              The website may provide different types of educational material
              and features. Availability may change as the platform develops.
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
                01 / MCQ
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Practice Questions
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Nursing MCQs and question-based resources may be provided for
                practice, revision, self-assessment, and examination
                preparation.
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
                02 / NOTES
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Study Resources
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Notes, revision material, guideline updates, educational
                articles, and other study resources may be made available.
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
                03 / PDF
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                PDF Resources
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Educational PDFs and other downloadable or viewable resources
                may be provided through the platform.
              </p>
            </div>
          </div>
        </section>

        {/* ACCEPTABLE USE */}
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
                  03 / Acceptable Use
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Keep the platform safe and useful.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  You agree not to use the website in a way that could damage,
                  disrupt, overload, interfere with, or compromise the normal
                  operation or security of the platform.
                </p>

                <p>
                  You should not attempt to gain unauthorized access to
                  administrative areas, systems, accounts, databases, or
                  infrastructure associated with the website.
                </p>

                <p>
                  You should not use automated methods, scraping, malicious
                  code, or other abusive techniques to interfere with the
                  website or obtain resources in an unauthorized manner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACCURACY */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                04 / Accuracy
              </p>

              <h2
                className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Educational information may change.
              </h2>
            </div>

            <div
              className="space-y-5 text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              <p>
                We make reasonable efforts to provide useful educational
                material. However, we cannot guarantee that every question,
                explanation, note, article, PDF, link, or other resource will
                always be complete, accurate, or up to date.
              </p>

              <p>
                Nursing knowledge, clinical recommendations, examination
                patterns, syllabi, eligibility requirements, recruitment
                rules, schedules, and notifications may change over time.
              </p>

              <p>
                Important examination, recruitment, academic, and clinical
                information should always be verified through the relevant
                current authoritative source.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL */}
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
                  05 / Clinical Information
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
                  Some RPrep resources may discuss diseases, medications,
                  procedures, nursing interventions, assessment, emergency
                  care, or other healthcare topics.
                </p>

                <p>
                  Such content is provided for educational and examination
                  preparation purposes. It should not replace professional
                  clinical judgment, institutional protocols, approved
                  prescribing information, or advice from qualified healthcare
                  professionals.
                </p>

                <p>
                  For actual patient care or clinical decision-making, follow
                  applicable institutional policies, current clinical
                  guidelines, approved drug information, and professional
                  instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              06 / Intellectual Property
            </p>

            <h2
              className="text-3xl md:text-4xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              Respect the resources.
            </h2>

            <p
              className="text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              Original RPrep Nursing branding, website design, written
              material, question sets, graphics, and other original content
              may be protected by applicable intellectual property laws.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="border p-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Personal Study
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Use for learning
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Website resources may be used for personal study and
                examination preparation, subject to any specific conditions
                displayed with the individual resource.
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
                className="text-[10px] font-black uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                Redistribution
              </p>

              <h3
                className="text-xl font-black mb-3"
                style={{ color: "var(--fg)" }}
              >
                Do not exploit original content
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Do not reproduce, redistribute, resell, republish, or
                commercially exploit original RPrep Nursing content without
                appropriate permission.
              </p>
            </div>
          </div>
        </section>

        {/* PAID RESOURCES */}
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
                  07 / Purchases
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Paid resources and digital products.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  Some educational resources may be offered as paid digital
                  products or courses. Any price, description, access period,
                  delivery method, or other purchase condition shown at the
                  time of purchase will apply to that product.
                </p>

                <p>
                  Digital resources may be delivered electronically and may not
                  involve physical shipping. Users should review the product
                  description and applicable purchase information before
                  completing a transaction.
                </p>

                <p>
                  Any refund, cancellation, or replacement terms applicable to
                  a particular product will be communicated with that product
                  or through the applicable purchase process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                08 / External Links
              </p>

              <h2
                className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Third-party websites operate independently.
              </h2>
            </div>

            <div
              className="space-y-5 text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              <p>
                RPrep Nursing may contain links to external websites,
                services, platforms, or resources for additional information
                or functionality.
              </p>

              <p>
                External websites operate independently and may have their own
                terms, privacy policies, content, and practices.
              </p>

              <p>
                RPrep Nursing is not responsible for the availability,
                accuracy, security, or practices of external websites. Users
                should review the applicable terms and policies of those
                services.
              </p>
            </div>
          </div>
        </section>

        {/* AVAILABILITY */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  09 / Availability
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-[-0.04em]"
                  style={{ color: "var(--fg)" }}
                >
                  Website availability
                </h2>
              </div>

              <div className="md:col-span-2">
                <p
                  className="text-sm md:text-base leading-7"
                  style={{ color: "var(--fg-soft)" }}
                >
                  We aim to keep the website and its resources available, but
                  uninterrupted access cannot be guaranteed. The website may
                  occasionally be unavailable because of maintenance,
                  technical issues, updates, third-party services, network
                  problems, or other circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LIMITATION */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div
            className="border p-7 md:p-10"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-soft)",
            }}
          >
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              10 / Limitation
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              Use the resources with appropriate judgment.
            </h2>

            <p
              className="text-sm md:text-base leading-7 max-w-4xl"
              style={{ color: "var(--fg-soft)" }}
            >
              RPrep Nursing provides educational resources on an
              &quot;as available&quot; basis. To the extent permitted by
              applicable law, the platform does not guarantee that the website
              or its educational resources will always be uninterrupted,
              error-free, complete, or suitable for every individual purpose.
              Users remain responsible for verifying important information and
              using appropriate judgment.
            </p>
          </div>
        </section>

        {/* CHANGES */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                11 / Updates
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-5"
                style={{ color: "var(--fg)" }}
              >
                These terms may be updated.
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                RPrep Nursing may update these Terms & Conditions from time to
                time to reflect changes in the website, services, resources,
                business practices, or applicable requirements. Updated terms
                will be published on this page.
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
                12 / Independent Platform
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
                any government examination authority, recruitment board,
                university, hospital, or regulatory organization. References
                to examinations and organizations are provided for educational
                and preparation purposes.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
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
                Questions?
              </p>

              <h2
                className="text-2xl md:text-4xl font-black tracking-[-0.04em] mb-5"
                style={{ color: "var(--fg)" }}
              >
                Need clarification?
              </h2>

              <p
                className="text-sm md:text-base leading-7 mb-7"
                style={{ color: "var(--fg-soft)" }}
              >
                If you have questions about these Terms & Conditions or the
                use of RPrep Nursing resources, contact the support team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:support@rprep.online"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 text-xs font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--fg)",
                    background: "var(--accent)",
                    color: "#fff",
                    boxShadow: "3px 3px 0 var(--fg)",
                  }}
                >
                  Email Support
                  <span>→</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border-2 text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--fg)",
                    color: "var(--fg)",
                    background: "var(--bg)",
                  }}
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
