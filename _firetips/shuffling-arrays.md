---
title: "Shuffling arrays"
date: "2020-07-24"
tags: ["JavaScript", "algorithms"]
---
The Fisher-Yates shuffle is a fast, unbiased way to shuffle arrays. It works by starting from the back, swapping the last element with one before it. This is repeated while moving towards the front until every element has been swapped at least once.

```js
const shuffle = array => {
  // create a clone of the array that we can rearrange in place
  const copy = array.slice()

  // start at the last element, moving towards the front with every repetition
  for (let i = copy.length - 1; i > 0; i--) {
    // get the index of an element left of (and including) the current one
    const j = Math.floor(Math.random() * (i + 1))

    // swap the values at the positions i and j
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }

  return copy
}

shuffle([1, 2, 3, 4])  // ⇒ [4, 1, 2, 3] (maybe)
shuffle([1, 2, 3, 4])  // ⇒ [3, 1, 2, 4] (maybe)
shuffle([1, 2, 3, 4])  // ⇒ [1, 4, 2, 3] (maybe)
shuffle([1, 2, 3, 4])  // ⇒ [3, 2, 1, 4] (maybe)
```
