'use client'
import React from 'react'
import LeftNav from './left-navbar';
import { ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
                  {/* Left Active Indicator Bar */}
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
  return (
    <>
        <div className="hidden md:block">
            <LeftNav/>
        </div>
    </>
  )
}
