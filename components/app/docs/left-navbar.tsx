import { ROUTES } from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function LeftNav
() {
  return (
    <aside className="hidden md:block sticky top-0 h-screen w-64 shrink-0 border-r border-border py-6 px-2 md:px-3 overflow-y-auto no-scrollbar scroll-smooth">
        <Link
            href={ROUTES.HOME}
            className="flex mb-8 items-center justify-center"
        >
            <div className="flex items-center space-x-2 group">
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20 transition-transform">
                    <Image
                        src="/favicon.ico"
                        alt=""
                        width={100}
                        height={100}
                        className="w-9 h-9"
                        priority
                    />
                </div>
                <h2 className="flex items-center font-display text-lg font-semibold tracking-tight ">
                  Canopy UI
                </h2>
            </div>
        </Link>
    </aside>
  )
}
