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
/** */