import CTA from '@/components/cta'
import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Service from '@/components/service'

export default function Services() {
  const breadcrumbs = [
    {
      label: 'Services',
      url: '/services',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description=""
        ogImage="/og-image/services.png"
        permalink="/services"
        title="Services"
      />

      <H1>
        Services
      </H1>

      <p className="max-w-xl mb-12 text-gray-500 text-xl dark:text-gray-400">
        As a consultant, I have worked in many positions with a variety of responsibilities. My offering is based on my history of providing these services to over a dozen mid-sized to large companies.
      </p>

      <div className="max-w-md">
        <h2 className="font-bold mb-3 text-2xl text-gray-700 dark:text-gray-200">
          Design &amp; development
        </h2>

        <p className="mb-8 text-base text-gray-600 dark:text-gray-300">
          I have created new digital products from scratch and modified existing ones, both as part of my clients’ teams and on my own.
        </p>

        <div className="mb-20 space-y-10">
          <Service
            title="Web development"
            icon="window"
          >
            <p>
              Do you want a blog, online shop, price calculator, or something much more complex? I have built web-based products like these using React, Next.js, WordPress, Shopify and more. After collecting your requirements, I will recommend and develop a technical solution that works well for your use case and budget.
            </p>

            <p>
              All sites are fully responsive, meaning they adapt seamlessly to the devices they appear on. During and after the project, you’ll be able to maintain and extend the content yourself.
            </p>
          </Service>

          <Service
            title="Clickable prototypes"
            icon="pointer-click"
          >
            <p>
              You have an idea, but are not sure it solves the problem well? Jumping straight into writing code for an unproven idea is risky and expensive.
            </p>

            <p>
              I’ll build a clickable prototype you can use to present and evaluate your idea sooner and cheaper. The “clickdummy” will look and feel like the finished result, but won’t be fully functional. If the prototype works well, I can take it further and build it out into a full-fledged product.
            </p>
          </Service>

          <Service
            title="Custom icons"
            icon="picture"
          >
            <p>
              I sell my own icon set over on <a className="font-medium text-blue-600 underline dark:text-blue-500" href="https://lovelicons.com">lovelicons.com</a>. If those don’t fit the style you’re going for, I can create a custom icon set that matches your product’s vibe.
            </p>
          </Service>
        </div>

        <h2 className="font-bold mb-3 text-2xl text-gray-700 dark:text-gray-200">
          Training &amp; workshops
        </h2>

        <p className="mb-8 text-base text-gray-600 dark:text-gray-300">
          I have run product discovery workshops, Design Sprints, sprint retrospectives, agile ceremonies, and more. If you’re looking for a facilitator, I’d be happy to do that for you and your team.
        </p>

        <div className="mb-20 space-y-10">
          <Service
            title="Design Sprints"
            icon="rocket"
          >
            <p>
              Get your project off to the right start. In this 5 day workshop, we explore the problem you’re trying to solve, build a prototype based on our findings, and test it with real users.
            </p>

            <p>
              Design Sprints work best with participants from all involved departments. You bring a product owner, developer, marketing representative, sales person, Head of Product, and more, I bring enough sticky notes and snacks to keep us going and productive.
            </p>
          </Service>
        </div>

        <div className="space-y-2">
          <p className="text-base text-gray-700 dark:text-gray-200">
            Do any of these match what you’re looking for? Get in touch and
          </p>

          <CTA>
            Hire me
          </CTA>
        </div>
      </div>
    </Layout>
  )
}
