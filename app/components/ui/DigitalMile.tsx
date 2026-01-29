"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function DigitalMile() {
  const { scrollYProgress } = useScroll(); // whole page
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full z-0 pointer-events-none">
      {/* rail */}
      <div className="absolute top-0 left-0 h-full w-[2px] bg-white/5" />

      {/* active */}
      <motion.div
        style={{ height }}
        className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-seagreen via-seagreen to-transparent shadow-[0_0_15px_#00E6A8]"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-seagreen rounded-full shadow-[0_0_20px_#00E6A8] blur-[1px]" />
      </motion.div>
    </div>
  );
}
