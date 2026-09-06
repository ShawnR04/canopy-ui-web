import Header from '@/components/app/docs/components/header';
import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Terminal, 
  Wrench, 
  CheckCircle2, 
  Clock, 
  Compass 
} from 'lucide-react';

interface RoadmapItem {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'core' | 'components' | 'cli' | 'ecosystem';
  version?: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: 'Automated CI/CD & npm Publishing',
    description: 'Automated package publishing pipeline via GitHub Actions with secure token verification and provenance support.',
    status: 'completed',
    category: 'core',
    version: 'v1.0.1',
  },
  {
    title: 'Toast Notification Engine',
    description: 'Unified single-file module supporting directional entrance animations, async promises, and pause-on-hover controls.',
    status: 'completed',
    category: 'components',
    version: 'v1.3.2',
  },
  {
    title: 'Button Component & Theme Engine',
    description: 'Polymorphic button system with semantic CSS variables, asChild slots, async loading states, and automated CLI inline theme injection.',
    status: 'completed',
    category: 'components',
    version: 'v2.0.0',
  },
  {
    title: 'Skeleton Frame Primitives',
    description: 'Lightweight, pulsing placeholder loading states designed to layout content safely before data hydration.',
    status: 'in-progress',
    category: 'components',
    version: 'v3.0.0',
  },
];

export default function Roadmap() {
  return (
    <div className="container-wrapper space-y-12">
      <Header
        componentName="Resources"
        title="Roadmap"
        desc="Explore upcoming components, planned features, and future release goals for Canopy UI."
        breadcrumbs={[
          { label: 'Resources', href: '/docs/introduction' },
          { label: 'Roadmap', href: '/docs/roadmap' },
        ]}
      />

      {/* Intro Callout */}
      <div className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-4 text-foreground">
        <Sparkles className="h-5 w-5 shrink-0 text-primary mt-0.5" />
        <p className="text-xs leading-relaxed">
          <strong className="font-semibold text-foreground">Development Track:</strong> Canopy UI is built iteratively to provide lightweight, copy-pasteable primitives. Follow our milestone trajectory below to see what features are rolling out next.
        </p>
      </div>

      {/* Roadmap Grid / List */}
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {roadmapItems.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';

            return (
              <div 
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-xs space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.category === 'cli' && <Terminal className="h-4 w-4 text-muted-foreground" />}
                      {item.category === 'components' && <Layers className="h-4 w-4 text-muted-foreground" />}
                      {item.category === 'core' && <Wrench className="h-4 w-4 text-muted-foreground" />}
                      {item.category === 'ecosystem' && <Compass className="h-4 w-4 text-muted-foreground" />}
                      <span className="font-medium text-foreground text-sm">{item.title}</span>
                    </div>
                    {item.version && (
                      <span className="font-mono text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                        {item.version}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                  <span className="uppercase text-[10px] font-bold tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 font-medium">
                    {isCompleted && (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Completed</span>
                      </>
                    )}
                    {isInProgress && (
                      <>
                        <Clock className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                        <span className="text-amber-600 dark:text-amber-400">In Progress</span>
                      </>
                    )}
                    {!isCompleted && !isInProgress && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        <span className="text-muted-foreground">Planned</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}