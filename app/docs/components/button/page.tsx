import Header from '@/components/app/docs/components/header';
import { Button } from '@/components/ui/button';
import { Mail, Terminal } from 'lucide-react';
import React from 'react'

export default function ButtonDocPage() {
  return (
    <div className="w-full min-w-0 space-y-10">
      {/* Header */}
      <Header
        componentName="button"
        title="Button"
        desc="Interactive, accessible button primitive powered by CVA and Radix Slot. Features 7 stylistic presets, 6 size tokens, leading/trailing icon slots, and native loading states."
        breadcrumbs={[
          { label: 'Components', href: '/docs/components' },
          { label: 'Button', href: '/docs/components/button' },
        ]}
      />

      {/* Installation Guide */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary-500" />
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Quick Setup Guide
          </h2>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Preset Variants
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Presets view with codeblock */}
        <div className=""></div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Button Sizes
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Size View with codeblock */}
        <div className=""></div>
      </div>

      {/* Icons */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Buttons with Icons
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Icon View */}
        <div className=""></div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Loading States
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* Loading State view with codeblock */}
        <div className=""></div>
      </div>

      {/* AsChild (Links) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            AsChild (Links)
          </h2>
        </div>
        {/* Note */}
        <p className="textsm text-muted-foreground"></p>
        {/* AsChild view with codeblock */}
        <div className=""></div>
      </div>
    </div>
  )
}
