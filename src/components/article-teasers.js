import ArticleTeaser from '@/components/article-teaser'

export default function PostTeasers({
  articles,
}) {
  return (
    <div className="grid gap-20 grid-cols-1 mb-8">
      {articles.map(article => (
        <ArticleTeaser key={article.slug} article={article} />
      ))}
    </div>
  )
}
