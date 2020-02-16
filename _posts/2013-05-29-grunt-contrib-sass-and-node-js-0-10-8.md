---
title: grunt-contrib-sass and Node.js 0.10.8
categories: ["CSS"]
excerpt: Downgrade Node.js to an earlier version to get grunt-contrib-sass working with it.
hero_alt: Two foxes screaming at each other.
hero_caption: Unexpected disruptions to your development workflow are no fun.
---
Over the last few weeks, I have become a massive fan of [Grunt](http://gruntjs.com/). Amongst other things, it makes development with [Sass](http://sass-lang.com/) and [CoffeeScript](http://coffeescript.org/) much easier by running their compile-processes automatically and reloading the browser via LiveReload. It basically gives you frontend-superpowers.

Grunt has given such a big boost to my productivity that suddenly losing part of it felt like the worst thing that could happen. Even more so considering that a client deadline was rapidly approaching at the time.

Seemingly out of nowhere, [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) failed with the following error message:

{% highlight bash %}
Assertion failed:
(!uv__io_active(&stream->io_watcher, UV_POLLOUT)
|| !ngx_queue_empty(&stream->write_completed_queue)
|| !ngx_queue_empty(&stream->write_queue)
|| stream->shutdown_req != NULL
|| stream->connect_req != NULL), function uv_read_stop,
file ../deps/uv/src/unix/stream.c, line 1319.
{% endhighlight %}

The source of the problem was surprisingly difficult to pin down, primarily because the error message is rather cryptic. Some assertion failed, that is nice. It even tells me the file and exact line this error occured on, which I tracked down to a file in the [Node.js-repository](https://github.com/joyent/node/blob/master/deps/uv/src/unix/stream.c):

{% highlight c %}
s = handle->select;
{% endhighlight %}

Unfortunately, this does not help at all.

It took a few good hours to figure out what had happened. Turns out that the innocent-looking

{% highlight bash %}
$ brew update
$ brew upgrade
{% endhighlight %}

I had run earlier to update all packages installed through
[Homebrew](http://brew.sh/) also updated my installation of Node.js from version 0.10.6 to 0.10.8. However, that new version of Node.js does not currently work with grunt-contrib-sass.

To get it working again, we need to temporarily downgrade Node.js to an earlier version. Homebrew allows us to install different versions of the same package and switch between them.

First, you need to change to `/usr/local/`, which is where Homebrew lives by default:

{% highlight bash %}
$ cd /usr/local/
{% endhighlight %}

There you can request a list of all versions of `node` that are available via Homebrew:

{% highlight bash %}
$ brew versions node
0.10.8   git checkout ee99542 Library/Formula/node.rb
0.10.7   git checkout e44f345 Library/Formula/node.rb
0.10.6   git checkout 8583540 Library/Formula/node.rb
0.10.5   git checkout 3b589c5 Library/Formula/node.rb
[…]
{% endhighlight %}

Homebrew even provides the `git`-command you need to run to install the version. Run these commands to install 0.10.7:

{% highlight bash %}
$ git checkout e44f345 Library/Formula/node.rb
$ brew unlink node
$ brew install node
{% endhighlight %}

After the installation is done, version 0.10.7 is going to be active, while 0.10.8 is still installed.

{% highlight bash %}
$ node --version
v0.10.7
$ brew list --versions node
node 0.10.7 0.10.8
{% endhighlight %}

With 0.10.7 active, grunt-contrib-sass once again purrs like a cat and does its thing.

If you want to switch between installed versions later, you can do so by running `brew switch <formula> <version>`:

{% highlight bash %}
$ brew switch node 0.10.8
Cleaning /usr/local/Cellar/node/0.10.7
Cleaning /usr/local/Cellar/node/0.10.8
5 links created for /usr/local/Cellar/node/0.10.8
{% endhighlight %}
