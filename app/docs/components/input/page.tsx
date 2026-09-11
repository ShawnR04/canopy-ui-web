"use client";

import Header from '@/components/app/docs/components/header';
import { Input } from '@/components/ui/input';
import { Check, Copy, Terminal, Mail, Lock, Search, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function InputDocPage() {
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
        componentName="input"
        title="Input"
        desc="Interactive form input primitive powered by CVA. Features variant states, leading and trailing icon wrappers, and full accessibility support."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Input', href: '/docs/components/input' },
        ]}
      />

      {/* Color System Note */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
          Color System & Design Tokens
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The input component leverages semantic theme tokens defined in your global CSS and Tailwind setup. Tokens such as <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">border-input</code>, <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">ring-ring</code>, and <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">text-muted-foreground</code> automatically adapt to light and dark modes, ensuring consistent contrast ratios and focus states across your application.
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
                onClick={() => copyToClipboard('npx @marv3l/canopy-ui add input', 1)}
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
              <code>npx @marv3l/canopy-ui add input</code>
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
          Explore the individual stylistic presets available for the input component.
        </p>

        {/* Default Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Default</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <div className="w-full max-w-sm">
              <Input placeholder="Enter your email..." />
            </div>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Input } from "@/components/ui/input";\n\nexport default function DefaultInputDemo() {\n  return (\n    <Input placeholder="Enter your email..." />\n  );\n}`,
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
              <code>{`import { Input } from "@/components/ui/input";

export default function DefaultInputDemo() {
  return (
    <Input placeholder="Enter your email..." />
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Error Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Error Variant</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <div className="w-full max-w-sm">
              <Input variant="error" defaultValue="invalid.email@domain" />
            </div>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Input } from "@/components/ui/input";\n\nexport default function ErrorInputDemo() {\n  return (\n    <Input variant="error" defaultValue="invalid.email@domain" />\n  );\n}`,
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
              <code>{`import { Input } from "@/components/ui/input";

export default function ErrorInputDemo() {
  return (
    <Input variant="error" defaultValue="invalid.email@domain" />
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
            Inputs with Icons
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Incorporate leading or trailing icons using dedicated props for clean visual cues.
        </p>

        {/* Left Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Left Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <div className="w-full max-w-sm">
              <Input leftIcon={<Mail className="h-4 w-4" />} placeholder="Email address" />
            </div>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Input } from "@/components/ui/input";\nimport { Mail } from "lucide-react";\n\nexport default function LeftIconInputDemo() {\n  return (\n    <Input leftIcon={<Mail className="h-4 w-4" />} placeholder="Email address" />\n  );\n}`,
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
              <code>{`import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function LeftIconInputDemo() {
  return (
    <Input leftIcon={<Mail className="h-4 w-4" />} placeholder="Email address" />
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Right Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Right Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <div className="w-full max-w-sm">
              <Input rightIcon={<Search className="h-4 w-4" />} placeholder="Search records..." />
            </div>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Input } from "@/components/ui/input";\nimport { Search } from "lucide-react";\n\nexport default function RightIconInputDemo() {\n  return (\n    <Input rightIcon={<Search className="h-4 w-4" />} placeholder="Search records..." />\n  );\n}`,
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
              <code>{`import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function RightIconInputDemo() {
  return (
    <Input rightIcon={<Search className="h-4 w-4" />} placeholder="Search records..." />
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Both Icons Combined */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Left and Right Icons Combined</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <div className="w-full max-w-sm">
              <Input leftIcon={<Lock className="h-4 w-4" />} rightIcon={<AlertCircle className="h-4 w-4 text-destructive" />} type="password" placeholder="Password" />
            </div>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Input } from "@/components/ui/input";\nimport { Lock, AlertCircle } from "lucide-react";\n\nexport default function BothIconsInputDemo() {\n  return (\n    <Input\n      leftIcon={<Lock className="h-4 w-4" />}\n      rightIcon={<AlertCircle className="h-4 w-4 text-destructive" />}\n      type="password"\n      placeholder="Password"\n    />\n  );\n}`,
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
              <code>{`import { Input } from "@/components/ui/input";
import { Lock, AlertCircle } from "lucide-react";

export default function BothIconsInputDemo() {
  return (
    <Input
      leftIcon={<Lock className="h-4 w-4" />}
      rightIcon={<AlertCircle className="h-4 w-4 text-destructive" />}
      type="password"
      placeholder="Password"
    />
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
            Customizing the Input
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Override default styles inline using the <code className="text-xs bg-muted px-1 py-0.5 rounded">className</code> prop for custom heights, alternate borders, or background highlights.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <div className="w-full max-w-sm">
            <Input className="h-11 rounded-xl bg-muted/50 border-primary/50 focus-visible:ring-primary text-base" placeholder="Custom styled input..." />
          </div>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Input } from "@/components/ui/input";\n\nexport default function CustomInputDemo() {\n  return (\n    <Input className="h-11 rounded-xl bg-muted/50 border-primary/50 focus-visible:ring-primary text-base" placeholder="Custom styled input..." />\n  );\n}`,
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
            <code>{`import { Input } from "@/components/ui/input";

export default function CustomInputDemo() {
  return (
    <Input className="h-11 rounded-xl bg-muted/50 border-primary/50 focus-visible:ring-primary text-base" placeholder="Custom styled input..." />
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}