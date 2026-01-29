"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, ShieldCheck, CreditCard } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fuel the <span className="text-seagreen">Ark</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your contributions keep the servers running and the code open-source. 
            Choose your level of support for the Digital Mile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <Coffee className="w-10 h-10 text-seagreen mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Coffee Protocol</h3>
            <p className="text-seagreen text-2xl font-bold mb-4">$5</p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all font-bold">SUPPORT</button>
          </motion.div>

          {/* Tier 2 - Main Donation */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-seagreen/10 border border-seagreen/50 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-seagreen text-gunmetal text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <Heart className="w-10 h-10 text-seagreen mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">System Maintenance</h3>
            <p className="text-seagreen text-2xl font-bold mb-4">$25</p>
            <button className="w-full py-3 bg-seagreen text-gunmetal rounded-xl transition-all font-bold hover:shadow-[0_0_20px_#00E6A8]">SUPPORT</button>
          </motion.div>

          {/* Tier 3 */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <ShieldCheck className="w-10 h-10 text-seagreen mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Core Defender</h3>
            <p className="text-seagreen text-2xl font-bold mb-4">$100</p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all font-bold">SUPPORT</button>
          </motion.div>
        </div>

        {/* Stripe Info Box */}
        <div className="mt-16 p-6 border border-dashed border-white/20 rounded-2xl bg-white/[0.02] flex items-center justify-center gap-4">
          <CreditCard className="text-gray-500" />
          <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">
            SECURE STRIPE GATEWAY ATTACHED
          </p>
        </div>
      </div>
    </main>
  );
}