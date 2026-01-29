"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import { products, type Product } from "@/lib/products";

export function ProductShowcase() {
  const featured: Product[] = products.slice(0, 3);

  return (
    <section className="w-full bg-gunmetal py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            System <span className="text-seagreen">Modules</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Deploy our battle-tested software directly into your workflow.
            Instant access. Zero bloat.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-seagreen/50 transition-all hover:shadow-[0_0_30px_rgba(0,230,168,0.1)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-seagreen/10 text-seagreen text-xs font-mono py-1 px-2 rounded">
                    MODULE_{String(product.id).padStart(2, "0")}
                  </div>
                  <span className="text-xl font-bold text-white">
                    {product.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-seagreen transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto">
                {product.type === "direct" ? (
                  <button className="w-full bg-seagreen text-gunmetal font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors">
                    <Download className="w-4 h-4" />
                    Initialize Download
                  </button>
                ) : (
                  <a
                    href={product.link ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white/10 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buy on {product.market ?? "Marketplace"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
