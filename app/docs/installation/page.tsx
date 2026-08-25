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
    npm: 'npm install @marv3l/canopy-ui lucide-react',
    pnpm: 'pnpm add @marv3l/canopy-ui lucide-react',
    yarn: 'yarn add @marv3l/canopy-ui lucide-react',
    bun: 'bun add @marv3l/canopy-ui lucide-react',
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
        desc="How to install dependencies, configure theme variables, and scaffold components in your application."
        breadcrumbs={[
          { label: 'Getting Started', href: '/docs/introduction' },
          { label: 'Installation', href: '/docs/installation' },
        ]}
      />

      {/* Recommended Callout */}
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-950 dark:text-emerald-200">
        <Sparkles className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
        <p className="text-xs leading-relaxed">
          <strong className="font-semibold text-emerald-900 dark:text-emerald-100">Recommended:</strong> Use the Canopy UI CLI to automatically configure Tailwind CSS content paths, inject theme variables, and add component files directly to your project.
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
              Automatically configure Tailwind, inject tokens, and scaffold components.
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
              Select and copy component code directly into your project.
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
              Manually configure theme CSS variables and Tailwind content paths.
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
          Run the <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">init</code> command in your project root to auto-detect your project structure, configure your Tailwind content paths, and inject the base CSS variables:
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
          Use the <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs text-foreground">add</code> command to open the interactive selection menu:
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
          Or specify the component name directly to install it without the prompt:
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
            If you prefer configuring your project manually without the CLI, follow these steps:
          </p>
        </div>

        {/* Manual Step 1: Package Install */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Step 1: Install Dependencies
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

        {/* Manual Step 2: Tailwind Config */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Step 2: Update Tailwind Config (tailwind.config.ts)
            </span>
            <button
              onClick={() =>
                copyToClipboard(
                  `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  darkMode: ["class"],\n  content: [\n    "./app/**/*.{js,ts,jsx,tsx,mdx}",\n    "./components/**/*.{js,ts,jsx,tsx,mdx}",\n    "./node_modules/@marv3l/canopy-ui/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};`,
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
            <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@marv3l/canopy-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}</code>
          </pre>
        </div>

        {/* Manual Step 3: Theme Variables */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Step 3: Add Theme Variables (app/globals.css)
            </span>
            <button
              onClick={() =>
                copyToClipboard(
                  `@layer base {\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 240 10% 3.9%;\n    --card: 0 0% 100%;\n    --card-foreground: 240 10% 3.9%;\n    --border: 240 5.9% 90%;\n    --muted: 240 4.8% 95.9%;\n    --muted-foreground: 240 3.8% 46.1%;\n    --accent: 240 4.8% 95.9%;\n    --primary: 217 91% 60%;\n    --destructive: 0 84.2% 60.2%;\n    --success: 142 76% 36%;\n    --success-bg: 142 76% 96%;\n    --warning: 38 92% 50%;\n    --warning-bg: 48 96% 96%;\n    --radius-lg: 0.625rem;\n  }\n\n  .dark {\n    --background: 240 10% 3.9%;\n    --foreground: 0 0% 98%;\n    --card: 240 10% 3.9%;\n    --card-foreground: 0 0% 98%;\n    --border: 240 3.7% 15.9%;\n    --muted: 240 3.7% 15.9%;\n    --muted-foreground: 240 5% 64.9%;\n    --accent: 240 3.7% 15.9%;\n    --primary: 217 91% 60%;\n    --destructive: 0 62.8% 30.6%;\n    --success: 142 70% 45%;\n    --success-bg: 160 84% 6%;\n    --warning: 38 92% 50%;\n    --warning-bg: 35 92% 8%;\n  }\n}`,
                  6
                )
              }
              className="flex items-center gap-1.5 rounded-lg border border-border/80 px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copiedStep === 6 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedStep === 6 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-[#090b10] p-3.5 font-mono text-xs text-neutral-200">
            <code>{`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --border: 240 5.9% 90%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --primary: 217 91% 60%;
    --destructive: 0 84.2% 60.2%;
    --success: 142 76% 36%;
    --success-bg: 142 76% 96%;
    --warning: 38 92% 50%;
    --warning-bg: 48 96% 96%;
    --radius-lg: 0.625rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --primary: 217 91% 60%;
    --destructive: 0 62.8% 30.6%;
    --success: 142 70% 45%;
    --success-bg: 160 84% 6%;
    --warning: 38 92% 50%;
    --warning-bg: 35 92% 8%;
  }
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