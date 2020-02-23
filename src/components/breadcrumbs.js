import React from 'react'

export default () => (
  <p>
    (breadcrumbs)
  </p>
)

  // const all_documents = 'site.documents | concat: site.pages'
  // const current_url = 'page.url'
  // const paths = 'current_url | split: "/"'
  // const urls = []
  //
  // paths.forEach(path => {
  //   {% assign url_as_array = current_url | split: "," %}
  //   {% assign urls = url_as_array | concat: urls %}
  //   {% assign current_url = current_url | replace_regexp: "[a-zA-Z0-9\.-]*?/$", "" %}
  // })
  //
  // {urls.length > 1 && (
  //   <nav class="font-weight-500 margin-bottom-xl">
  //     <p class="font-size-14-medium margin-0">
  //       {urls.each(url => {
  //         const document = 'all_documents | where: "url", url | first'
  //         const title = 'document.navigation_title | default: document.title | replace_regexp: ':[a-z_]*?:', '' | strip'
  //
  //         {% if forloop.last %}
  //           <span class="color-gray-500">
  //             {{ title }}
  //           </span>
  //         {% else %}
  //           <a class="inline-block" href="{{ document.url }}">
  //             {{ title }}
  //           </a>
  //
  //           <span class="color-gray-600">
  //             &raquo;
  //           </span>
  //         {% endif %}
  //       {% endfor %}
  //     </p>
  //   </nav>
  // )}
