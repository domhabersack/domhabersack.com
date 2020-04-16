---
title: "How to write legacy code"
excerpt: "No code starts out as legacy code. All codebases end up there because of a lot of small decisions."
emoji: ":derelict_house:"
---
“Legacy code” is what developers call code they do not want to work with. It is often old and difficult to change, because nobody knows exactly how it works anymore. Any small change can have unforeseen consequences that end up breaking something unrelated. These systems are expensive, because they slow down the development of new features.

A popular approach to fixing legacy code is a complete rewrite. We start rebuilding everything in a new system, keeping the old one around until we are done. In this rewrite, we promise to not make the same mistakes again.

It works great in the beginning. The new project is a blank canvas, free of the problems of the old code. Adding new features is fun and exciting. Until it isn’t.

All legacy systems used to be like that. Code does not start out terrible, and it does not go bad over night. Legacy code is caused by a lot of small decisions that all seem harmless at the time. These are some of these decisions that turn any project into legacy code:

1. Stop writing tests. Developers can figure out what broke by remembering all areas they need to check.
2. Use abbreviations everywhere. Everybody will know what “FBA” and “KAP” are, and how they relate to each other.
3. Add a lot of one-time exceptions. Why are we building this new system, if we cannot make it do exactly what we want everywhere?
4. Never collaborate with anyone. If they have questions, they can ask you (as long as you are still with the company).
5. Never remove code you no longer use. Who knows, you might need it later.

What is another decision you have seen that slowly made one of your projects harder to work with?

– Dom​