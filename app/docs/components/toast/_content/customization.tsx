import { CodeBlock, CodeData } from '@/components/app/docs/components/codeBlock';
import { TriggerButton, TriggerItemData } from '@/components/app/docs/components/triggerButton';
import { toast } from '@/components/ui/toast';
import { Code2, Layers, Palette, Sliders, Sparkles, Terminal, Zap } from 'lucide-react';
import React, { useState } from 'react'

export const STYLE_TRIGGERS: TriggerItemData[] = [
  {
    label: 'Tokens',
    icon: <Palette className="h-4 w-4 text-fuchsia-500" />,
    buttonClass: 'border-fuchsia-500/20 bg-fuchsia-500/5 hover:bg-fuchsia-500/10',
    labelClass: 'text-fuchsia-700 dark:text-fuchsia-400',
    onClick: () =>
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
      }),
  },
  {
    label: 'Glass',
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
    buttonClass: 'border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10',
    labelClass: 'text-indigo-700 dark:text-indigo-400',
    onClick: () =>
      toast({
        title: 'Glassmorphism Blur',
        description: 'Backdrop-blur and semi-transparent border utilities.',
        className: 'bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl',
      }),
  },
  {
    label: 'No Bar',
    icon: <Sliders className="h-4 w-4 text-teal-500" />,
    buttonClass: 'border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/10',
    labelClass: 'text-teal-700 dark:text-teal-400',
    onClick: () =>
      toast.success('Clean Alert', {
        description: 'Rendered cleanly with countdown progress bar omitted.',
        showProgress: false,
      }),
  },
  {
    label: 'Duration',
    icon: <Zap className="h-4 w-4 text-yellow-500" />,
    buttonClass: 'border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10',
    labelClass: 'text-yellow-700 dark:text-yellow-400',
    onClick: () =>
      toast.info('Quick Dismiss', {
        description: 'Explicit timer set to dismiss in 2 seconds.',
        duration: 2000,
      }),
  },
  {
    label: 'Contrast',
    icon: <Layers className="h-4 w-4 text-emerald-500" />,
    buttonClass: 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10',
    labelClass: 'text-emerald-700 dark:text-emerald-400',
    onClick: () =>
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
      }),
  },
  {
    label: 'Classes',
    icon: <Code2 className="h-4 w-4 text-primary-500" />,
    buttonClass: 'border-border bg-card hover:border-border hover:bg-accent/40',
    labelClass: 'text-foreground',
    onClick: () =>
      toast({
        title: 'Tailwind Card',
        description: 'Rendered with custom rounded corners and ring borders.',
        className: 'rounded-2xl border-2 border-primary-500/40 bg-card p-4 shadow-xl',
      }),
  },
];

export const CUSTOMIZATION_STEPS: CodeData[] = [
  {
    title: 'Granular Theme Tokens (`customColor`)',
    badge: 'Color Tokens',
    badgeClass:
      'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-500/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-400',
    description:
      'Override background, foreground, border, progress countdown, and icon colors per toast.',
    code: `import { toast } from "@/components/ui/toast";

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
});`,
    onTrigger: () =>
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
      }),
  },
  {
    title: 'Glassmorphism & Backdrop Filters (`className`)',
    badge: 'Tailwind Utilities',
    badgeClass:
      'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400',
    description:
      'Inject custom Tailwind CSS classes directly onto the toast card element.',
    code: `import { toast } from "@/components/ui/toast";

toast({
  title: "Glassmorphism Toast",
  description: "Rendered with backdrop blur and semi-opaque backgrounds.",
  className: "bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl",
});`,
    onTrigger: () =>
      toast({
        title: 'Glassmorphism Toast',
        description: 'Rendered with backdrop blur and semi-opaque backgrounds.',
        className:
          'bg-indigo-950/70 backdrop-blur-md border-indigo-500/30 text-indigo-100 shadow-2xl',
      }),
  },
  {
    title: 'Toggle Progress Countdown Bar',
    badge: 'Indicators',
    badgeClass:
      'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400',
    description:
      'Disable the auto-dismiss timer progress bar for a cleaner, minimalist layout.',
    code: `import { toast } from "@/components/ui/toast";

toast.success("Profile Updated", {
  description: "Changes preserved without a bottom countdown line.",
  showProgress: false,
});`,
    onTrigger: () =>
      toast.success('Profile Updated', {
        description: 'Changes preserved without a bottom countdown line.',
        showProgress: false,
      }),
  },
  {
    title: 'Custom Duration & Timers',
    badge: 'Timing API',
    badgeClass:
      'border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-400',
    description:
      'Set custom visibility intervals in milliseconds, or pass Infinity for permanent toasts.',
    code: `import { toast } from "@/components/ui/toast";

// Fast dismiss toast (2 seconds)
toast.info("Quick Notice", {
  description: "This alert dismisses in exactly 2000ms.",
  duration: 2000,
});

// Persistent toast (requires user dismissal)
toast.warning("Action Required", {
  description: "Stays open until explicitly dismissed.",
  duration: Infinity,
});`,
    onTrigger: () =>
      toast.info('Quick Notice', {
        description: 'This alert dismisses in exactly 2000ms.',
        duration: 2000,
      }),
  },
]

export default function Customization() {
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
                Live Style Demos
              </h2>
              <span className="text-xs text-muted-foreground">Click to preview styled cards</span>
            </div>

            {/* 2 cols mobile, 3 cols tablet, expands cleanly up to 6 on wider screens */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
              {STYLE_TRIGGERS.map((item) => (
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
              <Layers className="h-5 w-5 text-primary-500"/>
              <h2 className="text-base font-bold tracking-tight text-foreground sm-text-lg">
                Customization & Options Schema
              </h2>
            </div>

            <div className="space-y-4">
              {CUSTOMIZATION_STEPS.map((item, index) => (
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