import { NewsGrid } from "@/components/news/NewsGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllNews } from "@/lib/news";

export const metadata = {
  title: "Tin tuc",
};

export default function NewsPage() {
  return (
    <section className="section page-intro">
      <SectionTitle
        eyebrow="Tin tuc"
        title="Kien thuc giat xa va cham soc vai"
        description="Cac bai viet markdown mau phuc vu SEO va dieu huong nguoi mua ve san pham."
      />
      <NewsGrid articles={getAllNews()} />
    </section>
  );
}
