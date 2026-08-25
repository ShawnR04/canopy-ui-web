import Header from '@/components/app/docs/components/header';
import React from 'react'

export default function Roadmap() {
  return (
    <>
        <div className="container-wrapper">
          <Header
            componentName="Resources"
            title="Roadmap"
            desc="Explore upcoming components, planned features, and future release goals for Canopy UI."
            breadcrumbs={[
              { label: 'Roadmap', href: '/docs/roadmap' },
            ]}
          />
        </div>
    </>
  )
}
