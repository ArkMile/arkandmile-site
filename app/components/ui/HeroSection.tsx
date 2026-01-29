"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="h-screen w-full bg-gunmetal flex md:items-center md:justify-center relative overflow-hidden">
      {/* 1) Cyber Grid Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-gunmetal bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 2) Spotlight Fade (Vignette) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gunmetal [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 3) Subtle “scanline shimmer” twist (professional, not loud) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none z-[1]"
      >
        <motion.div
          initial={{ y: "-30%" }}
          animate={{ y: "130%" }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent blur-[1px]"
        />
      </motion.div>

      {/* 4) Content Layer */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-24 md:pt-0 flex flex-col items-center">
        {/* Solo-builder status pill (iconic + credible) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-seagreen/50 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-seagreen" />
          </span>
          <span className="text-xs md:text-sm font-mono text-gray-300 uppercase tracking-widest">
            Solo-built • Designed, shipped, maintained by one developer
          </span>
        </motion.div>

        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0.5, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-br from-white to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          ARK <span className="text-seagreen">&</span> MILE
        </motion.h1>

        {/* Core value statement */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-xl md:text-2xl font-semibold text-white"
        >
          Purpose-built software for real-world problems.
        </motion.p>

        {/* Supporting copy (solo voice, no hype) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 font-normal text-base text-gray-300 max-w-2xl text-center mx-auto leading-relaxed"
        >
          Ark &amp; Mile is a solo-built software studio focused on practical tools, clean design,
          and systems that actually get used — not over-marketed platforms.
          <span className="block mt-3 text-gray-400">
            Each tool is built with reliability, security, and real-world performance in mind —
            no unnecessary complexity, no inflated claims.
          </span>
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/products"
            className="px-8 py-3 bg-seagreen text-gunmetal font-bold rounded-full shadow-[0_0_15px_rgba(0,230,168,0.35)] hover:shadow-[0_0_30px_rgba(0,230,168,0.65)] transition-all"
          >
            VIEW SOFTWARE
          </Link>

          <Link
            href="/request"
            className="px-8 py-3 rounded-full border border-white/10 bg-white/[0.04] text-white font-semibold hover:bg-white/[0.08] transition-all"
          >
            REQUEST A SOLUTION
          </Link>
        </motion.div>

        {/* Micro-credibility footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 text-xs text-gray-500 font-mono uppercase tracking-widest text-center"
        >                                                                                                                                                                                                                       
            Thoughtfully designed • Minimal overhead • Built to stay useful

        </motion.div>
      </div>
    </section>
  );
}
