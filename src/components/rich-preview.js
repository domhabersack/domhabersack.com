import React from 'react';

export default () => (
  <div />
);

/*
{% assign is_post = page.collection == "posts" %}
{% assign rich_previews = site.static_files | where: "type", "rich-preview" %}
{% assign slug = page.title | slugify %}
{% assign image = false %}

{% for file in rich_previews %}
  {% if file.basename == slug %}
    {% assign image = file %}
  {% endif %}
{% endfor %}

{% unless image %}
  {% for file in rich_previews %}
    {% if file.basename == site.name %}
      {% assign image = file %}
    {% endif %}
  {% endfor %}
{% endunless %}

{% if page.excerpt %}
  <meta property="og:description" content="{{ page.excerpt }}" />
{% endif %}

<meta property="og:image" content="{{ image.path | absolute_url }}" />

{% if page.hero_alt %}
  <meta property="og:image:alt" content="{{ page.hero_alt }}" />
{% endif %}

<meta property="og:image:height" content="360" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="640" />

<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:title" content="{{ page.title | replace_regexp: ':[a-z_]*?:', '' | strip }} · {{ site.name }}" />

{% if is_post %}
  <meta property="og:type" content="article" />
{% endif %}

<meta property="og:url" content="{{ page.url | absolute_url }}" />

{% if is_post %}
  {% if page.date_expired %}
    <meta property="article:expiration_time" content="{{ page.date_expired | date_to_xmlschema }}" />
  {% endif %}

  {% if page.date_updated %}
    <meta property="article:modified_time" content="{{ page.date_updated | date_to_xmlschema }}" />
  {% endif %}

  <meta property="article:published_time" content="{{ page.date | date_to_xmlschema }}" />

  {% for category in page.categories %}
    <meta property="article:tag" content="{{ category }}" />
  {% endfor %}
{% endif %}

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@{{ site.profiles.twitter }}" />
*/
