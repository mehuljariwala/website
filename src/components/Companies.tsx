"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeInUp, staggerContainer } from "./animations";

export function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [failedLogos, setFailedLogos] = useState<Set<number>>(new Set());

  const companies = [
    {
      name: "Amazon",
      description: "E-commerce & Cloud",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      name: "Flipkart",
      description: "E-commerce",
      logo: "https://logo.clearbit.com/flipkart.com",
    },
    {
      name: "Walmart",
      description: "Retail & Technology",
      logo: "https://logo.clearbit.com/walmart.com",
    },
    {
      name: "IBM",
      description: "Technology & Consulting",
      logo: "https://logo.clearbit.com/ibm.com",
    },
    {
      name: "Tesco",
      description: "Retail & Digital",
      logo: "https://logo.clearbit.com/tesco.com",
    },
    {
      name: "Tata Neu",
      description: "Super App",
      logo: "https://logo.clearbit.com/tata.com",
    },
    {
      name: "FasterOutcomes",
      description: "AI Solutions",
      logo: "https://logo.clearbit.com/fasteroutcomes.com",
    },
    {
      name: "T-Mobile",
      description: "Telecommunications",
      logo: "https://logo.clearbit.com/t-mobile.com",
    },
    {
      name: "Meta",
      description: "Social Media & AI",
      logo: "https://logo.clearbit.com/meta.com",
    },
  ];

  return (
    <section ref={ref} className="py-10 bg-[#f7f7f8]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#10a37f] font-medium mb-3 text-sm uppercase tracking-wide">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#202123]">
            Companies I&apos;ve Worked With
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -3, backgroundColor: "#ffffff" }}
              className="bg-white border border-[#d9d9e3] rounded-xl p-6 text-center transition-all"
            >
              <div
                className={`w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center p-2 ${
                  failedLogos.has(index) ? "bg-[#ececf1]" : "bg-white"
                }`}
              >
                {failedLogos.has(index) ? (
                  <span className="text-2xl font-bold text-[#202123]">
                    {company.name.charAt(0)}
                  </span>
                ) : (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    unoptimized
                    onError={() => {
                      setFailedLogos((prev) => new Set(prev).add(index));
                    }}
                  />
                )}
              </div>
              <h3 className="font-semibold text-[#202123] text-sm">
                {company.name}
              </h3>
              <p className="text-xs text-[#6e6e80] mt-1">
                {company.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
