import ContactForm from '@/components/contact-form'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'

export default function Contact() {
  const breadcrumbs = [
    {
      label: 'Contact'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="Get in touch if you have a project you need help with!"
        imageSubpath="pages/contact"
        permalink="/contact"
        title="Contact"
      />

      <h1>
        Contact
      </h1>

      <p>
        Use this form to get in touch or reach me directly at <a href="mailto:dom@domhabersack.com">dom@domhabersack.com</a>. I will get back to you as soon as I can.
      </p>

      <ContactForm />
    </Layout>
  )
}
