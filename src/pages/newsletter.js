import React from 'react'

// used for breadcrumbs!
// navigation_title: Newsletter

import Layout from '../components/layout'
import ConvertkitForm from '../components/convertkit-form'

export default () => (
  <Layout>
    <h1>More tips, straight to your inbox</h1>

    <p>
      In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
    </p>

    <ul className="list-style-none">
      <li>
        <div className="border-color-blue-500 border-radius-round border-style-solid border-width-m inline-block margin-right-xxs padding-horizontal-xxs">
          <img alt="" className="height-m" src="/assets/icons/checkmark--filled.svg" />
        </div>

        design and development tips you can use immediately
      </li>

      <li>
        <img alt="" className="background-color-yellow-800 border-color-blue-500 border-radius-round margin-right-xxs" src="/assets/icons/checkmark--filled.svg" />
        free previews of my upcoming course materials
      </li>

      <li>
        <img alt="" className="background-color-yellow-800 border-color-blue-500 border-radius-round margin-right-xxs" src="/assets/icons/checkmark--filled.svg" />
        discount codes for my courses and products
      </li>

      <li>
        <img alt="" className="background-color-yellow-800 border-color-blue-500 border-radius-round margin-right-xxs" src="/assets/icons/checkmark--filled.svg" />
        announcements of events I am going to speak at
      </li>

      <li>
        <img alt="" className="background-color-yellow-800 border-color-blue-500 border-radius-round margin-right-xxs" src="/assets/icons/checkmark--filled.svg" />
        access to video recordings of past speaking gigs
      </li>
    </ul>

    <p>
      You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
    </p>

    <ConvertkitForm svForm='1067424' uid='627637e2b6' />
  </Layout>
)
