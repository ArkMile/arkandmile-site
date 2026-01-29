"use client";
import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="h-screen w-full bg-gunmetal flex md:items-center md:justify-center relative overflow-hidden">
      
      {/* 1. The Cyber Grid Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-gunmetal bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. The Spotlight Fade (Vignette) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gunmetal [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* 3. The Content Layer */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        
        {/* Animated Headline */}
        <motion.h1 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-white to-gray-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          ARK <span className="text-seagreen">&</span> MILE
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 font-normal text-base text-gray-300 max-w-lg text-center mx-auto"
        >
          Heavy-duty digital infrastructure. 
          Securing the modern web with unbreakable precision.
        </motion.p>

        {/* The Action Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 px-8 py-3 bg-seagreen text-gunmetal font-bold rounded-full shadow-[0_0_15px_rgba(0,230,168,0.5)] hover:shadow-[0_0_30px_rgba(0,230,168,0.8)] transition-all"
        >
          INITIALIZE SYSTEM
        </motion.button>
      </div>
    </div>
  );
}