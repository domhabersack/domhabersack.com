import Image from 'next/image'
import Link from 'next/link'

import CTA from '@/components/cta'
import Fullbleed from '@/components/fullbleed'
import Icon from '@/components/icon'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Milestones from '@/components/milestones'
import MyStack from '@/components/my-stack'
import ArticleTeasers from '@/components/article-teasers'
import ProjectTeaser from '@/components/project-teaser'
import Section from '@/components/section'
import Service from '@/components/service'
import { getAllMilestones } from '@/lib/api/milestones'
import { getAllServices } from '@/lib/api/services'
import { getAuthorBySlug } from '@/lib/api/authors'
import { getProjectBySlug } from '@/lib/api/projects'
import { getLatestArticles } from '@/lib/api/articles'

const SOCIAL_PROFILES = {
  '@domhabersack on Twitter': {
    href: 'https://twitter.com/domhabersack',
    icon: 'twitter-logo',
  },
  'Dom Habersack on YouTube': {
    href: 'https://youtube.com/channel/UCaAuE1af4GpzXcQ1Fx-diMQ',
    icon: 'youtube-logo',
  },
  'Dom Habersack on LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    icon: 'linkedin-logo',
  },
  'dom@domhabersack.com': {
    href: 'mailto:dom@domhabersack.com',
    icon: 'email',
    iconStyle: 'solid',
  }
}

export default function Index({
  articles,
  avatar,
  featuredProject,
  milestones,
  services,
}) {
  return (
    <Layout>
      <MetaTags
        description="I am a software developer, IT consultant, and content creator with 12+ years of professional experience. Follow along as I build my company in public."
        ogImage="/og-image/default.png"
        permalink=""
        title="Dom Habersack · Content Creator & IndieHacker"
      />

      <Section
        label="About me"
        title="Hey, I’m Dom!"
        description="I am a software developer, content creator, and IndieHacker with over 12 years of professional experience."
      >
        <div className="flex flex-col items-center max-w-xl space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0">
          <Image
            alt="Dom Habersack"
            className="h-56 rounded-full w-56"
            height="224"
            src={avatar}
            width="224"
          />

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              As a consultant, I help companies get their projects off the ground and their teams moving forward. Let’s talk if you’re looking for support!
            </p>

            <div className="flex space-x-2.5">
              {Object.entries(SOCIAL_PROFILES).map(([title, {
                href,
                icon,
                iconStyle,
              }]) => (
                <a
                  className="block text-gray-600 dark:text-gray-300"
                  href={href}
                  key={title}
                  title={title}
                >
                  <Icon className="h-6 w-6" type={icon} style={iconStyle} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        label="Services"
        title="Everything you need make your project a success."
        description="Having worked with over a dozen mid-sized to large businesses, I picked up skills and habits that will make working together efficient and enjoyable."
      >
        <div className="gap-y-8 grid max-w-md mb-12 md:gap-x-10 md:grid-cols-2 md:max-w-full">
          {services.map(service => (
            <Service key={service.slug} title={service.title} icon={service.icon}>
              <p>
                {service.excerpt}
              </p>
            </Service>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-base text-gray-700 dark:text-gray-200">
            Does that sound good? Sweet, get in touch and
          </p>

          <CTA>
            Hire me
          </CTA>
        </div>
      </Section>

      <Fullbleed className="bg-yellow-100 dark:bg-gray-800">
        <Section
          label="Projects"
          title="Check out some of my previous work."
          description="Pictures speak louder than words. Good thing I have both! Explore some case studies on my previous projects."
        >
          <div className="max-w-full">
            <div className="relative mb-20">
              <div className="border-8 border-gray-800 relative rounded-lg md:-left-8 dark:border-gray-900">
                <img alt="Retroulette on a large viewport" className="md:h-96" src="/featured-project/desktop.png" />
              </div>

              <div className="border-8 border-gray-800 rounded-lg absolute hidden -bottom-12 -right-8 md:block dark:border-gray-900">
                <img alt="Retroulette on a small viewport" className="h-96" src="/featured-project/mobile.png" />
              </div>
            </div>

            <p>
              <Link href="/writing">
                <a className="text-gray-800 dark:text-gray-100">
                  Read about Retroulette &rarr;
                </a>
              </Link>
            </p>
          </div>
        </Section>
      </Fullbleed>

      <Section
        label="Milestone log"
        title="Watch me build in public."
        description="I am learning how to run a company and make money on the internet. This feed shows some of my progress."
      >
        <div className="max-w-md">
          <Milestones milestones={milestones} />
        </div>
      </Section>

      <Section
        label="My stack"
        title="What I use to get the job done."
        description="These are the tools and technologies I use to build projects, both for myself and my clients. I add new tools to this list all the time."
      >
        <div className="max-w-md">
          <MyStack />
        </div>
      </Section>

      <div className="hidden">
        <Section
          label="Projects"
          title="Explore some of my previous work."
          description="Pictures speak louder than words. Good thing I have both! Explore the case studies of my previous projects."
        >
          <div className="mb-8">
            <ProjectTeaser project={featuredProject} />
          </div>

          <p>
            <Link href="/projects">
              <a className="text-gray-800 dark:text-gray-100">
                See all projects &rarr;
              </a>
            </Link>
          </p>
        </Section>
      </div>

      <Section
        label="From the blog"
        title="Check out my articles."
        description="I write about all things tech and business. My articles cover design, development, productivity, and more."
      >
        <div className="max-w-md">
          <ArticleTeasers articles={articles} />
        </div>

        <p>
          <Link href="/writing">
            <a className="text-gray-800 dark:text-gray-100">
              Read all articles &rarr;
            </a>
          </Link>
        </p>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const dom = await getAuthorBySlug('dom-habersack')
  const featuredProject = await getProjectBySlug('lovelicons')
  const latestArticles = await getLatestArticles({ limit: 4 })
  const milestones = await getAllMilestones()
  const services = await getAllServices()

  return {
    props: {
      articles: latestArticles,
      avatar: dom.avatar,
      featuredProject,
      milestones,
      services,
    }
  }
}
