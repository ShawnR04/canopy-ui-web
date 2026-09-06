'use client'

import Header from '@/components/app/docs/components/header';
import { Button } from '@/components/ui/button';
import { Check, Copy, Mail, Terminal } from 'lucide-react';
import React, { useState } from 'react'

export default function ButtonDocPage() {
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
        componentName="button"
        title="Button"
        desc="Interactive, accessible button primitive powered by CVA and Radix Slot. Features 7 stylistic presets, 6 size tokens, leading/trailing icon slots, and native loading states."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Button', href: '/docs/components/button' },
        ]}
      />

      {/* Installation Guide */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Quick Setup Guide
          </h2>
        </div>

        <div className="space-y-4">
          {/* Step 1: Install */}
          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
                Step 1: Install Component via CLI
              </span>
              <button 
                type="button"
                onClick={() => copyToClipboard('npx @marv3l/canopy-ui add button', 1)}
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
              <code>npx @marv3l/canopy-ui add button</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Preset Variants
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Presets view with codeblock */}
        <div className=""></div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Button Sizes
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Size View with codeblock */}
        <div className=""></div>
      </div>

      {/* Icons */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Buttons with Icons
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Icon View */}
        <div className=""></div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Loading States
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Loading State view with codeblock */}
        <div className=""></div>
      </div>

      {/* AsChild (Links) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            AsChild (Links)
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* AsChild view with codeblock */}
        <div className=""></div>
      </div>
    </div>
  )
}
