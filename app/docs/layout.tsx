
import { ThemeProvider } from '@/hooks/theme-provider';
import React from 'react'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
        lang="en"
        className={`h-full antialiased scroll-smooth`}
        suppressHydrationWarning
    >
        <body className="min-h-full flex flex-col">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                <div className="h-screen overflow-hidden flex justify-center bg-background">
                    <main className="">
                        {children}
                    </main>
                </div>
            </ThemeProvider>
        </body>
    </html>
  )
}
