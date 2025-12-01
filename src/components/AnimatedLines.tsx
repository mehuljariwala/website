"use client";

import { motion } from "framer-motion";

export function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal animated lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${12 + i * 15}%`,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(16, 163, 127, 0.15) 20%, rgba(26, 127, 100, 0.3) 50%, rgba(16, 163, 127, 0.15) 80%, transparent 100%)",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: 1 }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Vertical pulsing lines */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${8 + i * 10}%`,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(26, 127, 100, 0.1) 30%, rgba(16, 163, 127, 0.2) 50%, rgba(26, 127, 100, 0.1) 70%, transparent 100%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Diagonal flowing lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`d-line-${i}`}
          className="absolute h-px"
          style={{
            width: "150%",
            top: `${20 + i * 20}%`,
            left: "-25%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.2) 30%, rgba(16, 163, 127, 0.3) 50%, rgba(6, 182, 212, 0.2) 70%, transparent 100%)",
            transform: `rotate(${-15 + i * 3}deg)`,
          }}
          initial={{ x: "-50%" }}
          animate={{ x: "50%" }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Floating particles/dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${5 + ((i * 5) % 90)}%`,
            top: `${8 + ((i * 7) % 85)}%`,
            background:
              i % 2 === 0
                ? "rgba(16, 163, 127, 0.4)"
                : "rgba(26, 127, 100, 0.3)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#10a37f]/10 blur-3xl"
        style={{ top: "-10%", left: "-5%" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#1a7f64]/10 blur-3xl"
        style={{ bottom: "-5%", right: "-5%" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-[#10a37f]/5 blur-3xl"
        style={{ top: "40%", right: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
