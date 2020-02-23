---
title: Projects
---
{% for project in site.projects %}
  <h2>
    <a href="{{ project.url | prepend: site.baseurl }}">
      {{ project.title }}
    </a>
  </h2>

  <p>
    {{ project.excerpt }}
  </p>
{% endfor %}
