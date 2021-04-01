import React from 'react'

import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import { getAllCategoriesWithPosts } from '@/lib/api/post-categories'

export default function Categories({
  categories,
}) {
  const breadcrumbs = [
    {
      label: 'Blog',
      url: '/posts',
    }, {
      label: 'Categories'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        permalink="/posts/categories"
        title="Categories"
      />

      <h1>
        Categories
      </h1>

      {categories.map(category => (
        <React.Fragment key={`category-${category.slug}`}>
          <h2>
            {category.title} &times; {category.posts.length}
          </h2>

          <Breakout>
            <PostTeasers posts={category.posts} />
          </Breakout>
        </React.Fragment>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const categories = await getAllCategoriesWithPosts()

  return {
    props: {
      categories,
    },
  }
}
