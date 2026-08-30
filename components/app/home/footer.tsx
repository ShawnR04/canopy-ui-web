import { ROUTES } from '@/config/routes';
import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="border-t border-border px-6 sm:px-12 lg:px-20 py-5 text-foreground space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/*   Brand Column */}
            <div className="space-y-2">
              <div className="flex space-x-2">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20 transition-transform">
                    <Image
                        src="/favicon.ico"
                        alt=""
                        width={100}
                        height={100}
                        className="w-7 h-7"
                        priority
                    />
                </div>
                <h2 className="flex items-center font-display text-lg font-semibold tracking-wider ">
                  Canopy UI
                </h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
                Fluid animations, accessible primitives, and zero-config styling for modern web applications.
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                EXPLORE
              </h3>
              <ul className="space-y-5 md:space-y-1.5">
                <li className="">
                  <a 
                    href={ROUTES.HOME} 
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a 
                    href={ROUTES.DOCS.INTRODUCTION} 
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li className="">
                  <a 
                    href={ROUTES.DOCS.COMPONENTS.ROOT}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Community
              </h3>
              <ul className="space-y-5 md:space-y-1.5">
                <li>
                  <a
                    href="https://github.com/ShawnR04/canopy-ui"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@marv3l/canopy-ui"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    NPM Package
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="border-t border-border/40 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex space-x-3">
              <p>&copy; {new Date().getFullYear()} Canopy UI.</p>
              <p className="">MIT Licence</p>
            </div>
          </div>
        </footer>
    </>
  )
}