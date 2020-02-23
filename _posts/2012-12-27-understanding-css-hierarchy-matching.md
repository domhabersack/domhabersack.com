---
title: Understanding CSS hierarchy-matching
categories: ["CSS"]
excerpt: Understanding how browsers match CSS-selectors and HTML helps us write better stylesheets.
heroAlt: An exit-sign with an arrow pointing to the left.
heroCaption: We can write better CSS-selectors once we know how browsers interpret them.
---
To get a feel for how CSS-selectors should be written, you need to understand how browsers match them to the related markup. The following tries to give a top-level description that might not be entirely accurate but should still give you a good enough idea of how CSS and HTML get combined during rendering.

**Note:** Writing this, I realized that this is probably not how it actually works, as using regular expressions to match selectors and hierarchies would obviate the need for repeated identification-cycles. Nevertheless, thinking of the process this way helps writing simpler selectors, so the model remains valid.

## Finding hierarchies

Consider a site with the following markup:

```html
<html>
  <head>
    <!-- omitted -->
  </head>

  <body>
    <header>
      <h1>Site title</h1>
    </header>

    <nav>
      <ol>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ol>
    </nav>

    <section>
      <article>
        <header>
          <h2>Article title</h2>

          <p>Date</p>
        </header>

        <p>Content</p>

        <p>Content with <a href="#">link</a></p>

        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </article>
    </section>
  </body>
</html>
```

When discarding the content and chaining all tags together according to their nesting, the path to each tag can be extracted:

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Hierarchy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>html</th>
      <td>html</td>
    </tr>
    <tr>
      <th>body</th>
      <td>html body</td>
    </tr>
    <tr>
      <th>header</th>
      <td>html body header</td>
    </tr>
    <tr>
      <th>h1</th>
      <td>html body header h1</td>
    </tr>
    <tr>
      <th>nav</th>
      <td>html body nav</td>
    </tr>
    <tr>
      <th>ol</th>
      <td>html body nav ol</td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body nav ol li</td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body nav ol li a</td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body nav ol li</td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body nav ol li a</td>
    </tr>
    <tr>
      <th>section</th>
      <td>html body section</td>
    </tr>
    <tr>
      <th>article</th>
      <td>html body section article</td>
    </tr>
    <tr>
      <th>header</th>
      <td>html body section article header</td>
    </tr>
    <tr>
      <th>h2</th>
      <td>html body section article header h2</td>
    </tr>
    <tr>
      <th>p</th>
      <td>html body section article header p</td>
    </tr>
    <tr>
      <th>p</th>
      <td>html body section article p</td>
    </tr>
    <tr>
      <th>p</th>
      <td>html body section article p</td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article p a</td>
    </tr>
    <tr>
      <th>ul</th>
      <td>html body section article ul</td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul li</td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article ul li a</td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul li</td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article ul li a</td>
    </tr>
  </tbody>
</table>

Note that some tags share the same hierarchy.

While each hierarchy could be used as a (bad) CSS-selector, think of them as an
attribute we add to each tag that we now match against selectors.

## Matching simple selectors

**Selectors are matched to markup from right to left.** Single-tag selectors are simplest and instruct the browser to ignore all elements whose hierarchy does not end in the exact tag given.

For example, matching the above table against the selector `li` would trim it down to just four elements:

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Hierarchy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>li</th>
      <td>html body nav ol <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body nav ol <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul <strong>li</strong></td>
    </tr>
  </tbody>
</table>

The browser only had to filter the initial table a single time to find these elements and can now apply the styles set with the selector.

## Matching multi-level selectors

As soon as we chain selectors the browser has to iterate over intermediate results multiple times, potentially filtering them with every step.

When applying a rule such as <code>ul > li</code>, the browser again starts at the rightmost tag and filters the hierarchy-table to end up with the same result as before:

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Hierarchy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>li</th>
      <td>html body nav ol <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body nav ol <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul <strong>li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article ul <strong>li</strong></td>
    </tr>
  </tbody>
</table>

This list now gets filtered again to identify all `li`-tags nested _directly below_ a `ul`-tag:

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Hierarchy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>li</th>
      <td>html body section article <strong>ul > li</strong></td>
    </tr>
    <tr>
      <th>li</th>
      <td>html body section article <strong>ul > li</strong></td>
    </tr>
  </tbody>
</table>

The more levels there are in a selector, the more times each resulting list needs to be iterated over again.

While extending a selector will often result in a condensed list, unnecessary extensions generate wasted filtering-cycles. In the above example, adding `html > body > section > article >` in front of the selector would force the browser to filter the result **four more times without altering the list** before it could assert a match.

## Identification loops

While every level adds a new iteration over a filtered list of potentially-matching tags, some selectors require a more complex analysis of a single element’s hierarchy. While the child-selector (`>`) only requires a check of the direct parent tag, a descendant-selector (space) might force the browser to walk up the entire hierarchy trying to find a match.

For example, `nav a` first filters out all elements whose hierarchy does not end in an `a`-tag, resulting in the following list:

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Hierarchy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>a</th>
      <td>html body nav ol li <strong>a</strong></td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body nav ol li <strong>a</strong></td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article p <strong>a</strong></td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article ul li <strong>a</strong></td>
    </tr>
    <tr>
      <th>a</th>
      <td>html body section article ul li <strong>a</strong></td>
    </tr>
  </tbody>
</table>

When adding `nav` to the selector, the browser has to execute a more detailed analysis of each element’s hierarchy. For the first element, it has to go through the following steps:

<table>
  <thead>
    <tr>
      <th>Iteration</th>
      <th>Hierarchy</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>html body nav ol <strong>li a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>2</th>
      <td>html body nav <strong>ol</strong> li <strong>a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>3</th>
      <td>html body <strong>nav</strong> ol li <strong>a</strong></td>
      <td><code>nav</code> found, match</td>
    </tr>
  </tbody>
</table>

The browser can stop walking up this element’s hierarchy as soon as a match is found and continue with the next element. In contrast to that, the last element from the initial list gets matched against `nav a` as follows:

<table>
  <thead>
    <tr>
      <th>Iteration</th>
      <th>Hierarchy</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>html body section article ul <strong>li a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>2</th>
      <td>html body section article <strong>ul</strong> li <strong>a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>3</th>
      <td>html body section <strong>article</strong> ul li <strong>a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>4</th>
      <td>html body <strong>section</strong> article ul li <strong>a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>5</th>
      <td>html <strong>body</strong> section article ul li <strong>a</strong></td>
      <td><code>nav</code> not found, continue&hellip;</td>
    </tr>
    <tr>
      <th>6</th>
      <td><strong>html</strong> body section article ul li <strong>a</strong></td>
      <td><code>nav</code> not found, no match</td>
    </tr>
  </tbody>
</table>

For elements that only match the end of a selector but not its beginning, the browser has to walk up the entire hierarchy before it can assess that the element definitely does not match.

In real-world examples, pages usually contain a much higher number of elements with deeper and more complex hierarchies. Since the matching-process has to be repeated for every element remaining after each filtering-step, it is best to **keep nesting of markup to a minimum** and **use selectors that match or fail as quickly as possible**.

You can read more recommendations on doing the latter in my post on [writing high-performance CSS](#/posts/writing-high-performance-css).
