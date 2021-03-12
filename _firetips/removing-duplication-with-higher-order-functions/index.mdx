---
title: "Removing duplication with higher-order functions"
date: "2020-06-28"
tags: ["JavaScript", "readability"]
---
By splitting a list of parameters into groups, we end up writing less, more readable code. We can also use this to quickly create many similar functions.

```js
// We could write a function that gives us the correct pluralization of a
// word for a given amount like this:
const pluralize = (singular, plural, count) => {
  return count === 1 ? singular : plural
}

// We would call it like this, but we would have to repeat a lot of values:
pluralize('dog', 'dogs', 0) // ⇒ 'dogs'
pluralize('dog', 'dogs', 1) // ⇒ 'dog'
pluralize('dog', 'dogs', 2) // ⇒ 'dogs'


// Let’s split the parameters into two groups, adding an arrow between them:
const pluralize = (singular, plural) => count => {
  return count === 1 ? singular : plural
}

// Because we have two arrows now, we also need two sets of parentheses.
// This works exactly as before, but so far looks like _more_ work for us:
pluralize('dog', 'dogs')(0) // ⇒ 'dogs'
pluralize('dog', 'dogs')(1) // ⇒ 'dog'
pluralize('dog', 'dogs')(2) // ⇒ 'dogs'

// Because this is really two function calls, we can extract the first one:
const pluralizeDog = pluralize('dog', 'dogs')

// With this, we don’t have to repeat 'dog' and 'dogs' every time:
pluralizeDog(0) // ⇒ 'dogs'
pluralizeDog(1) // ⇒ 'dog'
pluralizeDog(2) // ⇒ 'dogs'

// We can use this to make all kinds of pluralization-functions:
const pluralizeTable = pluralize('table', 'tables')
const pluralizeHouse = pluralize('house', 'houses')
const pluralizeSheep = pluralize('sheep', 'sheep')
```
