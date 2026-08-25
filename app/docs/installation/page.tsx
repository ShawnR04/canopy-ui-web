import Header from '@/components/app/docs/components/header';
import React from 'react'

export default function Installation() {
  return (
    <>
        <div className="container-wrapper">
          <Header
            componentName="Getting Started"
            title="Installation"
            desc="How to install and set up @marv3l/canopy-ui and its dependencies in your project."
            breadcrumbs={[
              { label: 'Getting Started', href: '/docs/introduction' },
              { label: 'Installation', href: '/docs/installation' },
            ]}
          />
        </div>
    </>
  )
}