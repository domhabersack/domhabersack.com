import React from 'react'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import LandingPageBlock from '../components/landing-page-block'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Video from '../components/video'

const cta = (
  <a className="align-items-center background-color-yellow-400 border-radius-xl box-shadow-xs color-gray-900 inline-flex padding-horizontal-l padding-vertical-s visited:color-gray-900" href="/courses">
    <img alt="" className="margin-right-xxs" src="/assets/icons/desktop.svg" />

    <span className="font-size-16 font-weight-500">
      See all courses
    </span>
  </a>
)

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

    <div className="align-items-center flex flex-column-reverse justify-between margin-bottom-xxl s:flex-row">
      <div className="s:columns-8 m:columns-7">
        <h1 className="font-size-30-short margin-0 margin-bottom-s xl:font-size-36-medium">
          Learn web development through courses tailor-made for beginners.
        </h1>

        <p className="margin-bottom-s">
          Level up your skills from basic to advanced with videos on HTML, CSS, JavaScript, and more.
        </p>

        {cta}
      </div>

      <div className="columns-8 margin-bottom-s xs:columns-6 s:columns-4 m:columns-5">
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
      <LandingPageBlock heading="More enjoyable and much clearer than reading documentation." imageUrl="/assets/flame/flame-books.png">
        <p>
            Documentation can be hard to follow. It throws a lot of new and unfamiliar terms at you and expects you to “get it”. Abstract explanations and variables called <code>foo</code> and <code>bar</code> do not make concepts easy to understand.
        </p>

        <p>
          Programming does not have to be hard, and I am going to make it understandable. I will walk you through what you need to know in a way that makes sense to you.
        </p>

        <p>
          Here is a free sample taken from one of my courses:
        </p>

        <div className="margin-bottom-m">
          <Video vimeoId="372044005" />
        </div>

        <p>
          The videos are
        </p>
      </LandingPageBlock>
    </div>

    <LandingPageBlock heading="Learn how to build your idea yourself." imageUrl="/assets/flame/flame-design-science.png">
      <p>
        Follow along with the examples and build them on your own.
      </p>

      <p>
        Learn by building something yourself.
      </p>
    </LandingPageBlock>

    <LandingPageBlock heading="Go from “changing random stuff until it works” to knowing what you are doing." imageUrl="/assets/flame/flame-no-connection.png">
      <p>
        Knowing “just enough to be dangerous” is, well, dangerous. If you try to fix bugs by throwing more code at a problem, you are only putting temporary bandaids on them. Those bugs are coming back to haunt you, and they will be much harder to fix when they do.
      </p>

      <p>
        We will explore how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
      </p>
    </LandingPageBlock>

    <LandingPageBlock heading="Get your CV ready for the job you always wanted." imageUrl="/assets/flame/flame-upgrade.png">
      <p>
        These courses help you with your current project or prepare you for your next job. They even work when you want to play around with it for fun. These courses prepare you for whatever is happening in your world.
      </p>
    </LandingPageBlock>

    <LandingPageBlock heading="You learn something or you get your money back." imageUrl="/assets/flame/flame-8.png">
      <p>
        My only goal is for you to learn something. In case my teaching style does not work for you, I offer a 30 day money back guarantee. You get a full refund if you are unhappy with one of my courses during your first month with it, no questions asked.
      </p>

      <p>
        In case of a refund, you get to keep all materials you purchased. That way, you can try again in case you want to give it another chance later. The only thing you lose is access to any future updates I might make to the course.
      </p>
    </LandingPageBlock>

    <div className="background-color-gray-200 border-radius-xs margin-bottom-m padding-horizontal-s padding-vertical-m xs:padding-vertical-m m:align-items-start m:flex m:justify-between">
      <img alt="Dom Habersack" className="block border-radius-round box-shadow-s margin-bottom-m margin-horizontal-auto width-120 m:margin-left-0 m:margin-right-s" src="/assets/dom.jpg" />

      <div>
        <h2 className="font-size-18-medium margin-top-0 l:font-size-20-medium">
          <Emoji name=":wave:" />

          Hey, I am Dom. I love helping others get better at what they do.
        </h2>

        <p className="font-size-14-medium l:font-size-16-medium">
          I started learning HTML, CSS, and JavaScript on my own in seventh grade. I was so fascinated by it that I often scribbled what I thought was valid code on paper between periods. I have loved working on the web ever since. My code has gotten a lot better since then, and is no longer confined to handwritten scribbles.
        </p>

        <p className="font-size-14-medium l:font-size-16-medium margin-bottom-0">
          I started my professional career in development and now consulting over 15 years ago. My heart beats for teaching everything I know. Helping others get better at what they do is what motivates me every single day. Here is what some of them had to say about working with me:
        </p>
      </div>
    </div>

    {cta}
  </Layout>
)
