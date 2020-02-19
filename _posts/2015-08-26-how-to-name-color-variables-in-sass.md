---
title: How to name color-variables in Sass
categories: ["CSS", "Sass"]
excerpt: Using semantic names, color-variables defined with CSS-preprocessors become easier to manage.
heroAlt: A cut orange with it’s outside painted blue.
heroCaption: Name colors after what they are used for, not what they look like.
---
One of the first benefits we gained from having variables in our CSS through preprocessors was finally consolidating all our color-values in a central location. No longer do we need to go through all stylesheets in search of a hex-value of the color blue that marketing wants to have changed to a slightly different shade of blue, but now we only need to adjust the value of a single variable. This removes an element of error, as missing a line somewhere suddenly becomes a lot less likely.

However, I still encounter way too many instances of these variables being named incorrectly. Developers often jump to the first name they can think of: the name of the color itself, such as `$blue` or `$red`.

And this works at first. The descriptive name tells us exactly what the variable contains, and the rules in our stylesheets are obvious. There is no guesswork in `background-color: $blue`.

Where this naming convention falls down is when any sort of change is introduced. Sure, minor adjustment to the hex-value of our blue will now be a matter of seconds rather than hours, but what happens when we decide that everything blue should now be green?

There are two ways we can go about this: we can either introduce the variable `$green` and change all affected rules in all stylesheets, or we can change the value of `$blue`. While the first option requires a lot of work and is prone to us missing a few instances, the second option is absolutely horrid. Sadly, it is the one I see a lot of developers go for.

While the change will be quick to implement by changing the color in the one central location that we so carefully constructed, the name of our variable no longer represents its contents: `$blue` is now green, `background-color: $blue` is a lie.

Far too often do I see stylesheets that contain five shades of `$yellow`, of which four are actually gray. `$blue` and `$green` are mixed up, and nobody even remembers what `$red` was once supposed to be. We have replaced our original problem with one that is even worse: we have no easy way of knowing what colors we are actually setting.

## Going with semantics

There is a simple fix for this problem. HTML-tags such as `header`, `footer`, and `nav` have brought better semantics to our markup, and we can do the same to the variables in our stylesheets. We don’t need to name our variables by the value they hold, but can instead *name them by their semantic meaning*.

We do that by avoiding color-based names like `$blue` and `$red` in favor of purpose-based ones such as `$color-brand` and `$color-error`. Rebranding from blue to green then requires a change to the “brand color” instead of the “blue color”, which also makes more sense from a business-perspective.

Some of the semantic color names you could find a need for are:

- `color-brand`
- `color-action`
- `color-link`
- `color-link-visited`
- `color-error`
- `color-warning`
- `color-neutral`

While the colors hidden behind these variables are not obvious from this list, the context in which they should be used is. A text color of `color-link-visited` on error messages is certainly going to be wrong, and mistakes like that can easily be caught in code reviews.

We introduce new color-variables for every new purpose of a color we encounter. We can still use color-based variable names to make this easier (in which case I add the prefix `_` to the name to signal that these variables should not be used anywhere else) and create purpose-based variables that “proxy” these values:

{% highlight scss %}
// never use these directly!
$_blue:   #0074d9;
$_red:    #ff4136;
$_yellow: #ffdc00;

// only access colors through these “proxy”-variables
$color-brand:   $_blue;
$color-link:    $_blue;
$color-error:   $_red;
$color-warning: $_yellow;
{% endhighlight %}

Note that several variables can reference the same color. A single color often has several different meanings in the same design, which makes it even more important to think of them by their semantic value instead.

## “This makes everything too wordy!”

You can end up with a large number of color-variables named after the purpose they represent. This pattern trades a few extra lines of CSS for lowered cost in long-term maintenance. It adds a layer of abstraction to the usage of color-variables, which makes it resilient to change.

I’d take that over trying to figure out why `$blue` is yellow any day.
