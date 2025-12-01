"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  words: string[];
}

export function TypeWriter({ words }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.span
      key={currentWordIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="gradient-text"
    >
      {words[currentWordIndex]}
    </motion.span>
  );
}
