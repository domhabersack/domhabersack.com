---
title: "Implicit object return in arrow functions"
date: "2020-06-12"
tags: ["JavaScript"]
---
If your arrow function immediately returns an object and does nothing else, you can wrap that object in parentheses instead of writing `return`.

```js
// we can be explicit and write `return` before the object we want to return
const myFunction = value => {
  return {
    key: value,
    length: value.length
  }
}

// wrapping the object in parentheses also returns it
const myFunction = value => ({
  key: value,
  length: value.length
})

// if anything else happens in the function, like assigning variables or
// calling other functions, we HAVE to be explicit and write `return`
const myFunction = value => {
  const length = value.length

  return {
    key: value,
    length: length
  }
}
```
