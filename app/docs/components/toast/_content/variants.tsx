import { CodeBlock, CodeData } from '@/components/app/docs/components/codeBlock';
import { TriggerButton, TriggerItemData } from '@/components/app/docs/components/triggerButton';
import { toast } from '@/components/ui/toast';
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Loader2, Sparkles, Terminal } from 'lucide-react';
import React, { useState } from 'react'

export const VARIANT_TRIGGERS: TriggerItemData[] = [
  {
    label: 'Default',
    icon: <Sparkles className="h-4 w-4 text-violet-500" />,
    buttonClass: 'border-border bg-card hover:border-border hover:bg-accent/40',
    labelClass: 'text-foreground',
    onClick: () =>
      toast({
        title: 'Project Saved',
        description: 'Your workspace settings have been synchronized.',
      }),
  },
  {
    label: 'Success',
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
    buttonClass: 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10',
    labelClass: 'text-emerald-700 dark:text-emerald-400',
    onClick: () =>
      toast.success('Payment Received', {
        description: 'Invoice #4102 processed successfully.',
        duration: 4000,
      }),
  },
  {
    label: 'Error',
    icon: <AlertCircle className="h-4 w-4 text-rose-500" />,
    buttonClass: 'border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10',
    labelClass: 'text-rose-700 dark:text-rose-400',
    onClick: () =>
      toast.error('Deployment Failed', {
        description: 'Build exited with code 1 in worker thread.',
        duration: 5000,
      }),
  },
  {
    label: 'Warning',
    icon: <AlertTriangle className="h-4 w-4 text-amber-500" />,
    buttonClass: 'border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10',
    labelClass: 'text-amber-700 dark:text-amber-400',
    onClick: () =>
      toast.warning('Draft Unsaved', {
        description: 'Your modifications are cached locally.',
        duration: 4000,
      }),
  },
  {
    label: 'Info',
    icon: <Info className="h-4 w-4 text-sky-500" />,
    buttonClass: 'border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10',
    labelClass: 'text-sky-700 dark:text-sky-400',
    onClick: () =>
      toast.info('Release v1.2.0', {
        description: 'New animation physics now available.',
        duration: 4000,
      }),
  },
  {
    label: 'Loading',
    icon: <Loader2 className="h-4 w-4 animate-spin text-blue-500" />,
    buttonClass: 'border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10',
    labelClass: 'text-blue-700 dark:text-blue-400',
    onClick: () => {
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
    },
  },
];

export const VARIANT_EXAMPLES: CodeData[] = [
  {
    title: 'Default Toast',
    badge: 'Standard',
    badgeClass:
      'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400',
    description: 'Basic neutral notification with an optional description.',
    code: `import { toast } from "@/components/ui/toast";

toast({
  title: 'Project Saved',
  description: 'Your workspace settings have been synchronized.',
});`,
    onTrigger: () =>
      toast({
        title: 'Project Saved',
        description: 'Your workspace settings have been synchronized.',
      }),
  },
  {
    title: 'Success Variant',
    badge: 'Positive',
    badgeClass:
      'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400',
    description: 'Displays an emerald confirmation badge for completed operations.',
    code: `import { toast } from "@/components/ui/toast";

toast.success("Payment Received", {
  description: "Invoice #4102 processed successfully.",
  duration: 4000,
});`,
    onTrigger: () =>
      toast.success('Payment Received', {
        description: 'Invoice #4102 processed successfully.',
        duration: 4000,
      }),
  },
  {
    title: 'Destructive / Error Variant',
    badge: 'Negative',
    badgeClass:
      'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400',
    description: 'Rose-tinted alert state for runtime exceptions, validation failures, and errors.',
    code: `import { toast } from "@/components/ui/toast";

toast.error("Deployment Failed", {
  description: "Build exited with code 1 in worker thread.",
  duration: 5000,
});`,
    onTrigger: () =>
      toast.error('Deployment Failed', {
        description: 'Build exited with code 1 in worker thread.',
        duration: 5000,
      }),
  },
  {
    title: 'Warning Variant',
    badge: 'Caution',
    badgeClass:
      'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400',
    description: 'Amber indicator for non-fatal issues and operations requiring user review.',
    code: `import { toast } from "@/components/ui/toast";

toast.warning("Draft Unsaved", {
  description: "Your modifications are cached locally.",
  duration: 4000,
});`,
    onTrigger: () =>
      toast.warning('Draft Unsaved', {
        description: 'Your modifications are cached locally.',
        duration: 4000,
      }),
  },
  {
    title: 'Information Variant',
    badge: 'Informational',
    badgeClass:
      'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400',
    description: 'Sky-blue indicator for system updates, release logs, and non-blocking tips.',
    code: `import { toast } from "@/components/ui/toast";

toast.info("Release v1.2.0", {
  description: "New animation physics now available.",
  duration: 4000,
});`,
    onTrigger: () =>
      toast.info('Release v1.2.0', {
        description: 'New animation physics now available.',
        duration: 4000,
      }),
  },
  {
    title: 'Loading & Async Update',
    badge: 'Async State',
    badgeClass:
      'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400',
    description: 'Spins an indeterminate loader and updates in place when the promise settles.',
    code: `import { toast } from "@/components/ui/toast";

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
}, 2000);`,
    onTrigger: () => {
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
    },
  },
];

export default function Variants() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };
  return (
    <>
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
              {VARIANT_TRIGGERS.map((item) => (
                <TriggerButton
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  buttonClass={item.buttonClass}
                  labelClass={item.labelClass}
                  onClick={item.onClick}
                />
              ))}
            </div>
          </div>

          {/* Variant Code & Live Demos */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary-500"/>
              <h2 className="text-base font-bold tracking-tight text-foreground sm-text-lg">
                Variant Snippets
              </h2>
            </div>

            <div className="space-y-4">
              {VARIANT_EXAMPLES.map((item, index) => (
                <CodeBlock
                  key={item.title}
                  title={item.title}
                  badge={item.badge}
                  badgeClass={item.badgeClass}
                  description={item.description}
                  code={item.code}
                  onTrigger={item.onTrigger}
                  stepIndex={index + 1}
                  copiedStep={copiedStep}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          </div>
        </div>
    </>
  )
}