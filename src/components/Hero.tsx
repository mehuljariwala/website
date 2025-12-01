"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedLines } from "./AnimatedLines";
import { TypeWriter } from "./TypeWriter";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <AnimatedLines />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#10a37f] font-medium mb-4"
        >
          Mehul Jariwala
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 text-lg md:text-xl mb-6"
        >
          Full-Stack Engineer & AI/ML Specialist
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
        >
          I Build{" "}
          <TypeWriter
            words={["Web Apps", "AI Agents", "Full-Stack Products", "Scalable Systems"]}
          />
          <br />
          <span className="text-gray-400">Fast & Reliable</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          From modern web applications and AI-powered platforms to enterprise solutions —
          7+ years of shipping production-ready software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "Next.js", "Node.js", "Python", "AI/ML", "GenAI", "LangChain", "AWS"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, borderColor: "#10a37f" }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
