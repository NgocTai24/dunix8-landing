import { notFound } from "next/navigation";
import { getAllNews, getNewsWithHtml } from "@/lib/news";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = await getNewsWithHtml(slug);

  return {
    title: article?.title ?? "Tin tuc",
    description: article?.description,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = await getNewsWithHtml(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="detail-page narrow">
      <p className="eyebrow">{article.category}</p>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <time dateTime={article.date}>
        {new Intl.DateTimeFormat("vi-VN").format(new Date(article.date))}
      </time>
      <div className="prose" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
