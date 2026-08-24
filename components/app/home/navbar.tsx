"use client"

import { ROUTES } from '@/config/routes';
import { useGithubData } from '@/hooks/use-github-data';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { formattedStars, version, repoUrl } = useGithubData();

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
      <>
          <header 
            className={`fixed top-0 left-0 right-0 z-50 border-b border-border/80 transition-all duration-150 py-3 ${
                isScrolled
                    ? 'bg-background/85 backdrop-blur-md py-3 shadow-lg'
                    : 'bg-background/75 py-5'
            }`}
          >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                  {/* Brand Logo */}
                  <a 
                      href="" 
                      className="flex items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20 transition-transform">
                        <Image
                            src="/favicon.ico"
                            alt=""
                            width={100}
                            height={100}
                            className="w-7 h-7"
                            priority
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="font-display font-extrabold text-lg tracking-wide">
                            Canopy UI
                        </p>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-primary-500/10 text-primary-400 border border-primary-500/20">
                            {version}
                        </span>
                    </div>
                  </a>

                  {/* Desktop Navigation Links */}
                  <nav className="hidden md:flex items-center gap-6 font-medium">
                    <a 
                        href="" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Quick Start
                    </a>

                    <a 
                        href={ROUTES.DOCS.COMPONENTS.ROOT}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Components
                    </a>

                    <a 
                        href={ROUTES.DOCS.INTRODUCTION}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Documentation
                    </a>
                  </nav>

                  {/* Github & CTA Buttons */}
                  <div className="hidden md:flex items-center gap-3">
                    <a 
                        href="" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        FAQs
                    </a>

                    <a 
                        href={repoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-50 inline-flex items-center gap-2 py-1.5 px-2 text-sm rounded-lg hover:bg-muted-foreground/25 transition-colors"
                    >
                        <BsStarFill className="text-yellow-500"/>
                        <span>{formattedStars}</span>
                        <FaGithub className="w-4 h-4"/>
                    </a>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <button 
                      className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() =>  setMobileMenuOpen(!mobileMenuOpen)}
                      aria-label="Toggle navigation menu"
                  >
                    {mobileMenuOpen ? <X className=""/> : <Menu className=""/>}
                  </button>

              </div>

              {/* Animated Mobile Menu Drawer */}
              <div 
                  className={``}
              ></div>
          </header>
      </>
    )
}
