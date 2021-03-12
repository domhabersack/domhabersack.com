---
title: "Math with Infinity"
date: "2020-08-28"
tags: ["JavaScript"]
---
Calculations with `Infinity` are pretty rare, and most of them still return `Infinity`. While `Infinity` is a number, trying to subtract it from another `Infinity` isn’t a number anymore.

```js
// both `Infinity` and numbers are numbers
typeof Infinity      // ⇒ "number"
typeof 1000          // ⇒ "number"

// regular calculations with `Infinity` still return `Infinity`
Infinity + 1000      // ⇒ Infinity
Infinity - 2000      // ⇒ Infinity
Infinity * 3000      // ⇒ Infinity
Infinity / 4000      // ⇒ Infinity

// some of these return `NaN` when we repeat the calculation with `Infinity`
Infinity + Infinity  // ⇒ Infinity
Infinity - Infinity  // ⇒ NaN
Infinity * Infinity  // ⇒ Infinity
Infinity / Infinity  // ⇒ NaN
```
