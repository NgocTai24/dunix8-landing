import { NewsCard } from "@/components/news/NewsCard";
import type { NewsArticle } from "@/types/news";

type NewsGridProps = {
  articles: NewsArticle[];
};

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="news-grid">
      {articles.map((article) => (
        <NewsCard article={article} key={article.slug} />
      ))}
    </div>
  );
}
