import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RPrep Nursing",
  description:
    "Contact RPrep Nursing for questions, feedback, technical support, resource issues, and suggestions related to nursing exam preparation.",
};

const contactOptions = [
  {
    number: "01",
    short: "@",
    title: "Email Support",
    description:
      "For general questions, feedback, support requests, resource issues, or website-related queries.",
    label: "support@rprep.online",
    href: "mailto:support@rprep.online",
  },
  {
    number: "02",
    short: "WA",
    title: "WhatsApp",
    description:
      "Contact us directly for general help, questions, and website-related support.",
    label: "+91 97837 13848",
    href: "https://wa.me/919783713848",
    external: true,
  },
  {
    number: "03",
    short: "IG",
    title: "Instagram",
    description:
      "Follow our page for nursing preparation content, updates, and study-related resources.",
    label: "@nursingstudyvault",
    href: "https://www.instagram.com/nursingstudyvault?stkn=ZnFiZTVwazFkNng2",
    external: true,
  },
];

export default function ContactPage() {
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
        className="border-b"
        style={{
          borderColor: "var(--fg)",
          background: "var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-18 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-end">
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
                  Contact RPrep Nursing
                </p>
              </div>

              <h1
                className="mt-8 font-black tracking-[-0.075em] leading-[0.82]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                }}
              >
                LET&apos;S
                <br />
                <span style={{ color: "var(--accent)" }}>TALK.</span>
              </h1>

              <p
                className="mt-9 max-w-2xl text-lg sm:text-xl md:text-2xl leading-8 font-medium"
                style={{ color: "var(--fg-soft)" }}
              >
                Have a question, suggestion, feedback, or need help with
                something on RPrep Nursing? Get in touch with us.
              </p>
            </div>

            <div
              className="border-2 p-6"
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
                We&apos;re Listening
              </p>

              <p
                className="mt-5 text-4xl font-black tracking-[-0.05em]"
                style={{ color: "var(--fg)" }}
              >
                FEEDBACK
              </p>

              <p
                className="mt-3 text-sm leading-6 font-semibold"
                style={{ color: "var(--fg-soft)" }}
              >
                Found an issue? Have an idea? Tell us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section
        className="border-b"
        style={{ borderColor: "var(--fg)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            ["01", "Questions"],
            ["02", "Feedback"],
            ["03", "Support"],
            ["04", "Suggestions"],
          ].map(([number, label], index) => (
            <div
              key={number}
              className={`px-5 sm:px-7 py-7 sm:py-9 ${
                index < 3 ? "md:border-r" : ""
              } ${index < 2 ? "border-b md:border-b-0" : ""}`}
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-3xl sm:text-5xl font-black tracking-[-0.05em]"
                style={{ color: "var(--accent)" }}
              >
                {number}
              </p>

              <p
                className="mt-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.16em]"
                style={{ color: "var(--fg-muted)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <p
              className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Get in Touch
            </p>

            <h2
              className="mt-4 font-black tracking-[-0.055em] leading-[0.95]"
              style={{
                fontSize: "clamp(2.7rem, 6vw, 5rem)",
              }}
            >
              Choose
              <br />
              your way.
            </h2>

            <p
              className="mt-6 max-w-sm text-sm sm:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              Use whichever contact method is most convenient for your
              question, feedback, or support request.
            </p>
          </div>

          <div className="grid gap-5">
            {contactOptions.map((item) => (
              <a
                key={item.number}
                href={item.href}
                {...(item.external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="group border-2 p-6 sm:p-7 transition-transform hover:-translate-y-1"
                style={{
                  borderColor: "var(--fg)",
                  background: "var(--bg-soft)",
                  boxShadow: "6px 6px 0 var(--fg)",
                }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-4xl sm:text-5xl font-black tracking-[-0.06em] leading-none"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="w-9 h-9 flex items-center justify-center border-2 text-[10px] font-black"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          {item.short}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className="mt-4 max-w-xl text-sm leading-7"
                        style={{ color: "var(--fg-soft)" }}
                      >
                        {item.description}
                      </p>

                      <p
                        className="mt-5 text-sm sm:text-base font-black break-all"
                        style={{ color: "var(--accent)" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xl font-black transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--fg)" }}
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT / REPORT */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-soft)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div>
              <p
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Need Help?
              </p>

              <h2
                className="mt-5 font-black tracking-[-0.055em] leading-[0.95]"
                style={{
                  fontSize: "clamp(2.7rem, 6vw, 5rem)",
                }}
              >
                HELP US
                <br />
                IMPROVE.
              </h2>
            </div>

            <div
              className="space-y-6 text-sm sm:text-base leading-7"
              style={{ color: "var(--fg-soft)" }}
            >
              <p>
                If you notice an incorrect question, broken resource,
                technical issue, incorrect information, or anything that could
                improve the learning experience, please let us know.
              </p>

              <p>
                Feedback helps us identify problems and improve the resources
                available to nursing aspirants on RPrep.
              </p>

              <div
                className="border-l-4 pl-5 py-2"
                style={{ borderColor: "var(--accent)" }}
              >
                <p
                  className="text-[10px] font-black uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  Support Email
                </p>

                <a
                  href="mailto:help@rprep.online"
                  className="inline-block mt-2 text-base sm:text-lg font-black break-all"
                  style={{ color: "var(--fg)" }}
                >
                  help@rprep.online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSE NOTE */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div
          className="border-2 p-7 sm:p-10"
          style={{
            borderColor: "var(--fg)",
            background: "var(--accent-bg)",
            boxShadow: "7px 7px 0 var(--fg)",
          }}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)" }}
              >
                RPrep Nursing
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
                Your feedback matters.
              </h2>

              <p
                className="mt-3 max-w-2xl text-sm sm:text-base leading-7"
                style={{ color: "var(--fg-soft)" }}
              >
                We want RPrep to remain simple, useful and easy to use for
                nursing aspirants. If you have an idea that can make the
                platform better, we would be glad to hear it.
              </p>
            </div>

            <a
              href="mailto:support@rprep.online"
              className="inline-flex items-center justify-center gap-3 min-h-[54px] px-6 border-2 text-xs font-black uppercase tracking-[0.14em] whitespace-nowrap"
              style={{
                borderColor: "var(--fg)",
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "5px 5px 0 var(--fg)",
              }}
            >
              Email Us
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
