---
title: "How to understand any codebase"
excerpt: "Treat existing codebases as a blackbox and write tests for it to understand its inner workings."
emoji: ":man_singer:"
---
I used to freak out whenever I joined a new client. To be productive fast, I have to figure out how their sometimes massive codebase works in a few days. It’s a humbling situation, but one we can speed up with a neat trick.

Whenever I have to learn a new codebase, I start by writing tests for it. They help me see how small units of the project work. Where I begin doesn’t matter all that much. There is no “wrong” place to start from, as any test teaches me something useful.

Functions with input and output are easy starting points. If I know what parameters a function takes, I don’t even need to know what it does before writing tests. Let’s test an imaginary `slugify` function:

```js
it('slugifies', () => {
  expect(slugify('Hello Code')).toBe(5);
});
```

It is possible but unlikely that this function would return a number. I **want** my test to fail at this stage, because that tells me what the function _really_ returns:

```
> expected: 5
> actual: 'hello-code'
```

Nice! So this call returns `'hello-code'` instead. I can now try another input:

```js
it('slugifies', () => {
  expect(slugify('Hello Code')).toBe('hello-code');
  expect(slugify('… what?')).toBe('…-what?');
});
```

Whether this second expectation passes or fails, I will learn something new about the code. I will know _what_ the function does, even though I still have no idea _how_ it does it. Once I have tests in place, I can change the function as much as I want. If my tests still pass, I know I didn’t break anything.

Next time you’re joining an existing project and don’t know where to start, try writing a few tests.

– Dom