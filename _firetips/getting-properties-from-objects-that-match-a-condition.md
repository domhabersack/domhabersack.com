---
title: "Getting properties from objects that match a condition"
date: "2020-07-11"
tags: ["JavaScript"]
---
Need to get an attribute of all objects in an array that match a condition? Chain `Array.prototype.filter()` and `Array.prototype.map()` to first filter the list to all the elements you want and then get the values you’re looking for.

```js
// this array contains objects that have a `name` and `type`
const food = [
  {
    name: 'Apple',
    type: 'fruit'
  }, {
    name: 'Banana',
    type: 'fruit'
  }, {
    name: 'Cucumber',
    type: 'vegetable'
  }
]

// we can first get all objects that have their `type` set to 'fruit'
const fruit = food.filter(element => element.type === 'fruit')
// ⇒ [
//     {
//       name: 'Apple',
//       type: 'fruit'
//     }, {
//       name: 'Banana',
//       type: 'fruit'
//     }
//   ]

// we can then use `.map()` to extract their names
const fruitNames = fruit.map(element => element.name)
// ⇒ ['Apple', 'Banana']


// we can do both steps at once by chaining `.filter()` and `.map()`
const fruitNames = food
  .filter(element => element.type === 'fruit')  // get all fruit
  .map(element => element.name)                 // extract their names
// ⇒ ['Apple', 'Banana']
```
