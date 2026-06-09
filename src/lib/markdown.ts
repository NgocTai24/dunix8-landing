import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type MarkdownRecord<T> = T & {
  slug: string;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getMarkdownFiles(directory: string) {
  const fullPath = path.join(contentRoot, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  return fs.readdirSync(fullPath).filter((file) => file.endsWith(".md"));
}

export function readMarkdownFile<T extends Record<string, unknown>>(
  directory: string,
  filename: string,
) {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(contentRoot, directory, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return {
    ...(data as T),
    slug,
    content,
  } as MarkdownRecord<T>;
}
