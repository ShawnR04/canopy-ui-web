'use client';

import React, { useState } from 'react';
import Header from '@/components/app/docs/components/header';
import Link from 'next/link';
import { 
  Check, 
  Copy, 
  Terminal, 
  ArrowRight, 
  FileCode2, 
  Layers, 
  Sparkles,
} from 'lucide-react';

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const initCommands = {
    npm: 'npx @marv3l/canopy-ui init',
    pnpm: 'pnpm dlx @marv3l/canopy-ui init',
    yarn: 'yarn dlx @marv3l/canopy-ui init',
    bun: 'bunx @marv3l/canopy-ui init',
  };

  const addCommands = {
    npm: 'npx @marv3l/canopy-ui add',
    pnpm: 'pnpm dlx @marv3l/canopy-ui add',
    yarn: 'yarn dlx @marv3l/canopy-ui add',
    bun: 'bunx @marv3l/canopy-ui add',
  };

  const specifyAddCommands = {
    npm: 'npx @marv3l/canopy-ui add [component]',
    pnpm: 'pnpm dlx @marv3l/canopy-ui add [component]',
    yarn: 'yarn dlx @marv3l/canopy-ui add [component]',
    bun: 'bunx @marv3l/canopy-ui add [component]',
  };

  const manualInstallCommands = {
    npm: 'npm install clsx tailwind-merge class-variance-authority lucide-react',
    pnpm: 'pnpm add clsx tailwind-merge class-variance-authority lucide-react',
    yarn: 'yarn add clsx tailwind-merge class-variance-authority lucide-react',
    bun: 'bun add clsx tailwind-merge class-variance-authority lucide-react',
  };

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="container-wrapper space-y-12">
      {/* Header */}
      <Header
        componentName="Getting Started"
        title="Installation"
        desc="How to configure your project, set up theme tokens, and scaffold Canopy UI components directly into your codebase."
        breadcrumbs={[
          { label: 'Getting Started', href: '/docs/introduction' },
          { label: 'Installation', href: '/docs/installation' },
        ]}
      />

      {/* Recommended Callout */}
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-950 dark:text-emerald-200">
        <Sparkles className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
        <p className="text-xs leading-relaxed">
          <strong className="font-semibold text-emerald-900 dark:text-emerald-100">Architecture Note:</strong> Canopy UI follows a copy-paste component model. Components are written directly into your source directory so you can customize them completely without relying on locked node_modules wrappers.
        </p>
      </div>

      {/* Path Selector Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <a
          href="#use-cli"
          className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-xs"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-foreground text-sm">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              Quick Start (CLI)
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automatically configure Tailwind, inject tokens, and scaffold setup files.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-semibold text-foreground">
            Get started <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        <a
          href="#add-components"
          className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-xs"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-foreground text-sm">
              <Layers className="h-4 w-4 text-muted-foreground" />
              Add Components
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Scaffold individual primitives into your project components folder.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-semibold text-foreground">
            Scaffold files <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        <a
          href="#manual-setup"
          className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-xs"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-foreground text-sm">
              <FileCode2 className="h-4 w-4 text-muted-foreground" />
              Manual Setup
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Manually configure utility helpers, Tailwind paths, and global css variables.
            </p>
          </div>
          <div className="mt-4 flex items-center text-xs font-semibold text-foreground">
            Manual guide <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>
      </div>

      {/* Step 1: CLI Init */}
      <div id="use-cli" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
            1
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Initialize Canopy UI
          </h2>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Run the <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">init</code> command in your project root to auto-detect your project structure, configure paths, and create your <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">components.json</code> registry file:
        </p>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Command Line
              </span>
              <div className="flex gap-1 text-xs font-medium ml-2">
                {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setActiveTab(pkg)}
                    className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                      activeTab === pkg
                        ? 'bg-muted text-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(initCommands[activeTab], 1)}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 1 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 1 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{initCommands[activeTab]}</code>
          </pre>
        </div>
      </div>

      {/* Step 2: Add Components */}
      <div id="add-components" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
            2
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Add Components
          </h2>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Use the <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">add</code> command to open the interactive selection menu and scaffold components into your project:
        </p>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Command Line
              </span>
              <div className="flex gap-1 text-xs font-medium ml-2">
                {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setActiveTab(pkg)}
                    className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                      activeTab === pkg
                        ? 'bg-muted text-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(addCommands[activeTab], 2)}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 2 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 2 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{addCommands[activeTab]}</code>
          </pre>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Or specify the component identifier directly to download and scaffold it immediately:
        </p>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Command Line
              </span>
              <div className="flex gap-1 text-xs font-medium ml-2">
                {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setActiveTab(pkg)}
                    className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                      activeTab === pkg
                        ? 'bg-muted text-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(specifyAddCommands[activeTab], 3)}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 3 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 3 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{specifyAddCommands[activeTab]}</code>
          </pre>
        </div>
      </div>

      {/* Manual Setup Section */}
      <div id="manual-setup" className="space-y-6 scroll-mt-24 pt-6 border-t border-border">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Manual Setup
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you prefer setting up your codebase manually instead of running the CLI initialization, follow these configuration steps:
          </p>
        </div>

        {/* Manual Step 1: Package Install */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Step 1: Install Peer Dependencies
            </span>
            <button
              onClick={() => copyToClipboard(manualInstallCommands[activeTab], 4)}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 4 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 4 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{manualInstallCommands[activeTab]}</code>
          </pre>
        </div>

        {/* Manual Step 2: Utility Helper */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Step 2: Create a cn Helper (lib/utils.ts)
            </span>
            <button
              onClick={() =>
                copyToClipboard(
                  `import { type ClassValue, clsx } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`,
                  5
                )
              }
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 5 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 5 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{`import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</code>
          </pre>
        </div>

        {/* Manual Step 3: Theme Variables */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Step 3: Add Theme Variables (app/globals.css)
              </span>
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                Note: If you don&apos;t have the CSS, it is auto-generated during CLI init.
              </span>
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  `:root {\n  --border: #e5e5e5;\n  --input: #e5e5e5;\n  --ring: #171717;\n  --radius-lg: 0.625rem;\n\n  /* Primary */\n  --primary: #171717;\n  --primary-foreground: #fafafa;\n  --primary-hover: #262626;\n\n  /* Secondary */\n  --secondary: #e5e5e5;\n  --secondary-foreground: #262626;\n  --secondary-hover: #d4d4d4;\n  --secondary-border: #d4d4d4;\n\n  /* Muted & Accent */\n  --muted: #f5f5f5;\n  --muted-foreground: #737373;\n  --accent: #f5f5f5;\n  --accent-foreground: #171717;\n  --accent-hover: #e5e5e5;\n\n  /* Status Colors */\n  --destructive: #dc2626;\n  --destructive-foreground: #ffffff;\n  --destructive-hover: #b91c1c;\n\n  --success: #059669;\n  --success-foreground: #ffffff;\n  --success-hover: #047857;\n\n  --warning: #d97706;\n  --warning-foreground: #ffffff;\n  --warning-hover: #b45309;\n\n  --info: #0284c7;\n  --info-foreground: #ffffff;\n  --info-hover: #0369a1;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --border: rgba(64, 64, 64, 0.8);\n    --input: rgba(64, 64, 64, 0.8);\n    --ring: #a3a3a3;\n\n    --primary: #fafafa;\n    --primary-foreground: #171717;\n    --primary-hover: #e5e5e5;\n\n    --secondary: #262626;\n    --secondary-foreground: #fafafa;\n    --secondary-hover: #404040;\n    --secondary-border: #404040;\n\n    --muted: #262626;\n    --muted-foreground: #a3a3a3;\n    --accent: #262626;\n    --accent-foreground: #fafafa;\n    --accent-hover: #333333;\n\n    --destructive: #ef4444;\n    --destructive-foreground: #ffffff;\n    --destructive-hover: #dc2626;\n\n    --success: #10b981;\n    --success-foreground: #ffffff;\n    --success-hover: #059669;\n\n    --warning: #f59e0b;\n    --warning-foreground: #ffffff;\n    --warning-hover: #d97706;\n\n    --info: #0ea5e9;\n    --info-foreground: #ffffff;\n    --info-hover: #0284c7;\n  }\n}\n\n@theme inline {\n  --color-border: var(--border);\n  --color-input: var(--input);\n  --color-ring: var(--ring);\n\n  --color-primary: var(--primary);\n  --color-primary-foreground: var(--primary-foreground);\n  --color-primary-hover: var(--primary-hover);\n\n  --color-secondary: var(--secondary);\n  --color-secondary-foreground: var(--secondary-foreground);\n  --color-secondary-hover: var(--secondary-hover);\n  --color-secondary-border: var(--secondary-border);\n\n  --color-muted: var(--muted);\n  --color-muted-foreground: var(--muted-foreground);\n  --color-accent: var(--accent);\n  --color-accent-foreground: var(--accent-foreground);\n  --color-accent-hover: var(--accent-hover);\n\n  --color-destructive: var(--destructive);\n  --color-destructive-foreground: var(--destructive-foreground);\n  --color-destructive-hover: var(--destructive-hover);\n\n  --color-success: var(--success);\n  --color-success-foreground: var(--success-foreground);\n  --color-success-hover: var(--success-hover);\n\n  --color-warning: var(--warning);\n  --color-warning-foreground: var(--warning-foreground);\n  --color-warning-hover: var(--warning-hover);\n\n  --color-info: var(--info);\n  --color-info-foreground: var(--info-foreground);\n  --color-info-hover: var(--info-hover);\n}`,
                  6
                )
              }
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground shrink-0"
            >
              {copiedStep === 6 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 6 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto max-h-112 rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{`:root {
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #171717;
  --radius-lg: 0.625rem;

  /* Primary */
  --primary: #171717;
  --primary-foreground: #fafafa;
  --primary-hover: #262626;

  /* Secondary */
  --secondary: #e5e5e5;
  --secondary-foreground: #262626;
  --secondary-hover: #d4d4d4;
  --secondary-border: #d4d4d4;

  /* Muted & Accent */
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --accent: #f5f5f5;
  --accent-foreground: #171717;
  --accent-hover: #e5e5e5;

  /* Status Colors */
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --destructive-hover: #b91c1c;

  --success: #059669;
  --success-foreground: #ffffff;
  --success-hover: #047857;

  --warning: #d97706;
  --warning-foreground: #ffffff;
  --warning-hover: #b45309;

  --info: #0284c7;
  --info-foreground: #ffffff;
  --info-hover: #0369a1;
}

@media (prefers-color-scheme: dark) {
  :root {
    --border: rgba(64, 64, 64, 0.8);
    --input: rgba(64, 64, 64, 0.8);
    --ring: #a3a3a3;

    --primary: #fafafa;
    --primary-foreground: #171717;
    --primary-hover: #e5e5e5;

    --secondary: #262626;
    --secondary-foreground: #fafafa;
    --secondary-hover: #404040;
    --secondary-border: #404040;

    --muted: #262626;
    --muted-foreground: #a3a3a3;
    --accent: #262626;
    --accent-foreground: #fafafa;
    --accent-hover: #333333;

    --destructive: #ef4444;
    --destructive-foreground: #ffffff;
    --destructive-hover: #dc2626;

    --success: #10b981;
    --success-foreground: #ffffff;
    --success-hover: #059669;

    --warning: #f59e0b;
    --warning-foreground: #ffffff;
    --warning-hover: #d97706;

    --info: #0ea5e9;
    --info-foreground: #ffffff;
    --info-hover: #0284c7;
  }
}

@theme inline {
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary-hover: var(--primary-hover);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary-hover: var(--secondary-hover);
  --color-secondary-border: var(--secondary-border);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent-hover: var(--accent-hover);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-destructive-hover: var(--destructive-hover);

  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-success-hover: var(--success-hover);

  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-warning-hover: var(--warning-hover);

  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
  --color-info-hover: var(--info-hover);
}`}</code>
          </pre>
        </div>
      </div>

      {/* Next Step Callout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-foreground">
            Explore the Components
          </h3>
          <p className="text-xs text-muted-foreground">
            Browse the full catalog for interactive demos, props references, and examples.
          </p>
        </div>

        <Link
          href="/docs/components"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-xs font-semibold text-background hover:opacity-90 transition-opacity whitespace-nowrap shadow-xs"
        >
          <span>View Components</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}