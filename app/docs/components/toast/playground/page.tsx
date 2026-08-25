'use client';

import React, { ReactNode, useMemo, useRef, useState } from 'react';
import Header from '@/components/app/docs/components/header';
import { toast, setToastPosition, type ToastPosition } from '@/components/ui/toast';
import {
  AlertCircle,
  AlertTriangle,
  Check,
  CheckCircle2,
  Code2,
  Compass,
  Copy,
  Info,
  Layers,
  LayoutTemplate,
  Loader2,
  Palette,
  Play,
  Rocket,
  RotateCcw,
  Sparkles,
  Terminal,
  Trash2,
  X,
  Zap,
} from 'lucide-react';

type ToastCategory = 'All' | 'Setup' | 'Basic' | 'Variants' | 'Customization' | 'Advanced';

const categories: ToastCategory[] = [
  'All',
  'Setup',
  'Basic',
  'Variants',
  'Customization',
  'Advanced',
];

type ExampleId =
  | 'toaster-init'
  | 'position-top-center'
  | 'position-top-right'
  | 'position-top-left'
  | 'position-bottom-right'
  | 'position-bottom-left'
  | 'position-bottom-center'
  | 'default'
  | 'description'
  | 'action'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading'
  | 'duration'
  | 'progress'
  | 'custom-color'
  | 'class-name'
  | 'duplicate'
  | 'dismiss'
  | 'dismiss-all'
  | 'update';

interface ToastExample {
  id: ExampleId;
  title: string;
  description: string;
  category: Exclude<ToastCategory, 'All'>;
  icon: ReactNode;
  iconContainerClass: string;
  code: string;
  badgeClass: string;
  positionTarget?: ToastPosition;
}

const viewportPositions: { id: ToastPosition; label: string; short: string }[] = [
  { id: 'top-left', label: 'Top Left', short: 'TL' },
  { id: 'top-center', label: 'Top Center', short: 'TC' },
  { id: 'top-right', label: 'Top Right', short: 'TR' },
  { id: 'bottom-left', label: 'Bottom Left', short: 'BL' },
  { id: 'bottom-center', label: 'Bottom Center', short: 'BC' },
  { id: 'bottom-right', label: 'Bottom Right', short: 'BR' },
];

const examples: ToastExample[] = [
  {
    id: 'toaster-init',
    title: 'Root Initialization',
    description: 'Mount the Toaster component in your root layout file.',
    category: 'Setup',
    icon: <LayoutTemplate className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `// app/layout.tsx
import { Toaster } from "@/components/ui/toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" defaultDuration={4000} />
      </body>
    </html>
  );
}`,
  },
  {
    id: 'position-top-center',
    title: 'Top Center (Default)',
    description: 'Standard focal placement for universal system alerts.',
    category: 'Setup',
    positionTarget: 'top-center',
    icon: <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("top-center");
toast({
  title: "Top Center Notification",
  description: "Optimal placement for primary visual focus.",
});`,
  },
  {
    id: 'position-top-right',
    title: 'Top Right',
    description: 'Desktop standard alert quadrant anchor.',
    category: 'Setup',
    positionTarget: 'top-right',
    icon: <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("top-right");
toast.info("Top Right Alert", {
  description: "Non-intrusive stream placement for SaaS dashboards.",
  duration: 4000,
});`,
  },
  {
    id: 'position-top-left',
    title: 'Top Left',
    description: 'Left-aligned top corner placement.',
    category: 'Setup',
    positionTarget: 'top-left',
    icon: <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("top-left");
toast.info("Top Left Notification", {
  description: "Anchored to top left viewport margin.",
});`,
  },
  {
    id: 'position-bottom-right',
    title: 'Bottom Right',
    description: 'Classic bottom-corner stack pattern.',
    category: 'Setup',
    positionTarget: 'bottom-right',
    icon: <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("bottom-right");
toast.success("Bottom Right Toast", {
  description: "Clean unobtrusive feed stack for long sessions.",
  duration: 4000,
});`,
  },
  {
    id: 'position-bottom-left',
    title: 'Bottom Left',
    description: 'Bottom left-anchored toast stack.',
    category: 'Setup',
    positionTarget: 'bottom-left',
    icon: <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("bottom-left");
toast.warning("Bottom Left Toast", {
  description: "Positioned directly in the lower-left viewport area.",
});`,
  },
  {
    id: 'position-bottom-center',
    title: 'Bottom Center',
    description: 'Mobile-friendly snackbar style positioning.',
    category: 'Setup',
    positionTarget: 'bottom-center',
    icon: <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `setToastPosition("bottom-center");
toast({
  title: "Bottom Center Toast",
  description: "Snackbar-style banner anchored above mobile controls.",
});`,
  },
  {
    id: 'default',
    title: 'Default Toast',
    description: 'Standard notification with a clean summary title.',
    category: 'Basic',
    icon: <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />,
    iconContainerClass: 'bg-violet-50 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/25',
    badgeClass: 'text-violet-700 bg-violet-50 border-violet-200 dark:text-violet-400 dark:bg-violet-500/10 dark:border-violet-500/20',
    code: `toast({
  title: "Changes saved",
});`,
  },
  {
    id: 'description',
    title: 'With Description',
    description: 'Detailed secondary body text below the title.',
    category: 'Basic',
    icon: <Info className="h-4 w-4 text-sky-600 dark:text-sky-400" />,
    iconContainerClass: 'bg-sky-50 border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/25',
    badgeClass: 'text-sky-700 bg-sky-50 border-sky-200 dark:text-sky-400 dark:bg-sky-500/10 dark:border-sky-500/20',
    code: `toast({
  title: "Profile updated",
  description: "Your system preferences have synchronized successfully.",
});`,
  },
  {
    id: 'action',
    title: 'Interactive Action',
    description: 'Toast with buttons and interactive callback handlers.',
    category: 'Basic',
    icon: <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />,
    iconContainerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25',
    badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/10 dark:border-indigo-500/20',
    code: `const { id, dismiss } = toast({
  title: "File removed",
  description: "project-spec.pdf was moved to trash.",
  duration: 6000,
  action: React.createElement(
    "div",
    { className: "flex items-center gap-2 pt-1" },
    React.createElement(
      "button",
      {
        onClick: () => {
          dismiss();
          toast.success("File restored successfully");
        },
        className:
          "rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
      },
      "Undo"
    ),
    React.createElement(
      "button",
      {
        onClick: () => dismiss(),
        className:
          "rounded-md border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 text-xs font-medium text-foreground transition hover:bg-neutral-500/10",
      },
      "Dismiss"
    )
  ),
});`,
  },
  {
    id: 'success',
    title: 'Success',
    description: 'Confirmation state for successful actions.',
    category: 'Variants',
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
    iconContainerClass: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/25',
    badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20',
    code: `toast.success("Payment received", {
  description: "Invoice #1042 was processed via Stripe.",
  duration: 4000,
});`,
  },
  {
    id: 'error',
    title: 'Error State',
    description: 'Alerts when an operation encounters an issue.',
    category: 'Variants',
    icon: <AlertCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />,
    iconContainerClass: 'bg-rose-50 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/25',
    badgeClass: 'text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-500/10 dark:border-rose-500/20',
    code: `toast.error("Deployment failed", {
  description: "Check the build logs for missing environment keys.",
  duration: 5000,
});`,
  },
  {
    id: 'warning',
    title: 'Warning',
    description: 'Highlights non-blocking operations requiring caution.',
    category: 'Variants',
    icon: <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />,
    iconContainerClass: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/25',
    badgeClass: 'text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/10 dark:border-amber-500/20',
    code: `toast.warning("Unsaved changes", {
  description: "Leaving now will discard your draft modifications.",
  duration: 4000,
});`,
  },
  {
    id: 'info',
    title: 'Information',
    description: 'Neutral announcements and system updates.',
    category: 'Variants',
    icon: <Info className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />,
    iconContainerClass: 'bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/25',
    badgeClass: 'text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/10 dark:border-cyan-500/20',
    code: `toast.info("CLI Update Available", {
  description: "Run npx @marv3l/canopy-ui@latest to install v1.3.0.",
  duration: 4000,
});`,
  },
  {
    id: 'loading',
    title: 'Loading Action',
    description: 'Indeterminate spinner for async processing states.',
    category: 'Variants',
    icon: <Loader2 className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin" />,
    iconContainerClass: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/25',
    badgeClass: 'text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/20',
    code: `toast.loading("Deploying edge function...", {
  description: "Propagating DNS across global regions.",
});`,
  },
  {
    id: 'duration',
    title: 'Custom Duration',
    description: 'Explicit millisecond visibility timer.',
    category: 'Customization',
    icon: <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />,
    iconContainerClass: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-500/10 dark:border-yellow-500/25',
    badgeClass: 'text-yellow-800 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-500/10 dark:border-yellow-500/20',
    code: `toast.success("Quick alert", {
  description: "This notification dismisses in exactly 2.5s.",
  duration: 2500,
});`,
  },
  {
    id: 'progress',
    title: 'Hide Progress Bar',
    description: 'Minimalist visual style without countdown bars.',
    category: 'Customization',
    icon: <Loader2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />,
    iconContainerClass: 'bg-teal-50 border-teal-200 dark:bg-teal-500/10 dark:border-teal-500/25',
    badgeClass: 'text-teal-700 bg-teal-50 border-teal-200 dark:text-teal-400 dark:bg-teal-500/10 dark:border-teal-500/20',
    code: `toast.success("Clean notification", {
  description: "Rendered with progress countdown indicator removed.",
  showProgress: false,
});`,
  },
  {
    id: 'custom-color',
    title: 'Custom Theme Tokens',
    description: 'Granular border, background, and accent color control.',
    category: 'Customization',
    icon: <Palette className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />,
    iconContainerClass: 'bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-500/10 dark:border-fuchsia-500/25',
    badgeClass: 'text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200 dark:text-fuchsia-400 dark:bg-fuchsia-500/10 dark:border-fuchsia-500/20',
    code: `toast({
  title: "Custom branding",
  description: "Styled dynamically using custom color definitions.",
  customColor: {
    bg: "#090d16",
    text: "#f8fafc",
    border: "#1e293b",
    progress: "#6366f1",
    icon: "#818cf8",
  },
});`,
  },
  {
    id: 'class-name',
    title: 'Tailwind Classes',
    description: 'Direct utility overrides on the toast container.',
    category: 'Customization',
    icon: <Code2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />,
    iconContainerClass: 'bg-purple-50 border-purple-200 dark:bg-purple-500/10 dark:border-purple-500/25',
    badgeClass: 'text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-500/10 dark:border-purple-500/20',
    code: `toast({
  title: "Glassmorphism Toast",
  description: "Applied backdrop-blur and border utilities.",
  className: "bg-purple-950/80 backdrop-blur-md border-purple-500/30 text-purple-100",
});`,
  },
  {
    id: 'duplicate',
    title: 'Duplicate Stream',
    description: 'Stacks sequential identical events predictably.',
    category: 'Advanced',
    icon: <Copy className="h-4 w-4 text-orange-600 dark:text-orange-400" />,
    iconContainerClass: 'bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/25',
    badgeClass: 'text-orange-700 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-500/10 dark:border-orange-500/20',
    code: `toast.error("Connection timeout", {
  description: "Retrying socket connection (Attempt 3/5)...",
});`,
  },
  {
    id: 'dismiss',
    title: 'Explicit Dismiss',
    description: 'Programmatic timer dismissal testing.',
    category: 'Advanced',
    icon: <X className="h-4 w-4 text-pink-600 dark:text-pink-400" />,
    iconContainerClass: 'bg-pink-50 border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/25',
    badgeClass: 'text-pink-700 bg-pink-50 border-pink-200 dark:text-pink-400 dark:bg-pink-500/10 dark:border-pink-500/20',
    code: `toast({
  title: "Auto-closing stream",
  description: "Simulating short-lived socket heartbeat notification.",
  duration: 1800,
});`,
  },
  {
    id: 'dismiss-all',
    title: 'Dismiss All',
    description: 'Immediately wipe the entire viewport stack.',
    category: 'Advanced',
    icon: <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />,
    iconContainerClass: 'bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/25',
    badgeClass: 'text-red-700 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20',
    code: `toast.dismiss();`,
  },
  {
    id: 'update',
    title: 'Update Lifecycle',
    description: 'Resolve active loaders into completed cards.',
    category: 'Advanced',
    icon: <Rocket className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
    iconContainerClass: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/25',
    badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20',
    code: `const instance = toast.loading("Deploying package...", {
  description: "Bundling source code into distribution target.",
});

setTimeout(() => {
  toast.success("Build verified", {
    id: instance.id,
    description: "Artifacts deployed to production edge network.",
    duration: 4000,
  });
}, 2000);`,
  },
];

export default function Toast() {
  const [activeId, setActiveId] = useState<ExampleId>('position-top-center');
  const [activeCategory, setActiveCategory] = useState<ToastCategory>('All');
  const [currentPosition, setCurrentPositionState] = useState<ToastPosition>('top-center');
  const [copied, setCopied] = useState(false);
  const [editableCode, setEditableCode] = useState(examples[1].code);
  const [errorMessage, setErrorMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: examples.length };
    examples.forEach((ex) => {
      counts[ex.category] = (counts[ex.category] || 0) + 1;
    });
    return counts;
  }, []);

  const activeExample = examples.find((example) => example.id === activeId) ?? examples[0];

  const filteredExamples = useMemo(() => {
    if (activeCategory === 'All') return examples;
    return examples.filter((example) => example.category === activeCategory);
  }, [activeCategory]);

  const lineCount = useMemo(() => {
    return Math.max(editableCode.split('\n').length, 8);
  }, [editableCode]);

  const handlePositionChange = (pos: ToastPosition) => {
    setCurrentPositionState(pos);
    if (typeof setToastPosition === 'function') {
      setToastPosition(pos);
    }
  };

  const selectExample = (example: ToastExample) => {
    setActiveId(example.id);
    setEditableCode(example.code);
    setCopied(false);
    setErrorMessage('');

    if (example.positionTarget) {
      handlePositionChange(example.positionTarget);
    }
  };

  const resetCode = () => {
    setEditableCode(activeExample.code);
    setCopied(false);
    setErrorMessage('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editableCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setErrorMessage('Unable to copy code to clipboard.');
    }
  };

  const runExample = () => {
    setErrorMessage('');

    if (activeId === 'toaster-init') {
      toast.info('Layout Mount Preview', {
        description: 'Mount <Toaster /> in app/layout.tsx to activate globally.',
      });
      return;
    }

    try {
      const execute = new Function('toast', 'setToastPosition', 'React', editableCode);
      execute(toast, setToastPosition, React);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Execution failed. Check syntax.');
      }
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 sm:px-6 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:pb-4">
      {/* Header Banner */}
      <div className="shrink-0 pt-1">
        <Header
          componentName="toast-playground"
          title="Toast Playground"
          desc="Interactive real-time component sandbox & syntax tester"
          breadcrumbs={[
            { label: 'Components', href: '/docs/components' },
            { label: 'Toast', href: '/docs/components/toast' },
            { label: 'Playground' },
          ]}
        />
      </div>

      {/* Centered Category Pills */}
      <div className="shrink-0 my-3 flex w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] || 0;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`relative inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm ring-1 ring-primary-500'
                  : 'border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              <span>{category}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono leading-none ${
                  isActive ? 'bg-black/20 text-white' : 'bg-muted text-muted-foreground'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Two-Column Studio Layout */}
      <div className="grid flex-1 grid-cols-1 gap-4 lg:min-h-0 lg:grid-cols-12 pb-2">
        {/* Left Column: Preset Examples List */}
        <div className="flex flex-col space-y-2 lg:min-h-0 lg:col-span-5">
          <div className="shrink-0 flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Examples ({filteredExamples.length})
            </span>
            <span className="text-[11px] text-muted-foreground">Click to load snippet</span>
          </div>

          <div className="max-h-52 overflow-y-auto space-y-2 pr-1 sm:max-h-64 lg:max-h-none lg:min-h-0 lg:flex-1">
            {filteredExamples.map((example) => {
              const isActive = activeId === example.id;
              return (
                <button
                  key={example.id}
                  onClick={() => selectExample(example)}
                  className={`group relative flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all duration-150 ${
                    isActive
                      ? 'border-primary-500 bg-primary-500/10 shadow-sm ring-1 ring-primary-500/30'
                      : 'border-border/80 bg-card hover:border-border hover:bg-accent/40 shadow-xs'
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border shadow-xs ${
                      isActive ? 'border-primary-500/40 bg-primary-600/20' : example.iconContainerClass
                    }`}
                  >
                    {example.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-foreground">{example.title}</span>
                      <span
                        className={`shrink-0 inline-flex items-center rounded-md border px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider ${example.badgeClass}`}
                      >
                        {example.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">
                      {example.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Code Editor + Viewport Mini-Map */}
        <div className="flex flex-col gap-2.5 lg:min-h-0 lg:col-span-7">
          {/* Responsive Visual Screen Viewport Controller */}
          <div className="shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-border/90 bg-card/80 p-3.5 sm:p-2.5 backdrop-blur-sm shadow-xs">
            {/* Position Header & Indicator */}
            <div className="flex items-center justify-between sm:justify-start gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 sm:h-7 sm:w-7 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                  <Compass className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Viewport Anchor
                  </span>
                  <span className="text-xs font-bold text-foreground capitalize">
                    {currentPosition.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Mobile-only active position badge */}
              <span className="sm:hidden inline-flex items-center rounded-md bg-primary-500/10 px-2 py-0.5 text-[11px] font-mono font-semibold text-primary-600 dark:text-primary-400">
                {currentPosition}
              </span>
            </div>

            {/* Visual Viewport Grid */}
            <div className="flex items-center justify-center rounded-xl border border-border/80 bg-muted/40 p-1.5 sm:p-1 w-full sm:w-auto">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-1 w-full sm:w-28">
                {viewportPositions.map((pos) => {
                  const isSelected = currentPosition === pos.id;
                  return (
                    <button
                      key={pos.id}
                      type="button"
                      title={`Anchor to ${pos.label}`}
                      onClick={() => {
                        handlePositionChange(pos.id);
                        toast.info(`Anchored: ${pos.label}`, { duration: 500 });
                      }}
                      className={`relative flex h-9 sm:h-5 items-center justify-center rounded-lg sm:rounded text-xs sm:text-[9px] font-mono font-medium transition-all active:scale-95 ${
                        isSelected
                          ? 'bg-primary-600 text-white font-bold shadow-xs sm:scale-105'
                          : 'bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border/40 sm:border-transparent'
                      }`}
                    >
                      <span>{pos.short}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#090b10] shadow-2xl sm:min-h-[340px] lg:min-h-0 lg:flex-1">
            {/* Editor Header Bar */}
            <div className="shrink-0 flex items-center justify-between border-b border-neutral-800 bg-[#0d1017] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-neutral-400">code.tsx</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetCode}
                  title="Reset to template"
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700/60 bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-300 transition hover:bg-neutral-700 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </button>

                <button
                  onClick={handleCopy}
                  title="Copy code"
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700/60 bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-300 transition hover:bg-neutral-700 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Editor Body Area */}
            <div className="relative flex min-h-[200px] flex-1 overflow-hidden font-mono text-[13px] leading-6 lg:min-h-0">
              {/* Line Numbers */}
              <div
                aria-hidden="true"
                className="shrink-0 select-none border-r border-neutral-800/80 bg-[#08090d] px-3 py-3 text-right text-neutral-600 overflow-hidden"
              >
                {Array.from({ length: lineCount }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code Surface */}
              <div className="relative min-h-0 flex-1">
                <textarea
                  ref={textareaRef}
                  value={editableCode}
                  onChange={(e) => {
                    setEditableCode(e.target.value);
                    setErrorMessage('');
                  }}
                  spellCheck={false}
                  autoCapitalize="off"
                  autoComplete="off"
                  className="h-full w-full resize-none border-0 bg-transparent p-3 font-mono text-[13px] leading-6 text-neutral-100 placeholder-neutral-600 outline-none focus:ring-0"
                  placeholder="// Enter toast execution code here..."
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="shrink-0 flex items-center gap-2 border-t border-rose-500/20 bg-rose-500/10 px-4 py-2 text-xs text-rose-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Run Button Bar */}
            <div className="shrink-0 flex items-center justify-between border-t border-neutral-800 bg-[#0d1017] px-4 py-2.5">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Terminal className="h-3.5 w-3.5 text-primary-400" />
                <span>Trigger execution directly in viewport</span>
              </div>

              <button
                onClick={runExample}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-500 active:scale-95"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Run Code</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}