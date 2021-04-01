import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import { getAllCategorySlugs, getCategoryWithPostsBySlug } from '@/lib/api/post-categories'

export default function Category({
  permalink,
  posts,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Blog',
      url: '/posts',
    }, {
      label: 'Categories',
      url: '/posts/categories',
    }, {
      label: title,
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        permalink={permalink}
        title={`Posts in “${title}”`}
      />

      <h1>
        Posts in “{title}”
      </h1>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const category = await getCategoryWithPostsBySlug(params.slug)

  return {
    props: category,
  }
}

export async function getStaticPaths() {
  const allCategorySlugs = await getAllCategorySlugs()

  return {
    fallback: false,
    paths: allCategorySlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
