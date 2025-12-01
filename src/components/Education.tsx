"use client";

import { useRef } from "react";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      year: "2019",
      degree: "Master of Computer Applications - MCA",
      field: "Computer Science",
      institution: "Jain (Deemed-to-be University)",
      location: "Bangalore, India",
      grade: "9.1/10.0",
      highlight: "Gold Medalist 🏅",
      isHighlighted: true,
    },
    {
      year: "2015",
      degree: "Bachelor's Degree - BCA",
      field: "Computer Programming, Specific Applications",
      institution: "Bhagwan Mahavir University",
      location: "Surat, India",
      grade: "8.9/10.0",
      highlight: null,
      isHighlighted: false,
    },
    {
      year: "2013",
      degree: "Standard 12th Commerce",
      field: "Higher Secondary School",
      institution: "G. & G. V. Kadiwala & M.V. Bunki Sarvajanik High School",
      location: "Surat, India",
      grade: "Distinction",
      highlight: null,
      isHighlighted: false,
    },
  ];

  return (
    <section ref={ref} id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic qualifications and achievements
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6">
                  {/* Year badge - desktop */}
                  <div className="hidden md:flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                        edu.isHighlighted
                          ? "bg-gradient-to-br from-[#10a37f] to-[#1a7f64]"
                          : "bg-gray-400"
                      }`}
                    >
                      {edu.year}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`flex-1 bg-white rounded-2xl p-6 shadow-sm border ${
                      edu.isHighlighted
                        ? "border-[#10a37f]/30 ring-1 ring-[#10a37f]/10"
                        : "border-gray-200"
                    }`}
                  >
                    {/* Year badge - mobile */}
                    <div className="md:hidden mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                          edu.isHighlighted
                            ? "bg-[#10a37f]/10 text-[#10a37f]"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Calendar size={14} />
                        {edu.year}
                      </span>
                    </div>

                    {/* Highlight badge */}
                    {edu.highlight && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-3"
                      >
                        <Award size={14} />
                        {edu.highlight}
                      </motion.div>
                    )}

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[#10a37f] font-medium mb-3">
                      {edu.field}
                    </p>

                    {/* Institution */}
                    <div className="flex items-start gap-2 text-gray-600 mb-2">
                      <GraduationCap size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>

                    {/* Grade */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg">
                      <span className="text-sm text-gray-500">Grade:</span>
                      <span
                        className={`font-bold ${
                          edu.isHighlighted ? "text-[#10a37f]" : "text-gray-700"
                        }`}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
