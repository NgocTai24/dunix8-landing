import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/types/news";

type NewsCardProps = {
  article: NewsArticle;
  variant?: "featured" | "compact";
};

export function NewsCard({ article, variant = "compact" }: NewsCardProps) {
  return (
    <article className={`news-card news-card-${variant}`}>
      <Link className="news-card-image" href={`/tin-tuc/${article.slug}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes={
            variant === "featured"
              ? "(max-width: 900px) 100vw, 42vw"
              : "(max-width: 900px) 100vw, 24vw"
          }
        />
        <span>Tin tức</span>
      </Link>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span>Dunix8 news</span>
        </div>
        <h3>
          <Link href={`/tin-tuc/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <Link className="news-more" href={`/tin-tuc/${article.slug}`}>
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
