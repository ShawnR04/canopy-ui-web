'use client'

import { Check, Copy } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export default function CodeBlock() {
  const [pm, setPm] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const commands: Record<PackageManager, string> = {
    npm: 'npm install @marv3l/canopy-ui',
    pnpm: 'pnpm add @marv3l/canopy-ui',
    yarn: 'yarn add @marv3l/canopy-ui',
    bun: 'bun add @marv3l/canopy-ui',
  };

  const handleCopy = async () => {
    const textToCopy = commands[pm];

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl bg-background/50 border border-border p-1.5 shadow-2xl">
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/60">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {(['npm', 'pnpm', 'yarn', 'bun'] as PackageManager[]).map((item) => (
            <button
              key={item}
              onClick={() => setPm(item)}
              className={`text-xs sm:text-sm px-2.5 py-1 rounded font-mono font-medium transition-all ${
                pm === item
                  ? 'bg-primary-500/10 text-primary-400 border border-primary-500/30'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground font-mono hidden sm:inline">
          Terminal
        </span>
      </div>

      {/* Command & Action */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 font-mono gap-3">
        <div className="flex items-center gap-2 text-foreground text-xs sm:text-sm overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="text-primary-400 select-none font-bold">$</span>
          <span>{commands[pm]}</span>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy install command"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md bg-background hover:bg-primary-500/20 text-muted-foreground hover:text-primary-400 border border-border transition-all text-xs sm:text-sm shrink-0 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-primary-400 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-primary-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}