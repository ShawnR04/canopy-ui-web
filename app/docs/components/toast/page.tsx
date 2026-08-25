'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { toast, Toaster } from '@/components/ui/toast';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  ArrowRight,
  Terminal,
  Layers,
  Copy,
  Check,
  Zap,
  Sliders,
  Play,
  Boxes,
} from 'lucide-react';
import Header from '@/components/app/docs/components/header';

export default function ToastDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const categories = [
  {
    title: 'Setup & Positioning',
    desc: 'Learn root mounting, multi-quadrant anchors, and responsive viewport positioning.',
    icon: <Layers className="h-5 w-5 text-indigo-500" />,
    href: '/docs/components/toast/setup',
    badge: 'Architecture',
  },
  {
    title: 'Preset Variants',
    desc: 'Success, destructive error, warning, info, and asynchronous loading spinners.',
    icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    href: '/docs/components/toast/variants',
    badge: 'Feedback',
  },
  {
    title: 'Custom Tokens & Styling',
    desc: 'Progress countdown bars, custom hex tokens, glassmorphism, and Tailwind overrides.',
    icon: <Sliders className="h-5 w-5 text-fuchsia-500" />,
    href: '/docs/components/toast/customization',
    badge: 'Theme',
  },
  {
    title: 'Advanced & Lifecycle',
    desc: 'Async promise resolvers, queue deduplication, max limits, and manual teardowns.',
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    href: '/docs/components/toast/advanced',
    badge: 'Async API',
  },
];

  return (
    <div className="container-wrapper">
      {/* Hero Section */}
      <Header
        componentName="toast"
        title="Toast"
        desc="Lightweight, tear-free notification engine for Next.js and React.Supprots directional pop-in animations, dynamic duplicate counter badges , promises resolutions and granular styling overrides."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Toast', href: '/docs/components/toast' },
        ]}
        showPlayground
        playgroundHref="/docs/components/toast/playground"
      />

      {/* Live Interactive Trigger Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground">Interactive Triggers</h2>
          <span className="text-xs text-muted-foreground">Click to test live in viewport</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
          <button
            onClick={() =>
              toast({
                title: 'Project Saved',
                description: 'Your workspace settings have been synchronized.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-3 text-center transition-all hover:border-border hover:bg-accent/40 active:scale-95 shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-violet-500" />
            <span className="text-xs font-medium text-foreground">Default</span>
          </button>

          <button
            onClick={() =>
              toast.success('Payment Received', {
                description: 'Invoice #4102 was processed successfully.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center transition-all hover:bg-emerald-500/10 active:scale-95 shadow-xs"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Success</span>
          </button>

          <button
            onClick={() =>
              toast.error('Deployment Failed', {
                description: 'Database migration exited with status 1.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3 text-center transition-all hover:bg-rose-500/10 active:scale-95 shadow-xs"
          >
            <AlertCircle className="h-4 w-4 text-rose-500" />
            <span className="text-xs font-medium text-rose-700 dark:text-rose-400">Error</span>
          </button>

          <button
            onClick={() =>
              toast.warning('Unsaved Draft', {
                description: 'Leaving will discard your local code changes.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-center transition-all hover:bg-amber-500/10 active:scale-95 shadow-xs"
          >
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">Warning</span>
          </button>

          <button
            onClick={() =>
              toast.info('New CLI Version', {
                description: 'Run npx @marv3l/canopy-ui@latest to update.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 text-center transition-all hover:bg-sky-500/10 active:scale-95 shadow-xs"
          >
            <Info className="h-4 w-4 text-sky-500" />
            <span className="text-xs font-medium text-sky-700 dark:text-sky-400">Info</span>
          </button>

          <button
            onClick={() => {
              const instance = toast.loading('Exporting Assets...', {
                description: 'Packaging production SVG components.',
              });
              setTimeout(() => {
                toast.success('Export Ready', {
                  id: instance.id,
                  description: 'Assets bundled to public directory.',
                });
              }, 2000);
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-center transition-all hover:bg-blue-500/10 active:scale-95 shadow-xs"
          >
            <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-400">Promise</span>
          </button>
        </div>
      </div>

      {/* Quick Setup Guide */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">Quick Setup Guide</h2>
        </div>

        <div className="space-y-4">
          {/* Step 1: Install */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Step 1: Install Component via CLI
              </span>
              <button
                onClick={() => copyToClipboard('npx @marv3l/canopy-ui add toast', 1)}
                className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 1 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
              <code>npx @marv3l/canopy-ui add toast</code>
            </pre>
          </div>

          {/* Step 2: Mount Root */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Step 2: Mount Toaster in Root Layout
              </span>
              <button
                onClick={() =>
                  copyToClipboard(
                    `import { Toaster } from "@/components/ui/toast";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        {children}\n        <Toaster position="top-center" />\n      </body>\n    </html>\n  );\n}`,
                    2
                  )
                }
                className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 2 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 2 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
              <code>{`// app/layout.tsx
import { Toaster } from "@/components/ui/toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}`}</code>
            </pre>
          </div>

          {/* Step 3: Trigger Anywhere */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Step 3: Trigger from Any Client Component
              </span>
              <button
                onClick={() =>
                  copyToClipboard(
                    `import { toast } from "@/components/ui/toast";\n\ntoast.success("File uploaded", {\n  description: "Ready for deployment."\n});`,
                    3
                  )
                }
                className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 3 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 3 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
              <code>{`import { toast } from "@/components/ui/toast";

// Simple trigger
toast("Profile saved");

// Typed variant with description & timer
toast.success("Build verified", {
  description: "Artifacts deployed to edge network.",
  duration: 4000,
});`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Explore by Category */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Boxes className="h-5 w-5 text-primary-500" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">Explore by Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary-500/50 hover:bg-accent/40 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/50 transition-colors group-hover:border-primary-500/30 group-hover:bg-primary-500/10">
                    {cat.icon}
                  </div>
                  <span className="rounded-md border border-border/80 bg-muted/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {cat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400">
                <span>View Playground Examples</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}