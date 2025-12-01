import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Site configuration
const siteConfig = {
  name: "Mehul Jariwala",
  title: "Mehul Jariwala | AI Consultant & LLM Expert | Hire AI Developer",
  description:
    "Need AI help? I'm Mehul Jariwala, an expert AI consultant with 8+ years building ChatGPT integrations, AI agents, RAG systems & LLM applications. Ex-IBM, worked with Amazon, Tesco, Walmart. Hire me for AI consulting, custom AI development, and chatbot solutions. Book a free consultation today.",
  url: "https://mehuljari.in",
  links: {
    linkedin: "https://linkedin.com/in/mehuljariwala",
    github: "https://github.com/mehuljariwala",
    calendly: "https://calendly.com/mjariwala98/15min",
  },
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Personal branding
    "Mehul Jariwala",
    "Mehul Jariwala AI",
    "Mehul AI Engineer",

    // High-intent AI consulting searches
    "AI consulting",
    "AI consultant",
    "AI consulting services",
    "AI consulting firm",
    "AI consulting company",
    "AI help",
    "AI expert help",
    "need AI help",
    "AI assistance",
    "AI advisory",
    "AI strategy consulting",
    "AI implementation help",

    // Hire/Find AI talent
    "hire AI developer",
    "hire AI engineer",
    "hire AI consultant",
    "hire ML engineer",
    "hire LLM developer",
    "find AI developer",
    "find AI expert",
    "looking for AI developer",
    "AI developer for hire",
    "freelance AI developer",
    "freelance AI engineer",
    "freelance AI consultant",
    "contract AI developer",

    // Build AI solutions
    "build AI application",
    "build AI agent",
    "build chatbot",
    "build AI chatbot",
    "custom AI development",
    "custom AI solutions",
    "AI app development",
    "AI software development",
    "AI product development",

    // Specific AI services
    "ChatGPT integration",
    "GPT-4 integration",
    "OpenAI API integration",
    "Claude API integration",
    "LLM integration services",
    "AI API integration",
    "chatbot development",
    "AI chatbot developer",
    "conversational AI developer",

    // RAG & Knowledge systems
    "RAG development",
    "RAG system developer",
    "RAG pipeline development",
    "knowledge base AI",
    "document AI",
    "AI document search",
    "semantic search developer",
    "vector database expert",
    "embeddings developer",

    // AI Agents
    "AI agent development",
    "AI agent builder",
    "autonomous AI agents",
    "LLM agents developer",
    "AI automation developer",
    "workflow automation AI",

    // Business problems
    "automate with AI",
    "AI for startups",
    "AI for business",
    "enterprise AI solutions",
    "AI for customer support",
    "AI for sales",
    "AI for marketing",
    "reduce costs with AI",
    "improve efficiency with AI",

    // Technical expertise
    "LangChain developer",
    "LangChain expert",
    "LlamaIndex developer",
    "Python AI developer",
    "AI engineer",
    "ML engineer",
    "machine learning engineer",
    "AI/ML consultant",
    "LLM developer",
    "LLM engineer",
    "full-stack AI developer",

    // Tools & Technologies
    "OpenAI developer",
    "Anthropic Claude developer",
    "Pinecone developer",
    "Weaviate developer",
    "ChromaDB developer",
    "Hugging Face developer",

    // Industry specific
    "AI for healthcare",
    "AI for finance",
    "AI for e-commerce",
    "AI for retail",
    "AI for SaaS",

    // Location (if relevant)
    "AI consultant India",
    "AI developer India",
    "remote AI developer",
    "AI consultant remote",

    // Previous companies (credibility)
    "ex-Amazon engineer",
    "ex-IBM engineer",
    "Tesco engineer",
    "Walmart engineer",
    "Flipkart engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons - Using Next.js auto-generated icons from icon.tsx and apple-icon.tsx
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Open Graph - Images auto-generated from opengraph-image.tsx
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  // Twitter - Images auto-generated from twitter-image.tsx
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@mehuljariwala",
  },

  // Verification
  verification: {
    google: "h8e1qo_hC6z-mCG8PVDCewGhnAKhfPtIkKO3Y6V6j5M",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages (if you have multi-language support)
  alternates: {
    canonical: siteConfig.url,
  },

  // Category
  category: "technology",

  // Other
  metadataBase: new URL(siteConfig.url),
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Mehul Jariwala",
      givenName: "Mehul",
      familyName: "Jariwala",
      url: siteConfig.url,
      image: `${siteConfig.url}/opengraph-image`,
      description: siteConfig.description,
      jobTitle: "AI/ML Engineer & Full-Stack Consultant",
      worksFor: {
        "@type": "Organization",
        name: "Self-Employed / Freelance",
      },
      alumniOf: [
        {
          "@type": "Organization",
          name: "IBM",
        },
        {
          "@type": "Organization",
          name: "Jain University",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "LLM Agents",
        "RAG Systems",
        "LangChain",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Full-Stack Development",
        "Cloud Computing",
        "AWS",
        "GCP",
        "Data Engineering",
      ],
      sameAs: [
        siteConfig.links.linkedin,
        siteConfig.links.github,
        // Add more social profiles
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      name: "AI/ML Consulting & Development Services",
      description:
        "Expert AI/ML consulting services including LLM agent development, RAG systems, full-stack development, and AI strategy advisory.",
      provider: {
        "@id": `${siteConfig.url}/#person`,
      },
      serviceType: [
        "AI Agent Development",
        "RAG System Development",
        "LLM Integration",
        "Full-Stack Development",
        "AI Consulting",
        "Data Integration",
      ],
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI/ML Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agent Development",
              description:
                "Custom LLM-powered agents using ReAct patterns and tool-calling architectures.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "RAG & Knowledge Systems",
              description:
                "Vector databases, embeddings, and intelligent search systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Development",
              description:
                "Next.js, React, Node.js, Python — clean architecture that ships.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What AI consulting services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer comprehensive AI consulting including LLM/ChatGPT integration, AI agent development, RAG (Retrieval-Augmented Generation) systems, custom chatbot development, AI strategy advisory, and full-stack AI application development. I help businesses automate processes, build intelligent search systems, and integrate AI into existing products.",
          },
        },
        {
          "@type": "Question",
          name: "How can AI help my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can transform your business by automating repetitive tasks (saving 10x time), improving customer support with intelligent chatbots (handling 70%+ queries automatically), enabling smart document search across thousands of files, generating content at scale, and providing data-driven insights. Most clients see ROI within the first month.",
          },
        },
        {
          "@type": "Question",
          name: "What is a RAG system and do I need one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RAG (Retrieval-Augmented Generation) is an AI system that combines your company's documents/data with LLMs like ChatGPT. It lets you ask questions in natural language and get accurate answers from YOUR data. You need RAG if you have lots of documents, knowledge bases, or internal data that employees need to search through quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to hire an AI developer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project costs vary based on complexity. Simple ChatGPT integrations start around $2-5K, custom AI agents range $5-15K, and enterprise RAG systems typically $15-50K+. I offer free 15-minute consultations to understand your needs and provide accurate estimates.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build an AI solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timeline depends on scope: Basic chatbot integration takes 1-2 weeks, custom AI agents 3-6 weeks, and full RAG systems 4-8 weeks. I focus on shipping MVPs fast so you can start seeing value quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups or only enterprises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I work with both! From early-stage startups building their first AI feature to Fortune 500 companies like Amazon, IBM, Tesco, and Walmart. My approach scales to your needs - whether it's a quick prototype or a production-grade system.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you use for AI development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I use cutting-edge AI tools: OpenAI GPT-4, Anthropic Claude, LangChain, LlamaIndex for LLM orchestration; Pinecone, Weaviate, ChromaDB for vector databases; Python, TypeScript, Next.js, React for full-stack development; and AWS, GCP for cloud infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate AI into my existing application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Most of my projects involve integrating AI capabilities into existing systems. Whether you have a web app, mobile app, or internal tools, I can add AI features like intelligent search, chatbots, content generation, or automation without rebuilding your entire stack.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
