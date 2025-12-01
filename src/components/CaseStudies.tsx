"use client";

import { useRef } from "react";
import { Rocket, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      title: "AI-Powered Contact Enrichment Platform",
      client: "B2B SaaS Company",
      industry: "Sales Tech",
      result: "80% faster",
      resultSecondary: "Data enrichment speed",
      impact:
        "Transformed their sales pipeline by automating lead research. The AI agent now enriches 10,000+ contacts daily, finding verified emails, LinkedIn profiles, and company data with 95% accuracy.",
      businessValue:
        "Reduced SDR manual research time from 2 hours to 15 minutes per lead batch. Sales team closed 40% more deals in Q3.",
      tech: ["LangChain", "Claude API", "Next.js", "PostgreSQL"],
    },
    {
      title: "Enterprise Document Search & RAG System",
      client: "Fortune 500 Financial Services",
      industry: "Finance",
      result: "50K+ docs",
      resultSecondary: "Searchable in <1 second",
      impact:
        "Built an intelligent document retrieval system that understands natural language queries across 50,000+ regulatory documents, policies, and internal guidelines.",
      businessValue:
        "Compliance team reduced document lookup time by 90%. Avoided $2M+ in potential regulatory fines by enabling instant policy verification.",
      tech: ["Elasticsearch", "Python", "LangChain", "AWS", "OpenAI"],
    },
    {
      title: "Multi-Integration Data Unification Platform",
      client: "Series B Startup",
      industry: "MarTech",
      result: "5 hrs/week",
      resultSecondary: "Time saved per team member",
      impact:
        "Consolidated data from 12 different tools (HubSpot, Salesforce, Stripe, Intercom, etc.) into a single real-time dashboard with AI-powered insights.",
      businessValue:
        "Enabled data-driven decisions that increased MRR by 35%. Leadership now has instant access to unified business metrics.",
      tech: ["Next.js", "Node.js", "GCP", "BigQuery", "dbt"],
    },
    {
      title: "Customer Support AI Agent",
      client: "E-commerce Platform",
      industry: "Retail",
      result: "70%",
      resultSecondary: "Queries auto-resolved",
      impact:
        "Deployed an AI-powered support agent that handles order tracking, returns, product questions, and common issues autonomously using RAG over their knowledge base.",
      businessValue:
        "Reduced support ticket volume by 70%, saving $150K annually in support costs. CSAT scores improved from 3.8 to 4.6 stars.",
      tech: ["GPT-4", "Pinecone", "Python", "React", "Zendesk API"],
    },
    {
      title: "Intelligent Content Generation Pipeline",
      client: "Digital Marketing Agency",
      industry: "Marketing",
      result: "10x",
      resultSecondary: "Content output increase",
      impact:
        "Created an AI workflow that generates SEO-optimized blog posts, social media content, and email campaigns from brief inputs, maintaining brand voice consistency.",
      businessValue:
        "Agency scaled content production from 20 to 200+ pieces monthly without adding writers. Client retention increased by 45%.",
      tech: ["Claude API", "LangChain", "Next.js", "Supabase"],
    },
    {
      title: "Predictive Analytics Dashboard",
      client: "Healthcare SaaS",
      industry: "Healthcare",
      result: "25%",
      resultSecondary: "Improved patient outcomes",
      impact:
        "Built ML models to predict patient no-shows, resource allocation needs, and treatment outcome probabilities. Integrated with their existing EHR system.",
      businessValue:
        "Clinics reduced no-show rates by 25% and optimized scheduling, generating $500K additional annual revenue per clinic.",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "AWS"],
    },
  ];

  return (
    <section ref={ref} id="work" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">FEATURED WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real projects with measurable impact — from AI agents to data
            platforms
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-[#10a37f] bg-[#10a37f]/10 px-2 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-xs text-gray-400">{study.client}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
                {study.title}
              </h3>

              {/* Key Metric */}
              <div className="bg-gradient-to-br from-[#ececf1] to-[#f7f7f8] rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Rocket className="text-[#10a37f]" size={18} />
                  <p className="text-2xl font-bold text-gray-900">
                    {study.result}
                  </p>
                </div>
                <p className="text-sm text-gray-600">{study.resultSecondary}</p>
              </div>

              {/* Impact Description */}
              <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow">
                {study.impact}
              </p>

              {/* Business Value */}
              <div className="bg-[#10a37f]/5 border-l-2 border-[#10a37f] pl-3 py-2 mb-4">
                <p className="text-xs font-medium text-gray-700">
                  💰 {study.businessValue}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {study.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-100 rounded text-xs text-gray-600 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Have a similar challenge? Let&apos;s discuss how AI can help.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-[#10a37f] font-medium hover:underline"
          >
            Start a conversation <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
