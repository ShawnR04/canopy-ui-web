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

interface SetupStepData {
  step: string;
  title: string;
  code: string;
}

interface SetupStepBlockProps extends SetupStepData {
  stepIndex?: number;
  copiedStep?: number | null;
  onCopy?: (text: string, index: number) => void;
}

export const SETUP_STEPS: SetupStepData[] = [
  {
    step: 'Step 1',
    title: 'Mount the Toaster in Root Layout',
    code: `// app/layout.tsx
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
}
      `,
  },
  {
    step: 'Step 2',
    title: 'Configure Default Properties & Stacking Limits',
    code: `// app/layout.tsx
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
}
    `,
  },
  {
    step: "Step 3",
    title: "Dynamically Switch Viewport Anchors at Runtime",
    code: `
import { toast, setToastPosition } from "@/components/ui/toast";

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
}
    `
  }
];

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
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {step}: {title}
        </span>
        <button 
          type="button"
          onClick={() => onCopy?.(code, stepIndex ?? 0)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-success"/>
          ) : (
            <Copy className="h-3.5 w-3.5"/>
          )}
          <span>{isCopied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="w-full overflow-x-auto rounded-xl bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function Setup() {
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
      duration: 3000,
    });
  };

  return (
    <>
      <div className="w-full min-w-0 space-y-10">
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
            <Terminal className="h-5 w-5 text-primary-500"/>
            <h2 className="text-base font-bold tracking-tight text-foreground sm-text-lg">
              Setup & Placemet Guide
            </h2>
          </div>
          <div className="space-y-4">
            {SETUP_STEPS.map((item, index) => (
              <SetupStepBlock 
                key={item.step}
                step={item.step}
                title={item.title}
                code={item.code}
                stepIndex={index}
                copiedStep={copiedStep}
                onCopy={copyToClipboard}
              />
            ))}
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
    </>
  )
}