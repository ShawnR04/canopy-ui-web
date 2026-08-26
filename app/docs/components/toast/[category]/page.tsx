'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/app/docs/components/header';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import rich modular documentation files
import SetupDocumentation from '../_content/setup';
import VariantsDocumentation from '../_content/variants';
import CustomizationDocumentation from '../_content/customization';
import AdvancedDocumentation from '../_content/advanced';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CategoryData {
  title: string;
  description: string;
  breadcrumbs: (string | BreadcrumbItem)[];
  component: React.ComponentType;
  next?: { title: string; href: string };
  prev?: { title: string; href: string };
}

const categoryRegistry: Record<string, CategoryData> = {
  setup: {
    title: 'Setup & Positioning',
    description:
      'Mounting the root Toaster, dynamic viewport quadrant controls, and hydration-safe layout architecture.',
    breadcrumbs: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Setup' },
    ],
    component: SetupDocumentation,
    next: { title: 'Preset Variants', href: '/docs/components/toast/variants' },
  },
  variants: {
    title: 'Preset Variants',
    description:
      'Visual status presets tailored for success states, destructive alerts, warnings, and loaders.',
    breadcrumbs: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Variants' },
    ],
    component: VariantsDocumentation,
    prev: { title: 'Setup & Positioning', href: '/docs/components/toast/setup' },
    next: { title: 'Custom Tokens & Styling', href: '/docs/components/toast/customization' },
  },
  customization: {
    title: 'Custom Tokens & Styling',
    description:
      'Granular control over hex color tokens, custom icons, glassmorphism, and progress bars.',
    breadcrumbs: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Customization' },
    ],
    component: CustomizationDocumentation,
    prev: { title: 'Preset Variants', href: '/docs/components/toast/variants' },
    next: { title: 'Advanced & Lifecycle', href: '/docs/components/toast/advanced' },
  },
  advanced: {
    title: 'Advanced & Async Lifecycle',
    description:
      'Handling interactive buttons, automatic deduplication counters, and asynchronous promises.',
    breadcrumbs: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Advanced' },
    ],
    component: AdvancedDocumentation,
    prev: { title: 'Custom Tokens & Styling', href: '/docs/components/toast/customization' },
  },
};

export default function CategoryDocPage() {
  const params = useParams();
  const categoryKey = (params.category as string)?.toLowerCase();
  const data = categoryRegistry[categoryKey];

  if (!data) {
    notFound();
  }

  const ContentComponent = data.component;

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <Header
        componentName="toast"
        title={data.title}
        desc={data.description}
        breadcrumbs={data.breadcrumbs}
        showPlayground
        playgroundHref="/docs/components/toast/playground"
      />

      {/* Render the full content module */}
      <div className="min-w-0 flex-1">
        <ContentComponent />
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between border-t border-border pt-6">
        {data.prev ? (
          <Link
            href={data.prev.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{data.prev.title}</span>
          </Link>
        ) : (
          <Link
            href="/docs/components/toast"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Overview</span>
          </Link>
        )}

        {data.next && (
          <Link
            href={data.next.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline transition-colors"
          >
            <span>{data.next.title}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}