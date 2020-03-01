import React from 'react'
import { graphql } from 'gatsby'

import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import Taper from '../components/taper'
import Video from '../components/video'

export default ({ data, location }) => {
  console.log({ data, location })

  const {
    frontmatter,
    html
  } = data.markdownRemark

  const {
    cta,
    title,
    svForm,
    playlist,
    uid
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses',
          url: '/courses'
        }, {
          label: title
        }
      ]}
    >
      <Taper>
        <h1>
          {title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="margin-bottom-xxl">
          <ConvertkitForm svForm={svForm} uid={uid} cta={cta} sourceUrl={location.href} />
        </div>
      </Taper>

      {playlist && (
        <div className="grid grid-columns-1 grid-column-gap grid-row-gap-l xs:grid-columns-2 xs:grid-row-gap-xs m:grid-columns-3 m:grid-row-gap-m l:grid-row-gap-l">
          {playlist.map(({ duration, title, vimeoId, youtubeId }, index) => (
            <div key={`video-${title}`}>
              <div>
                <Video vimeoId={vimeoId} youtubeId={youtubeId} />
              </div>

              <h4 className="font-size-16 font-weight-400">
                <span className="color-gray-500">
                  #{index}
                </span>

                {' '}

                {title}

                {' '}

                <span className="color-gray-500">
                  ({duration})
                </span>
              </h4>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      fields {
        slug
      }
      html
      frontmatter {
        cta
        playlist {
          duration
          title
          youtubeId
          vimeoId
        }
        svForm
        title
        uid
      }
    }
  }
`
