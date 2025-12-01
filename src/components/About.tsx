"use client";

import { CheckCircle, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatedSection } from "./AnimatedSection";

// Dynamic import for GitHubCalendar (client-side only)
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Loading GitHub activity...</span>
      </div>
    ),
  }
);

// GitHub username
const GITHUB_USERNAME = "mehuljariwala";

// Custom icons for platforms not in lucide-react
const MediumIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const LeetCodeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/mehul-jariwala-352a01132/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/mehuljariwala", label: "GitHub" },
  { icon: Mail, href: "mailto:mehuljari.dev@gmail.com", label: "Email" },
  { icon: MediumIcon, href: "https://medium.com/@mjariwala98", label: "Medium" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/mjariwala98/", label: "LeetCode" },
];

export function About() {
  const credentials = [
    { icon: <CheckCircle size={20} />, label: "8+ Years Experience" },
    { icon: <CheckCircle size={20} />, label: "IBM Alumni" },
    { icon: <CheckCircle size={20} />, label: "Lead Engineer" },
    { icon: <CheckCircle size={20} />, label: "AI/ML Specialist" },
  ];

  // Custom theme for GitHub calendar to match site colors
  const githubTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-[#10a37f] font-medium mb-4">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Hi, I&apos;m <span className="gradient-text">Mehul</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I&apos;m a full-stack engineer with 8+ years of experience
                shipping software across industries.
              </p>
              <p>
                I focus on AI/ML engineering: building LLM-powered agents, RAG
                systems, and production-grade AI integrations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <span className="text-[#10a37f]">{cred.icon}</span>
                    <span className="text-sm text-gray-700">{cred.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={{ scale: 1.2, color: "#10a37f" }}
                    className="p-3 bg-white border border-gray-200 rounded-lg text-gray-600"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* GitHub Contributions Graph */}
        <AnimatedSection className="mt-16">
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  GitHub Activity
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  432+ contributions in the last year
                </p>
              </div>
              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Github size={16} />
                View Profile
              </motion.a>
            </div>
            <div className="overflow-x-auto">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="light"
                theme={githubTheme}
                fontSize={12}
                year={2024}
                blockSize={12}
                blockMargin={4}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
