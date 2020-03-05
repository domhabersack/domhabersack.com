import React from 'react'

import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import Taper from '../components/taper'

export default ({ location }) => {
  const listItems = [
    'design and development tips you can use immediately',
    'free previews of my upcoming course materials',
    'discount codes for my courses and products',
    'announcements of events I am going to speak at',
    'access to video recordings of past speaking gigs'
  ]

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter'
        }
      ]}
    >
      <MetaTags
        title="Newsletter"
      />

      <Taper>
        <h1>More tips, straight to your inbox</h1>

        <p>
          In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
        </p>

        <ul className="list-style-none xs:columns-10 m:columns-8-of-10 l:columns-6-of-8">
          {listItems.map(listItem => (
            <li className="flex" key={`newsletter-benefit-${listItem}`}>
              <div className="align-items-center border-color-blue-500 border-radius-round border-style-solid border-width-m flex-no-shrink height-24 inline-flex justify-center margin-right-xxs width-24 xs:height-27 xs:width-27 m:height-24 m:margin-top-xxs m:width-24 l:height-27 l:margin-right-xs l:width-27">
                <img alt="" className="width-12 xs:width-15 m:width-12 l:width-15" src="/assets/icons/checkmark--filled.svg" />
              </div>

              <span className="margin-bottom-xxs s:margin-bottom-xs">
                {listItem}
              </span>
            </li>
          ))}
        </ul>

        <p>
          You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
        </p>

        <ConvertkitForm svForm="1067424" uid="627637e2b6" sourceUrl={location.href} />
      </Taper>
    </Layout>
  )
}
