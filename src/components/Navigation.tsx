"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-gray-900">
          MT
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#work"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-900 hover:text-[#10a37f] transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            <a
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 font-medium"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
