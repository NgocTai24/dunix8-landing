import Image from "next/image";
import Link from "next/link";
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
    title: article?.title ?? "Tin tức",
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
    <article className="news-detail-page">
      <Link className="back-link" href="/tin-tuc">
        ← Quay lại danh sách tin tức
      </Link>
      <header className="news-detail-hero">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
        <div>
          <p className="eyebrow">Tin tức</p>
          <h1>{article.title}</h1>
        </div>
      </header>
      <section className="news-summary">
        <span>Tóm tắt</span>
        <p>{article.description}</p>
      </section>
      <div className="prose news-prose" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
