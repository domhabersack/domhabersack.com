import Image from 'next/image'
import { Card } from '@yieldui/react'

import Icon from '@/components/icon'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Milestones from '@/components/milestones'
import MyStack from '@/components/my-stack'
import NewsletterSignup from '@/components/newsletter-signup'
import PostTeaser from '@/components/post-teaser'
import ProjectTeaser from '@/components/project-teaser'
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
    href: 'https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw',
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

      <div className="space-y-24">
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
            <div className="block flex-shrink-0 h-56 w-56">
              <Image
                alt="Dom Habersack"
                className="rounded-full"
                height="224"
                src={avatar}
                width="224"
              />
            </div>

            <div>
              <h1 className="flex-grow m-0 mb-2 text-3xl">
                Hi, I am Dom!
              </h1>

              <p>
                I am a software developer, content creator, and IndieHacker with over 12 years of professional experience.
              </p>

              <p>
                I am currently learning how to make money online. Follow along as I build my company in public.
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

          <div>
            <Card>
              <div className="bg-gray-100 px-4 py-3 dark:bg-gray-900">
                <NewsletterSignup />
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2>
            Milestone log
          </h2>

          <p className="mb-8">
            I am learning how to run a company and make money on the internet. This feed shows some of my progress.
          </p>

          <Milestones milestones={milestones} />
        </div>

        <div>
          <h2>
            My stack
          </h2>

          <p>
            These are the tools and technologies I use to build projects, both for myself and my clients.
          </p>

          <MyStack />
        </div>

        <div>
          <h2>
            Featured project
          </h2>

          <p>
            As my first attempt to sell something online, I am turning some of my icons into a product. Many of them will be free for personal use. Commercial use will require a paid license, which also unlocks additional features.
          </p>

          <div className="mb-8">
            <ProjectTeaser project={featuredProject} />
          </div>

          <p>
            <a href="/projects">
              See all projects &rarr;
            </a>
          </p>
        </div>

        <div>
          <h2>
            Latest blog posts
          </h2>

          <div className="grid gap-8 grid-cols-1 mb-8 sm:gap-4 sm:grid-cols-2">
            {posts.map(post => (
              <PostTeaser key={`post-teaser-${post.slug}`} post={post} />
            ))}
          </div>

          <p>
            <a href="/posts">
              Read all posts &rarr;
            </a>
          </p>
        </div>
      </div>
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
