'use client';

import React from 'react';
import Header from '@/components/app/docs/components/header';
import Link from 'next/link';
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Palette, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  ChevronRight,
  Terminal
} from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="container-wrapper space-y-12">
      {/* Header */}
      <Header
        componentName="Canopy UI"
        title="Introduction"
        desc="Accessible, physics-animated components and lightweight primitives for React and Next.js."
        breadcrumbs={[
          { label: 'Getting Started', href: '/docs/introduction' },
        ]}
      />

      {/* Hero Banner */}
      <div className="flex flex-col items-start gap-4 border-b border-border/60 pb-8 pt-2 md:pb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Build your component library.
        </h1>

        <p className="max-w-180 text-base text-muted-foreground leading-relaxed sm:text-lg">
          Customizable, lightweight React & Next.js primitives styled with Tailwind CSS. Accessible, tree-shakeable, and crafted to integrate directly into your design system.
        </p>

        <div className="flex w-full flex-wrap items-center gap-3 pt-2">
          <Link
            href="/docs/installation"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 text-sm font-semibold text-background shadow-xs transition-opacity hover:opacity-90"
          >
            Installation
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <Link
            href="/docs/components"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border/70 bg-muted/40 px-4 text-sm text-muted-foreground shadow-xs transition-opacity hover:opacity-90"
          >
            Browse Components
          </Link>

          <div className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg border border-border/70 bg-muted/40 px-3 font-mono text-sm text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" />
            <span>npm i @marv3l/canopy-ui</span>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">
            This is not just another component library. It is how you build your design system.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Traditional component libraries package rigid, opaque elements that force you to write messy CSS overrides whenever brand requirements evolve. Canopy UI provides transparent, composable building blocks that prioritize developer ownership and clean integration.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Open Architecture</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Transparent, modular component code that gives you complete control over markup, behavior, and styling.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Physics & Motion</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Directional entrance animations, intelligent duplicate stacking, and hover-pause timers built right in.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Composable APIs</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Consistent prop signatures and naming conventions that keep your design system predictable.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Palette className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Tailwind Native</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Seamlessly binds to your CSS variables and theme tokens with zero runtime CSS-in-JS overhead.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Strict TypeScript</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              End-to-end type safety, autocompletion, and clean variant definitions across every exported primitive.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Zero-Context Vaults</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trigger global feedback and notifications directly from async utilities and server actions without context hell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}