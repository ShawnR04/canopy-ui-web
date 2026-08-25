'use client';

import React, { useState, useEffect } from 'react';
import LeftNav from './left-navbar';
import { ExternalLink, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RightSidebarContent } from './right-navbar';

export const navigation = [
  {
    group: 'GETTING STARTED',
    items: [
      {
        href: '/docs/introduction',
        title: 'Introduction',
        desc: 'Learn about Canopy UI, its philosophy, and tech stack.',
      },
      {
        href: '/docs/installation',
        title: 'Installation',
        desc: 'Install @marv3l/canopy-ui in your React or Next.js project.',
      },
      {
        href: '/docs/quick-start',
        title: 'Quick Start',
        desc: 'Get started with your first Canopy UI component.',
      },
    ],
  },
  {
    group: 'COMPONENTS',
    items: [
      {
        href: '/docs/components',
        title: 'Component Overview',
        desc: 'View all the components available in one spot.',
      },
      {
        href: '/docs/components/toast',
        title: 'Toast',
        desc: 'Customizable notification alerts with variants, positioning, and durations.',
      },
    ],
  },
  {
    group: 'RESOURCES',
    items: [
      {
        href: '/docs/roadmap',
        title: 'Roadmap',
        desc: 'See upcoming components and future release plans.',
      },
    ],
  },
];

export function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 px-1">
      {navigation.map((section) => (
        <div key={section.group}>
          <h4 className="px-2.5 mb-2 text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
            {section.group}
          </h4>

          <div className="space-y-1">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              const isExternal = item.href.startsWith('http');

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onLinkClick}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`group relative flex flex-col gap-0.5 rounded-xl px-3 py-2 transition-all duration-150 ${
                    isActive
                      ? 'bg-primary-500/10 text-primary-600 font-medium dark:bg-primary-500/15 dark:text-primary-400'
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary-600 dark:bg-primary-400" />
                  )}

                  <div className="flex items-center justify-between gap-1.5">
                    <span
                      className={`text-xs font-semibold leading-tight ${
                        isActive ? 'text-primary-600 dark:text-primary-400' : 'text-foreground'
                      }`}
                    >
                      {item.title}
                    </span>
                    {isExternal && (
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-1">
                      {item.desc}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export default function DocsNav() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always stay visible near the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Scrolling down -> hide navbar
      else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } 
      // Scrolling up -> show navbar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setLeftOpen(false);
    setRightOpen(false);
  };

  return (
    <>
      {/* Mobile & Tablet Auto-Hiding Sticky Top Header */}
      <header
        className={`sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => setLeftOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-foreground transition-colors hover:bg-accent"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20 transition-transform">
            <Image
              src="/favicon.ico"
              alt="Canopy UI logo"
              width={100}
              height={100}
              className="w-7 h-7"
              priority
            />
          </div>
          <h2 className="flex items-center font-display text-lg font-semibold tracking-wider">
            Canopy UI
          </h2>
        </Link>

        <button
          onClick={() => setRightOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-foreground transition-colors hover:bg-accent"
          aria-label="Open document outline"
        >
          <BsThreeDotsVertical className="h-4 w-4" />
        </button>
      </header>

      {/* Backdrop (Active when any drawer is open) */}
      {(leftOpen || rightOpen) && (
        <div
          onClick={closeAll}
          className="fixed inset-0 z-50 bg-background/60 backdrop-blur-xs transition-opacity duration-200 lg:hidden"
        />
      )}

      {/* Left Slide-Out Drawer (Mobile & Tablet) */}
      <aside
        className={`no-scrollbar fixed top-0 bottom-0 left-0 z-50 w-72 border-r border-border bg-background/95 p-5 shadow-2xl backdrop-blur-lg transition-transform duration-200 ease-out lg:hidden ${
          leftOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
          <Link href="/" onClick={closeAll} className="group flex items-center space-x-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-sm shadow-primary-500/20 transition-transform group-hover:scale-105">
              <Image
                src="/favicon.ico"
                alt="Canopy UI logo"
                width={20}
                height={20}
                className="h-7 w-7"
                priority
              />
            </div>
            <h2 className="font-display text-lg font-bold tracking-wider text-foreground">
              Canopy UI
            </h2>
          </Link>
          <button
            onClick={closeAll}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-5rem)] pr-1">
          <NavLinks onLinkClick={closeAll} />
        </div>
      </aside>

      {/* Right Slide-Out Drawer (Mobile & Tablet) */}
      <aside
        className={`no-scrollbar fixed top-0 bottom-0 right-0 z-50 w-80 border-l border-border bg-background/95 p-5 shadow-2xl backdrop-blur-lg transition-transform duration-200 ease-out lg:hidden ${
          rightOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Information
          </span>
          <button
            onClick={closeAll}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close outline"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-5rem)] no-scrollbar">
          <RightSidebarContent />
        </div>
      </aside>

      {/* Static Desktop Left Sidebar */}
      <div className="hidden lg:block">
        <LeftNav />
      </div>
    </>
  );
}