"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow AI",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      quote:
        "Mehul transformed our customer support with an AI agent that handles 70% of queries automatically. The RAG system he built understands context like a human would. Absolutely game-changing for our team.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "DataPulse Analytics",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "We needed someone who could actually ship production-ready AI, not just prototypes. Mehul delivered a full LangChain pipeline in 6 weeks that our team now relies on daily. His technical depth is unmatched.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      company: "Nexus Health",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "The document search system Mehul built handles our 50K+ medical documents with incredible accuracy. What used to take researchers hours now takes seconds. He's my go-to for anything AI/ML.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "CTO",
      company: "FinStack",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "Mehul doesn't just write code—he architects solutions. His AI integration saved us 200+ engineering hours monthly. The code quality and documentation were exceptional. Highly recommend.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real feedback from teams I&apos;ve helped build AI-powered solutions
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-gray-100 rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-[#10a37f]/20 font-serif">
                &ldquo;
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-contain border-2 border-white shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at{" "}
                    <span className="text-[#10a37f]">
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "15+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "8+", label: "Years Experience" },
            { value: "5⭐", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="px-6">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
