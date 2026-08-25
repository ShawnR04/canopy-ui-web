'use client';

import Header from '@/components/app/docs/components/header';
import React, { useState } from 'react';
import { 
  ArrowUpRight,
  BellRing,
  PlaySquare,
} from 'lucide-react';
import Link from 'next/link';

interface ComponentButton {
  name: string;
  href: string;
  category: string;
  icon: React.ElementType;
  status?: 'Ready' | 'Coming Soon' | 'Beta';
  colorClass: string;
  bgClass: string;
}

interface ColorPalette {
  colorClass: string;
  bgClass: string;
}

const COLOR_PALETTES: ColorPalette[] = [
  {
    colorClass: 'text-amber-500 dark:text-amber-400',
    bgClass: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    colorClass: 'text-sky-500 dark:text-sky-400',
    bgClass: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    colorClass: 'text-emerald-500 dark:text-emerald-400',
    bgClass: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    colorClass: 'text-rose-500 dark:text-rose-400',
    bgClass: 'bg-rose-500/10 border-rose-500/20',
  },
  {
    colorClass: 'text-indigo-500 dark:text-indigo-400',
    bgClass: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    colorClass: 'text-purple-500 dark:text-purple-400',
    bgClass: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    colorClass: 'text-teal-500 dark:text-teal-400',
    bgClass: 'bg-teal-500/10 border-teal-500/20',
  },
  {
    colorClass: 'text-orange-500 dark:text-orange-400',
    bgClass: 'bg-orange-500/10 border-orange-500/20',
  },
];

const COMPONENTS: ComponentButton[] = [
  {
    name: 'Toast',
    href: '/docs/components/toast',
    category: 'Feedback',
    icon: BellRing,
    status: 'Ready',
    colorClass: 'text-amber-500 dark:text-amber-400',
    bgClass: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    name: 'Button',
    href: '/docs/components/button',
    category: 'Form',
    icon: PlaySquare,
    status: 'Coming Soon',
    colorClass: 'text-sky-500 dark:text-sky-400',
    bgClass: 'bg-sky-500/10 border-sky-500/20',
  },
];

export default function Components() {
  const [randomPalettes] = useState<ColorPalette[]>(() => {
    const shuffled = [...COLOR_PALETTES].sort(() => 0.5 - Math.random());
    return COMPONENTS.map((_, i) => shuffled[i % shuffled.length]);
  });

  return (
    <div className="container-wrapper">
      {/* Header */}
      <Header
        componentName=""
        title="Components"
        desc="Select a component to jump directly to its documentation and usage guide."
        breadcrumbs={[{ label: 'Components', href: '/docs/components' }]}
      />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((item, index) => {
          const Icon = item.icon;
          const isComingSoon = item.status?.toLowerCase() === 'coming soon';
          const palette = randomPalettes[index] || {
            colorClass: item.colorClass,
            bgClass: item.bgClass,
          };

          const cardContent = (
            <>
              {/* Top Row: Icon + Status Badge */}
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                    isComingSoon
                      ? 'border-border/60 bg-muted/40 text-muted-foreground'
                      : `transition-transform duration-200 group-hover:scale-105 ${palette.bgClass} ${palette.colorClass}`
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {item.status && (
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wide uppercase ${
                      isComingSoon
                        ? 'border-border/80 bg-muted/60 text-muted-foreground'
                        : 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {item.status}
                  </span>
                )}
              </div>

              {/* Bottom Row: Text Details + Arrow */}
              <div className="mt-4 flex items-end justify-between gap-2">
                <div className="min-w-0 flex flex-col gap-0.5">
                  <h2
                    className={`truncate text-sm font-semibold tracking-tight text-foreground ${
                      !isComingSoon ? 'transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400' : ''
                    }`}
                  >
                    {item.name}
                  </h2>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {item.category}
                  </span>
                </div>

                {!isComingSoon && (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                )}
              </div>
            </>
          );

          if (isComingSoon) {
            return (
              <div
                key={item.name}
                className="relative flex min-h-32.5 flex-col justify-between rounded-2xl border border-dashed border-border/80 bg-card/40 p-4.5 shadow-xs opacity-75 cursor-default select-none transition-all duration-200"
              >
                {cardContent}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex min-h-32.5 flex-col justify-between rounded-2xl border border-border/80 bg-card p-4.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500/40 hover:shadow-md active:translate-y-0"
            >
              {cardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}