"use client";

import { useRef } from "react";
import { Bot, Database, Code, GitBranch, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { scaleIn, staggerContainer } from "./animations";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Bot size={28} />,
      title: "AI Agent Development",
      description:
        "Custom LLM-powered agents using ReAct patterns and tool-calling architectures.",
    },
    {
      icon: <Database size={28} />,
      title: "RAG & Knowledge Systems",
      description:
        "Vector databases, embeddings, and intelligent search systems.",
    },
    {
      icon: <Code size={28} />,
      title: "Full-Stack Development",
      description:
        "Next.js, React, Node.js, Python — clean architecture that ships.",
    },
    {
      icon: <GitBranch size={28} />,
      title: "Data Integration",
      description:
        "API consolidation, ETL pipelines, and unified data platforms.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "AI Strategy & Advisory",
      description:
        "Architecture reviews, vendor evaluation, and implementation roadmaps.",
    },
  ];

  return (
    <section ref={ref} id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What I <span className="gradient-text">Build</span>
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, borderColor: "#10a37f" }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm group cursor-pointer transition-all"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 bg-[#ececf1] rounded-xl flex items-center justify-center text-[#10a37f] mb-6 group-hover:bg-[#e5e5e9] transition-colors"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
