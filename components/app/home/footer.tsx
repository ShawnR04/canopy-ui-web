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
                <h2 className="flex items-center font-display text-lg font-semibold tracking-tight ">
                  Canopy UI
                </h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
                Fluid animations, accessible primitives, and zero-config styling for modern web applications.
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-2">
              <h3 className="">
                Explore
              </h3>
              <ul className="">
                <li className="">
                  <a href="" className="">
                    Documentation
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Components
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="space-y-2">h</div>

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