import { NewsGrid } from "@/components/news/NewsGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllNews } from "@/lib/news";

export const metadata = {
  title: "Tin tức",
};

export default function NewsPage() {
  return (
    <section className="section page-intro news-page">
      <SectionTitle
        eyebrow="Tin tức"
        title="Cập nhật hoạt động và kiến thức từ Dunix8"
        description="Các bài viết giới thiệu hoạt động công ty, thông tin sản phẩm và kinh nghiệm chăm sóc nhà cửa."
      />
      <NewsGrid articles={getAllNews()} />
    </section>
  );
}
