"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function Appreciation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const appreciations = [
    {
      image: "/appreciation/jain-award.jpg",
      caption: "Receiving the Gold Medal at Jain University Convocation",
    },
    {
      image: "/appreciation/quickerhq-hero.png",
      caption: '"Our hero!" - Emma, Quickerhq',
    },
    {
      image: "/appreciation/houck-appreciation.png",
      caption: '"You have really been a great addition to the team!" - Houck',
    },
    {
      image: "/appreciation/lottie-feedback.png",
      caption: '"Determined/amazing engineer" - Lottie Casey, Product Team',
    },
    {
      image: "/appreciation/community-recognition.png",
      caption: '"Excellent community member" - Benjamin Mcgeachie',
    },
    {
      image: "/appreciation/tesco-award.jpg",
      caption: "Live 20:80 Award - Tesco Rewards & Recognition",
    },
    {
      image: "/appreciation/ibm-recognition-1.jpg",
      caption: "IBM BluePoints Recognition - Bonsai Project",
    },
    {
      image: "/appreciation/ibm-recognition-2.jpg",
      caption:
        '"Thank you for your work on Bonsai" - Jason Brochu, IBM Sr. Engineering Manager',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Appreciation & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kind words and recognition from colleagues and organizations
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {appreciations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
