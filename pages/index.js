import Image from 'next/image'

import Icon from '@/components/icon'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Milestones from '@/components/milestones'
import MyStack from '@/components/my-stack'
import ArticleTeasers from '@/components/article-teasers'
import ProjectTeaser from '@/components/project-teaser'
import Section from '@/components/section'
import { getAllMilestones } from '@/lib/api/milestones'
import { getAuthorBySlug } from '@/lib/api/authors'
import { getProjectBySlug } from '@/lib/api/projects'
import { getLatestPosts } from '@/lib/api/posts'

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
  avatar,
  featuredProject,
  milestones,
  posts,
}) {
  return (
    <Layout>
      <MetaTags
        description="I am a software developer, IT consultant, and content creator with 12+ years of professional experience. Follow along as I build my company in public."
        imageSubpath="home"
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
            <a className="text-gray-800 dark:text-gray-100" href="/projects">
              See all projects &rarr;
            </a>
          </p>
        </Section>
      </div>

      <Section
        label="From the blog"
        title="Check out my articles."
      >
        <div className="max-w-md">
          <ArticleTeasers articles={posts} />
        </div>

        <p>
          <a className="text-gray-800 dark:text-gray-100" href="/posts">
            Read all posts &rarr;
          </a>
        </p>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const dom = await getAuthorBySlug('dom-habersack')
  const featuredProject = await getProjectBySlug('lovelicons')
  const latestPosts = await getLatestPosts({ limit: 4 })
  const milestones = await getAllMilestones()

  return {
    props: {
      avatar: dom.avatar,
      featuredProject,
      milestones,
      posts: latestPosts,
    }
  }
}
