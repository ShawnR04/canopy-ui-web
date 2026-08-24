'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGithubData } from '@/hooks/use-github-data';
import { CircleAlert, Download, Heart, Package, Star, Users, Zap } from 'lucide-react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';

const NPM_PACKAGE_NAME = '@marv3l/canopy-ui';

export function RightSidebarContent() {
  const {
    formattedStars,
    version: fallbackVersion,
    repoUrl,
    release,
    formattedMonthlyDownloads,
    contributorsCount,
  } = useGithubData();

  const [npmVersion, setNpmVersion] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchNpmVersion() {
      try {
        const res = await fetch(`https://registry.npmjs.org/${NPM_PACKAGE_NAME}/latest`);
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data.version) {
          setNpmVersion(data.version.startsWith('v') ? data.version : `v${data.version}`);
        }
      } catch {
        // Fallback to github data if npm fetch fails
      }
    }

    fetchNpmVersion();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayVersion = npmVersion || fallbackVersion || 'v1.0.0';

  const LINKS = [
    { icon: FiGithub, title: 'GitHub', desc: 'Star me on GitHub', url: repoUrl },
    {
      icon: Package,
      title: 'NPM Registry',
      desc: 'Install directly from npm',
      url: `https://www.npmjs.com/package/${NPM_PACKAGE_NAME}`,
    },
    { icon: CircleAlert, title: 'Report Issue', desc: 'Bug reports & feature requests', url: repoUrl },
  ];

  return (
    <div className="flex flex-col gap-5 scroll-smooth text-foreground">
      {/* Project Overview Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-card via-card/80 to-card/60 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:from-white/[0.04] dark:via-white/[0.02] dark:to-transparent">
        <div className="pointer-events-none absolute -top-12 -left-12 h-28 w-28 rounded-full bg-primary-500/10 blur-2xl" />

        <div className="relative space-y-3.5">
          {/* Header & Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-500/30 bg-primary-500/10 text-primary-600 shadow-inner dark:text-primary-400">
              <Zap className="h-5 w-5 fill-amber-500 text-amber-500" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold tracking-tight text-foreground">canopy-ui</h2>
                <span className="rounded-md border border-primary-500/20 bg-primary-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-primary-600 dark:text-primary-400">
                  {displayVersion}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">React & Next.js UI Library</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs leading-relaxed text-muted-foreground/90">
            Production-ready accessible components crafted for speed and customization.
          </p>

          {/* Live Metric Pills */}
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            <div className="flex flex-col items-center justify-center rounded-lg border border-border/60 bg-muted/40 py-1.5 text-center transition-colors hover:bg-muted/70">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{formattedStars}</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Stars</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-border/60 bg-muted/40 py-1.5 text-center transition-colors hover:bg-muted/70">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
                <Download className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                <span>{formattedMonthlyDownloads}</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Downloads</span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-border/60 bg-muted/40 py-1.5 text-center transition-colors hover:bg-muted/70">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
                <Users className="h-3 w-3 text-primary-600 dark:text-primary-400" />
                <span>{contributorsCount}</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Release Notes */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Latest Release
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-3 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-1.5 text-orange-600 dark:text-orange-400">
                <Package className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {release?.tagName || displayVersion}
              </h3>
            </div>

            <span className="inline-flex items-center rounded-md border border-emerald-500/20 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              Latest
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-xs font-medium text-foreground line-clamp-1">
              {release?.name || 'General Improvements & Toast Component'}
            </h4>
            <p className="text-[11px] text-muted-foreground">
              {release?.formattedDate || 'Recently published'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-transparent p-2.5 transition-all hover:border-border hover:bg-card hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-muted-foreground transition-colors group-hover:border-primary-500/30 group-hover:bg-primary-500/10 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground line-clamp-1">{link.desc}</p>
                  </div>
                </div>

                <FaArrowUpRightFromSquare className="h-3 w-3 text-muted-foreground/60 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Community Banner */}
      <div className="space-y-3 rounded-xl border border-border bg-card p-4 shadow-xs">
        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
          <Heart className="h-4 w-4 fill-primary-600/20 dark:fill-primary-400/20" />
          <h3 className="text-xs font-bold uppercase tracking-wider">Community</h3>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Join <span className="font-semibold text-foreground">{formattedMonthlyDownloads || '1,000'}+</span> developers building with canopy-ui.
        </p>

        <div className="flex gap-2 text-[11px]">
          <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-medium text-muted-foreground">
            MIT License
          </span>
          <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-medium text-muted-foreground">
            Open Source
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RightNav() {
  return (
    <aside className="no-scrollbar sticky top-0 hidden h-full w-80 shrink-0 overflow-y-auto border-l border-border py-6 px-2 md:px-3 lg:block">
      <RightSidebarContent />
    </aside>
  );
}