import React, { useState } from 'react'
import { toast } from '@/components/ui/toast';
import { CodeBlock, CodeData } from '@/components/app/docs/components/codeBlock';
import { Layers, Rocket, Terminal, Trash2, Undo2, X, Zap } from 'lucide-react';
import { TriggerButton, TriggerItemData } from '@/components/app/docs/components/triggerButton';

export const LIFECYCLE_TRIGGERS: TriggerItemData[] = [
  {
    label: 'Update ID',
    icon: <Rocket className="h-4 w-4 text-emerald-500" />,
    buttonClass: 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10',
    labelClass: 'text-emerald-700 dark:text-emerald-400',
    onClick: () => {
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
    },
  },
  {
    label: 'Actions',
    icon: <Undo2 className="h-4 w-4 text-indigo-500" />,
    buttonClass: 'border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10',
    labelClass: 'text-indigo-700 dark:text-indigo-400',
    onClick: () => {
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
    },
  },
  {
    label: 'Duplicates',
    icon: <Layers className="h-4 w-4 text-orange-500" />,
    buttonClass: 'border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10',
    labelClass: 'text-orange-700 dark:text-orange-400',
    onClick: () => {
      toast.error('Socket Timeout', {
        description: 'Retrying socket connection (Attempt 2/5)...',
        duration: 3000,
      });
    },
  },
  {
    label: 'Dismiss ID',
    icon: <X className="h-4 w-4 text-pink-500" />,
    buttonClass: 'border-pink-500/20 bg-pink-500/5 hover:bg-pink-500/10',
    labelClass: 'text-pink-700 dark:text-pink-400',
    onClick: () => {
      const active = toast({
        title: 'Dismissing in 1.5s...',
        description: 'Programmatically controlled via instance.dismiss()',
        duration: 5000,
      });
      setTimeout(() => {
        active.dismiss();
      }, 1500);
    },
  },
  {
    label: 'Dismiss All',
    icon: <Trash2 className="h-4 w-4 text-rose-500" />,
    buttonClass: 'border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10',
    labelClass: 'text-rose-700 dark:text-rose-400',
    onClick: () => {
      toast.dismiss();
    },
  },
  {
    label: 'Promise API',
    icon: <Zap className="h-4 w-4 text-blue-500" />,
    buttonClass: 'border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10',
    labelClass: 'text-blue-700 dark:text-blue-400',
    onClick: () => {
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: 'Uploading report...',
          success: 'Report compiled and sent.',
          error: 'Upload aborted.',
        }
      );
    },
  },
];

export const ADVANCED_STEPS: CodeData[] = [
  {
    title: 'Promise Lifecycle Resolver (`toast.promise`)',
    badge: 'Async Helper',
    badgeClass:
      'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400',
    description:
      'Automatically binds to any JavaScript Promise and handles loading, resolved, and rejected states.',
    code: `import { toast } from "@/components/ui/toast";

const uploadTask = async () => {
  const response = await fetch("/api/upload");
  if (!response.ok) throw new Error();
  return response.json();
};

toast.promise(uploadTask(), {
  loading: "Uploading report...",
  success: "Report compiled and sent.",
  error: "Upload failed. Please retry.",
});`,
    onTrigger: () => {
      toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: 'Uploading report...',
          success: 'Report compiled and sent.',
          error: 'Upload failed. Please retry.',
        }
      );
    },
  },
  {
    title: 'Update by ID Lifecycle',
    badge: 'ID Mutation',
    badgeClass:
      'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400',
    description:
      'Manually update an active toast in place by passing its existing unique ID.',
    code: `import { toast } from "@/components/ui/toast";

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
}, 2000);`,
    onTrigger: () => {
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
    },
  },
  {
    title: 'Interactive Action Callbacks',
    badge: 'Interactivity',
    badgeClass:
      'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400',
    description:
      'Render interactive button triggers inside toast cards with self-dismissing callbacks.',
    code: `import { toast } from "@/components/ui/toast";

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
});`,
    onTrigger: () => {
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
    },
  },
  {
    title: 'Programmatic Dismissals (`toast.dismiss`)',
    badge: 'Queue Control',
    badgeClass:
      'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400',
    description:
      'Dismiss individual toasts by ID, or wipe the entire viewport stack instantly.',
    code: `import { toast } from "@/components/ui/toast";

// Dismiss a specific toast by its ID
toast.dismiss(toastId);

// Wipe all active notifications across all viewport anchors
toast.dismiss();`,
    onTrigger: () => {
      toast.dismiss();
    },
  },
];
export default function Advanced() {
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
                Lifecycle Triggers
              </h2>
              <span className="text-xs text-muted-foreground">Click to trigger async flows</span>
            </div>

            {/* 2 cols mobile, 3 cols tablet, expands cleanly up to 6 on wider screens */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
              {LIFECYCLE_TRIGGERS.map((item) => (
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

          <div className="space-y-4"></div>
          {/* Advanced Code & Live Demos */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary-500" />
              <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                Advanced Patterns & Snippets
              </h2>
            </div>
            <div className="space-y-4">
              {ADVANCED_STEPS.map((item, index) => (
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