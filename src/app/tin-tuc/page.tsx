import { NewsGrid } from "@/components/news/NewsGrid";
import { getAllNews } from "@/lib/news";

export const metadata = {
  title: "Tin tức",
};

export default function NewsPage() {
  return (
    <section className="news-page">
      <div className="news-page-heading">
        <p className="contact-badge">Tin tức Dunix8</p>
        <h1>Tin tức Dunix8</h1>
        <p>
          Cập nhật những thông tin mới nhất về hoạt động doanh nghiệp, sản phẩm mới,
          chính sách bán hàng và những câu chuyện thương hiệu.
        </p>
      </div>
      <NewsGrid articles={getAllNews()} />
    </section>
  );
}
