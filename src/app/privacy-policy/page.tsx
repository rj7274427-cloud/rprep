import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | RPrep Nursing",
  description:
    "Read the RPrep Nursing Privacy Policy to understand how information may be collected, used, protected, and handled when using the website.",
  keywords: [
    "RPrep Nursing privacy policy",
    "RPrep privacy",
    "nursing website privacy policy",
    "RPrep Nursing data privacy",
  ],
};

export default function PrivacyPolicyPage() {
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
              Legal & Privacy
            </p>

            <h1
              className="font-black tracking-[-0.05em] leading-[0.92] mb-7"
              style={{
                color: "var(--fg)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
              }}
            >
              PRIVACY POLICY<span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p
              className="text-base md:text-xl leading-relaxed max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              This Privacy Policy explains how information may be collected,
              used, stored, and handled when you visit or use RPrep Nursing.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
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
                  01 / Overview
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  We aim to handle information responsibly.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  RPrep Nursing is an independent educational platform
                  providing nursing MCQs, notes, practice resources, PDF
                  resources, and other study material.
                </p>

                <p>
                  We respect the privacy of people who visit and use the
                  website. The information involved depends on how you interact
                  with the website and the features you choose to use.
                </p>

                <p>
                  This policy describes the general categories of information
                  that may be processed and the purposes for which that
                  information may be used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMATION WE MAY RECEIVE */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              02 / Information
            </p>

            <h2
              className="text-3xl md:text-4xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              What information may be involved?
            </h2>

            <p
              className="text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              The information involved may vary depending on how you use the
              website and which services or communication channels you access.
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
                Technical Information
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Depending on the services used, technical information such as
                browser type, device information, IP address, pages visited,
                approximate usage information, and similar technical data may
                be processed.
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
                Contact Information
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                If you contact us, we may receive information that you
                voluntarily provide, such as your name, email address, message,
                feedback, or other details included in your communication.
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
                Usage Information
              </h3>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                General information about how the website is used may be
                processed to maintain functionality, identify technical issues,
                understand usage patterns, and improve the website experience.
              </p>
            </div>
          </div>
        </section>

        {/* HOW INFORMATION IS USED */}
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
                  03 / Use of Information
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Information may help us operate and improve the platform.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  Information may be used to provide, operate, maintain, and
                  improve website functionality and educational resources.
                </p>

                <p>
                  Contact information voluntarily provided by you may be used
                  to respond to questions, feedback, technical issues, support
                  requests, or other communications.
                </p>

                <p>
                  Technical and usage information may help us understand how
                  the website performs and identify problems that affect the
                  user experience.
                </p>

                <p>
                  We do not require users to provide personal information
                  simply to access publicly available educational resources,
                  unless a particular feature or service specifically requires
                  it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COOKIES */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="border p-7 md:p-9"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                04 / Cookies
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-4"
                style={{ color: "var(--fg)" }}
              >
                Cookies and similar technologies
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                The website or service providers may use cookies, local
                storage, analytics, or similar technologies to remember
                preferences, maintain functionality, understand usage, and
                improve website performance.
              </p>
            </div>

            <div
              className="border p-7 md:p-9"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-soft)",
              }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--accent)" }}
              >
                05 / Preferences
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-4"
                style={{ color: "var(--fg)" }}
              >
                Your browser and device settings
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Depending on your browser or device, you may be able to manage
                cookies, local storage, permissions, or other privacy settings.
                Disabling certain technologies may affect some website
                functionality.
              </p>
            </div>
          </div>
        </section>

        {/* THIRD PARTY */}
        <section
          className="border-y"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-soft)",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
            <div className="max-w-3xl mb-12">
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                06 / Third-Party Services
              </p>

              <h2
                className="text-3xl md:text-4xl font-black tracking-[-0.04em] mb-5"
                style={{ color: "var(--fg)" }}
              >
                Some features may rely on external services.
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                External services may process information according to their
                own privacy policies, terms, and practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div
                className="border p-7"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                }}
              >
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "var(--fg)" }}
                >
                  Hosting & Infrastructure
                </h3>

                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Website hosting, infrastructure, storage, or technical
                  services may be provided by external technology providers.
                </p>
              </div>

              <div
                className="border p-7"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                }}
              >
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "var(--fg)" }}
                >
                  Analytics
                </h3>

                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Analytics or similar tools may be used to understand general
                  website usage and improve performance where such services
                  are enabled.
                </p>
              </div>

              <div
                className="border p-7"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg)",
                }}
              >
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "var(--fg)" }}
                >
                  External Links
                </h3>

                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--fg-soft)" }}
                >
                  Links to third-party websites or platforms are subject to
                  the privacy policies and terms of those respective services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DATA SHARING */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                07 / Sharing
              </p>

              <h2
                className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Personal information is not treated as public content.
              </h2>
            </div>

            <div
              className="space-y-5 text-sm md:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              <p>
                Information voluntarily provided through contact or support
                channels is used for the purpose for which it was provided and
                for related operational needs.
              </p>

              <p>
                Information may be processed by service providers where
                necessary to operate website infrastructure, communications,
                security, analytics, or other technical functions.
              </p>

              <p>
                We do not describe publicly available study content as personal
                information merely because a visitor accesses it.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY */}
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
                  08 / Security
                </p>

                <h2
                  className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Reasonable steps are taken to protect information.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  We take reasonable steps to protect information handled
                  through the website and the services used to operate it.
                </p>

                <p>
                  However, no website, online service, or electronic method of
                  transmission can guarantee absolute security. Users should
                  avoid sending sensitive or confidential information through
                  ordinary website contact channels unless specifically
                  requested through an appropriate secure method.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RETENTION */}
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
              09 / Retention
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-5"
              style={{ color: "var(--fg)" }}
            >
              Information may be retained only as reasonably necessary.
            </h2>

            <p
              className="text-sm md:text-base leading-7 max-w-3xl"
              style={{ color: "var(--fg-soft)" }}
            >
              Information may be retained for as long as reasonably necessary
              to provide services, respond to communications, maintain
              records, resolve issues, meet legitimate operational
              requirements, or comply with applicable obligations.
            </p>
          </div>
        </section>

        {/* POLICY CHANGES */}
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
                10 / Updates
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-[-0.04em] mb-5"
                style={{ color: "var(--fg)" }}
              >
                This policy may be updated.
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                RPrep Nursing may update this Privacy Policy from time to time
                to reflect changes in website functionality, services,
                technology, or applicable requirements. The updated version
                will be published on this page.
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
                Questions about privacy?
              </h2>

              <p
                className="text-sm md:text-base leading-7 mb-7"
                style={{ color: "var(--fg-soft)" }}
              >
                If you have a question about this Privacy Policy or how
                information is handled on RPrep Nursing, you can contact our
                support team.
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
