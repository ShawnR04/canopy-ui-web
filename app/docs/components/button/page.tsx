"use client";

import Header from '@/components/app/docs/components/header';
import { Button } from '@/components/ui/button';
import { Check, Copy, Mail, Terminal, ArrowRight, Plus, Sparkles, Star } from 'lucide-react';
import React, { useState } from 'react';

export default function ButtonDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="w-full min-w-0 space-y-10">
      {/* Header */}
      <Header
        componentName="button"
        title="Button"
        desc="Interactive, accessible button primitive powered by CVA and Radix Slot. Features 7 stylistic presets, 6 size tokens, leading and trailing icon slots, and native loading states."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Button', href: '/docs/components/button' },
        ]}
      />

      {/* Color System Note */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
          Color System & Design Tokens
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The button component leverages semantic theme variables defined in your global CSS and Tailwind configuration. Tokens such as <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-primary</code>, <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-destructive</code>, and <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-success</code> automatically adapt to light and dark modes, ensuring strict accessibility compliance and consistent contrast ratios across your application.
        </p>
      </div>

      {/* Installation Guide */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Quick Setup Guide
          </h2>
        </div>

        <div className="space-y-4">
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
                Step 1: Install Component via CLI
              </span>
              <button 
                type="button"
                onClick={() => copyToClipboard('npx @marv3l/canopy-ui add button', 1)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 1 ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copiedStep === 1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>npx @marv3l/canopy-ui add button</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Preset Variants
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Explore the individual stylistic presets available for the button component.
        </p>

        {/* Default Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Default</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="default">Default Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function DefaultButtonDemo() {\n  return (\n    <Button variant="default">Default Button</Button>\n  );\n}`,
                    2
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 2 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 2 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function DefaultButtonDemo() {
  return (
    <Button variant="default">Default Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Secondary Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Secondary</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="secondary">Secondary Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function SecondaryButtonDemo() {\n  return (\n    <Button variant="secondary">Secondary Button</Button>\n  );\n}`,
                    3
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 3 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 3 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function SecondaryButtonDemo() {
  return (
    <Button variant="secondary">Secondary Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Outline Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Outline</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function OutlineButtonDemo() {\n  return (\n    <Button variant="outline">Outline Button</Button>\n  );\n}`,
                    4
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 4 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 4 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function OutlineButtonDemo() {
  return (
    <Button variant="outline">Outline Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Destructive Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Destructive</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="destructive">Destructive Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function DestructiveButtonDemo() {\n  return (\n    <Button variant="destructive">Destructive Button</Button>\n  );\n}`,
                    5
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 5 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 5 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function DestructiveButtonDemo() {
  return (
    <Button variant="destructive">Destructive Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Ghost Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Ghost</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function GhostButtonDemo() {\n  return (\n    <Button variant="ghost">Ghost Button</Button>\n  );\n}`,
                    6
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 6 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 6 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function GhostButtonDemo() {
  return (
    <Button variant="ghost">Ghost Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Link Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Link</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="link">Link Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function LinkButtonDemo() {\n  return (\n    <Button variant="link">Link Button</Button>\n  );\n}`,
                    7
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 7 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 7 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function LinkButtonDemo() {
  return (
    <Button variant="link">Link Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Success Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Success</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="success">Success Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function SuccessButtonDemo() {\n  return (\n    <Button variant="success">Success Button</Button>\n  );\n}`,
                    8
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 8 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 8 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function SuccessButtonDemo() {
  return (
    <Button variant="success">Success Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Button Sizes
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Explore all 6 available size tokens for precise spatial layouts.
        </p>

        {/* Small Size */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Small Size (sm)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="sm">Small Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function SmallButtonDemo() {\n  return (\n    <Button size="sm">Small Button</Button>\n  );\n}`,
                    9
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 9 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 9 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function SmallButtonDemo() {
  return (
    <Button size="sm">Small Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Medium Size (Default Token) */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Medium Size (Default Token)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="default">Medium Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function MediumButtonDemo() {\n  return (\n    <Button size="default">Medium Button</Button>\n  );\n}`,
                    10
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 10 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 10 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function MediumButtonDemo() {
  return (
    <Button size="default">Medium Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Large Size */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Large Size (lg)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="lg">Large Button</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function LargeButtonDemo() {\n  return (\n    <Button size="lg">Large Button</Button>\n  );\n}`,
                    11
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 11 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 11 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function LargeButtonDemo() {
  return (
    <Button size="lg">Large Button</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Icon Size */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Icon Size (icon)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="icon" aria-label="Add item">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { Plus } from "lucide-react";\n\nexport default function IconButtonDemo() {\n  return (\n    <Button size="icon" aria-label="Add item">\n      <Plus className="h-4 w-4" />\n    </Button>\n  );\n}`,
                    12
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 12 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 12 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function IconButtonDemo() {
  return (
    <Button size="icon" aria-label="Add item">
      <Plus className="h-4 w-4" />
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Small Icon Size */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Small Icon Size (icon-sm)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="icon-sm" variant="outline" aria-label="Add item">
              <Plus className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { Plus } from "lucide-react";\n\nexport default function IconSmButtonDemo() {\n  return (\n    <Button size="icon-sm" variant="outline" aria-label="Add item">\n      <Plus className="h-3.5 w-3.5" />\n    </Button>\n  );\n}`,
                    13
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 13 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 13 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function IconSmButtonDemo() {
  return (
    <Button size="icon-sm" variant="outline" aria-label="Add item">
      <Plus className="h-3.5 w-3.5" />
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Large Icon Size */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Large Icon Size (icon-lg)</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button size="icon-lg" variant="secondary" aria-label="Add item">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { Plus } from "lucide-react";\n\nexport default function IconLgButtonDemo() {\n  return (\n    <Button size="icon-lg" variant="secondary" aria-label="Add item">\n      <Plus className="h-5 w-5" />\n    </Button>\n  );\n}`,
                    14
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 14 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 14 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function IconLgButtonDemo() {
  return (
    <Button size="icon-lg" variant="secondary" aria-label="Add item">
      <Plus className="h-5 w-5" />
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Buttons with Icons
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Incorporate leading, trailing, or combined icon slots using dedicated props.
        </p>

        {/* Left Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Left Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button leftIcon={<Mail className="h-4 w-4" />}>Login with Email</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { Mail } from "lucide-react";\n\nexport default function LeftIconButtonDemo() {\n  return (\n    <Button leftIcon={<Mail className="h-4 w-4" />}>Login with Email</Button>\n  );\n}`,
                    15
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 15 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 15 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function LeftIconButtonDemo() {
  return (
    <Button leftIcon={<Mail className="h-4 w-4" />}>Login with Email</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Right Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Right Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>Next Step</Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { ArrowRight } from "lucide-react";\n\nexport default function RightIconButtonDemo() {\n  return (\n    <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>Next Step</Button>\n  );\n}`,
                    16
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 16 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 16 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RightIconButtonDemo() {
  return (
    <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>Next Step</Button>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Left and Right Icon Combined */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Left and Right Icons Combined</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Button leftIcon={<Mail className="h-4 w-4" />} rightIcon={<ArrowRight className="h-4 w-4" />}>
              Send Message
            </Button>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\nimport { Mail, ArrowRight } from "lucide-react";\n\nexport default function BothIconsButtonDemo() {\n  return (\n    <Button leftIcon={<Mail className="h-4 w-4" />} rightIcon={<ArrowRight className="h-4 w-4" />}>\n      Send Message\n    </Button>\n  );\n}`,
                    17
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 17 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 17 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export default function BothIconsButtonDemo() {
  return (
    <Button leftIcon={<Mail className="h-4 w-4" />} rightIcon={<ArrowRight className="h-4 w-4" />}>
      Send Message
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Custom Inline Styling Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Customizing the Button
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Override default styles inline using the <code className="text-xs bg-muted px-1 py-0.5 rounded">className</code> prop for custom gradients, custom padding, or alternate backgrounds.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-md">
            Custom Gradient Button
          </Button>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Button } from "@/components/ui/button";\n\nexport default function CustomButtonDemo() {\n  return (\n    <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-md">\n      Custom Gradient Button\n    </Button>\n  );\n}`,
                  20
                )
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 20 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 20 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
            <code>{`import { Button } from "@/components/ui/button";

export default function CustomButtonDemo() {
  return (
    <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-md">
      Custom Gradient Button
    </Button>
  );
}`}</code>
          </pre>
        </div>
      </div>

      {/* Customizing Icons Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Customizing the Icons
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Apply explicit color or sizing utility classes directly onto individual icons to style them independently from the main button text.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <Button variant="outline">
            <Star className="h-4 w-4 mr-2 text-amber-400 fill-amber-400" />
            Custom Icon Color
          </Button>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Button } from "@/components/ui/button";\nimport { Star } from "lucide-react";\n\nexport default function CustomIconDemo() {\n  return (\n    <Button variant="outline">\n      <Star className="h-4 w-4 mr-2 text-amber-400 fill-amber-400" />\n      Custom Icon Color\n    </Button>\n  );\n}`,
                  21
                )
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 21 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 21 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
            <code>{`import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function CustomIconDemo() {
  return (
    <Button variant="outline">
      <Star className="h-4 w-4 mr-2 text-amber-400 fill-amber-400" />
      Custom Icon Color
    </Button>
  );
}`}</code>
          </pre>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Loading State
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Pass the <code className="text-xs bg-muted px-1 py-0.5 rounded">loading</code> prop to activate built-in spinner feedback and accessible aria states.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <Button loading loadingText="Please wait...">Submit</Button>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Button } from "@/components/ui/button";\n\nexport default function ButtonLoadingDemo() {\n  return (\n    <Button loading loadingText="Please wait...">Submit</Button>\n  );\n}`,
                  18
                )
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 18 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 18 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
            <code>{`import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
  return (
    <Button loading loadingText="Please wait...">Submit</Button>
  );
}`}</code>
          </pre>
        </div>
      </div>

      {/* AsChild (Links) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            AsChild (Links)
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Delegate rendering to underlying child link components using the <code className="text-xs bg-muted px-1 py-0.5 rounded">asChild</code> prop.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <Button asChild>
            <a href="#dashboard">Dashboard Link</a>
          </Button>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Button } from "@/components/ui/button";\n\nexport default function ButtonAsChildDemo() {\n  return (\n    <Button asChild>\n      <a href="/dashboard">Dashboard Link</a>\n    </Button>\n  );\n}`,
                  19
                )
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 19 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 19 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
            <code>{`import { Button } from "@/components/ui/button";

export default function ButtonAsChildDemo() {
  return (
    <Button asChild>
      <a href="/dashboard">Dashboard Link</a>
    </Button>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}