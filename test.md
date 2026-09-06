Button

``tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/app/docs/components/header';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/app/docs/components/codeBlock';
import {
  Sparkles,
  Layers,
  Terminal,
  Sliders,
  Mail,
  ArrowRight,
  Bookmark,
  Boxes,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

export default function ButtonDocPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [interactiveLoading, setInteractiveLoading] = useState(false);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="w-full min-w-0 space-y-12">
      {/* Header Banner */}
      <Header
        componentName="button"
        title="Button"
        desc="Interactive, accessible button primitive powered by CVA and Radix Slot. Features 7 stylistic presets, 6 size tokens, leading/trailing icon slots, and native loading states."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Button' },
        ]}
        showPlayground={false}
      />

      {/* SECTION 1: SETUP & INSTALLATION */}
      <section id="setup" className="space-y-6 pt-4 border-t border-border scroll-mt-20">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Quick Setup Guide
          </h2>
        </div>

        <div className="space-y-4">
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
                {copiedStep === 1 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>npx @marv3l/canopy-ui add button</code>
            </pre>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
                Step 2: Import and Render
              </span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    `import { Button } from "@/components/ui/button";\n\nexport default function Page() {\n  return (\n    <Button variant="default" size="default">\n      Click me\n    </Button>\n  );\n}`,
                    2
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {copiedStep === 2 ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedStep === 2 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRESET VARIANTS */}
      <section id="variants" className="space-y-6 pt-6 border-t border-border scroll-mt-20">
        <div className="flex items-center gap-2">
          <Boxes className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Preset Variants
          </h2>
        </div>

        {/* Static Visual Showcase */}
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-xs">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
        </div>

        {/* Variant Snippets */}
        <div className="space-y-4">
          <CodeBlock
            title="Default Solid"
            badge="Standard"
            badgeClass="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-400"
            description="Primary interactive button with solid brand color and elevation shadow."
            code={`import { Button } from "@/components/ui/button";\n\nexport function DefaultButtonDemo() {\n  return <Button variant="default">Primary Action</Button>;\n}`}
            onTrigger={() => {}}
            stepIndex={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Destructive / Danger"
            badge="Danger"
            badgeClass="border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400"
            description="Highlighted error tone for dangerous or irreversible actions."
            code={`import { Button } from "@/components/ui/button";\n\nexport function DestructiveButtonDemo() {\n  return <Button variant="destructive">Delete Account</Button>;\n}`}
            onTrigger={() => {}}
            stepIndex={4}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Outline & Bordered"
            badge="Surface"
            badgeClass="border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
            description="Crisp bordered button for secondary or equal visual weight."
            code={`import { Button } from "@/components/ui/button";\n\nexport function OutlineButtonDemo() {\n  return <Button variant="outline">Discard Changes</Button>;\n}`}
            onTrigger={() => {}}
            stepIndex={5}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Secondary Neutral"
            badge="Neutral"
            badgeClass="border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
            description="Soft secondary contrast background for non-urgent tasks."
            code={`import { Button } from "@/components/ui/button";\n\nexport function SecondaryButtonDemo() {\n  return <Button variant="secondary">View Details</Button>;\n}`}
            onTrigger={() => {}}
            stepIndex={6}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Ghost & Link Variants"
            badge="Minimal"
            badgeClass="border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400"
            description="Border-free buttons that reveal background on hover, or behave like inline links."
            code={`import { Button } from "@/components/ui/button";\n\nexport function MinimalButtonDemo() {\n  return (\n    <div className="flex gap-2">\n      <Button variant="ghost">Hover Me</Button>\n      <Button variant="link">External Link</Button>\n    </div>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={7}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Success Affirmative"
            badge="Positive"
            badgeClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            description="Emerald affirmative button for completed checkpoints and checkouts."
            code={`import { Button } from "@/components/ui/button";\n\nexport function SuccessButtonDemo() {\n  return <Button variant="success">Verify & Pay</Button>;\n}`}
            onTrigger={() => {}}
            stepIndex={8}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>
      </section>

      {/* SECTION 3: SIZING & CUSTOMIZATION */}
      <section id="sizing" className="space-y-6 pt-6 border-t border-border scroll-mt-20">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Sizing & Icon Slots
          </h2>
        </div>

        {/* Static Size Showcase */}
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs">
          <Button size="sm">Small (sm)</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large (lg)</Button>
          <Button size="icon" variant="outline" aria-label="Bookmark">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button leftIcon={<Mail className="h-4 w-4" />}>Leading Icon</Button>
          <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Trailing Icon
          </Button>
        </div>

        {/* Sizing Snippets */}
        <div className="space-y-4">
          <CodeBlock
            title="Scale Variations (`size`)"
            badge="Dimensions"
            badgeClass="border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400"
            description="Standard sizing tokens for small (32px), default (36px), and large (40px) buttons."
            code={`import { Button } from "@/components/ui/button";\n\nexport function SizesDemo() {\n  return (\n    <div className="flex items-center gap-3">\n      <Button size="sm">Small (h-8)</Button>\n      <Button size="default">Default (h-9)</Button>\n      <Button size="lg">Large (h-10)</Button>\n    </div>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={9}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Leading & Trailing Icons (`leftIcon`, `rightIcon`)"
            badge="Icon Slots"
            badgeClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            description="Slot Lucide icons directly into leading or trailing positions with automatic scaling."
            code={`import { Button } from "@/components/ui/button";\nimport { Mail, ArrowRight } from "lucide-react";\n\nexport function IconSlotsDemo() {\n  return (\n    <div className="flex gap-3">\n      <Button leftIcon={<Mail className="h-4 w-4" />}>Send Message</Button>\n      <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>\n        Get Started\n      </Button>\n    </div>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={10}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Square Icon-Only Buttons (`icon`, `icon-sm`, `icon-lg`)"
            badge="Icon Only"
            badgeClass="border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400"
            description="Zero-padding square ratios designed specifically for toolbars and utility buttons."
            code={`import { Button } from "@/components/ui/button";\nimport { Bookmark } from "lucide-react";\n\nexport function IconButtonDemo() {\n  return (\n    <Button size="icon" variant="outline" aria-label="Bookmark">\n      <Bookmark className="h-4 w-4" />\n    </Button>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={11}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>

        {/* Size Metrics Table */}
        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Size Prop</th>
                <th className="p-3.5 whitespace-nowrap">Height</th>
                <th className="p-3.5 whitespace-nowrap">Padding</th>
                <th className="p-3.5 whitespace-nowrap">Typography</th>
                <th className="p-3.5 whitespace-nowrap">Icon Sizing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono text-muted-foreground">
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"sm"</td>
                <td className="p-3.5 text-sky-600 dark:text-sky-400 whitespace-nowrap">h-8 (32px)</td>
                <td className="p-3.5 whitespace-nowrap">px-3</td>
                <td className="p-3.5 whitespace-nowrap">text-xs</td>
                <td className="font-sans min-w-[150px]">size-3.5 (14px)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"default"</td>
                <td className="p-3.5 text-indigo-600 dark:text-indigo-400 whitespace-nowrap">h-9 (36px)</td>
                <td className="p-3.5 whitespace-nowrap">px-4 py-2</td>
                <td className="p-3.5 whitespace-nowrap">text-sm</td>
                <td className="font-sans min-w-[150px]">size-4 (16px)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"lg"</td>
                <td className="p-3.5 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">h-10 (40px)</td>
                <td className="p-3.5 whitespace-nowrap">px-6</td>
                <td className="p-3.5 whitespace-nowrap">text-base</td>
                <td className="font-sans min-w-[150px]">size-5 (20px)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"icon"</td>
                <td className="p-3.5 text-purple-600 dark:text-purple-400 whitespace-nowrap">size-9 (36×36px)</td>
                <td className="p-3.5 whitespace-nowrap">p-0</td>
                <td className="p-3.5 whitespace-nowrap">—</td>
                <td className="font-sans min-w-[150px]">size-4 (16px)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"icon-sm"</td>
                <td className="p-3.5 text-purple-600 dark:text-purple-400 whitespace-nowrap">size-8 (32×32px)</td>
                <td className="p-3.5 whitespace-nowrap">p-0</td>
                <td className="p-3.5 whitespace-nowrap">—</td>
                <td className="font-sans min-w-[150px]">size-3.5 (14px)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">"icon-lg"</td>
                <td className="p-3.5 text-purple-600 dark:text-purple-400 whitespace-nowrap">size-10 (40×40px)</td>
                <td className="p-3.5 whitespace-nowrap">p-0</td>
                <td className="p-3.5 whitespace-nowrap">—</td>
                <td className="font-sans min-w-[150px]">size-5 (20px)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: ADVANCED & LIFECYCLE */}
      <section id="advanced" className="space-y-6 pt-6 border-t border-border scroll-mt-20">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Polymorphism & Async Lifecycle
          </h2>
        </div>

        {/* Live In-Component Toggle Showcase */}
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs">
          <Button
            loading={interactiveLoading}
            loadingText="Saving Changes..."
            onClick={() => {
              setInteractiveLoading(true);
              setTimeout(() => setInteractiveLoading(false), 2000);
            }}
          >
            Click to Simulate Load
          </Button>

          <Button disabled>Disabled Button</Button>

          <Button asChild variant="outline">
            <Link href="/docs/components/toast">
              Link as Button (asChild)
            </Link>
          </Button>
        </div>

        {/* Advanced Snippets */}
        <div className="space-y-4">
          <CodeBlock
            title="Loading State & Custom Text (`loading`, `loadingText`)"
            badge="Async API"
            badgeClass="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
            description="Swaps leading icons with an animated spinner, blocks pointer interactions, and binds aria-busy."
            code={`import { Button } from "@/components/ui/button";\n\nexport function LoadingButtonDemo() {\n  const [loading, setLoading] = React.useState(false);\n\n  return (\n    <Button\n      loading={loading}\n      loadingText="Submitting..."\n      onClick={() => {\n        setLoading(true);\n        setTimeout(() => setLoading(false), 2000);\n      }}\n    >\n      Save Profile\n    </Button>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={12}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />

          <CodeBlock
            title="Radix UI Polymorphic Link (`asChild`)"
            badge="Polymorphism"
            badgeClass="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            description="Applies button styles directly onto Next.js <Link> or custom anchors without hydration nesting warnings."
            code={`import { Button } from "@/components/ui/button";\nimport Link from "next/link";\n\nexport function AsChildDemo() {\n  return (\n    <Button asChild variant="outline">\n      <Link href="/docs/components/toast">Go to Toast Docs</Link>\n    </Button>\n  );\n}`}
            onTrigger={() => {}}
            stepIndex={13}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>
      </section>

      {/* SECTION 5: FULL API REFERENCE */}
      <section id="api" className="space-y-6 pt-6 border-t border-border scroll-mt-20">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Button Component API Reference
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
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">variant</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success"
                </td>
                <td className="p-3.5 whitespace-nowrap">"default"</td>
                <td className="font-sans min-w-[200px]">Specifies visual stylistic preset and color tokens.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">size</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                  "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
                </td>
                <td className="p-3.5 whitespace-nowrap">"default"</td>
                <td className="font-sans min-w-[200px]">Controls vertical height, horizontal padding, and icon sizing.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">loading</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">boolean</td>
                <td className="p-3.5 whitespace-nowrap">false</td>
                <td className="font-sans min-w-[200px]">Displays spinning loader, blocks pointer events, and applies aria-busy.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">loadingText</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">React.ReactNode</td>
                <td className="p-3.5 whitespace-nowrap">undefined</td>
                <td className="font-sans min-w-[200px]">Optional replacement label text shown while loading is true.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">asChild</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">boolean</td>
                <td className="p-3.5 whitespace-nowrap">false</td>
                <td className="font-sans min-w-[200px]">Delegates rendering to its direct child element via Radix Slot.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">leftIcon</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">React.ReactNode</td>
                <td className="p-3.5 whitespace-nowrap">undefined</td>
                <td className="font-sans min-w-[200px]">Slot for leading icon with pre-configured optical bounds.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">rightIcon</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">React.ReactNode</td>
                <td className="p-3.5 whitespace-nowrap">undefined</td>
                <td className="font-sans min-w-[200px]">Slot for trailing icon with pre-configured optical bounds.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-foreground whitespace-nowrap">disabled</td>
                <td className="p-3.5 text-primary-600 dark:text-primary-400 whitespace-nowrap">boolean</td>
                <td className="p-3.5 whitespace-nowrap">false</td>
                <td className="font-sans min-w-[200px]">Native disabled attribute applying opacity-50 and pointer-events-none.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
```
# Variants
```tsx
{/* Variants */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Preset Variants
          </h2>
        </div>
        {/* Note */}
        <p className="text-xs text-muted-foreground">
          Explore the core preset variants, icon integrations, and loading states available out of the box.
        </p>
        {/* Presets view with codeblock */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6 rounded-2xl border border-border bg-card p-6 shadow-xs">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline" leftIcon={<Mail className="h-4 w-4" />}>
              Outline + Icon
            </Button>
            <Button variant="ghost">Ghost</Button>
            <Button loading loadingText="Saving...">
              Loading
            </Button>
            <Button variant="success">Success</Button>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Usage Example
              </span>
            </div>
            <pre className="w-full overflow-x-auto rounded-xl bg-[#090b10] p-4 font-mono text-xs leading-relaxed text-neutral-200">
              <code>{`import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ButtonVariantsDemo() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline" leftIcon={<Mail className="h-4 w-4" />}>
        Outline + Icon
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button loading loadingText="Saving...">
        Loading
      </Button>
      <Button variant="success">Success</Button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
```