export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-5 py-12 md:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                style={{ background: "var(--accent)" }}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 0 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>

              <span
                className="font-bold text-base tracking-tight"
                style={{ color: "var(--fg)" }}
              >
                RPrep Nursing
              </span>
            </div>

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--fg-soft)" }}
            >
              Free nursing MCQ PDFs and study resources for RRB Nursing
              Superintendent aspirants.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3
              className="font-bold text-sm mb-4"
              style={{ color: "var(--fg)" }}
            >
              Quick Links
            </h3>

            <div
              className="flex flex-col gap-3 text-sm"
              style={{ color: "var(--fg-soft)" }}
            >
              <a href="/about" className="hover:opacity-70 transition-opacity">
                About Us
              </a>

              <a href="/contact" className="hover:opacity-70 transition-opacity">
                Contact Us
              </a>

              <a href="/disclaimer" className="hover:opacity-70 transition-opacity">
                Disclaimer
              </a>

              <a href="/privacy-policy" className="hover:opacity-70 transition-opacity">
                Privacy Policy
              </a>

              <a href="/terms-and-conditions" className="hover:opacity-70 transition-opacity">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* SUPPORT */}
          <div id="support">
            <h3
              className="font-bold text-sm mb-4"
              style={{ color: "var(--fg)" }}
            >
              Support
            </h3>

            <div
              className="flex flex-col gap-3 text-sm"
              style={{ color: "var(--fg-soft)" }}
            >
              <a
                href="mailto:support@rprep.online"
                className="hover:opacity-70 transition-opacity break-all"
              >
                support@rprep.online
              </a>

              <a
                href="mailto:help@rprep.online"
                className="hover:opacity-70 transition-opacity break-all"
              >
                help@rprep.online
              </a>

              <a
                href="https://wa.me/919783713848"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                WhatsApp: +91 97837 13848
              </a>

              <a
                href="https://www.instagram.com/nursingstudyvault?stkn=ZnFiZTVwazFkNng2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Instagram: @nursingstudyvault
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "var(--border)",
            color: "var(--fg-muted)",
          }}
        >
          <span>
            © {new Date().getFullYear()} RPrep Nursing. All rights reserved.
          </span>

          <span>
            Built for Nursing Aspirants
          </span>
        </div>

      </div>
    </footer>
  );
}
