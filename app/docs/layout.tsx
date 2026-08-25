import DocsNav from '@/components/app/docs/docs-navigation';
import RightNav from '@/components/app/docs/right-navbar';
import React from 'react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex justify-center bg-background">
      <div className="flex flex-col lg:flex-row w-full h-full max-w-7xl justify-between">
        <DocsNav />
        <main className="flex-1 w-full max-w-5xl lg:max-w-3xl py-6 px-4 md:px-8 h-full overflow-y-auto min-w-0 no-scrollbar">
          {children}
        </main>
        <RightNav />
      </div>
    </div>
  );
}