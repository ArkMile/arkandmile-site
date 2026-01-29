"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight } from "lucide-react";

const DONATE_URL =
  "https://donate.stripe.com/dRmaEX6W74UjcfA6d2dnW00";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-28 pb-20 px-4 flex justify-center">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-widest uppercase">
            <HeartHandshake className="w-4 h-4 text-seagreen" />
            Support Independent Development
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Support <span className="text-seagreen">Ark &amp; Mile</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Ark &amp; Mile is built and maintained by a solo developer focused on
            practical, long-term software.
            <br />
            <br />
            If the tools help you, your support directly funds updates, fixes,
            and new products.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-seagreen text-gunmetal font-bold rounded-full shadow-[0_0_20px_rgba(0,230,168,0.5)] hover:shadow-[0_0_30px_rgba(0,230,168,0.8)] transition-all"
        >
          Continue to Secure Checkout
          <ArrowRight className="w-5 h-5" />
        </motion.a>

        {/* Footer */}
        <div className="mt-10 text-xs text-gray-500">
          Secure checkout powered by Stripe.
          <br />
          No account required.
        </div>
      </div>
    </main>
  );
}
