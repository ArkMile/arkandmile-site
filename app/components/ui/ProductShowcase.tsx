"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

export function ProductShowcase() {
  const featured: Product[] = products.slice(0, 3);

  return (
    <section className="w-full bg-gunmetal py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Featured <span className="text-seagreen">Tools</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Small, focused utilities built by a solo developer. Built to stay useful—fast,
              clean, and low overhead.
            </p>
          </div>

          {/* CTA to full catalog */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:border-seagreen/50 hover:bg-white/10 transition-colors"
          >
            View all tools
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, idx) => {
            const id = product.id ?? idx + 1;
            const price = product.price ?? "—";

            // Primary action logic:
            // - If you have a slug, go to the product page
            // - Else if external link exists, use that
            // - Else fallback to /products
            const href =
              product.slug
                ? `/products/${product.slug}`
                : product.type === "external" && product.link
                ? product.link
                : "/products";

            const isExternal = product.type === "external" && !!product.link;

            return (
              <motion.div
                key={String(id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-seagreen/50 transition-all hover:shadow-[0_0_30px_rgba(0,230,168,0.10)] flex flex-col justify-between h-full"
              >
                <div>
                  {/* Tag + Price */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-seagreen/10 text-seagreen text-xs font-mono py-1 px-2 rounded">
                      TOOL_{String(id).padStart(2, "0")}
                    </div>
                    <span className="text-xl font-bold text-white">{price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-seagreen transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-auto">
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-white/10 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open on {product.market ?? "Marketplace"}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="w-full bg-seagreen text-gunmetal font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
                    >
                      View tool details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Subtle “solo dev” stamp */}
                <div className="mt-4 text-[11px] tracking-widest text-gray-500 uppercase">
                  Built by Ark &amp; Mile
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
