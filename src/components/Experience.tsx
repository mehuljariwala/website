"use client";

import { useRef } from "react";
import { Calendar, Building2, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

type ExperienceLevel = "Expert" | "Senior" | "Intermediate" | "Beginner";

const levelColors: Record<ExperienceLevel, string> = {
  Expert: "bg-[#10a37f] text-white",
  Senior: "bg-blue-500 text-white",
  Intermediate: "bg-amber-500 text-white",
  Beginner: "bg-gray-400 text-white",
};

interface Role {
  title: string;
  type: string;
  period: string;
  duration: string;
  location?: string;
  description?: string;
  skills?: string[];
}

interface ExperienceItem {
  company: string;
  logo?: string;
  totalDuration: string;
  level: ExperienceLevel;
  isCurrent: boolean;
  roles: Role[];
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: ExperienceItem[] = [
    {
      company: "FasterOutcomes",
      totalDuration: "4 mos",
      level: "Expert",
      isCurrent: true,
      roles: [
        {
          title: "Lead Full Stack + Gen AI/ML - Founding Engineer",
          type: "Full-time",
          period: "Aug 2025 - Present",
          duration: "4 mos",
          location: "Remote",
          description:
            "Building a next-generation Legal AI platform that dramatically reduces lawyer workflows and converts raw legal data into actionable insights. The system leverages GenAI, RAG, LLMs, Temporal Workflow and custom models to handle heavy-load documents, automate research, and streamline case preparation. GenAI powers draft generation, intelligent clause suggestions, redlining, automated brief drafting, deposition question generation, and courtroom-ready summaries. The platform is engineered for scalability using microservices architecture with chunk-based ingestion, vector databases, and ElasticSearch for fast, accurate retrieval.",
          skills: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "Java",
            "LangChain",
            "LangGraph",
            "OpenRouter",
            "ElasticSearch",
            "Vector DBs",
            "Temporal",
            "n8n",
            "AWS",
            "GenAI",
            "MLOps",
          ],
        },
      ],
    },
    {
      company: "IBM",
      totalDuration: "8 mos",
      level: "Expert",
      isCurrent: false,
      roles: [
        {
          title: "Staff Software Engineer - IBM Labs",
          type: "Full-time",
          period: "Jan 2025 - Aug 2025",
          duration: "8 mos",
          location: "Bengaluru, Karnataka, India · On-site",
          description:
            "Building a next-generation analytics platform similar to Adobe, designed to track user interactions and navigation paths, transforming vast amounts of raw data into meaningful insights and dynamic dashboards. The platform captures user events in real time, providing businesses with deep visibility into customer behavior, engagement patterns, and conversion metrics. The system is architected for scalability and efficiency, utilizing a microservices-based approach with event-driven architectures and AI-driven insights.",
          skills: [
            "Next.js",
            "React.js",
            "Node.js",
            "Segment",
            "DB2",
            "Firebase",
            "Java",
            "Python",
            "LLM models",
            "LangChain",
            "Monorepo",
            "Microservices",
          ],
        },
      ],
    },
    {
      company: "Publicis Sapient",
      totalDuration: "2 yrs 9 mos",
      level: "Expert",
      isCurrent: false,
      roles: [
        {
          title: "Senior Software Engineer",
          type: "Full-time",
          period: "Apr 2022 - Dec 2024",
          duration: "2 yrs 9 mos",
          location: "Greater Bengaluru Area",
          description:
            "Worked as a Frontend Engineer (React + Node.js) to help build and scale the online grocery shopping websites for the UK, Central Europe and the Asia Pacific businesses. Helped build a new delivery system for lightweight products in Thailand using mopeds on-demand within an hour. Worked extensively on the interactive Bing Maps component used by thousands of users. Developed a third-party courier-based delivery system of essential groceries for vulnerable and remotely located customers in central European countries.",
          skills: [
            "React JS",
            "Next JS",
            "Node JS",
            "Optimizely",
            "SSR",
            "GraphQL",
            "Material UI",
            "Chakra UI",
            "Redux",
            "Jenkins",
            "CI/CD",
          ],
        },
      ],
    },
    {
      company: "OKRs @ fitbots - Software, Certification & Coaching",
      totalDuration: "3 yrs 9 mos",
      level: "Senior",
      isCurrent: false,
      roles: [
        {
          title: "Senior Software Engineer - Founding Team",
          type: "Full-time",
          period: "Apr 2021 - May 2022",
          duration: "1 yr 2 mos",
          location: "Bangalore Urban, Karnataka, India",
          description:
            "Full-stack Developer. Objectives and Key Results (OKRs) is a goal-setting methodology used to define and track progress towards specific, measurable objectives. OKRs are typically set at the company, team, and individual level, and they are used to align and focus the efforts of all members of an organization towards a common goal.",
          skills: [
            "React JS",
            "Next JS",
            "Redux",
            "Angular",
            "Node JS",
            "JavaScript",
            "TypeScript",
            "MySQL",
            "PostgreSQL",
            "MSSQL",
            "GIT",
            "Jira",
          ],
        },
        {
          title: "Product Engineer",
          type: "Full-time",
          period: "May 2019 - Aug 2021",
          duration: "2 yrs 4 mos",
          location: "Bangalore",
        },
        {
          title: "Project Intern",
          type: "Internship",
          period: "Sep 2018 - May 2019",
          duration: "9 mos",
          location: "Bengaluru, Karnataka, India",
        },
      ],
    },
  ];

  return (
    <section ref={ref} id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#10a37f] font-medium mb-4">EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Career progression and professional experience
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl border p-6 shadow-sm ${
                exp.isCurrent
                  ? "border-[#10a37f]/30 ring-1 ring-[#10a37f]/10"
                  : "border-gray-200"
              }`}
            >
              {/* Company Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo/Initial */}
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-gray-400" size={28} />
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {exp.totalDuration}
                        {exp.roles.length > 1 && ` · ${exp.roles.length} roles`}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          levelColors[exp.level]
                        }`}
                      >
                        {exp.level}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="relative ml-7 border-l-2 border-gray-100 pl-8 space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[41px] w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                        roleIndex === 0 && exp.isCurrent
                          ? "bg-[#10a37f]"
                          : "bg-gray-300"
                      }`}
                    />

                    {/* Role Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {role.title}
                      </h4>
                      <p className="text-sm text-[#10a37f] font-medium mt-0.5">
                        {role.type}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {role.period} · {role.duration}
                        </span>
                        {role.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {role.location}
                          </span>
                        )}
                      </div>

                      {role.description && (
                        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                          {role.description}
                        </p>
                      )}

                      {role.skills && role.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {role.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-slate-100 rounded-md text-xs text-gray-600 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
