import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Giới thiệu",
};

const values = [
  {
    title: "Sạch sâu",
    description:
      "Công thức làm sạch hiệu quả, hỗ trợ đánh bay vết bẩn thường gặp trong sinh hoạt hằng ngày.",
  },
  {
    title: "Thơm lâu",
    description:
      "Hương thơm dễ chịu, bền mùi vừa phải để quần áo và không gian sống luôn tươi mới.",
  },
  {
    title: "An toàn",
    description:
      "Định hướng sản phẩm thân thiện với gia đình, dễ sử dụng và phù hợp nhiều nhu cầu chăm sóc nhà cửa.",
  },
];

const productLines = [
  {
    src: "/images/about/catalogue-giat-xa.webp",
    title: "Chăm sóc quần áo",
    description: "Nước giặt, nước xả và combo giặt xả cho gia đình hiện đại.",
  },
  {
    src: "/images/about/catalogue-lau-san.webp",
    title: "Vệ sinh sàn nhà",
    description: "Giải pháp làm sạch giúp không gian sống thoáng mát, dễ chịu hơn.",
  },
  {
    src: "/images/about/catalogue-rua-chen.webp",
    title: "Chăm sóc gian bếp",
    description: "Sản phẩm hỗ trợ làm sạch vật dụng bếp với cảm giác nhẹ nhàng.",
  },
];

const stats = [
  { value: "04+", label: "Nhóm sản phẩm chủ lực" },
  { value: "08h", label: "Tư vấn mỗi ngày" },
  { value: "100%", label: "Tập trung vào trải nghiệm gia đình" },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Về Dunix8</p>
          <h1>Giải pháp chăm sóc nhà cửa cho cuộc sống sạch thơm mỗi ngày</h1>
          <p>
            Dunix8 phát triển các sản phẩm giặt xả và vệ sinh gia dụng với tinh
            thần hiện đại, tươi sáng và gần gũi với gia đình Việt.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/san-pham">
              Xem sản phẩm
            </Link>
            <Link className="button ghost" href="/lien-he">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
        <div className="about-hero-media">
          <Image
            src="/images/about/catalogue-cover.webp"
            alt="Catalogue giới thiệu sản phẩm Dunix8"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="about-section about-story">
        <div>
          <p className="eyebrow">Câu chuyện thương hiệu</p>
          <h2>Dunix8 được tạo ra để việc chăm sóc nhà cửa nhẹ nhàng hơn</h2>
        </div>
        <div className="story-copy">
          <p>
            Chúng tôi tin rằng một ngôi nhà sạch sẽ không chỉ đến từ khả năng
            làm sạch, mà còn từ cảm giác an tâm khi sử dụng sản phẩm mỗi ngày.
            Vì vậy Dunix8 theo đuổi những công thức dễ dùng, hương thơm dễ chịu
            và hình ảnh sản phẩm rõ ràng, đáng tin cậy.
          </p>
          <p>
            Từ nước giặt, nước xả đến các dòng vệ sinh gia dụng, Dunix8 hướng
            đến trải nghiệm đồng bộ: sạch hơn, thơm hơn và tiện lợi hơn cho cả
            gia đình lẫn hệ thống đại lý phân phối.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="value-grid">
          {values.map((item) => (
            <article className="value-card" key={item.title}>
              <span>{item.title}</span>
              <h3>{item.title} cho từng khoảnh khắc sinh hoạt</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section product-line-section">
        <div className="section-title">
          <p className="eyebrow">Danh mục nổi bật</p>
          <h2>Hệ sản phẩm đồng hành cùng gia đình</h2>
          <p>
            Những hình ảnh catalogue bạn cung cấp được đặt thành các nhóm sản
            phẩm rõ ràng để khách hàng nhanh chóng nắm được Dunix8 đang bán gì.
          </p>
        </div>
        <div className="product-line-grid">
          {productLines.map((item) => (
            <article className="product-line-card" key={item.title}>
              <div className="product-line-image">
                <Image
                  src={item.src}
                  alt={`${item.title} Dunix8`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-commitment">
        <div>
          <p className="eyebrow">Cam kết của chúng tôi</p>
          <h2>Đẹp ở hình ảnh, chắc ở chất lượng, rõ ràng trong tư vấn</h2>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
