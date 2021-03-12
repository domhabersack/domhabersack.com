---
title: "Composing functions to run in sequence"
date: "2020-08-06"
tags: ["JavaScript", "readability"]
---
If you need to nest functions, or store their output only to pass it to another function, you can instead compose a function that runs an input through many functions in sequence.

```js
// these functions all take a string and do something with it
const reverse = name => [...name].reverse().join('')
const upcase = name => name.toUpperCase()
const greet = name => `Hi, ${name}!`

// we could store each result and pass it to the next function
const reversed = reverse('john')
const upcased = upcase(reversed)
greet(upcased)
// ⇒ 'Hi, NHOJ!'

// if we nest them like this instead, they are run from inside to outside
greet(upcase(reverse('john')))
// ⇒ 'Hi, NHOJ!'

// this takes several functions and runs an input through them in sequence
const compose = (...fns) => input => {
  return fns.reduce((result, fn) => fn(result), input)
}

// with our `compose`, we can list the functions and call them like this
compose(reverse, upcase, greet)('john')
// ⇒ 'Hi, NHOJ!'

// the order of functions defines the order the steps are executed in
compose(greet, reverse, upcase)('john')
// ⇒ '!NHOJ ,IH'

// we can also assign our composed function to a variable and reuse it
const sequence = compose(upcase, greet, reverse)
sequence('john')  // ⇒ '!NHOJ ,iH'
sequence('paul')  // ⇒ '!LUAP ,iH'
```
