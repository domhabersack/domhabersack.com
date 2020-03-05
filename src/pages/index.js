import React from 'react'

import Layout from '../components/layout'
import LandingPageBlock from '../components/landing-page-block'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Video from '../components/video'

export default () => (
  <Layout>
    <MetaTags
      description="Level up your skills from basic to advanced with videos on HTML, CSS, JavaScript, and more."
      title="Learn web development through courses tailor-made for beginners."
    />

    <RichPreview
      description="Level up your skills from basic to advanced with videos on HTML, CSS, JavaScript, and more."
      permalink=""
      title="Learn web development through courses tailor-made for beginners."
    />

    <div className="align-items-center flex flex-column-reverse justify-between margin-bottom-xxl s:align-items-start s:flex-row">
      <div className="s:columns-8 m:columns-7 xl:columns-8">
        <h1 className="font-size-30-short xl:font-size-36-medium">
          Learn web development through courses tailor-made for beginners.
        </h1>

        <p>
          Level up your skills from basic to advanced with videos on HTML, CSS, JavaScript, and more.
        </p>

        <a className="align-items-center background-color-yellow-400 border-radius-xxs box-shadow-s color-gray-900 inline-flex padding-m visited:color-gray-900" href="/courses">
          <img alt="" className="margin-right-xxs" src="/assets/icons/desktop.svg" />

          <span className="font-size-16 font-weight-500">
            See all courses
          </span>
        </a>
      </div>

      <div className="columns-8 xs:columns-6 s:columns-4 m:columns-5 xl:columns-4">
        <img alt="" src="/assets/flame/flame-welcome.png" />
      </div>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="These courses take you from novice to advanced to senior developer." imageUrl="/assets/flame/flame-page-under-construction.png">
        <p>
          When you are just starting out, it is difficult to know where to invest your energy. What are you supposed to learn first? There are so many interesting technologies we could to use, with new ones coming out all the time. I will help you take your first steps by teaching you everything you need to get started.
        </p>

        <p>
          If you already know enough of the basics to use a technology, I will show you how to unlock their full potential. Together, we will dive into their advanced features so you can work with them more efficiently. We will learn how to get the most out of everything you work with so you can get more work done both better and faster.
        </p>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Reading documentation is boring. Let me do that part for you." imageUrl="/assets/flame/flame-books.png">
        <p>
          Documentation can be a tough read. It throws a lot of new and unfamiliar terms at you and expects you to “get it”. Abstract explanations and variables called foo and bar make for a terrible learning experience.
        </p>

        <p>
          Programming does not have to be hard, and we are going to make it understandable. We are walking you through what you need to know in a way that makes sense to you.
        </p>

        <p>
          Don’t believe me? Here is a free sample taken from one of our courses:
        </p>

        <Video vimeoId="372044005" />
      </LandingPageBlock>
    </div>

    <LandingPageBlock heading="Go from “changing random stuff until it works” to knowing what you are doing." imageUrl="/assets/flame/flame-no-connection.png">
      <p>
        Knowing “just enough to be dangerous” is, well, dangerous. If you try to fix bugs by throwing more code at a problem, you are only putting temporary bandaids on them. Those bugs are coming back to haunt you, and they will be much harder to fix when they do.
      </p>

      <p>
        We will explore how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
      </p>
    </LandingPageBlock>
  </Layout>
)
