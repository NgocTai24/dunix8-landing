import { getMarkdownFiles, markdownToHtml, readMarkdownFile } from "@/lib/markdown";
import type { NewsArticle } from "@/types/news";

const newsDirectory = "news";

type NewsFrontmatter = Omit<NewsArticle, "slug" | "content">;

export function getAllNews() {
  return getMarkdownFiles(newsDirectory)
    .map((file) => readMarkdownFile<NewsFrontmatter>(newsDirectory, file))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getLatestNews(limit = 3) {
  return getAllNews().slice(0, limit);
}

export function getNewsBySlug(slug: string) {
  return getAllNews().find((article) => article.slug === slug);
}

export async function getNewsWithHtml(slug: string) {
  const article = getNewsBySlug(slug);

  if (!article) {
    return undefined;
  }

  return {
    ...article,
    content: await markdownToHtml(article.content),
  };
}
