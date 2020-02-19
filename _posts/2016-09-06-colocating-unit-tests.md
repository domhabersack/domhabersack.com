---
title: Why it’s best to colocate unit tests
categories: ["Software architecture"]
excerpt: Grouping unit tests and the code they test is much more maintainable than keeping them in separate directories.
heroAlt: Pins spread out over a map of the world.
heroCaption: Keep your tests close to the code they test instead of spreading them out over your codebase.
---
Most JavaScript-based frontend frameworks do not impose a “one true directory structure” on the developers using them. While this allows us to use whatever model we are most comfortable with, it also does not provide guidelines or best practices to follow. Of the various valid approaches, not all are equally well-suited to projects that grow over time, impacting the manageability of our applications.

While a project is still small, we might divvy up the elements of our application by their designation. We put templates in `app/views`, controllers in `app/controllers`, and stylesheets in `app/assets/css`. This works at first, but becomes unwieldy once the application grows in size. As soon as we have more than a handful of controllers and templates, files that are interconnected and only work in tandem are spread out over the entire directory structure. Over time, it becomes harder and harder to identify all parts that make up one specific feature.

Where this becomes most difficult is when a piece of functionality needs to be renamed or removed. Under this basic approach to structuring files, we now have to dig through the entire tree to find all pieces that belong to that one feature. Consistent naming can help with this, but it can often only carry us so far.

Under the modular, component-based approach to applications, we are better served by grouping all assets that make up a feature in a single directory focused only on that feature. This includes templates, stylesheets, and any JavaScript that might be relevant, as those are intimately connected: the stylesheet directly references the markup found in the template, which in turn will be connected to JavaScript-functionality such as click-handlers and bindings to values in our model.

Assume our application contains a search form. Under the traditional approach, we could spread this feature out across our codebase by grouping its elements with others of the same purpose:

{% highlight plaintext %}
app/
├─ controllers/
│  ├─ search-form-controller.js
│  └─ …
├─ views/
│  ├─ search-form.html
│  └─ …
└─ assets/
   └─ css/
      ├─ search-form.css
      └─ …
{% endhighlight %}

As more features get added to our codebase, these directories will grow in size, and we will find ourselves with long lists of files that have little to do with each other. Their only shared characteristic lies in the fact that they are of the same file-type and serve similar purposes. Locating a specific file becomes difficult, and will pretty much require the use of a “search and open”-feature in our editor of choice or enough willpower to comb through our entire application over and over again, only to eventually miss one file anyways.

Rather than spreading a piece of functionality out across several directories, we can instead combine all its parts in a single directory centered only around that one component:

{% highlight plaintext %}
app/
└─ components/
   ├─ search-form/
   │  ├─ search-form.css
   │  ├─ search-form.html
   │  └─ search-form-controller.js
   └─ …
{% endhighlight %}

While having templates, stylesheets, and JavaScript-files in a single directory takes some getting used to, this approach makes it possible to quickly identify all files that make up a feature. All files related to the search form can be found in exactly one location, removing the need to hunt for them, if that necessity were to ever come up.

## Now that the basics are out of the way

What is missing from the example above is what this post is about in the first place: there are no tests, neither unit nor otherwise, in any of the examples. As not having tests is bad, we now have to figure out where to put those.

Frequently, tests are put in a `test/`-directory in the root of our application, which would extend our directory structure to the following:

{% highlight plaintext %}
app/
├─ components/
│  ├─ search-form/
│  │  ├─ search-form.css
│  │  ├─ search-form.html
│  │  └─ search-form-controller.js
│  └─ …
└─ test/
   ├─ end-to-end/
   │  ├─ searching.js
   │  └─ …
   └─ unit/
      ├─ search-form-controller.spec.js
      └─ …
{% endhighlight %}

While this brings with it the advantage of grouping all tests in a single `test`-directory, we are once again faced with our original problem: files that are directly connected to a single feature are spread out across multiple directories.

We need to differentiate between the kinds of tests outlined in the assumed directory structure above, as they fulfill dissimilar roles. As unit tests are based on a single unit of functionality, we can directly map them to “components” and should thus put them right with the units they are testing.

End-to-end and other kinds of tests potentially cover multiple “units” at the same time, so they do not follow the same pattern and have to be treated differently. While we should not get rid of the `test/`-directory entirely, it does make sense to group unit tests with the remainder of the feature-specific files, leaving all others in the dedicated directory:

{% highlight plaintext %}
app/
├─ components/
│  ├─ search-form/
│  │  ├─ search-form.css
│  │  ├─ search-form.html
│  │  ├─ search-form-controller.js
│  │  └─ search-form-controller.spec.js
│  └─ …
└─ test/
   └─ end-to-end/
      ├─ searching.js
      └─ …
{% endhighlight %}

Through this, we are distributing unit tests across the codebase in exactly the same way we picked other elements of our various features and grouped them together. This way, all files that are relevant for a piece of functionality, leaving out broader types of tests, can once again be found in exactly one location.

One could argue that having _all_ test-files in a dedicated directory means we are separating production code from development-only files. However, we are most likely using a build tool to prepare our files for their use in a production-environment anyways, which could be extended to undo that grouping if and when necessary. Particularly when using the component-based approach outlined here, we certainly have to process numerous files that we purposefully distributed across several directories. Ignoring test-files in these build-processes is not only possible, but also almost trivial.

Putting unit tests in a dedicated `test/unit`-directory is the QA-equivalent of grouping all our application-files on the basis of the job they do. Sure, all of them will be in one single location, but the elements that make up a specific feature are spread out across the entire directory structure instead.

In a component-based architecture, we already combine templates, stylesheets, and JavaScript in one directory. As it makes sense to group these tightly-coupled files together, including unit tests in this selection is the natural extension of the underlying model.
