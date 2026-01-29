"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // When drawer opens, focus the close button
  useEffect(() => {
    if (open) {
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
  }, [open]);

  const navLinks = [
    { href: "/products", label: "MODULES", sub: "Tools & downloads" },
    { href: "/request", label: "REQUEST INTEL", sub: "Custom software request" },
    { href: "/donate", label: "DONATE", sub: "Support the build" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 h-20 border-b border-white/5 bg-gunmetal/80 backdrop-blur-md flex items-center justify-center"
      >
        <div className="w-full max-w-7xl px-4 md:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Website Header, Dark Mode Apps, black t shirts.svg"
              alt="Ark & Mile"
              width={180}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              MODULES
            </Link>
            <Link
              href="/request"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              REQUEST INTEL
            </Link>
            <Link
              href="/donate"
              className="text-sm font-medium text-gray-300 hover:text-seagreen transition-colors"
            >
              DONATE
            </Link>
          </div>

          {/* Desktop Action Button */}
          <Link
            href="/products"
            className="hidden md:block px-5 py-2 bg-seagreen text-gunmetal text-xs font-bold rounded-full hover:bg-white transition-colors"
          >
            GET ACCESS
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer Panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed top-0 right-0 z-[70] h-dvh w-[86vw] max-w-sm border-l border-white/10 bg-gunmetal/90 backdrop-blur-xl shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Drawer Header */}
              <div className="h-20 px-5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  {/* Minimal mark (you can swap to a logo-mark.svg later) */}
                  <div className="h-9 w-9 rounded-2xl bg-seagreen/10 border border-seagreen/30 shadow-[0_0_20px_rgba(0,230,168,0.15)] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-seagreen shadow-[0_0_14px_#00E6A8]" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-white font-semibold text-sm">Ark &amp; Mile</div>
                    <div className="text-gray-400 text-xs font-mono tracking-wider uppercase">
                      Digital Mile
                    </div>
                  </div>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="relative px-5 py-6">
                {/* UNIQUE TWIST: "Digital Mile" rail inside drawer */}
                <div className="absolute left-5 top-6 bottom-6 w-[2px] bg-white/5">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-seagreen/80 to-transparent shadow-[0_0_18px_rgba(0,230,168,0.35)]" />
                </div>

                <div className="pl-6">
                  <div className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
                    Navigation
                  </div>

                  <div className="space-y-2">
                    {navLinks.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 * idx }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between px-4 py-4"
                        >
                          <div>
                            <div className="text-white font-semibold text-sm">
                              {item.label}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {item.sub}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-seagreen" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <div className="mt-6">
                    <Link
                      href="/products"
                      onClick={() => setOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-seagreen text-gunmetal font-bold py-3 px-4 rounded-2xl hover:bg-white transition-colors shadow-[0_0_26px_rgba(0,230,168,0.18)]"
                    >
                      GET ACCESS
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="mt-3 text-[11px] text-gray-400 leading-relaxed">
                      Built for power users. Minimal bloat. Maximum control.
                    </div>
                  </div>

                  {/* Footer micro-links */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href="/support"
                      onClick={() => setOpen(false)}
                      className="text-xs text-gray-400 hover:text-seagreen transition-colors"
                    >
                      Support
                    </Link>
                    <div className="text-xs text-gray-500 font-mono">
                      ARK//MILE
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
