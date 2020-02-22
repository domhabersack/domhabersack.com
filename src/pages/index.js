import React from 'react'

import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="align-items-center flex flex-column-reverse justify-between margin-bottom-xxl m:flex-row">
      <div className="m:columns-8">
        <h1 className="font-size-36-short">
          Learn web development through courses tailor-made for beginners.
        </h1>

        <p>
          Level up your skills from basic to advanced with videos ???
        </p>

        <p>
          <a className="background-color-yellow-400 border-radius-xl box-shadow-s color-gray-900 inline-block padding-horizontal-xl padding-vertical-m" href="/courses">
            See all courses
          </a>
        </p>
      </div>

      <div className="columns-12 xs:columns-10 s:columns-8 m:columns-6 l:columns-4 xl:columns-2">
        <img src="/assets/flame/flame-welcome.png" />
      </div>
    </div>

    <div className="align-items-center flex flex-column margin-bottom-l xl:align-items-start xl:justify-between">
      <div className="columns-8 xl:columns-4">
        <img src="/assets/flame/flame-page-under-construction.png" />
      </div>

      <div className="xl:columns-8">
        <h2 className="font-size-24-medium">
          These courses take you from novice to advanced to senior developer.
        </h2>

        <p>
          When you are just starting out, it is difficult to know where to invest your energy. What are you supposed to learn first? There are so many interesting technologies we could to use, with new ones coming out all the time. I will help you take your first steps by teaching you everything you need to get started.
        </p>

        <p>
          If you already know enough of the basics to use a technology, I will show you how to unlock their full potential. Together, we will dive into their advanced features so you can work with them more efficiently. We will learn how to get the most out of everything you work with so you can get more work done both better and faster.
        </p>
      </div>
    </div>

    <div className="align-items-start flex justify-between margin-bottom-l">
      <div className="columns-4">
        <img src="/assets/flame/flame-books.png" />
      </div>

      <div className="columns-8">
        <h2 className="font-size-24-medium">
          Reading documentation is boring. Let me do that part for you.
        </h2>

        <p>
          Documentation can be a tough read. It throws a lot of new and unfamiliar terms at you and expects you to “get it”. Abstract explanations and variables called foo and bar make for a terrible learning experience.
        </p>

        <p>
          Programming does not have to be hard, and we are going to make it understandable. We are walking you through what you need to know in a way that makes sense to you.
        </p>

        <p>
          Don’t believe me? Here is a free sample taken from one of our courses:
        </p>
      </div>
    </div>

    <div className="align-items-start flex justify-between margin-bottom-l">
      <div className="columns-4">
        <img src="/assets/flame/flame-no-connection.png" />
      </div>

      <div className="columns-8">
        <h2 className="font-size-24-medium">
          Go from “changing random stuff until it works” to knowing what you are doing.
        </h2>

        <p>
          Knowing “just enough to be dangerous” is, well, dangerous. If you try to fix bugs by throwing more code at a problem, you are only putting temporary bandaids on them. Those bugs are coming back to haunt you, and they will be much harder to fix when they do.
        </p>

        <p>
          We will explore how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
        </p>
      </div>
    </div>
  </Layout>
)

// title: Learn web development through courses tailor-made for beginners.
// navigation_title: Home
// excerpt: I’ll help you clear up your messaging and focus your product so your customers will love you.

  /*
*/
