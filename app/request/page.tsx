"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Send, ShieldCheck } from "lucide-react";

export default function RequestPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<"idle" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone("idle");
    setMsg("");

    const fd = new FormData(e.currentTarget);

    // Honeypot field (bots fill it, humans won’t)
    const website = String(fd.get("website") ?? "");

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      problem: String(fd.get("problem") ?? "").trim(),
      details: String(fd.get("details") ?? "").trim(),
      website,
    };

    if (!payload.name || !payload.email || !payload.problem) {
      setDone("err");
      setMsg("Please fill in name, email, and the problem.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setDone("err");
        setMsg(data.message ?? "Something blocked the request. Try again.");
        return;
      }

      setDone("ok");
      setMsg("Request received. If it’s a good fit, I’ll reply to your email.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setDone("err");
      setMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gunmetal pt-28 pb-20 px-4 flex justify-center">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-widest uppercase">
            <Wrench className="w-4 h-4 text-seagreen" />
            Request a Tool
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Describe the <span className="text-seagreen">problem</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            I build practical software as a solo developer. If you’ve got a task
            that needs automation, cleanup, or speed — send it here.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
        >
          {/* Honeypot (hidden) */}
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                name="name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-seagreen/50"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email">
              <input
                name="email"
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-seagreen/50"
                placeholder="you@domain.com"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="What do you need the tool to do?">
              <input
                name="problem"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-seagreen/50"
                placeholder="Example: ‘Rename hundreds of files based on a rule…’"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Extra context (optional)">
              <textarea
                name="details"
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-seagreen/50"
                placeholder="What system? What inputs/outputs? Any constraints?"
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4" />
              Anti-spam protected. I only use your email to reply.
            </div>

            <button
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-seagreen text-gunmetal font-bold hover:bg-white transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </div>

          {msg && (
            <div
              className={`mt-4 text-sm ${
                done === "ok" ? "text-seagreen" : "text-red-300"
              }`}
            >
              {msg}
            </div>
          )}
        </motion.form>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
        {label}
      </div>
      {children}
    </label>
  );
}
