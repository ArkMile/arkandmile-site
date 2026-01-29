"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Lock } from "lucide-react";

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-gunmetal pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-seagreen/10 text-seagreen px-4 py-1 rounded-full text-xs font-mono mb-6"
          >
            <Lock className="w-3 h-3" />
            SECURE_CHANNEL_OPEN
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Identify Your <span className="text-seagreen">Need</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Do you require a specific digital tool? Transmit your requirements below. 
            If the mission aligns, we will build it.
          </p>
        </div>

        {/* The "Anti-Spam" Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form className="space-y-6">
            
            {/* Mission Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Operation Type</label>
              <select className="w-full bg-gunmetal border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-seagreen/50">
                <option>Custom Software Tool</option>
                <option>Security Consultation</option>
                <option>Infrastructure Upgrade</option>
                <option>Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Mission Parameters (Description)</label>
              <textarea 
                rows={4}
                className="w-full bg-gunmetal border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-seagreen/50"
                placeholder="Describe the software you need in detail..."
              ></textarea>
            </div>

            {/* Contact Intel */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Contact Frequency (Email)</label>
              <input 
                type="email" 
                className="w-full bg-gunmetal border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-seagreen/50"
                placeholder="commander@example.com"
              />
            </div>

            <button className="w-full bg-seagreen text-gunmetal font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors">
              <Send className="w-4 h-4" />
              TRANSMIT REQUEST
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              *All transmissions are encrypted. We do not respond to solicitations or unauthorized spam bots.
            </p>
          </form>
        </motion.div>

      </div>
    </main>
  );
}