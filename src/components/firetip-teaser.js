import { Tag } from '@yieldui/react'

export default function FiretipTeaser({
  firetip,
}) {
  const {
    permalink,
    tags,
    title
  } = firetip

  return (
    <div>
      <h2 className="leading-snug m-0 mb-1.5 text-base">
        <a href={permalink}>
          {title}
        </a>
      </h2>

      <div className="flex flex-wrap">
        {tags.map(tag => (
          <div className="mb-1 mr-2.5" key={`tag-${tag.slug}`}>
            <Tag href={tag.permalink}>
              {tag.title}
            </Tag>
          </div>
        ))}
      </div>
    </div>
  )
}
