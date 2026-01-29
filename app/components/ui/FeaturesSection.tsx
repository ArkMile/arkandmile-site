"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Layers, Globe } from "lucide-react";

const features = [
  {
    title: "Unbreakable Security",
    description: "Military-grade encryption for every data packet that enters the Ark.",
    icon: <Shield className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-2", // This one is WIDE (2 slots)
  },
  {
    title: "Global Velocity",
    description: "Edge network latency under 50ms.",
    icon: <Globe className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-1", // This one is SMALL (1 slot)
  },
  {
    title: "Scalable Architecture",
    description: "Expand your infrastructure automatically as traffic spikes.",
    icon: <Layers className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-1",
  },
  {
    title: "Real-time Processing",
    description: "Data streams processed the microsecond they arrive.",
    icon: <Zap className="h-8 w-8 text-seagreen" />,
    className: "md:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full bg-gunmetal py-20 relative overflow-hidden">
        
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-seagreen/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built for the <span className="text-seagreen">Long Haul</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our infrastructure is designed to withstand extreme digital loads while maintaining zero-trust security standards.
          </p>
        </div>

        {/* The Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }} // Subtle Pop on Hover
              className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-seagreen/50 transition-colors ${feature.className}`}
            >
              <div className="mb-4 p-3 bg-gunmetal w-fit rounded-xl border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}