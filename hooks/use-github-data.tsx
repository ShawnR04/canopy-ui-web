// hooks/use-github-data.ts
'use client';

import { useState, useEffect } from 'react';

/* -------------------------------------------------------------------------- */
/*                               GitHub & NPM Types                          */
/* -------------------------------------------------------------------------- */

interface GithubRepoResponse {
  stargazers_count: number;
}

interface GithubReleaseAssetResponse {
  name: string;
  download_count: number;
  size: number;
  browser_download_url: string;
}

interface GithubReleaseResponse {
  name: string | null;
  tag_name: string;
  published_at: string | null;
  body: string | null;
  html_url: string | null;
  prerelease: boolean;
  assets?: GithubReleaseAssetResponse[];
}

interface GithubContributorResponse {
  id: number;
  login: string;
  contributions: number;
}

interface NpmDownloadsResponse {
  downloads?: number;
  package?: string;
}

export interface ReleaseAsset {
  name: string;
  downloadCount: number;
  size: number;
  browserDownloadUrl: string;
}

export interface ReleaseInfo {
  name: string | null;
  tagName: string;
  publishedAt: string | null;
  formattedDate: string | null;
  relativeDate: string | null;
  body: string | null;
  htmlUrl: string | null;
  isPrerelease: boolean;
  assets: ReleaseAsset[];
}

export interface GithubData {
  stars: number | null;
  formattedStars: string;
  version: string;
  repoUrl: string;
  contributorsCount: number | null;
  monthlyDownloads: number | null;
  formattedMonthlyDownloads: string;
  release: ReleaseInfo | null;
  isLoading: boolean;
  error: Error | null;
}

/* -------------------------------------------------------------------------- */
/*                              Formatting Helpers                            */
/* -------------------------------------------------------------------------- */

export function formatCompactNumber(count: number | null): string {
  if (count === null || count === undefined) return '0';
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count);
}

export function formatDate(isoString: string | null): string | null {
  if (!isoString) return null;
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Enforce UTC to prevent SSR/client timezone mismatch
  });
}

export function formatRelativeDate(isoString: string | null): string | null {
  if (!isoString) return null;
  const date = new Date(isoString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}y ago`;
}

/* -------------------------------------------------------------------------- */
/*                                  Main Hook                                 */
/* -------------------------------------------------------------------------- */

export function useGithubData(
  repoPath = 'ShawnR04/canopy-ui',
  npmPackageName = '@marv3l/canopy-ui',
  fallbackVersion = 'v1.0.0'
): GithubData {
  const [stars, setStars] = useState<number | null>(null);
  const [version, setVersion] = useState<string>(fallbackVersion);
  const [contributorsCount, setContributorsCount] = useState<number | null>(null);
  const [monthlyDownloads, setMonthlyDownloads] = useState<number | null>(null);
  const [release, setRelease] = useState<ReleaseInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setIsLoading(true);
        const [repoRes, releaseRes, contribRes, npmRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${repoPath}`),
          fetch(`https://api.github.com/repos/${repoPath}/releases/latest`),
          fetch(`https://api.github.com/repos/${repoPath}/contributors?per_page=100`),
          fetch(`https://api.npmjs.org/downloads/point/last-month/${npmPackageName}`),
        ]);

        if (!isMounted) return;

        // 1. Repo stars
        if (repoRes.ok) {
          const repoData: GithubRepoResponse = await repoRes.json();
          setStars(repoData.stargazers_count);
        }

        // 2. Full release details
        if (releaseRes.ok) {
          const releaseData: GithubReleaseResponse = await releaseRes.json();
          const tagName = releaseData.tag_name || fallbackVersion;

          setVersion(tagName);
          setRelease({
            name: releaseData.name ?? null,
            tagName,
            publishedAt: releaseData.published_at ?? null,
            formattedDate: formatDate(releaseData.published_at),
            relativeDate: formatRelativeDate(releaseData.published_at),
            body: releaseData.body ?? null,
            htmlUrl: releaseData.html_url ?? null,
            isPrerelease: Boolean(releaseData.prerelease),
            assets: (releaseData.assets || []).map((asset: GithubReleaseAssetResponse) => ({
              name: asset.name,
              downloadCount: asset.download_count,
              size: asset.size,
              browserDownloadUrl: asset.browser_download_url,
            })),
          });
        }

        // 3. Contributor count
        if (contribRes.ok) {
          const contribData: GithubContributorResponse[] = await contribRes.json();
          if (Array.isArray(contribData)) {
            setContributorsCount(contribData.length);
          }
        }

        // 4. Monthly NPM downloads
        if (npmRes.ok) {
          const npmData: NpmDownloadsResponse = await npmRes.json();
          setMonthlyDownloads(npmData.downloads ?? 0);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          console.error('Failed to fetch stats:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [repoPath, npmPackageName, fallbackVersion]);

  return {
    stars,
    formattedStars: formatCompactNumber(stars),
    version,
    repoUrl: `https://github.com/${repoPath}`,
    contributorsCount,
    monthlyDownloads,
    formattedMonthlyDownloads: formatCompactNumber(monthlyDownloads),
    release,
    isLoading,
    error,
  };
}