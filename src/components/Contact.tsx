"use client";

import { useState, useEffect } from "react";
import { Calendar, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
import { AnimatedSection } from "./AnimatedSection";
import { scaleIn, staggerContainer } from "./animations";

// Calendly URL
const CALENDLY_URL = "https://calendly.com/mjariwala98/15min";

// Custom hook for client-side only rendering
function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsClient(true));
  }, []);

  return isClient;
}

export function Contact() {
  const isClient = useClientOnly();

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[#10a37f] font-medium mb-4">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Let&apos;s Build <span className="gradient-text">Something</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Have an AI project in mind?
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6"
          >
            {/* Book a Call - Calendly Popup */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-2xl p-6 flex flex-col items-center gap-4 transition-all bg-[#10a37f] text-white shadow-lg cursor-pointer"
            >
              <Calendar size={32} />
              <div>
                <p className="font-semibold">Book a Call</p>
                <p className="text-sm text-white/80">30 min chat</p>
              </div>
              {isClient && (
                <PopupButton
                  url={CALENDLY_URL}
                  rootElement={document.body}
                  text=""
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              )}
            </motion.div>

            {/* Email */}
            <motion.a
              href="mailto:mehuljari.dev@gmail.com"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl p-6 flex flex-col items-center gap-4 transition-all bg-white border border-gray-200 shadow-sm"
            >
              <Mail size={32} className="text-[#10a37f]" />
              <div>
                <p className="font-semibold">Email Me</p>
                <p className="text-sm text-gray-600">mehuljari.dev@gmail.com</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/mehul-jariwala-352a01132/"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl p-6 flex flex-col items-center gap-4 transition-all bg-white border border-gray-200 shadow-sm"
            >
              <Linkedin size={32} className="text-[#10a37f]" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-600">Let&apos;s connect</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
