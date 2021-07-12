const withMDX = require('@next/mdx')()

module.exports = withMDX({
  images: {
    disableStaticImages: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  async redirects() {
    return [
      {
        source: '/categories/:slug',
        destination: '/posts/categories/:slug',
        permanent: true,
      }, {
        source: '/newsletter/archive/:slug',
        destination: '/newsletter/:slug',
        permanent: true,
      },
    ]
  },
})

// JUMP /posts
// MOVE /posts/:slug
// JUMP /newsletter
// MOVE /newsletter/:slug
// GONE /newsletter/archive
// GONE /firetips/tags
// GONE /firetips/tags/:slug


/*


/
/about
/confirm-subscription
/contact
/contact
/courses
/courses/hello-together
/courses/hello-together/an-actual-video
/courses/hello-together/apostrophes
/courses/hello-together/becoming-a-car
/courses/hello-together/do
/courses/hello-together/each-other
/courses/hello-together/eventually
/courses/hello-together/gender-neutral-pronouns
/courses/hello-together/good-vs-well
/courses/hello-together/handy
/courses/hello-together/hello-together
/courses/hello-together/i-vs-me
/courses/hello-together/less-vs-fewer
/courses/hello-together/looking-forward
/courses/hello-together/making-a-photo
/courses/hello-together/or
/courses/hello-together/please
/courses/hello-together/what-for-a-picture
/courses/hello-together/whom
/courses/standard-ml-for-beginners
/courses/standard-ml-for-beginners/abstrakte-datentypen
/courses/standard-ml-for-beginners/auswertungsreihenfolge
/courses/standard-ml-for-beginners/benutzerdefinierte-datentypen
/courses/standard-ml-for-beginners/berechnungen-mit-einfachen-datentypen
/courses/standard-ml-for-beginners/berechnungen-mit-tupeln-verbunden-und-listen
/courses/standard-ml-for-beginners/currying-und-funktionen-hoeherer-ordnung
/courses/standard-ml-for-beginners/datentypen
/courses/standard-ml-for-beginners/exceptions
/courses/standard-ml-for-beginners/kontrollfluss-und-funktionen
/courses/standard-ml-for-beginners/lokale-variablen-und-endrekursion
/courses/standard-ml-for-beginners/optionstypen
/courses/standard-ml-for-beginners/pattern-matching-und-verarbeitung-von-listen
/courses/standard-ml-for-beginners/referenzen
/courses/standard-ml-for-beginners/rekursion
/courses/standard-ml-for-beginners/schleifen
/courses/standard-ml-for-beginners/sichtbarkeit
/courses/standard-ml-for-beginners/strukturen-und-signaturen
/courses/standard-ml-for-beginners/verknuepfung-von-funktionen
/firetips
/firetips/accessing-array-elements-faster-with-lookup-objects
/firetips/accessing-object-properties-with-bracket-notation
/firetips/array-method-shorthands
/firetips/assignment-operators-shorthand
/firetips/building-objects-from-nested-arrays
/firetips/calculating-sums
/firetips/catching-unknown-keys-in-lookup-tables
/firetips/checking-if-every-array-element-matches-a-condition
/firetips/checking-if-something-is-an-array
/firetips/clamping-values-in-an-array
/firetips/combining-arrays-pairwise
/firetips/combining-arrow-functions-in-styled-components
/firetips/comparing-to-null-with-double-equals
/firetips/composing-functions-to-run-in-sequence
/firetips/conditionally-modifying-array-elements
/firetips/converting-numerical-arrays-into-relative-fractions
/firetips/counting-all-array-elements-that-match-a-condition
/firetips/counting-letters-in-a-string
/firetips/counting-months-from-zero
/firetips/creating-number-ranges
/firetips/creating-state-selectors-in-utility-first-css
/firetips/creating-utility-classes-with-sass
/firetips/destructuring-in-assignment
/firetips/destructuring-props-in-styled-components
/firetips/destructuring-the-console-object
/firetips/destructuring-values-returned-by-functions
/firetips/error-handling-with-try-catch
/firetips/exclusive-or
/firetips/extracting-complex-logic-to-named-functions
/firetips/extracting-floats-from-strings
/firetips/filtering-arrays-to-unique-values
/firetips/filtering-falsy-values-from-arrays
/firetips/flat-arrays-to-object-arrays
/firetips/flattening-nested-arrays
/firetips/freezing-objects-for-immutability
/firetips/getting-an-array-element-with-the-largest-given-property
/firetips/getting-properties-from-objects-that-match-a-condition
/firetips/getting-random-elements-from-arrays
/firetips/getting-the-intersection-of-two-arrays
/firetips/getting-the-largest-number-from-an-array
/firetips/getting-the-last-element-from-an-array
/firetips/grouping-array-elements-by-a-property
/firetips/hiding-repetition-with-helper-functions
/firetips/implicit-object-return-in-arrow-functions
/firetips/implicit-return-in-arrow-functions
/firetips/interpolation-in-template-literals
/firetips/inverting-boolean-functions
/firetips/logging-as-objects
/firetips/making-parameters-required
/firetips/mapping-array-values-with-constructors
/firetips/mapping-over-objects
/firetips/math-with-infinity
/firetips/merging-arrays
/firetips/merging-many-objects
/firetips/namespacing-styled-components
/firetips/omitting-optional-else-branches
/firetips/padding-strings
/firetips/passing-parameters-as-a-single-object
/firetips/picking-object-properties
/firetips/plucking-properties-from-object-arrays
/firetips/quickly-removing-values-from-an-array
/firetips/redundant-comparisons-to-true-or-false
/firetips/relative-timestamps-with-intl
/firetips/removing-duplication-with-higher-order-functions
/firetips/removing-duplication-with-ternary-operators
/firetips/removing-specific-values-from-an-array
/firetips/removing-the-largest-number-from-an-array
/firetips/replacing-all-matches-in-a-string
/firetips/replacing-complex-conditions-with-descriptive-variables
/firetips/rewriting-switch-statements-to-lookup-objects
/firetips/russian-roulette
/firetips/short-circuiting-boolean-expressions
/firetips/shuffling-arrays
/firetips/sorting-arrays-by-object-properties
/firetips/sorting-numbers
/firetips/splitting-arrays-by-a-condition
/firetips/splitting-arrays-into-chunks
/firetips/splitting-arrays-into-x-elements-and-the-rest
/firetips/splitting-strings
/firetips/splitting-strings-by-lengths
/firetips/spongebobifying-strings
/firetips/switching-between-functions-with-a-ternary-operator
/firetips/tags
/firetips/tags/algorithms
/firetips/tags/javascript
/firetips/tags/performance
/firetips/tags/readability
/firetips/tags/regular-expressions
/firetips/tags/sass
/firetips/tags/styled-components
/firetips/tags/utility-first-css
/firetips/the-exponentiation-operator
/firetips/the-nullish-coalescing-operator
/firetips/the-optional-chaining-operator
/firetips/using-boolean-prefixes-for-variables
/firetips/using-non-alphanumeric-characters-in-css
/firetips/using-the-ternary-operator-in-assignment-and-return
/legal-notice
/newsletter
/newsletter/a-better-keyboard-layout-for-programming
/newsletter/a-very-relaxing-refactoring
/newsletter/archive
/newsletter/back-to-normal
/newsletter/before-we-start-building-this
/newsletter/bookmarking-the-greats
/newsletter/books-for-getting-better-at-design
/newsletter/can-you-recommend-other-podcasts-like-these
/newsletter/css-that-has-a-tail-wind
/newsletter/dealing-with-broken-streaks
/newsletter/declutter-those-bytes
/newsletter/delete-your-backlog
/newsletter/do-not-track-maybe
/newsletter/dont-invent-this-here
/newsletter/drawing-sweet-icons-for-you
/newsletter/end-of-an-era
/newsletter/enthusiasm-does-not-mean-priority
/newsletter/evolution-not-revolution
/newsletter/fat-marker-sketches-are-the-better-mockups
/newsletter/find-your-community
/newsletter/fonts-that-make-you-go-agh!iIl1
/newsletter/free-alternatives-to-fontawesome
/newsletter/gdpr-applies-to-you-as-well
/newsletter/get-better-at-design-by-breaking-some-designs
/newsletter/get-more-value-from-your-git-log
/newsletter/getting-sprint-retrospectives-right-is-hard-work
/newsletter/giving-every-minute-a-job
/newsletter/how-do-you-eat-an-elephant
/newsletter/how-the-poop-emoji-broke-my-website
/newsletter/how-to-build-that-work-schedule
/newsletter/how-to-flush-open-graph-previews-on-social-networks
/newsletter/how-to-pick-your-next-project
/newsletter/how-to-understand-any-codebase
/newsletter/how-to-write-legacy-code
/newsletter/i-am-changing-my-newsletter
/newsletter/i-finally-understand-many-small-functions
/newsletter/i-published-my-first-video-tutorials
/newsletter/idle-times
/newsletter/introducing-lovelicons
/newsletter/is-this-a-hill-you-want-to-die-on
/newsletter/javascript-sorts-arrays-weird
/newsletter/join-me-for-hacktoberfest
/newsletter/just-enough-analytics
/newsletter/keep-your-links-and-seo-when-moving-domains
/newsletter/memorizing-a-shuffled-deck-of-cards
/newsletter/my-design-turned-out-worse-than-i-thought
/newsletter/negativity-in-retrospectives
/newsletter/offsetting-a-low-salary
/newsletter/picking-what-to-learn
/newsletter/poor-man-s-debugging-but-cooler
/newsletter/practical-apis-for-your-next-tech-exploration
/newsletter/progressive-enhancement-with-at-supports
/newsletter/protect-your-seo-when-crossposting
/newsletter/questions-to-ask-in-job-interviews
/newsletter/recharge
/newsletter/role-models
/newsletter/running-a-static-site-saved-me-from-getting-hacked
/newsletter/serving-webp-images
/newsletter/shaping-up
/newsletter/shipped-is-better-than-perfect-content-preview
/newsletter/smart
/newsletter/start-building-an-audience-today
/newsletter/staying-sane-in-the-homeoffice
/newsletter/stress-test-your-layouts-in-disco-mode
/newsletter/texting-faster
/newsletter/the-constraints-behind-consistent-icons
/newsletter/the-easiest-way-to-build-a-dark-mode
/newsletter/the-end-of-annoying-javascript-imports
/newsletter/the-global-gitignore
/newsletter/the-inter-typeface-family
/newsletter/the-ipad-got-the-best-pointer
/newsletter/the-main-branch
/newsletter/the-seinfeld-approach-to-content-creation
/newsletter/these-tips-are-fire
/newsletter/this-newsletter-goes-to-13-people
/newsletter/three-tools-to-up-your-productivity
/newsletter/tired-of-learning-by-building-todo-apps
/newsletter/turning-simple-shapes-into-complex-shapes
/newsletter/unexpected-usecases
/newsletter/use-dad-jokes-to-get-better-at-design
/newsletter/we-re-skipping-out-shiny-features
/newsletter/what-a-target-audience-could-look-like
/newsletter/what-can-you-do
/newsletter/what-do-you-not-have-time-for
/newsletter/when-the-law-makes-you-pivot
/newsletter/when-you-know-too-much-to-be-helpful
/newsletter/which-is-it-cookies-or-no-cookies
/newsletter/write-like-hemingway
/newsletter/writing-code-for-others-to-read
/newsletter/your-notes-could-be-products
/posts
/posts/as-a-user-story
/posts/colocating-unit-tests
/posts/debunking-whitewashed-exam-statistics
/posts/design-with-ugly-data
/posts/drop-the-should
/posts/grunt-contrib-sass-and-node-js-0-10-8
/posts/how-to-go-from-junior-to-senior-developer
/posts/how-to-name-color-variables-in-sass
/posts/how-to-split-arrays-into-equal-sized-chunks
/posts/insights-of-a-new-screencaster
/posts/javascript-s-reduce-every-and-some
/posts/make-your-time-count
/posts/nothing-is-ever-not-bad
/posts/on-lazy-journalism
/posts/on-trends-in-design
/posts/painless-installation-of-sml-on-os-x
/posts/screencasts-on-standard-ml-in-german
/posts/sml-nj-110.74-on-os-x-10.8-mountain-lion
/posts/understanding-css-hierarchy-matching
/posts/what-do-i-know
/posts/what-to-consider-when-picking-a-library-or-plugin
/posts/why-students-fail-entry-level-programming-exams
/posts/writing-bem-style-css-with-sass
/posts/writing-high-performance-css
/posts/writing-utility-first-css-with-sass
/posts/your-api-might-be-sexist
/projects
/projects/logosearch
/projects/lovelicons
/projects/sketch-dadjokes
/projects/yieldui


*/
