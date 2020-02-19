import React from 'react'

export default ({ posts }) => {
  const categories = [...new Set(posts.map(post => post.category))].sort()

  return (
    <div class="categories">
      {categories.map(category => (
        <div class="categories__category">
          <span class="categories__tag">
            <Tag tag={category} />
          </span>

          <span class="categories__count">
            &times;
            {posts.filter(post => post.category === category).length}
          </span>
        </div>
      ))}
    </div>
  )
}
