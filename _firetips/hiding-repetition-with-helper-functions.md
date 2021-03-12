---
title: "Hiding repetition with helper functions"
date: "2020-06-19"
tags: ["JavaScript", "readability"]
---
Have to use a function over and over, but one or more of its parameters are always the same? Improve readability by creating a function that hides that repetition.

```js
// Repeating 'en_US' every time is tedious and prone to typos.
const title = translate('app.title', 'en_US')
const slogan = translate('app.slogan', 'en_US')
const action = translate('app.action', 'en_US')

// While 'translate' takes two parameters, this function only takes one. It
// returns the result we would get if we called `translate` with 'en_US'.
const translateEN = key => translate(key, 'en_US')

// When we call our new function, we no longer need to write 'en_US'.
const title = translateEN('app.title')
const slogan = translateEN('app.slogan')
const action = translateEN('app.action')
```
