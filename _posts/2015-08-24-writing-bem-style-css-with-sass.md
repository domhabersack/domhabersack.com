---
title: Writing BEM-style CSS with Sass
categories: ["CSS", "Sass"]
excerpt: The &-operator in Sass can greatly reduce the typing work required when using BEM in your stylesheets.
heroAlt: A giant ampersand-character painted on a wall.
heroCaption: Sass’ &-operator reduces the amount of typing we need to do when using BEM.
---
BEM, “Block Element Modifier”, is an approach to writing CSS that does away with most of the “cascading” used in CSS. For an excellent primer on the subject, I highly recommend reading [“MindBEMding – getting your head ’round BEM syntax”](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

While this approach initially sounds insane (they are called *Cascading* Style Sheets after all), BEM offers easier long-term maintenance without noticeably impacting development when taking advantage of preprocessors.

In BEM, rather than using selectors that are long concatenations of HTML-tags, we identify each element that is to be styled through a single expressive, class-based selector. This avoids specificity-wars, in which multiple developers try to one-up each other’s selectors to override a rule in a different, long since forgotten stylesheet.

This approach also decouples the presentation of content further from its markup. While changing a single tag in a template could potentially break several parts of our CSS previously, requiring us to find and replace any occurrences of the old tag, using only class-based selectors frees us up to change tags whenever we deem necessary without the subsequent, error-prone CSS-hunt. If done right, changes to either markup or styling are now limited to a single source, without having to manually keep HTML and CSS in sync.

Consider the following markup for a site-wide navigation:

```html
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>

    <li>
      <a href="/projects">Projects</a>
    </li>

    <li>
      <a href="/contact">Contact</a>
    <li>
  </ul>
<nav>
```

The following selectors describe this markup accurately:

```css
nav {}
nav > ul {}
nav > ul > li {}
nav > ul > li > a {}
```

But what happens when we realize our navigation does have a specific order, so the `ul` should really be an `ol`? First, we need to change the HTML:

```html
<nav>
  <ol>
    <li>…</li>
    <li>…</li>
    <li>…</li>
  </ol>
</nav>
```

However, the tag-based CSS also needs to be modified, or else our styles will no longer apply:

```css
nav {}
nav > ol {}
nav > ol > li {}
nav > ol > li > a {}
```

The problem with this is that it is easy to miss a selector that influences an element that needs updating. There remains an element of human error, which is increased with the number of selectors across all stylesheets that influence a specific element.

## Enter preprocessors

One could argue that the manual effort required to adjust the CSS could have been reduced by using a preprocessor such as Sass:

```scss
nav {
  > ol {
    > li {
      > a {}
    }
  }
}
```

This reduces the necessary updates to our stylesheets to a single change in our Sass-file. While less error-prone, it still requires *two* changes when making one change: in HTML *and* CSS.

## How BEM reduces maintenance-efforts

When referencing elements by a single class-selector, any change to the markup or styling of an element is localized to a single change in *either* the HTML *or* the CSS.

When using BEM, the navigation could be marked up as follows:

```html
<nav
    class="navigation">
  <ul
      class="navigation__list">
    <li
        class="navigation__item">
      <a
          href="/"
          class="navigation__link">
        Home
      </a>
    </li>

    <li
        class="navigation__item">
      <a
          href="/projects"
          class="navigation__link">
        Projects
      </a>
    </li>

    <li
        class="navigation__item">
      <a
          href="/contact"
          class="navigation__link">
        Contact
      </a>
    <li>
  </ul>
<nav>
```

(**Note:** I tend to split up long HTML so each attribute appears on its own, double-indented line to help with readability.)

The associated CSS-selectors would no longer be a concatenation of multiple tags, but can instead be a flat list:

```css
.navigation {}
.navigation__list {}
.navigation__item {}
.navigation__link {}
```

Now, changing our list to an `ol` will only ever require the HTML to be updated, while the CSS can remain unchanged: the same selector still applies, so no adjustments need to be made.

## BEM and Sass, sitting in a tree

Repeatedly writing the block-prefix (such as `.navigation`) can be a bit tedious, and is again quite prone to error.

Luckily, the `&`-operator in Sass, which always references the parent selector in a nested context, can be used as part of a new selector. We can append element- and modifier-names to it and Sass will compile the complete selectors for us:

```scss
.navigation {
  &__list {}
  &__item {}
  &__link {}
}
```

This will generate the same list of selectors as shown above.

### Modifiers and states

The `&`-selector can be used in conjunction with modifier- and state-selectors just the same. The one requirement to keep in mind is that no space may follow it, or else Sass will interpret the selectors as being nested rather than chained.

```scss
.block {
  &__element {
    &--modifier {}
    &.is-element-state {}
  }
  &.is-block-state {}
}
```

This keeps all selectors associated with a block neatly contained in its namespace.

## “This makes everything too wordy!”

I often hear seasoned frontend-developers complain that BEM bloats up markup with unnecessary `class`-attributes and makes things less readable.

They argue that with HTML5, our tag names are already highly descriptive: if we only have a single `nav` on our site, and it only ever contains a `ul` with `li`s and `a`s, so why should we go to all this trouble? `nav > ul > li > a` describes our navigational links perfectly!

This assumption comes with a gigantic **if**. Our markup is never set in stone. Requirements change, additional tags can become necessary, others might change entirely. While the example used here is limited in scope, changes are not always so neatly contained.

We use BEM to prepare for the eventuality of our code changing. Making any adjustment becomes a lot simpler when adhering to this strict set of guidelines. The syntax does take some getting used to, but the long-term benefits are worth the tradeoff.
