"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Gauge,
  Wrench,
  Code2,
  Download,
} from "lucide-react";

const features = [
  {
    title: "Solo-built. Production-minded.",
    description:
      "Ark & Mile is built by one developer (me). Every release is designed to be stable, fast, and worth keeping installed.",
    icon: <Sparkles className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-2",
  },
  {
    title: "Minimal overhead, maximum utility",
    description:
      "Dark-mode first. Borderless, modern UI. No bloat. Low resource usage by design.",
    icon: <Gauge className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-1",
  },
  {
    title: "Tools that solve real tasks",
    description:
      "Utilities for developers, IT work, and daily workflows—built to remove friction, not add steps.",
    icon: <Wrench className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-1",
  },
  {
    title: "CodeDeaver: the snippet vault",
    description:
      "Capture, organize, and inject code fast. Ghost Mode, conflict warnings, and a clean vault workflow built for speed.",
    icon: <Code2 className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-2",
  },
  {
    title: "Security-forward by default",
    description:
      "No sketchy installers. No hidden processes. The goal is clean software you can trust on your daily machine.",
    icon: <Shield className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-2",
  },
  {
    title: "Free utilities + upgrades when it counts",
    description:
      "Color Viewer and Font Viewer are free, lightweight tools. Flagship apps offer optional upgrades for power features.",
    icon: <Download className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-1",
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full bg-gunmetal py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[18%] left-[20%] w-72 h-72 bg-seagreen/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[10%] right-[18%] w-80 h-80 bg-seagreen/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built for the <span className="text-seagreen">Long Haul</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I build software that stays useful: fast, clean, and maintained—without the bloat
            that usually comes with “productivity” apps.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-seagreen/50 transition-colors ${feature.className}`}
            >
              <div className="mb-4 p-3 bg-gunmetal w-fit rounded-xl border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
