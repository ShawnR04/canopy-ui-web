import React from "react";
import { Check, Copy, Play } from "lucide-react";

export interface CodeData {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  code: string;
  onTrigger: () => void;
}

export interface CodeBlockProps extends CodeData {
  stepIndex?: number;
  copiedStep?: number | null;
  onCopy?: (text: string, index: number) => void;
}


export function CodeBlock({
  title,
  badge,
  badgeClass,
  description,
  code,
  stepIndex = 0,
  copiedStep,
  onCopy,
  onTrigger,
}: CodeBlockProps) {
  const isCopied = copiedStep === stepIndex;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-4 shadow-xs sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            {title}
          </span>
          <span 
            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badgeClass}`}
          >
            {badge}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={onTrigger}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-2.5 py-1 text-xs font-semibold text-foreground shadow-xs transition-all hover:bg-primary-500 active:scale-95"
          >
            <Play className="h-3.5 w-3.5 fill-current"/>
            <span>Test Live</span>
          </button>

          <button 
            type="button"
            onClick={() => onCopy?.(code, stepIndex)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/50 px-2 py-1 text-xs text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-success"/>
            ) : (
              <Copy className="h-3.5 w-3.5"/>
            )}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
        {description}
      </p>

      <pre className="w-full overflow-x-auto rounded-xl bg-background p-3.5 font-mono text-xs leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}