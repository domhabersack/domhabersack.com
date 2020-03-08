import React from 'react'

import ContactForm from '../components/contact-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import Taper from '../components/taper'

export default () => {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Contact'
        }
      ]}
    >
      <MetaTags
        description="Get in touch if you have a project you need help with!"
        title="Contact"
      />

      <Taper>
        <h1>Contact</h1>

        <p>
          Use this form to get in touch or reach me directly at <a href="mailto:dom@islovely.co">dom@islovely.co</a>. I will get back to you as soon as I can.
        </p>

        <ContactForm />
      </Taper>
    </Layout>
  )
}
