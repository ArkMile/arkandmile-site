import Link from "next/link";
import { products, type Product } from "@/lib/products";

type PageProps = {
  params: { slug: string };
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function ProductDetailPage({ params }: PageProps) {
  const product: Product | undefined = products.find(
    (p) => slugify(p.title) === params.slug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Product not found
          </h1>
          <p className="text-gray-400 mb-8">
            That module doesn’t exist (or the link is outdated).
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Back to Modules
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div>
            <div className="text-seagreen text-xs font-mono uppercase tracking-widest mb-3">
              Ark &amp; Mile Module
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
              {product.title}
            </h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="w-full md:w-[320px] rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray-400 text-xs font-mono uppercase tracking-widest">
                Pricing
              </div>
              <div className="text-white font-bold text-lg">{product.price}</div>
            </div>

            {product.type === "direct" ? (
              <button className="w-full mt-3 bg-seagreen text-gunmetal font-bold py-3 px-4 rounded-2xl hover:bg-white transition-colors">
                Download / Access (Coming Soon)
              </button>
            ) : (
              <a
                href={product.link ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full mt-3 inline-flex items-center justify-center bg-white/10 text-white font-semibold py-3 px-4 rounded-2xl hover:bg-white/20 transition-colors"
              >
                Buy on {product.market ?? "Marketplace"}
              </a>
            )}

            <div className="mt-4 text-xs text-gray-500 leading-relaxed">
              Direct checkout + secure downloads will be enabled after Stripe is
              fully wired. For now, use marketplace links or the in-app upgrade
              flow.
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-white font-semibold mb-2">About this module</h2>
          <p className="text-gray-400 leading-relaxed">
            Ark &amp; Mile tools are designed to be dark-mode-first, lightweight,
            and built for speed. This page will expand with feature bullets,
            screenshots, and install instructions.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Back to Modules
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
