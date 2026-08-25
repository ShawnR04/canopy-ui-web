```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Bell, 
  Layers, 
  ToggleLeft, 
  SquareCode, 
  ArrowUpRight, 
  Sparkles,
  Sliders
} from 'lucide-react';

interface ComponentButton {
  name: string;
  href: string;
  category: string;
  icon: React.ElementType;
  status?: string;
}

const COMPONENTS: ComponentButton[] = [
  {
    name: 'Toast',
    href: '/docs/components/toast',
    category: 'Feedback',
    icon: Bell,
    status: 'Ready',
  },
  {
    name: 'Dialog / Modal',
    href: '/docs/components/dialog',
    category: 'Overlay',
    icon: Layers,
  },
  {
    name: 'Switch / Toggle',
    href: '/docs/components/switch',
    category: 'Form',
    icon: ToggleLeft,
  },
  {
    name: 'Button',
    href: '/docs/components/button',
    category: 'Form',
    icon: SquareCode,
  },
  {
    name: 'Slider',
    href: '/docs/components/slider',
    category: 'Form',
    icon: Sliders,
  },
];

export default function Components() {
  return (
    <div className="w-full space-y-6 pb-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Canopy UI</span>
        </div>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Components
        </h1>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Select a component to jump directly to its documentation and usage guide.
        </p>
      </div>

      {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-card p-3.5 shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-primary-500/50 hover:bg-muted/30 hover:shadow-md active:translate-y-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors group-hover:border-primary-500/30 group-hover:bg-primary-500/10 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {item.name}
                  </h2>
                  <span className="text-[11px] text-muted-foreground">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {item.status && (
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                    {item.status}
                  </span>
                )}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
```