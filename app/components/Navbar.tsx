"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 h-20 border-b border-white/5 bg-gunmetal/80 backdrop-blur-md flex items-center justify-center"
      >
        <div className="w-full max-w-7xl px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <img
              src="/Website Header, Dark Mode Apps, black t shirts.svg"
              alt="Ark & Mile"
              className="
                h-12 w-auto
                opacity-[0.85]
                drop-shadow-[0_0_12px_rgba(0,230,168,0.25)]
              "
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              PRODUCTS
            </Link>
            <Link
              href="/request"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              REQUEST A BUILD
            </Link>
            <Link
              href="/donate"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              SUPPORT
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              HELP
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-seagreen text-gunmetal text-xs font-bold rounded-full hover:bg-white transition-colors"
          >
            VIEW PRODUCTS
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-in (right) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 z-50 h-full w-[84%] max-w-sm bg-gunmetal border-l border-white/10 md:hidden"
            >
              <div className="h-20 px-4 flex items-center justify-between border-b border-white/5">
                <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  Ark &amp; Mile
                </span>
                <button
                  onClick={close}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <Link
                  href="/products"
                  onClick={close}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:border-seagreen/50 transition-colors"
                >
                  <div className="text-sm font-bold">Products</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Desktop apps, utilities, and releases
                  </div>
                </Link>

                <Link
                  href="/request"
                  onClick={close}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:border-seagreen/50 transition-colors"
                >
                  <div className="text-sm font-bold">Request a Build</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Tell me what you need (anti-spam intake)
                  </div>
                </Link>

                <Link
                  href="/donate"
                  onClick={close}
                  className="p-4 rounded-2xl border border-seagreen/30 bg-seagreen/10 text-white hover:border-seagreen/60 transition-colors"
                >
                  <div className="text-sm font-bold">Support</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Fund independent development
                  </div>
                </Link>

                <Link
                  href="/support"
                  onClick={close}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:border-seagreen/50 transition-colors"
                >
                  <div className="text-sm font-bold">Help</div>
                  <div className="text-xs text-gray-400 mt-1">
                    FAQ, contact, refunds
                  </div>
                </Link>

                {/* Mobile CTA */}
                <Link
                  href="/products"
                  onClick={close}
                  className="mt-2 w-full bg-seagreen text-gunmetal font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  View products
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-6 text-[11px] text-gray-500 leading-relaxed">
                  Built solo. Maintained long-term. No fluff.
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
