import BackgroundGlow from "@/components/app/home/background-glow";
import CodeBlock from "@/components/app/home/code-block";
import Footer from "@/components/app/home/footer";
import Navbar from "@/components/app/home/navbar";
import Image from "next/image";

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

        <div className="">
          {/* Quick Start */}
          {/* FAQs */}
        </div>

        

        {/* Footer */}
        <Footer/>

        {/* Floating Bottom-Right Element (Desktop Only) */}

      </div>
    </>
  );
}
