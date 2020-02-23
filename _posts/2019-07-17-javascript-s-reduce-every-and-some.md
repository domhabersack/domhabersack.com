---
title: JavaScript’s reduce, every, and some
categories: ["JavaScript"]
tags: Array, reduce, every, some
excerpt: What happens when you forget to specify reduce’s second parameter?
heroAlt: A dark spiralling staircase going down.
heroCaption: When avoiding loops, look out for some pitfalls.
---
To calculate the sum of all numbers in an array, you could use a `for`-loop:

```js
const calculateSum = values => {
  let sum = 0;

  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
  }

  return sum;
};

calculateSum([16, 23, 42, 19]); // ⇒ 100
```

[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) provides a shorter way to merge an array into a single value. This code does the exact same in fewer lines:

```js
const calculateSum = values => values.reduce(
  (sum, value) => sum + value,
  0
);

calculateSum([16, 23, 42, 19]); // ⇒ 100
```

`reduce` is available on all arrays in JavaScript. It takes two arguments: a **reducer-function** and an **initial value** for that function. Our **reducer-function** receives two values, called the _accumulator_ and the _current value_. It returns a result based on these two values.

Every time the reducer-function is called, it saves its result to the _accumulator_.  Going into our first calculation, the accumulator is set to the **initial value**. As `reduce` steps through the array, it updates the _current value_ with each of its entries in turn.

After going through all elements, `reduce` returns the result of its last calculation.

```js
const calculateSum = values => values.reduce(
  (sum, value) => sum + value,
  0
);

calculateSum([16, 23, 42, 19]); // ⇒ 100

  sum  |  value  |  sum + value
-------+---------+---------------
     0 |      16 |  0 + 16 =  16
    16 |      23 | 16 + 23 =  39
    39 |      42 | 39 + 32 =  81
    81 |      19 | 81 + 19 = 100 ⇒ 100
```

## The fallback “initial value”

When not given an initial value, `reduce` uses the first element of the array as the initial value:

```js
const calculateSum = values => values.reduce(
  (sum, value) => sum + value
);

calculateSum([16, 23, 42, 19]);

  sum  |  value  |  sum + value
-------+---------+---------------
    16 |      23 | 16 + 23 =  39
    39 |      42 | 39 + 32 =  81
    81 |      19 | 81 + 19 = 100 ⇒ 100

// this call is equivalent
calculateSum([23, 42, 19], 16);
```

Instead of starting the calculation at `0`, we skip a step and begin directly with `16`. The result is the same, and our calculation requires fewer steps because it does not need to calculate `0 + 16`.

## Doing more than arithmetic

`reduce` can do more than basic calculations. We could also write a function that checks if every value in an array is above a certain threshold. Let’s say we want to write a function that returns `false` if one person in a group is not older than 18 years. We set our initial value to `true` and set our accumulator to `false` as soon as one value does not match the condition:

```js
const isEverybodyOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator && age > 18,
  true
);

isEverybodyOver18([16, 23, 42, 19]);

  accumulator  |  age  |  accumulator && age > 18
---------------+-------+---------------------------
         true  |    16 |  true && 16 > 18 → false
         false |    23 | false && 23 > 18 → false
         false |    42 | false && 42 > 18 → false
         false |    19 | false && 19 > 18 → false ⇒ false
```

If we didn’t set an initial value, reduce would use `16` as the accumulator’s default value:

```js
const isEverybodyOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator && age > 18
);

isEverybodyOver18([16, 23, 42, 19]);

  accumulator  |  age  |  accumulator && age > 18
---------------+-------+---------------------------
            16 |    23 |   16 && 23 > 18 → true
          true |    42 | true && 42 > 18 → true
          true |    19 | true && 19 > 18 → true ⇒ true

// this call is equivalent
isEverybodyOver18([23, 42, 19], 16);
```

Something is not right here. While one of the values is clearly not greater than 18, our function returns `true`.

We get this incorrect result because the assumed initial value of `16` is “truthy”. In JavaScript, a chain of `TRUTHY_VALUE && OTHER_VALUE` always returns `OTHER_VALUE`. More importantly, the condition `16 > 18` **is never evaluated** in our faulty `reduce`-function.

If the values were ordered differently, we would not have noticed this bug. Let’s run the same function again, this time passing in `16` as the _second_ value:

```js
const isEverybodyOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator && age > 18
);

isEverybodyOver18([23, 16, 42, 19]);

  accumulator  |  age  |  accumulator && age > 18
---------------+-------+----------------------------
            23 |    16 |    23 && 16 > 18 → false
         false |    42 | false && 42 > 18 → false
         false |    19 | false && 19 > 18 → false ⇒ false
```

This calculation uses `23` as its initial value, which coincidentally meets the condition of being greater than 18. Again, this first condition of `23 > 18` **is never evaluated**! It’s pure luck that this call returns the expected result. The result of our function _depends on the order of the elements in the array that is passed to it_. That would be a terrible bug to track down.

It gets crazier. While the previous function checked if _all_ values matched a certain condition, imagine we want to check if _any_ values match it. We can replace the `&&` with `||` to rewrite our function so that it checks if anyone is older than 18 years:

```js
const isAnyoneOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator || age > 18
);

isAnyoneOver18([16, 23, 42, 19]);

  accumulator  |  age  |  accumulator || age > 18
---------------+-------+----------------------------
            16 |    23 | 16 || 16 > 18 → 16
            16 |    42 | 16 || 42 > 18 → 16
            16 |    19 | 16 || 19 > 18 → 16 ⇒ 16
```

We no longer receive a Boolean value at all! Because of how `||` works, our function now returns the first “truthy” value it encounters, giving us `16` instead of either `true` or `false`.

## Solving the problem by avoiding it

We could solve this problem by **always** passing an intial value to `reduce` through its second parameter. However, there are several cases in which doing so wouldn’t be necessary. When running basic arithmetic, such as addition or multiplication, it is perfectly fine to use `reduce` without specifying an initial value:

```js
const calculateProduct = values => values.reduce(
  (product, value) => product * value
);

calculateProduct([16, 23, 42, 19]);

  product  |  value  |  product * value
-----------+---------+---------------------
        16 |      23 |    16 * 23 →    368
       368 |      42 |   368 * 42 →  15456
     15456 |      19 | 15456 * 19 → 293664 ⇒ 293664
```

If we specified the initial value of `1`, we would have to do an unnecessary calculation and still get the same result:

```js
const calculateProduct = values => values.reduce(
  (product, value) => product * value,
  1
);

calculateProduct([16, 23, 42, 19]);

  product  |  value  |  product * value
-----------+---------+---------------------
         1 |      16 |     1 * 16 →     16 (unnecessary)
        16 |      23 |    16 * 23 →    368
       368 |      42 |   368 * 42 →  15456
     15456 |      19 | 15456 * 19 → 293664 ⇒ 293664
```

As we saw earlier, it is dangerous to not set an initial value if our reducer-function works with Boolean values. While we could make `reduce` work in these cases by specifying an initial value for them, JavaScript offers better alternatives for these exact scenarios.

### `every`

[Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) works like a `reduce`-function that tests all entries against a condition. It always returns a Boolean value.

```js
const isEverybodyOver18 = ages => ages.every(
  age => age > 18
);

isEverybodyOver18([16, 23, 42, 19]); // ⇒ false
```

Not only does `every` not require an initial value, the callback also does not use an accumulator. This makes it much easier to read and understand.

### `some`

While `every` checks if _all_ elements in an array meet a condition, [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) checks if _any_ element does:

```js
const isAnyoneOver18 = ages => ages.some(
  age => age > 18
);

isAnyoneOver18([16, 23, 42, 19]); // ⇒ true
```

This has all the same benefits as `every`, without the pitfalls we ran into earlier.

The callbacks used in our examples for `every` and `some` are identical, so we could even extract them to a shared helper function. If we contrast them with their `reduce`-equivalents, we get much shorter and more readable code:

```js
// before, using `reduce`
const isEverybodyOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator && age > 18,
  true
);

const isAnyoneOver18 = ages => ages.reduce(
  (accumulator, age) => accumulator || age > 18,
  false
);


// after, using `every` and `some`
const isOver18 = number => number > 18;

const isEverybodyOver18 = ages => ages.every(isOver18);
const isAnyoneOver18 = ages => ages.some(isOver18);
```

We could now use `isEverybodyOver18` and `isAnyoneOver18` exactly as we did before.

If you’re using `reduce` to calculate Boolean values, see if you can rewrite them to the much simpler alternatives `every` and `some`. They are better suited for situations in which `reduce` can be a little problematic.

Both `every` and `some` have broad browser support, even being available in IE9.
