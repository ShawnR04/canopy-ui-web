import Header from '@/components/app/docs/components/header';
import React from 'react'

export default function Introduction() {
  return (
    <>
        <div className="container-wrapper">
          {/* Header */}
          <Header
            componentName="Canopy UI"
            title="Introduction"
            desc="A lightweight, customizable React component collection crafted for modern Next.js and React interfaces."
            breadcrumbs={[
              { label: 'Getting Started', href: '/docs/introduction' },
            ]}
          />
        </div>
    </>
  )
}