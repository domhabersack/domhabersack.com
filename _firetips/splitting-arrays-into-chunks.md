---
title: "Splitting arrays into chunks"
date: "2020-07-07"
tags: ["JavaScript"]
---
With a combination of `Array.prototype.map()` and `Array.prototpe.slice()`, we can split an array into many smaller arrays. This is useful for pagination or injecting something into an array every set number of elements. There’s an explanation of how this works on my blog: [How to split arrays into equal-sized chunks](https://islovely.co/posts/how-to-split-arrays-into-equal-sized-chunks)

```js
// `array` is the array we want to split, `chunkSize` is how big we want
// each group to be
const chunkArray = (array, chunkSize) => {
  // find how many chunks we need if each holds `chunkSize` elements
  const numberOfChunks = Math.ceil(array.length / chunkSize)

  // create an array with one slot for each chunk we need
  const chunks = [...Array(numberOfChunks)]
    // walk through each of the empty slots
    .map((value, index) => {
      // put a slice of the original `array` in the empty slot
      return array.slice(index * chunkSize, (index + 1) * chunkSize)
    })

  return chunks
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
// ⇒ [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10]
//   ]

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// ⇒ [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10]
//   ]
```
