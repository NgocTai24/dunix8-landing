import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/types/news";

type NewsCardProps = {
  article: NewsArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <Link className="news-card-image" href={`/tin-tuc/${article.slug}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </Link>
      <div className="news-card-body">
        <p className="eyebrow">Tin tức</p>
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
