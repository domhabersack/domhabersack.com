import React from 'react'

import Breakout from '@/components/breakout'
import CalendarIcon from '@/icons/calendar'
import ClockIcon from '@/icons/clock'
import ConvertkitForm from '@/components/convertkit-form'
import EmailWithLetterIcon from '@/icons/email-with-letter'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Video from '@/components/video'
import VideoIcon from '@/icons/video'
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/api/courses'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Course({
  cta,
  emails,
  excerpt,
  hours,
  mdxSource,
  permalink,
  playlist,
  svForm,
  title,
  uid,
  videos,
  weeks,
}) {
  const body = hydrateMDXSource(mdxSource)

  const meta = {
    emails: {
      value: emails,
      Icon: EmailWithLetterIcon,
    },
    videos: {
      value: videos,
      Icon: VideoIcon,
    },
    hours: {
      value: hours,
      Icon: ClockIcon,
    },
    weeks: {
      value: weeks,
      Icon: CalendarIcon,
    },
  }

  const isSignupPossible = svForm !== null && uid !== null

  const breadcrumbs = [
    {
      label: 'Courses',
      url: '/courses',
    }, {
      label: title,
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <div className="mb-12">
        <h1>
          {title}
        </h1>

        <aside className="bg-gray-100 flex flex-wrap mb-6 px-4 py-3 space-x-5 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          {Object.entries(meta).map(([type, {
            Icon,
            value,
          }]) => value && (
            <React.Fragment key={`meta-${type}`}>
              <div className="flex items-center space-x-1">
                <div className="h-6 w-6 dark:text-gray-400">
                  <Icon />
                </div>

                <span>
                  <strong>{value}</strong> {type}
                </span>
              </div>
            </React.Fragment>
          ))}
        </aside>

        {body}

        {isSignupPossible && (
          <ConvertkitForm
            cta={cta}
            svForm={svForm}
            uid={uid}
          />
        )}
      </div>

      {playlist && (
        <Breakout>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {playlist.map(({
              duration,
              title,
              vimeoId,
              youtubeId,
            }, index) => (
              <React.Fragment key={`video-${title}`}>
                <div>
                  <div className="mb-1">
                    <Video
                      title={title}
                      vimeoId={vimeoId}
                      youtubeId={youtubeId}
                    />
                  </div>

                  <h4 className="font-normal leading-snug text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      #{index + 1}
                    </span>

                    {' '}

                    {title}

                    {' '}

                    <span className="text-gray-500 dark:text-gray-400">
                      ({duration})
                    </span>
                  </h4>
                </div>
              </React.Fragment>
            ))}
          </div>
        </Breakout>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const course = await getCourseBySlug(params.slug)

  return {
    props: course,
  }
}

export function getStaticPaths() {
  const allCourseSlugs = getAllCourseSlugs()

  return {
    fallback: false,
    paths: allCourseSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
