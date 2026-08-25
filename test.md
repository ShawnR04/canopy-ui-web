# This is the design codes for my toast pages

## Setup
```tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/app/docs/components/header';
import { toast, setToastPosition, type ToastPosition } from '@/components/ui/toast';
import {
  Check,
  Compass,
  Copy,
  Layers,
  Play,
  Sliders,
  Terminal,
} from 'lucide-react';

interface SetupStepBlockProps {
  step: string;
  title: string;
  code: string;
  stepIndex: number;
  copiedStep: number | null;
  onCopy: (text: string, index: number) => void;
}

function SetupStepBlock({
  step,
  title,
  code,
  stepIndex,
  copiedStep,
  onCopy,
}: SetupStepBlockProps) {
  const isCopied = copiedStep === stepIndex;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
          {step}: {title}
        </span>
        <button
          type="button"
          onClick={() => onCopy(code, stepIndex)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span>{isCopied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function SetupPositioningDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [activePosition, setActivePosition] = useState<ToastPosition>('top-center');

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const handlePositionTrigger = (pos: ToastPosition) => {
    setActivePosition(pos);
    if (typeof setToastPosition === 'function') {
      setToastPosition(pos);
    }
    toast.success(`Position: ${pos}`, {
      description: `Notification dispatched to the ${pos.replace('-', ' ')} viewport anchor.`,
      duration: 3500,
    });
  };

  return (
    <div className="w-full min-w-0 space-y-10">
      {/* Header Banner */}
      {/* Interactive Anchor Simulator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              Interactive Viewport Anchors
            </h2>
            <p className="text-xs text-muted-foreground">Click any quadrant to test live positioning in your viewport</p>
          </div>
          <span className="hidden items-center gap-1.5 rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground sm:inline-flex">
            <Compass className="h-3.5 w-3.5 text-primary-500" />
            {activePosition}
          </span>
        </div>

        {/* Viewport Box Simulator */}
        <div className="relative flex h-72 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/40 p-4 shadow-xs">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 p-3 sm:p-5">
            {/* Top Left */}
            <div className="flex items-start justify-start">
              <button
                type="button"
                onClick={() => handlePositionTrigger('top-left')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'top-left'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Top Left</span>
                <span className="sm:hidden">TL</span>
              </button>
            </div>

            {/* Top Center */}
            <div className="flex items-start justify-center">
              <button
                type="button"
                onClick={() => handlePositionTrigger('top-center')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'top-center'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Top Center</span>
                <span className="sm:hidden">TC</span>
              </button>
            </div>

            {/* Top Right */}
            <div className="flex items-start justify-end">
              <button
                type="button"
                onClick={() => handlePositionTrigger('top-right')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'top-right'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Top Right</span>
                <span className="sm:hidden">TR</span>
              </button>
            </div>

            {/* Bottom Left */}
            <div className="flex items-end justify-start">
              <button
                type="button"
                onClick={() => handlePositionTrigger('bottom-left')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'bottom-left'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Bottom Left</span>
                <span className="sm:hidden">BL</span>
              </button>
            </div>

            {/* Bottom Center */}
            <div className="flex items-end justify-center">
              <button
                type="button"
                onClick={() => handlePositionTrigger('bottom-center')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'bottom-center'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Bottom Center</span>
                <span className="sm:hidden">BC</span>
              </button>
            </div>

            {/* Bottom Right */}
            <div className="flex items-end justify-end">
              <button
                type="button"
                onClick={() => handlePositionTrigger('bottom-right')}
                className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-medium transition-all active:scale-95 shadow-xs sm:px-3 sm:py-2 ${
                  activePosition === 'bottom-right'
                    ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'border-border bg-card text-foreground hover:bg-accent/50'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                <span className="hidden sm:inline">Bottom Right</span>
                <span className="sm:hidden">BR</span>
              </button>
            </div>
          </div>

          <div className="pointer-events-none text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Interactive Viewport Plane
            </span>
          </div>
        </div>
      </div>

      {/* Setup Guide */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Setup & Placement Guide
          </h2>
        </div>

        <div className="space-y-4">
          <SetupStepBlock
            step="Step 1"
            title="Mount the Toaster in Root Layout"
            code={`// app/layout.tsx
import { Toaster } from "@/components/ui/toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        {children}
        <Toaster position="top-center" defaultDuration={4000} />
      </body>
    </html>
  );
}`}
            stepIndex={1}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <SetupStepBlock
            step="Step 2"
            title="Configure Default Properties & Stacking Limits"
            code={`// app/layout.tsx
import { Toaster } from "@/components/ui/toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster 
          position="bottom-right" 
          defaultDuration={5000}
          showProgress={true}
          className="z-50 p-4" 
        />
      </body>
    </html>
  );
}`}
            stepIndex={2}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <SetupStepBlock
            step="Step 3"
            title="Dynamically Switch Viewport Anchors at Runtime"
            code={`import { toast, setToastPosition } from "@/components/ui/toast";

export function ActionPanel() {
  const handleExport = () => {
    // Relocate viewport position for this session/action
    setToastPosition("bottom-right");

    toast.success("Export completed", {
      description: "Archive saved to downloads folder.",
      duration: 3500,
    });
  };

  return <button onClick={handleExport}>Download Archive</button>;
}`}
            stepIndex={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>
      </div>

      {/* API Reference Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Toaster Component Props
          </h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Prop</th>
                <th className="p-3.5 whitespace-nowrap">Type</th>
                <th className="p-3.5 whitespace-nowrap">Default</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">position</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">ToastPosition</td>
                <td className="p-3.5 whitespace-nowrap">&quot;top-center&quot;</td>
                <td className="font-sans min-w-[220px]">Initial viewport quadrant anchor for mounted stacks.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">defaultDuration</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">number</td>
                <td className="p-3.5 whitespace-nowrap">4000</td>
                <td className="font-sans min-w-[220px]">Default dismiss timer in milliseconds.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">showProgress</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">boolean</td>
                <td className="p-3.5 whitespace-nowrap">true</td>
                <td className="font-sans min-w-[220px]">Shows or hides the countdown progression bar.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">className</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">string</td>
                <td className="p-3.5 whitespace-nowrap">&quot;&quot;</td>
                <td className="font-sans min-w-[220px]">Utility class overrides for the portal container.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## Variants
```tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/app/docs/components/header';
import { toast } from '@/components/ui/toast';
import {
  AlertCircle,
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  Info,
  Loader2,
  Play,
  Sliders,
  Sparkles,
  Terminal,
} from 'lucide-react';

interface VariantBlockProps {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  code: string;
  stepIndex: number;
  copiedStep: number | null;
  onCopy: (text: string, index: number) => void;
  onTrigger: () => void;
}

function VariantBlock({
  title,
  badge,
  badgeClass,
  description,
  code,
  stepIndex,
  copiedStep,
  onCopy,
  onTrigger,
}: VariantBlockProps) {
  const isCopied = copiedStep === stepIndex;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
            {title}
          </span>
          <span
            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTrigger}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-2.5 py-1 text-xs font-semibold text-white shadow-xs transition-all hover:bg-primary-500 active:scale-95"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>Test Live</span>
          </button>

          <button
            type="button"
            onClick={() => onCopy(code, stepIndex)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{description}</p>

      <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs leading-relaxed text-neutral-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function PresetVariantsDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="w-full min-w-0 space-y-10">

      {/* Live Interactive Trigger Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Live Variant Triggers
          </h2>
          <span className="text-xs text-muted-foreground">Click to trigger in viewport</span>
        </div>

        {/* 2 cols mobile, 3 cols tablet, expands cleanly up to 6 on wider screens */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          <button
            type="button"
            onClick={() =>
              toast({
                title: 'Project Saved',
                description: 'Your workspace settings have been synchronized.',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-3.5 text-center shadow-xs transition-all hover:border-border hover:bg-accent/40 active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-violet-500" />
            <span className="text-xs font-medium text-foreground">Default</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.success('Payment Received', {
                description: 'Invoice #4102 processed successfully.',
                duration: 4000,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-emerald-500/10 active:scale-95"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Success</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.error('Deployment Failed', {
                description: 'Build exited with code 1 in worker thread.',
                duration: 5000,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-rose-500/10 active:scale-95"
          >
            <AlertCircle className="h-4 w-4 text-rose-500" />
            <span className="text-xs font-medium text-rose-700 dark:text-rose-400">Error</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.warning('Draft Unsaved', {
                description: 'Your modifications are cached locally.',
                duration: 4000,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-amber-500/10 active:scale-95"
          >
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">Warning</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.info('Release v1.2.0', {
                description: 'New animation physics now available.',
                duration: 4000,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-sky-500/20 bg-sky-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-sky-500/10 active:scale-95"
          >
            <Info className="h-4 w-4 text-sky-500" />
            <span className="text-xs font-medium text-sky-700 dark:text-sky-400">Info</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const instance = toast.loading('Exporting SVG Assets...', {
                description: 'Optimizing and bundling package icons.',
              });
              setTimeout(() => {
                toast.success('Export Finished', {
                  id: instance.id,
                  description: 'Files exported to downloads folder.',
                  duration: 4000,
                });
              }, 2000);
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-blue-500/10 active:scale-95"
          >
            <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-400">Loading</span>
          </button>
        </div>
      </div>

      {/* Variant Code & Live Demos */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Variant Snippets
          </h2>
        </div>

        <div className="space-y-4">
          <VariantBlock
            title="Default Toast"
            badge="Standard"
            badgeClass="border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
            description="Basic neutral notification with an optional description."
            code={`import { toast } from "@/components/ui/toast";

toast({
  title: 'Project Saved',
  description: 'Your workspace settings have been synchronized.',
});`}
            stepIndex={1}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast({
                title: 'Project Saved',
                description: 'Your workspace settings have been synchronized.',
              })
            }
          />

          <VariantBlock
            title="Success Variant"
            badge="Positive"
            badgeClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            description="Displays an emerald confirmation badge for completed operations."
            code={`import { toast } from "@/components/ui/toast";

toast.success("Payment Received", {
  description: "Invoice #4102 processed successfully.",
  duration: 4000,
});`}
            stepIndex={2}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.success('Payment Received', {
                description: 'Invoice #4102 processed successfully.',
                duration: 4000,
              })
            }
          />

          <VariantBlock
            title="Destructive / Error Variant"
            badge="Negative"
            badgeClass="border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400"
            description="Rose-tinted alert state for runtime exceptions, validation failures, and errors."
            code={`import { toast } from "@/components/ui/toast";

toast.error("Deployment Failed", {
  description: "Build exited with code 1 in worker thread.",
  duration: 5000,
});`}
            stepIndex={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.error('Deployment Failed', {
                description: 'Build exited with code 1 in worker thread.',
                duration: 5000,
              })
            }
          />

          <VariantBlock
            title="Warning Variant"
            badge="Caution"
            badgeClass="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400"
            description="Amber indicator for non-fatal issues and operations requiring user review."
            code={`import { toast } from "@/components/ui/toast";

toast.warning("Draft Unsaved", {
  description: "Your modifications are cached locally.",
  duration: 4000,
});`}
            stepIndex={4}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.warning('Draft Unsaved', {
                description: 'Your modifications are cached locally.',
                duration: 4000,
              })
            }
          />

          <VariantBlock
            title="Information Variant"
            badge="Informational"
            badgeClass="border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400"
            description="Sky-blue indicator for system updates, release logs, and non-blocking tips."
            code={`import { toast } from "@/components/ui/toast";

toast.info("Release v1.2.0", {
  description: "New animation physics now available.",
  duration: 4000,
});`}
            stepIndex={5}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.info('Release v1.2.0', {
                description: 'New animation physics now available.',
                duration: 4000,
              })
            }
          />

          <VariantBlock
            title="Loading & Async Update"
            badge="Async State"
            badgeClass="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
            description="Spins an indeterminate loader and updates in place when the promise settles."
            code={`import { toast } from "@/components/ui/toast";

const instance = toast.loading("Deploying package...", {
  description: "Bundling source into distribution target.",
});

// Update toast when async task finishes
setTimeout(() => {
  toast.success("Build verified", {
    id: instance.id,
    description: "Artifacts deployed to edge network.",
    duration: 4000,
  });
}, 2000);`}
            stepIndex={6}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() => {
              const instance = toast.loading('Deploying package...', {
                description: 'Bundling source into distribution target.',
              });
              setTimeout(() => {
                toast.success('Build verified', {
                  id: instance.id,
                  description: 'Artifacts deployed to edge network.',
                  duration: 4000,
                });
              }, 2000);
            }}
          />
        </div>
      </div>

      {/* Helper Methods Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Helper Methods API
          </h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Method</th>
                <th className="p-3.5 whitespace-nowrap">Signature</th>
                <th className="p-3.5 whitespace-nowrap">Return Type</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string | ToastOptions, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches standard default notification.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.success()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches confirmation notification with check icon.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.error()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches destructive error notification with alert icon.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.warning()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches warning notification with caution icon.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.info()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches neutral informational toast.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.loading()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (title: string, options?: ToastOptions)
                </td>
                <td className="p-3.5 whitespace-nowrap">&#123; id, dismiss &#125;</td>
                <td className="font-sans min-w-[200px]">Dispatches infinite spinner toast until resolved.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## Customization
```tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/app/docs/components/header';
import { toast } from '@/components/ui/toast';
import {
  Check,
  Code2,
  Copy,
  Layers,
  Palette,
  Play,
  Sliders,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';

interface StyleBlockProps {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  code: string;
  stepIndex: number;
  copiedStep: number | null;
  onCopy: (text: string, index: number) => void;
  onTrigger: () => void;
}

function StyleBlock({
  title,
  badge,
  badgeClass,
  description,
  code,
  stepIndex,
  copiedStep,
  onCopy,
  onTrigger,
}: StyleBlockProps) {
  const isCopied = copiedStep === stepIndex;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
            {title}
          </span>
          <span
            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTrigger}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-2.5 py-1 text-xs font-semibold text-white shadow-xs transition-all hover:bg-primary-500 active:scale-95"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>Test Live</span>
          </button>

          <button
            type="button"
            onClick={() => onCopy(code, stepIndex)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{description}</p>

      <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs leading-relaxed text-neutral-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function CustomStylingDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="w-full min-w-0 space-y-10">

      {/* Live Interactive Trigger Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Live Style Demos
          </h2>
          <span className="text-xs text-muted-foreground">Click to preview styled cards</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          <button
            type="button"
            onClick={() =>
              toast({
                title: 'Neon Brand Accent',
                description: 'Custom hex color overrides for border, text, and icons.',
                customColor: {
                  bg: '#0a0a0f',
                  text: '#f8fafc',
                  border: '#8b5cf6',
                  progress: '#8b5cf6',
                  icon: '#a78bfa',
                },
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-fuchsia-500/10 active:scale-95"
          >
            <Palette className="h-4 w-4 text-fuchsia-500" />
            <span className="text-xs font-medium text-fuchsia-700 dark:text-fuchsia-400">Tokens</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast({
                title: 'Glassmorphism Blur',
                description: 'Backdrop-blur and semi-transparent border utilities.',
                className: 'bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-indigo-500/10 active:scale-95"
          >
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-xs font-medium text-indigo-700 dark:text-indigo-400">Glass</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.success('Clean Alert', {
                description: 'Rendered cleanly with countdown progress bar omitted.',
                showProgress: false,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-teal-500/20 bg-teal-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-teal-500/10 active:scale-95"
          >
            <Sliders className="h-4 w-4 text-teal-500" />
            <span className="text-xs font-medium text-teal-700 dark:text-teal-400">No Bar</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast.info('Quick Dismiss', {
                description: 'Explicit timer set to dismiss in 2 seconds.',
                duration: 2000,
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-yellow-500/10 active:scale-95"
          >
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-xs font-medium text-yellow-700 dark:text-yellow-400">Duration</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast({
                title: 'High Contrast Emerald',
                description: 'Deep emerald borders with custom highlight tokens.',
                customColor: {
                  bg: '#022c22',
                  text: '#ecfdf5',
                  border: '#059669',
                  progress: '#10b981',
                  icon: '#34d399',
                },
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-emerald-500/10 active:scale-95"
          >
            <Layers className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Contrast</span>
          </button>

          <button
            type="button"
            onClick={() =>
              toast({
                title: 'Tailwind Card',
                description: 'Rendered with custom rounded corners and ring borders.',
                className: 'rounded-2xl border-2 border-primary-500/40 bg-card p-4 shadow-xl',
              })
            }
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-3.5 text-center shadow-xs transition-all hover:border-border hover:bg-accent/40 active:scale-95"
          >
            <Code2 className="h-4 w-4 text-primary-500" />
            <span className="text-xs font-medium text-foreground">Classes</span>
          </button>
        </div>
      </div>

      {/* Style Code & Live Demos */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Customization Snippets
          </h2>
        </div>

        <div className="space-y-4">
          <StyleBlock
            title="Granular Theme Tokens (`customColor`)"
            badge="Color Tokens"
            badgeClass="border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-500/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-400"
            description="Override background, foreground, border, progress countdown, and icon colors per toast."
            code={`import { toast } from "@/components/ui/toast";

toast({
  title: "Brand Accent Notification",
  description: "Custom color scheme matching your exact branding.",
  customColor: {
    bg: "#090d16",
    text: "#f8fafc",
    border: "#6366f1",
    progress: "#818cf8",
    icon: "#a5b4fc",
  },
});`}
            stepIndex={1}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast({
                title: 'Brand Accent Notification',
                description: 'Custom color scheme matching your exact branding.',
                customColor: {
                  bg: '#090d16',
                  text: '#f8fafc',
                  border: '#6366f1',
                  progress: '#818cf8',
                  icon: '#a5b4fc',
                },
              })
            }
          />

          <StyleBlock
            title="Glassmorphism & Backdrop Filters (`className`)"
            badge="Tailwind Utilities"
            badgeClass="border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
            description="Inject custom Tailwind CSS classes directly onto the toast card element."
            code={`import { toast } from "@/components/ui/toast";

toast({
  title: "Glassmorphism Toast",
  description: "Rendered with backdrop blur and semi-opaque backgrounds.",
  className: "bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl",
});`}
            stepIndex={2}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast({
                title: 'Glassmorphism Toast',
                description: 'Rendered with backdrop blur and semi-opaque backgrounds.',
                className: 'bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl',
              })
            }
          />

          <StyleBlock
            title="Toggle Progress Countdown Bar"
            badge="Indicators"
            badgeClass="border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400"
            description="Disable the auto-dismiss timer progress bar for a cleaner, minimalist layout."
            code={`import { toast } from "@/components/ui/toast";

toast.success("Profile Updated", {
  description: "Changes preserved without a bottom countdown line.",
  showProgress: false,
});`}
            stepIndex={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.success('Profile Updated', {
                description: 'Changes preserved without a bottom countdown line.',
                showProgress: false,
              })
            }
          />

          <StyleBlock
            title="Custom Duration & Timers"
            badge="Timing API"
            badgeClass="border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-400"
            description="Set custom visibility intervals in milliseconds, or pass Infinity for permanent toasts."
            code={`import { toast } from "@/components/ui/toast";

// Fast dismiss toast (2 seconds)
toast.info("Quick Notice", {
  description: "This alert dismisses in exactly 2000ms.",
  duration: 2000,
});

// Persistent toast (requires user dismissal)
toast.warning("Action Required", {
  description: "Stays open until explicitly dismissed.",
  duration: Infinity,
});`}
            stepIndex={4}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() =>
              toast.info('Quick Notice', {
                description: 'This alert dismisses in exactly 2000ms.',
                duration: 2000,
              })
            }
          />
        </div>
      </div>

      {/* API Reference Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Customization & Options Schema
          </h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Property</th>
                <th className="p-3.5 whitespace-nowrap">Type</th>
                <th className="p-3.5 whitespace-nowrap">Default</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">customColor</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">ToastCustomColors</td>
                <td className="p-3.5 whitespace-nowrap">undefined</td>
                <td className="font-sans min-w-[220px]">
                  Object with custom hex codes: <code className="font-mono text-[11px]">&#123; bg, text, border, progress, icon &#125;</code>.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">className</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">string</td>
                <td className="p-3.5 whitespace-nowrap">&quot;&quot;</td>
                <td className="font-sans min-w-[220px]">Custom Tailwind classes merged onto the toast container.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">showProgress</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">boolean</td>
                <td className="p-3.5 whitespace-nowrap">true</td>
                <td className="font-sans min-w-[220px]">Controls whether the bottom timer countdown bar is rendered.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">duration</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">number</td>
                <td className="p-3.5 whitespace-nowrap">4000</td>
                <td className="font-sans min-w-[220px]">Display time in milliseconds before automatic dismissal.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">action</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">React.ReactNode</td>
                <td className="p-3.5 whitespace-nowrap">undefined</td>
                <td className="font-sans min-w-[220px]">Interactive button or action component rendered alongside text.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## Advanced
```tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/app/docs/components/header';
import { toast } from '@/components/ui/toast';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Layers,
  Loader2,
  Play,
  Rocket,
  RotateCcw,
  Sliders,
  Terminal,
  Trash2,
  Undo2,
  X,
  Zap,
} from 'lucide-react';

interface AdvancedBlockProps {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  code: string;
  stepIndex: number;
  copiedStep: number | null;
  onCopy: (text: string, index: number) => void;
  onTrigger: () => void;
}

function AdvancedBlock({
  title,
  badge,
  badgeClass,
  description,
  code,
  stepIndex,
  copiedStep,
  onCopy,
  onTrigger,
}: AdvancedBlockProps) {
  const isCopied = copiedStep === stepIndex;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
            {title}
          </span>
          <span
            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTrigger}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-2.5 py-1 text-xs font-semibold text-white shadow-xs transition-all hover:bg-primary-500 active:scale-95"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>Test Live</span>
          </button>

          <button
            type="button"
            onClick={() => onCopy(code, stepIndex)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{description}</p>

      <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs leading-relaxed text-neutral-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AdvancedLifecycleDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="w-full min-w-0 space-y-10">

      {/* Live Interactive Trigger Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Lifecycle Triggers
          </h2>
          <span className="text-xs text-muted-foreground">Click to trigger async flows</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          <button
            type="button"
            onClick={() => {
              const instance = toast.loading('Building distribution bundle...', {
                description: 'Compiling TSX modules.',
              });
              setTimeout(() => {
                toast.success('Bundle generated', {
                  id: instance.id,
                  description: 'Assets pushed to edge CDN.',
                  duration: 4000,
                });
              }, 2000);
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-emerald-500/10 active:scale-95"
          >
            <Rocket className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Update ID</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const { dismiss } = toast({
                title: 'File Deleted',
                description: 'project-spec.pdf moved to trash.',
                duration: 6000,
                action: (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        dismiss();
                        toast.success('Restored file', {
                          description: 'project-spec.pdf recovered.',
                          duration: 3000,
                        });
                      }}
                      className="rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      Undo
                    </button>
                    <button
                      type="button"
                      onClick={() => dismiss()}
                      className="rounded-md border border-border px-2 py-1 text-[11px] font-medium text-foreground transition hover:bg-muted"
                    >
                      Dismiss
                    </button>
                  </div>
                ),
              });
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-indigo-500/10 active:scale-95"
          >
            <Undo2 className="h-4 w-4 text-indigo-500" />
            <span className="text-xs font-medium text-indigo-700 dark:text-indigo-400">Actions</span>
          </button>

          <button
            type="button"
            onClick={() => {
              toast.error('Socket Timeout', {
                description: 'Retrying socket connection (Attempt 2/5)...',
                duration: 3000,
              });
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-orange-500/20 bg-orange-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-orange-500/10 active:scale-95"
          >
            <Layers className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-medium text-orange-700 dark:text-orange-400">Duplicates</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const active = toast({
                title: 'Dismissing in 1.5s...',
                description: 'Programmatically controlled via instance.dismiss()',
                duration: 5000,
              });
              setTimeout(() => {
                active.dismiss();
              }, 1500);
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-pink-500/20 bg-pink-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-pink-500/10 active:scale-95"
          >
            <X className="h-4 w-4 text-pink-500" />
            <span className="text-xs font-medium text-pink-700 dark:text-pink-400">Dismiss ID</span>
          </button>

          <button
            type="button"
            onClick={() => {
              toast.dismiss();
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-rose-500/10 active:scale-95"
          >
            <Trash2 className="h-4 w-4 text-rose-500" />
            <span className="text-xs font-medium text-rose-700 dark:text-rose-400">Dismiss All</span>
          </button>

          <button
            type="button"
            onClick={() => {
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: 'Uploading report...',
                  success: 'Report compiled and sent.',
                  error: 'Upload aborted.',
                }
              );
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 text-center shadow-xs transition-all hover:bg-blue-500/10 active:scale-95"
          >
            <Zap className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-400">Promise API</span>
          </button>
        </div>
      </div>

      {/* Advanced Code & Live Demos */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Advanced Patterns & Snippets
          </h2>
        </div>

        <div className="space-y-4">
          <AdvancedBlock
            title="Promise Lifecycle Resolver (`toast.promise`)"
            badge="Async Helper"
            badgeClass="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
            description="Automatically binds to any JavaScript Promise and handles loading, resolved, and rejected states."
            code={`import { toast } from "@/components/ui/toast";

const uploadTask = async () => {
  const response = await fetch("/api/upload");
  if (!response.ok) throw new Error();
  return response.json();
};

toast.promise(uploadTask(), {
  loading: "Uploading report...",
  success: "Report compiled and sent.",
  error: "Upload failed. Please retry.",
});`}
            stepIndex={1}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() => {
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: 'Uploading report...',
                  success: 'Report compiled and sent.',
                  error: 'Upload failed. Please retry.',
                }
              );
            }}
          />

          <AdvancedBlock
            title="Update by ID Lifecycle"
            badge="ID Mutation"
            badgeClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            description="Manually update an active toast in place by passing its existing unique ID."
            code={`import { toast } from "@/components/ui/toast";

// 1. Trigger initial loading toast and capture instance
const instance = toast.loading("Deploying package...", {
  description: "Bundling source into distribution target.",
});

// 2. Morph the existing toast into success when finished
setTimeout(() => {
  toast.success("Build verified", {
    id: instance.id,
    description: "Artifacts deployed to production edge.",
    duration: 4000,
  });
}, 2000);`}
            stepIndex={2}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() => {
              const instance = toast.loading('Deploying package...', {
                description: 'Bundling source into distribution target.',
              });
              setTimeout(() => {
                toast.success('Build verified', {
                  id: instance.id,
                  description: 'Artifacts deployed to production edge.',
                  duration: 4000,
                });
              }, 2000);
            }}
          />

          <AdvancedBlock
            title="Interactive Action Callbacks"
            badge="Interactivity"
            badgeClass="border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
            description="Render interactive button triggers inside toast cards with self-dismissing callbacks."
            code={`import { toast } from "@/components/ui/toast";

const { id, dismiss } = toast({
  title: "File removed",
  description: "project-spec.pdf was moved to trash.",
  duration: 6000,
  action: (
    <div className="flex items-center gap-2 pt-1">
      <button
        onClick={() => {
          dismiss();
          toast.success("File restored successfully");
        }}
        className="rounded-md bg-neutral-900 px-2 py-1 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900"
      >
        Undo
      </button>
      <button
        onClick={() => dismiss()}
        className="rounded-md border border-border px-2 py-1 text-xs font-medium text-foreground hover:bg-muted"
      >
        Dismiss
      </button>
    </div>
  ),
});`}
            stepIndex={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() => {
              const { dismiss } = toast({
                title: 'File removed',
                description: 'project-spec.pdf was moved to trash.',
                duration: 6000,
                action: (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        dismiss();
                        toast.success('File restored successfully');
                      }}
                      className="rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      Undo
                    </button>
                    <button
                      type="button"
                      onClick={() => dismiss()}
                      className="rounded-md border border-border px-2 py-1 text-[11px] font-medium text-foreground transition hover:bg-muted"
                    >
                      Dismiss
                    </button>
                  </div>
                ),
              });
            }}
          />

          <AdvancedBlock
            title="Programmatic Dismissals (`toast.dismiss`)"
            badge="Queue Control"
            badgeClass="border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400"
            description="Dismiss individual toasts by ID, or wipe the entire viewport stack instantly."
            code={`import { toast } from "@/components/ui/toast";

// Dismiss a specific toast by its ID
toast.dismiss(toastId);

// Wipe all active notifications across all viewport anchors
toast.dismiss();`}
            stepIndex={4}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
            onTrigger={() => {
              toast.dismiss();
            }}
          />
        </div>
      </div>

      {/* Lifecycle API Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Lifecycle API & Return Methods
          </h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Method / Prop</th>
                <th className="p-3.5 whitespace-nowrap">Type</th>
                <th className="p-3.5 whitespace-nowrap">Scope</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.promise()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (promise, &#123; loading, success, error &#125;)
                </td>
                <td className="p-3.5 whitespace-nowrap">Static helper</td>
                <td className="font-sans min-w-[220px]">
                  Binds directly to a Promise and transitions between loading, success, and error states automatically.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">toast.dismiss()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  (id?: string) =&gt; void
                </td>
                <td className="p-3.5 whitespace-nowrap">Global dispatcher</td>
                <td className="font-sans min-w-[220px]">
                  Dismisses a specific toast when given an ID, or clears all active toasts when called with no arguments.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">dismiss()</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  () =&gt; void
                </td>
                <td className="p-3.5 whitespace-nowrap">Instance method</td>
                <td className="font-sans min-w-[220px]">
                  Returned by calling <code className="font-mono text-[11px]">toast()</code>. Immediately closes that specific toast card.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">id</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  string
                </td>
                <td className="p-3.5 whitespace-nowrap">Instance property</td>
                <td className="font-sans min-w-[220px]">
                  Unique string identifier for referencing and updating that notification in subsequent calls.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```
