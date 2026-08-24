import React from 'react'

export default function BackgroundGlow() {
  return (
    <div className="fixed top-1/6 left-1/2 -translate-x-1/2 w-1/2 h-100 bg-linear-to-tr from-primary-600/10 to-primary-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
  )
}