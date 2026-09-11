"use client";

import Header from '@/components/app/docs/components/header';
import { Badge } from '@/components/ui/badge';
import { Check, Copy, Terminal, Sparkles, Activity } from 'lucide-react';
import React, { useState } from 'react';

export default function BadgeDocPage() {
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
        componentName="badge"
        title="Badge"
        desc="Compact status indicator primitive powered by CVA. Features 7 stylistic presets, icon slots, animated pulse indicators, and full token-based styling."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Badge', href: '/docs/components/badge' },
        ]}
      />

      {/* Color System Note */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
          Color System & Design Tokens
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The badge component leverages semantic theme variables defined in your global CSS and Tailwind configuration. Tokens such as <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-primary</code>, <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-destructive</code>, <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-success</code>, and <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-warning</code> automatically adapt to light and dark modes, ensuring strict contrast ratios across your application.
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
                onClick={() => copyToClipboard('npx @marv3l/canopy-ui add badge', 1)}
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
              <code>npx @marv3l/canopy-ui add badge</code>
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
          Explore the stylistic presets configured via Class Variance Authority.
        </p>

        {/* Default Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Default</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="default">Default Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function DefaultBadgeDemo() {\n  return (\n    <Badge variant="default">Default Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function DefaultBadgeDemo() {
  return (
    <Badge variant="default">Default Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Secondary Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Secondary</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="secondary">Secondary Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function SecondaryBadgeDemo() {\n  return (\n    <Badge variant="secondary">Secondary Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function SecondaryBadgeDemo() {
  return (
    <Badge variant="secondary">Secondary Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Outline Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Outline</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="outline">Outline Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function OutlineBadgeDemo() {\n  return (\n    <Badge variant="outline">Outline Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function OutlineBadgeDemo() {
  return (
    <Badge variant="outline">Outline Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Destructive Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Destructive</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="destructive">Destructive Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function DestructiveBadgeDemo() {\n  return (\n    <Badge variant="destructive">Destructive Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function DestructiveBadgeDemo() {
  return (
    <Badge variant="destructive">Destructive Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Success Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Success</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="success">Success Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function SuccessBadgeDemo() {\n  return (\n    <Badge variant="success">Success Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function SuccessBadgeDemo() {
  return (
    <Badge variant="success">Success Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Warning Variant */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Warning</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="warning">Warning Badge</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function WarningBadgeDemo() {\n  return (\n    <Badge variant="warning">Warning Badge</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function WarningBadgeDemo() {
  return (
    <Badge variant="warning">Warning Badge</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Icons & Pulse */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Icons & Pulse Indicators
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Render leading icons with the <code className="text-xs bg-muted px-1 py-0.5 rounded">icon</code> prop or activate built-in status pings with the <code className="text-xs bg-muted px-1 py-0.5 rounded">pulse</code> prop.
        </p>

        {/* Badge with Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Badge with Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge icon={<Sparkles className="h-3.5 w-3.5" />}>Featured</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\nimport { Sparkles } from "lucide-react";\n\nexport default function IconBadgeDemo() {\n  return (\n    <Badge icon={<Sparkles className="h-3.5 w-3.5" />}>Featured</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function IconBadgeDemo() {
  return (
    <Badge icon={<Sparkles className="h-3.5 w-3.5" />}>Featured</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Pulsing Indicator */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Pulsing Indicator</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="success" pulse>Live Status</Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\n\nexport default function PulseBadgeDemo() {\n  return (\n    <Badge variant="success" pulse>Live Status</Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";

export default function PulseBadgeDemo() {
  return (
    <Badge variant="success" pulse>Live Status</Badge>
  );
}`}</code>
            </pre>
          </div>
        </div>

        {/* Pulse with Icon */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">Pulse with Leading Icon</h3>
          <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
            <Badge variant="outline" pulse icon={<Activity className="h-3.5 w-3.5" />}>
              Realtime Feed
            </Badge>
          </div>
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Badge } from "@/components/ui/badge";\nimport { Activity } from "lucide-react";\n\nexport default function PulseWithIconDemo() {\n  return (\n    <Badge variant="outline" pulse icon={<Activity className="h-3.5 w-3.5" />}>\n      Realtime Feed\n    </Badge>\n  );\n}`,
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
              <code>{`import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

export default function PulseWithIconDemo() {
  return (
    <Badge variant="outline" pulse icon={<Activity className="h-3.5 w-3.5" />}>
      Realtime Feed
    </Badge>
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
            Customizing the Badge
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Override default styles inline using the <code className="text-xs bg-muted px-1 py-0.5 rounded">className</code> prop for custom gradients, custom padding, or alternate backgrounds.
        </p>
        <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-6 shadow-xs">
          <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 shadow-xs">
            Custom Gradient
          </Badge>
        </div>
        <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
          <div className="flex flex-wrap items-center justify-end gap-2 pb-3">
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `import { Badge } from "@/components/ui/badge";\n\nexport default function CustomBadgeDemo() {\n  return (\n    <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 shadow-xs">\n      Custom Gradient\n    </Badge>\n  );\n}`,
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
            <code>{`import { Badge } from "@/components/ui/badge";

export default function CustomBadgeDemo() {
  return (
    <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 shadow-xs">
      Custom Gradient
    </Badge>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}