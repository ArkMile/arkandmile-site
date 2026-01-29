export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Downloads
        </h1>

        <p className="text-gray-400 mb-6">
          Direct downloads aren’t gated yet. Product downloads will be delivered
          from secure links once payments and license delivery are live.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-white font-semibold mb-2">What to do now</h2>
          <ul className="text-gray-400 space-y-2 list-disc list-inside">
            <li>
              Visit{" "}
              <a href="/products" className="text-seagreen hover:underline">
                Modules
              </a>{" "}
              to view products.
            </li>
            <li>
              If you already purchased, you’ll receive access through your
              purchase channel (Gumroad/Etsy) or via the app upgrade flow.
            </li>
            <li>
              Need help? Go to{" "}
              <a href="/support" className="text-seagreen hover:underline">
                Support
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
