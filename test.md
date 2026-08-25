# Introduction

```tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/app/docs/components/header';
import { 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  Palette, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  PackageCheck
} from 'lucide-react';

export default function IntroductionPage() {
  const [copiedTab, setCopiedTab] = useState<'npm' | 'pnpm' | 'yarn'>('npm');
  const [hasCopied, setHasCopied] = useState(false);

  const installCommands = {
    npm: 'npm install @marv3l/canopy-ui',
    pnpm: 'pnpm add @marv3l/canopy-ui',
    yarn: 'yarn add @marv3l/canopy-ui',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <Header
        componentName="Canopy UI"
        title="Introduction"
        desc="A lightweight, customizable React component collection crafted for modern Next.js and React interfaces."
        breadcrumbs={[
          { label: 'Docs', href: '/docs' },
          { label: 'Getting Started', href: '/docs/introduction' },
        ]}
      />

      {/* Hero Overview Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs backdrop-blur-xs">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modern Component Toolkit</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Crafted for speed, flexibility, and dark mode out of the box.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Canopy UI</strong> provides modular UI primitives and feedback systems designed to drop directly into React and Next.js applications without fighting default styling.
          </p>
        </div>
      </div>

      {/* Core Highlights */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Core Principles
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">Zero Clutter & Lightweight</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every component is tree-shakeable and designed with minimal external dependencies so your bundle sizes remain small.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Palette className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">Tailwind CSS Ready</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Built to inherit your application&apos;s theme tokens, dark mode classes, and typography variables effortlessly.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">Strict TypeScript Support</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full IntelliSense autocomplete and strictly typed props on every exported component, hook, and variant.
            </p>
          </div>
        </div>
      </div>

      {/* Installation Setup */}

      {/* Explore Components CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <Layers className="h-4 w-4" />
            <span>Component Directory</span>
          </div>
          <h4 className="text-base font-semibold text-foreground">
            Explore all available components & roadmaps
          </h4>
          <p className="text-xs text-muted-foreground">
            Browse the catalog to view live demos, props references, and implementation guides.
          </p>
        </div>

        <Link
          href="/docs/components"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-xs font-semibold text-background hover:opacity-90 transition-opacity whitespace-nowrap shadow-xs"
        >
          <span>Browse Components</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
```