import BackgroundGlow from "@/components/app/home/background-glow";
import CodeBlock from "@/components/app/home/code-block";
import FAQ from "@/components/app/home/faq";
import Footer from "@/components/app/home/footer";
import Navbar from "@/components/app/home/navbar";
import ScrollToTop from "@/components/app/home/scroll-to-top";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaNpm } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative no-scrollbar scroll-smooth">
        <BackgroundGlow/>
        {/* Navigation Bar */}
        <Navbar/>
        
        {/* Hero Section */}
        <section className="h-screen relative pt-32 pb-20 overflow-hidden no-scrollbar">
          <div className="h-full flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="font-display text-5xl sm:text-7xl animate-fade-in">Canopy UI</h1>
            <p className="max-w-2xl mt-10 leading-relaxed text-muted-foreground animate-fade-in">
              <strong className="text-foreground">Canopy UI</strong> delivers fluid animations, accessible primitives , and zero-config styling built to feel right in modern React & Next.js applications
            </p>
            <div className="mt-8 w-full animate-fade-in">
              <CodeBlock/>
            </div>
          </div>
        </section>

        <section id="faq">
          {/* FAQs */}
          <FAQ/>
        </section>

        {/* Footer */}
        <Footer/>

        {/* Floating Bottom-Right Element (Desktop Only) */}
        <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-end justify-center gap-6 p-3 backdrop-blur-sm rounded-full">
          <ScrollToTop/>

          <div className="space-y-3">
            <Link
            href="https://github.com/ShawnR04/canopy-ui" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="h-9 w-9 rounded-full bg-muted hover:bg-muted/80 text-foreground flex items-center justify-center transition-colors border border-border scroll-smooth"
          >
            <FiGithub className="w-4 h-4" />
          </Link>
          <Link 
            href="https://www.npmjs.com/package/@marv3l/canopy-ui" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="h-9 w-9 rounded-full bg-muted hover:bg-muted/80 text-foreground flex items-center justify-center transition-colors border border-border"
          >
            <FaNpm className="w-4 h-4" />
          </Link>
          </div>
        </div>

      </div>
    </>
  );
}
