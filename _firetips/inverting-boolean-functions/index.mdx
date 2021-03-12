---
title: "Inverting Boolean functions"
date: "2020-07-23"
tags: ["JavaScript"]
---
We can invert Boolean values with an exclamation mark. That doesn’t work for function names we use as shorthand in array methods like `Array.prototype.filter()` and `Array.prototype.map()`. Wrap those in a helper function to have them return the opposite of what they would return normally.

```js
const numbers = [0, 1, 2, 3, 4, 5]
const isEven = n => n % 2 === 0

// the long and short form of this do the same
numbers.filter(number => isEven(number))  // ⇒ [0, 2, 4]
numbers.filter(isEven)                    // ⇒ [0, 2, 4]

// `!` can flip the Boolean value, but it only works with the long form
numbers.filter(number => !isEven(number))  // ⇒ [1, 3, 5]
numbers.filter(!isEven)                    // TypeError (not a function)

// this (curried) helper makes functions return a flipped result
const not = callback => value => !callback(value)

// we can use `not` like this, in both the long and short form
numbers.filter(number => not(isEven)(number))  // ⇒ [1, 3, 5]
numbers.filter(not(isEven))                    // ⇒ [1, 3, 5]
```
