---
title: "Creating utility classes with Sass"
date: "2020-07-04"
tags: ["Sass", "utility-first CSS"]
---
Sass’ `@each`-loop can create many similar looking CSS-classes quickly. We can use that to create our own utility-first classes like they use in [Tailwind CSS](https://tailwindcss.com).

```scss
$font-sizes: (
  "xs": 1.2rem,
  "s":  1.6rem,
  "m":  2.0rem,
  "l":  3.2rem,
  "xl": 4.8rem
);

@each $size, $value in $font-sizes {
  .font-size-#{$size} {
    font-size: $value;
  }
}

/*
  .font-size-xs { font-size: 1.2rem; }
  .font-size-s  { font-size: 1.6rem; }
  .font-size-m  { font-size: 2.0rem; }
  .font-size-l  { font-size: 3.2rem; }
  .font-size-xl { font-size: 4.8rem; }
*/
```
