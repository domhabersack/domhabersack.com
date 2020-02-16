---
title: As a User Story
categories: ["Business", "Agile", "Scrum"]
date: 2019-10-07 08:05
excerpt: Adding a single sentence to our tickets helps us focus on what is important. Let’s explore what goes into a good user story.
hero_alt: An empty frame in front of a wall, accompanied by a small cactus.
hero_caption: Don’t start your tickets with nothing.
---
Some collaboration between team members happens through project management software such as Jira. Product Owners create tickets for open tasks and developers turn them into reality. To emphasize the impact of a ticket, we can include how and why it will affect our customers. Written as “user stories”, these explanations help us focus on what is important. Let’s explore what user stories are and how we can write good ones to increase focus in our teams.

A user story is a single sentence giving three pieces of information. It follows this format:

> **As a** \[role\]  
> **I want** \[capability\]  
> **so that** \[benefit\].

A complete user story sets the stage for the ticket’s remaining content:

> **As a** commuter currently working in Spain  
> **I want** to learn Spanish on my way to work  
> **so that** I can talk to the locals in their native language.

The user story describes **who** benefits from a change, **what** they want to do, and **why** they want to do it. Looking at two different tasks, the user story helps us judge which one we need to do first. If the motivation behind a ticket does not sound important, we can skip it and move to the next one.

Writing good user stories is hard because they force us to question why a piece of work is important. We have to step back from doing the work to consider if the work needs doing in the first place. Taking the time to do so helps us focus on the tasks that have the greatest impact.

Let’s look at a user story’s components to see how we can get the most value out of them.

## “As a”

A user story begins with a description of which group will benefit from a change. In it, we focus on the people we are offering our product to. We are not creating it for ourselves, but for people outside of our company. As such, we want to improve it for those interacting with and paying for it.

In its easiest but also weakest form, we would begin a user story with “as a user”, which is as boring as it is pointless. This description is too generic to be of any value to us; anyone could be a user. We need to narrow our definition of “a user” down to who we know _our_ customers to be by adding some life to them:

- “As a mother of three”
- “As a podcast listener that ran out of episodes”
- “As a sales rep for a medical supplies company”

Good user stories cannot be transferred between products without change. They describe something _our_ customers want from _our_ product. We can use the “as a” to remind ourselves of who our customers are. We are building our features for _those_ people, not everybody else.

**Do not** use the “as a” to describe members of your team:

- “As a QA manager”
- “As a Product Owner”
- “As a developer”

These are **only** valid if we are building a product specifically for these groups of people. In all other cases, these descriptions take all useful context out of a user story. A ticket that begins with “as a Product Owner” reads as “I am your boss and you need to do this for me”. We would only describe what we want to do, not why we want to do it.

Focusing on real customers helps us judge if we are working on the right tasks. We only need a few of those target audiences and can reuse them across many user stories.

## “I want”

The second part describes what the group we picked as our target audience wants to do. Writing a good “I want” requires us to know and understand our customers. Why are they using our product in the first place? What would improve its usefulness for them?

Our customers use our products to solve a problem they have. They don’t use it for its features, but for what it allows them to do. We focus the “I want” on those higher-level intentions:

- “I want to protect my personal information”
- “I want to hear about new releases ASAP”
- “I want to compare shipping options”

**Do not** use the “I want” to hide what you are already set on building:

- “I want to see a meter for password strength in the signup form”
- “I want the server to restart when it crashes”
- “I want at least 60% of the product’s code to be unit-tested”

These descriptions of technical requirements _might_ solve a problem for our customers. But it is not the job of a user story to define exactly what we need to build. User stories describe _why_ we need to build something.

We need to work on a different level of abstraction here to write a valuable user story. To express what our users want, we must take a step back from what we think we need or want to do.

## “So that”

A task does not exist purely to justify its own existence. The “so that” adds extra weight to a user story by providing the customers’ ultimate goal. After the “who” and “what”, we still need to understand the “why” behind their motivation.

The “so that” can be much broader, and it can even apply to multiple possible scenarios:

- “so that I can see what my dog is up to while I am at work”
- “so that my coffee is ready when my alarm goes off”
- “so that my spouse and I both know our financials”

**Do not** fall into the trap of taking the “I want” and rephrasing it slightly. If you could add a “(duh)” to the end, it’s not a good “so that”:

- “so that my personal data is protected (duh)”
- “so that I hear about new releases (duh)”
- “so that I can compare the shipping options (duh)”

If we would otherwise repeat ourselves, we need to think about what really makes a feature useful.

## How to rewrite bad user stories

Badly written user stories add nothing but noise to our tickets. They describe what _we_ want to do, not what _our customers_ need to succeed. These examples are all **hot garbage**:

> **As a** QA manager  
> **I want** to have test-IDs on all elements  
> **so that** I can write automated tests.

> **As a** Product Owner  
> **I want** to be able to A/B-test the color of the buy-button  
> **so that** I can optimize it.

> **As a** developer  
> **I want** to use Redux in my application  
> **so that** I can share one central state across all components.

While they follow the format of a user story, they do not describe which customer would benefit in what way. They are so generic that we cannot judge which of these we need to work on first. Maybe some of them don’t solve any problems at all and would only keep us busy.

Let’s rewrite those previous examples. We could highlight how automated tests would help our customers:

> **As a** proud grandparent  
> **I want** to not be interrupted by confusing error messages  
> **so that** I can see photos of my grandchildren.

Instead of “optimizing” a button, we can focus on how a more obvious button would help our target audience:

> **As a** conference organizer  
> **I want** to buy swag for attendees quickly  
> **so that** I can focus on more complex tasks.

Instead of adding Redux to our stack, we can think about what scenarios it will help with:

> **As a** customer service representative  
> **I want** to know when I have unread client requests  
> **so that** I can reply to them on time.

These updated versions only apply to very specific products. That is perfect, because we are building a very specific product! They give us a better understanding of how important each story is. While not directly comparable, they enable us to sort these stories by priority.

## Summary

User stories give us the “why” behind a task, not the “what” or “how”. If you are having a hard time writing a user story to justify a task, it might not be very valuable.

There are exceptions. Maintenance-tasks are difficult to find customer-facing benefits for. Somebody still needs to do these tasks. It is okay to skip writing user stories for those, so long as that happens rarely. If you are doing too many things that don’t benefit your customers, ask yourself why that is. It might be a sign you need to focus on more important tasks to generate value.

It is the job of everybody on a team to ensure we’re building the right thing. No single person has the authority to order others to blindly do as they are told. Through user stories, we can remind each other about what is important to our customers.

Whether you use the pattern I presented here, find another one or make up your own does not matter. The format is not what makes user stories valuable. Strictly adhering to a predefined pattern might even feel too restricting. As long as it helps you put your users’ needs first, give it a go.
