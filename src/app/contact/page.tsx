
export default function ContactPage() {
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
              Contact RPrep Nursing
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: "var(--fg)" }}
            >
              We are here to
              <span style={{ color: "var(--accent)" }}>
                {" "}help you.
              </span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--fg-soft)" }}
            >
              Have a question, suggestion, feedback, or need help with
              something on RPrep Nursing? Feel free to get in touch with us.
            </p>
          </div>
        </section>

        {/* HOW TO CONTACT US */}
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
                Get in Touch
              </p>

              <h2
                className="text-2xl md:text-3xl font-black tracking-tight mb-6"
                style={{ color: "var(--fg)" }}
              >
                Choose the way that works for you
              </h2>

              <p
                className="text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                Whether you want to report an issue, share feedback, ask a
                question, or simply reach out to us, you can use any of the
                contact options below.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Contact Options
            </p>

            <h2
              className="text-2xl md:text-3xl font-black tracking-tight mb-4"
              style={{ color: "var(--fg)" }}
            >
              We would love to hear from you
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--fg-soft)" }}
            >
              Use the contact method that is most convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* EMAIL */}
            <a
              href="mailto:support@rprep.online"
              className="card p-6 block transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  @
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Email Support
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--fg-soft)" }}
              >
                For general questions, feedback, support requests, or
                website-related queries.
              </p>

              <span
                className="text-sm font-semibold break-all"
                style={{ color: "var(--accent)" }}
              >
                support@rprep.online
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919783713848"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 block transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  WA
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                WhatsApp
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--fg-soft)" }}
              >
                Contact us directly for general help, questions, and
                website-related support.
              </p>

              <span
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                +91 97837 13848
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/nursingstudyvault?stkn=ZnFiZTVwazFkNng2"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 block transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--accent-bg)" }}
              >
                <span
                  className="font-black text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  IG
                </span>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--fg)" }}
              >
                Instagram
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--fg-soft)" }}
              >
                Follow our page for nursing preparation content, updates,
                and study-related resources.
              </p>

              <span
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                @nursingstudyvault
              </span>
            </a>

          </div>
        </section>

        {/* SUPPORT */}
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
                  Need Help?
                </p>

                <h2
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  We value your feedback.
                </h2>
              </div>

              <div
                className="space-y-5 text-sm md:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                <p>
                  If you notice an incorrect question, a broken resource,
                  a technical issue, or anything that could improve the
                  learning experience, please let us know.
                </p>

                <p>
                  Your feedback helps us identify problems and improve the
                  resources available on RPrep Nursing.
                </p>

                <a
                  href="mailto:help@rprep.online"
                  className="inline-flex font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  help@rprep.online
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL MESSAGE */}
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-20">
          <div
            className="rounded-2xl border p-7 md:p-10 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ color: "var(--fg)" }}
            >
              RPrep Nursing is built for nursing aspirants.
            </h2>

            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--fg-soft)" }}
            >
              We want the platform to remain simple, useful, and easy to use.
              If you have an idea that can make the learning experience
              better, we would be glad to hear it.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
