import Link from "next/link";
import { products, type Product } from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product: Product | undefined = products.find(
    (p) => slugify(p.title) === slug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Product not found
          </h1>
          <p className="text-gray-400 mb-8">
            That product doesn’t exist (or the link is outdated).
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      {/* ...rest of your component unchanged... */}
    </main>
  );
}
