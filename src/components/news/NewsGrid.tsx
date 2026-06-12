import { NewsCard } from "@/components/news/NewsCard";
import type { NewsArticle } from "@/types/news";

type NewsGridProps = {
  articles: NewsArticle[];
};

export function NewsGrid({ articles }: NewsGridProps) {
  const [featuredArticle, ...otherArticles] = articles;

  if (!featuredArticle) {
    return <p className="news-empty">Chưa có tin tức nào được đăng.</p>;
  }

  return (
    <div className="news-layout">
      <NewsCard article={featuredArticle} variant="featured" />
      <div className="news-side-grid">
        {otherArticles.map((article) => (
          <NewsCard article={article} key={article.slug} />
        ))}
      </div>
    </div>
  );
}
