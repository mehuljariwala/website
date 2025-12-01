"use client";

import { useRef } from "react";
import { Zap, Target, TrendingUp, Code, Rocket, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function WhyAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aiColumns = [
    {
      icon: <Zap className="text-amber-500" size={28} />,
      metric: "10x",
      metricSuffix: " Faster",
      headline: "Automate Workflows",
      description:
        "AI agents work 24/7, processing thousands of tasks in minutes instead of hours.",
      useCase: "2 hours → 2 minutes",
    },
    {
      icon: <Target className="text-emerald-500" size={28} />,
      metric: "95",
      metricSuffix: "%+ Accuracy",
      headline: "Smarter Decisions",
      description:
        "LLM-powered systems learn from your data, reducing errors and providing instant insights.",
      useCase: "Instant contextual answers",
    },
    {
      icon: <TrendingUp className="text-blue-500" size={28} />,
      metric: "∞",
      metricSuffix: " Scale",
      headline: "Unlimited Growth",
      description:
        "AI systems scale infinitely without adding headcount or infrastructure costs.",
      useCase: "Same cost, unlimited volume",
    },
  ];

  const softwareColumns = [
    {
      icon: <Rocket className="text-purple-500" size={28} />,
      metric: "Fast",
      metricSuffix: " Delivery",
      headline: "Ship Products Quickly",
      description:
        "From idea to production in weeks, not months. Agile development with rapid iterations.",
      useCase: "MVP in 2-4 weeks",
    },
    {
      icon: <Code className="text-cyan-500" size={28} />,
      metric: "Clean",
      metricSuffix: " Code",
      headline: "Maintainable Architecture",
      description:
        "Well-structured, documented code that your team can easily understand and extend.",
      useCase: "Built for long-term success",
    },
    {
      icon: <Shield className="text-rose-500" size={28} />,
      metric: "99.9",
      metricSuffix: "% Uptime",
      headline: "Reliable & Secure",
      description:
        "Production-grade systems with proper error handling, security, and monitoring.",
      useCase: "Enterprise-ready solutions",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">THE IMPACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why <span className="gradient-text">AI + Software</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Combining modern software engineering with AI capabilities to deliver measurable results
          </p>
        </AnimatedSection>

        {/* AI Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#10a37f]/10 rounded-lg flex items-center justify-center">
              <Zap className="text-[#10a37f]" size={18} />
            </span>
            AI & Automation
          </h3>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {aiColumns.map((col, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(16, 163, 127, 0.1)",
                }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {col.icon}
                  </motion.div>
                  <p className="text-2xl font-bold gradient-text">
                    {col.metric}
                    <span className="text-lg">{col.metricSuffix}</span>
                  </p>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {col.headline}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{col.description}</p>
                <div className="bg-[#ececf1] rounded-lg px-3 py-1.5 inline-block">
                  <p className="text-xs text-[#10a37f] font-medium">
                    {col.useCase}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Software Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Code className="text-blue-500" size={18} />
            </span>
            Software Engineering
          </h3>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {softwareColumns.map((col, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {col.icon}
                  </motion.div>
                  <p className="text-2xl font-bold text-blue-600">
                    {col.metric}
                    <span className="text-lg">{col.metricSuffix}</span>
                  </p>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {col.headline}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{col.description}</p>
                <div className="bg-blue-50 rounded-lg px-3 py-1.5 inline-block">
                  <p className="text-xs text-blue-600 font-medium">
                    {col.useCase}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
