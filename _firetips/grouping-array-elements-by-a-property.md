---
title: "Grouping array elements by a property"
date: "2020-07-31"
tags: ["JavaScript"]
---
If objects in an array are categorized by a property, we can group them by that property like this. We can then quickly get all objects with a certain value instead of having to filter all the time.

```js
// takes an array of objects and the name of a property of these objects
const groupBy = (array, property) => array.reduce((grouped, element) => ({
  ...grouped,
  [element[property]]: [...(grouped[element[property]] || []), element]
}), {})

// some elements in this array share the same value for their `type`
const team = [
  { name: 'Squirtle', type: 'Water'    },
  { name: 'Pikachu',  type: 'Electric' },
  { name: 'Arcanine', type: 'Fire'     },
  { name: 'Psyduck',  type: 'Water'    },
  { name: 'Vulpix',   type: 'Fire'     }
]

// `groupBy` groups an array into a dictionary based on the given property
const groupedByType = groupBy(team, 'type')
// ⇒ {
//     'Water': [
//       { name: 'Squirtle', type: 'Water' },
//       { name: 'Psyduck',  type: 'Water' }
//     ],
//     'Electric': [
//       { name: 'Pikachu',  type: 'Electric' }
//     ],
//     'Fire': [
//       { name: 'Arcanine', type: 'Fire' },
//       { name: 'Vulpix',   type: 'Fire' }
//     ]
//   }

// we can get a list of all values from the dictionary’s keys
Object.keys(groupedByType)
// ⇒ ['Water', 'Electric', 'Fire']

// we can then extract only the elements that share the same type
groupedByType['Fire']
// ⇒ [
//     { name: 'Arcanine', type: 'Fire' },
//     { name: 'Vulpix',   type: 'Fire' }
//   ]
```
