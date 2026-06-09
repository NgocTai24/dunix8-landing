import Link from "next/link";
import type { NewsArticle } from "@/types/news";

type NewsCardProps = {
  article: NewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <p className="eyebrow">{article.category}</p>
      <h3>
        <Link href={`/tin-tuc/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.description}</p>
      <time dateTime={article.date}>
        {new Intl.DateTimeFormat("vi-VN").format(new Date(article.date))}
      </time>
    </article>
  );
}
