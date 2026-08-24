import { ChevronRight, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  componentName: string;
  title: string;
  desc: string;
  showPlayground?: boolean;
  playgroundHref?: string;
  /** Custom breadcrumbs array or extra path segments (e.g. ['Docs', 'Components', 'Toast', 'Playground']) */
  breadcrumbs?: (string | BreadcrumbItem)[];
}

export default function Header({
  componentName,
  title,
  desc,
  showPlayground = false,
  playgroundHref,
  breadcrumbs,
}: HeaderProps) {
  const targetHref = playgroundHref || `/components/${componentName}/playground`;

  // Default path if no custom breadcrumb array is supplied
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Components', href: '/components' },
    { label: componentName, href: `/components/${componentName}` },
  ];

  // Normalize user items into { label, href } objects
  const resolvedBreadcrumbs: BreadcrumbItem[] = breadcrumbs
    ? breadcrumbs.map((item) =>
        typeof item === 'string' ? { label: item } : item
      )
    : defaultBreadcrumbs;

  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-primary-500/10 to-background/50 p-6 backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-600/10 blur-3xl" />
      
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          {/* Breadcrumb Trail / Pagination */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
            {resolvedBreadcrumbs.map((crumb, idx) => {
              const isLast = idx === resolvedBreadcrumbs.length - 1;

              return (
                <React.Fragment key={`${crumb.label}-${idx}`}>
                  {idx > 0 && (
                    <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground/60" />
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="capitalize transition-colors hover:text-foreground"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={`capitalize ${
                        isLast
                          ? 'font-semibold text-primary-500'
                          : 'hover:text-foreground'
                      }`}
                    >
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Title & Icon Header */}
          <div className="flex items-start gap-3.5 pt-0.5">
            {/* Icon Container: shrink-0 and fixed dimensions prevent deformation */}
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10 text-primary-500 shadow-inner">
              <Sparkles className="h-5 w-5 shrink-0" />
            </div>

            {/* Text Wrapper: min-w-0 and break-words allow long descriptions to wrap cleanly */}
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h1>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground break-words">
                {desc}
              </p>
            </div>
          </div>
        </div>

        {/* Playground Button */}
        {showPlayground && (
          <div className="shrink-0 pt-2 sm:pt-0">
            <Link
              href={targetHref}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-primary-600/20 transition-all hover:bg-primary-500 active:scale-95"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Playground</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}