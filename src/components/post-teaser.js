import Image from 'next/image'
import { Tag } from '@yieldui/react'

import Card from '@/components/card'
import PostMeta from '@/components/post-meta'

export default function PostTeaser({
  post,
}) {
  const {
    author,
    categories,
    createdAt,
    excerpt,
    hero,
    heroAlt,
    permalink,
    title,
  } = post

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Image
            alt={heroAlt}
            height="360"
            layout="responsive"
            src={hero}
            width="640"
          />
        </a>

        <div className="flex flex-col h-full px-4 py-3">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="flex-grow mb-6 text-sm">
            {excerpt}
          </p>

          <div className="flex flex-wrap mb-1.5">
            {categories.map(category => (
              <div className="mb-1 mr-1.5" key={`category-${category.slug}`}>
                <Tag href={category.permalink}>
                  {category.title}
                </Tag>
              </div>
            ))}
          </div>

          <PostMeta
            author={author.name}
            avatar={author.avatar}
            createdAt={createdAt}
          />
        </div>
      </article>
    </Card>
  )
}
