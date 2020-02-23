---
title: Newsletter archive
excerpt: Read some of my previous newsletters. Sign up to get them delivered to your inbox.
navigation_title: Archive
---
{% assign newsletters = site.newsletters | reverse %}

These are some of my previous newsletters. [Sign up](/newsletter/) if you want to get them delivered straight to your inbox.

{% for newsletter in newsletters %}
  <div class="margin-bottom-xl">
    <span class="color-gray-600 font-size-12-short">
      {{ newsletter.date | date: "%B %-d, %Y" }}
    </span>

    <h2 class="font-size-20-medium margin-0">
      <a href="{{ newsletter.url | prepend: site.baseurl }}">
        {{ newsletter.title }}
      </a>
    </h2>
  </div>
{% endfor %}
