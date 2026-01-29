import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-seagreen text-xs font-mono uppercase tracking-widest mb-3">
            Support // Ark &amp; Mile
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Support Center
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Quick answers, download guidance, and contact paths. Keep it simple.
            Keep it fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FAQ */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold mb-4">FAQ</h2>

            <div className="space-y-4">
              <div>
                <div className="text-white font-medium">
                  Where do I download my purchase?
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  If you purchased through Gumroad/Etsy, your download is
                  available in that platform’s receipt / library. Direct
                  downloads will be enabled later via secure links.
                </div>
              </div>

              <div>
                <div className="text-white font-medium">
                  I upgraded inside the app — where’s my license?
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  License delivery will be handled by the in-app upgrade flow.
                  If something fails, contact support with your receipt email.
                </div>
              </div>

              <div>
                <div className="text-white font-medium">
                  Refunds / issues
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  For marketplace purchases, refunds follow that platform’s
                  policies. For direct purchases (coming soon), we’ll provide a
                  clear refund policy here.
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Actions */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold mb-3">Contact</h2>
            <p className="text-gray-400 text-sm mb-5">
              Need custom software or support? Use the request form to avoid spam.
            </p>

            <div className="space-y-3">
              <Link
                href="/request"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-seagreen text-gunmetal font-bold py-3 hover:bg-white transition-colors"
              >
                Request Intel
              </Link>

              <Link
                href="/products"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-white/10 text-white font-semibold py-3 hover:bg-white/20 transition-colors"
              >
                View Modules
              </Link>

              <Link
                href="/donate"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-white/5 text-gray-200 py-3 hover:bg-white/10 transition-colors"
              >
                Donate
              </Link>
            </div>

            <div className="mt-6 text-xs text-gray-500 font-mono">
              Tip: include app name + version + what you tried.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
