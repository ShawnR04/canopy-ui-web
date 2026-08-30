"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Canopy UI?",
    answer:
      "Canopy UI is a modern, accessible component library tailored for React and Next.js applications, offering fluid animations and zero-configuration styling out of the box.",
  },
  {
    question: "Is Canopy UI free and open source?",
    answer:
      "Yes, Canopy UI is fully open source under the MIT license. You can inspect, modify, and contribute to the source code on GitHub.",
  },
  {
    question: "Does Canopy UI support Next.js App Router and Server Components?",
    answer:
      "Yes, components are designed with SSR compatibility in mind, using client directives only where interactivity or state is strictly required.",
  },
  {
    question: "How do I customize the default theme?",
    answer:
      "Canopy UI relies on standard CSS custom properties and Tailwind tokens (such as background, foreground, muted, and border), making theme customization seamless.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground text-sm sm:text-base">
          Everything you need to know about getting started with Canopy UI.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-border rounded-xl bg-card/40 backdrop-blur-sm overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <FiChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-5 sm:p-6 pt-0 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}