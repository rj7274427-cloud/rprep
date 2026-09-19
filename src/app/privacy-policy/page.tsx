
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <main>
        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Privacy Policy
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              Your privacy matters to
              <span style={{ color: "var(--accent)" }}>
                {" "}RPrep Nursing.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              This Privacy Policy explains how information may be collected,
              used, and handled when you visit or use the RPrep Nursing
              website.
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
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-20">
            <div className="max-w-3xl">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Our Approach
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                We aim to handle information responsibly
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  RPrep Nursing is an independent educational platform. We
                  respect the privacy of people who visit and use our website.
                </p>

                <p>
                  This policy describes the general types of information that
                  may be processed while using the website and how that
                  information may be used to operate, maintain, and improve
                  the learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMATION */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Information
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              What information may be involved?
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              The information involved depends on how you interact with the
              website and its available features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* TECHNICAL */}
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  01
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Technical Information
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Depending on the services used, technical information such
                as browser type, device information, IP address, pages
                visited, and general usage data may be processed.
              </p>
            </div>

            {/* CONTACT */}
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  02
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Contact Information
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                If you contact us, we may receive the information you
                voluntarily provide, such as your email address and the
                details included in your message.
              </p>
            </div>

            {/* USAGE */}
            <div className="card p-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  03
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Usage Information
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                General information about how the website is used may be
                processed to help maintain functionality and improve the
                website experience.
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
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  How Information May Be Used
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
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
                  Information may be used to provide and maintain website
                  functionality, respond to support requests, and understand
                  general website usage.
                </p>

                <p>
                  Contact information you voluntarily provide may be used to
                  respond to your questions, feedback, or support requests.
                </p>

                <p>
                  We do not require users to provide personal information
                  simply to access publicly available educational resources,
                  unless a particular feature specifically requires it.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* THIRD PARTY */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Third-Party Services
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              Some features may use external services
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              External services may process information according to their
              own policies and terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="card p-6">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Cookies & Analytics
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                The website or its service providers may use cookies,
                analytics, or similar technologies to understand usage,
                improve performance, and maintain the website.
              </p>
            </div>

            <div className="card p-6">
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                External Platforms
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--fg-soft)" }}
              >
                Links or features connected to third-party platforms may be
                subject to the privacy policies and terms of those platforms.
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
          <div className="max-w-5xl mx-auto px-5 py-16 md:py-20">
            <div className="max-w-3xl">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Security
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Protecting information
              </h2>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  We take reasonable steps to protect information handled
                  through the website and to maintain the security of the
                  services we use.
                </p>

                <p>
                  However, no internet-based website or method of electronic
                  transmission can guarantee absolute security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-20">
          <div
            className="rounded-2xl border p-7 md:p-10 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ color: "var(--fg)" }}
            >
              Questions about privacy?
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--fg-soft)" }}
            >
              If you have a question about this Privacy Policy or how
              information is handled on RPrep Nursing, you can contact us.
            </p>

            <a
              href="mailto:support@rprep.online"
              className="inline-block mt-5 font-semibold"
              style={{ color: "var(--accent)" }}
            >
              support@rprep.online
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
