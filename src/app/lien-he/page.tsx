import { site } from "@/data/site";

export const metadata = {
  title: "Liên hệ",
};

const contactCards = [
  {
    label: "Số điện thoại",
    value: site.hotline,
    icon: "☎",
  },
  {
    label: "Email",
    value: "phanphoi@dunix8.vn",
    icon: "✉",
  },
  {
    label: "Thời gian làm việc",
    value: "T2 - T7: 8:00 - 17:30",
    icon: "◷",
  },
];

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-copy">
        <p className="contact-badge">Liên hệ phân phối</p>
        <h1>
          Cần báo giá hoặc tư vấn đại lý <span>Dunix8?</span>
        </h1>
        <p>
          Gửi thông tin nhu cầu, khu vực bạn đang hoạt động và sản lượng dự kiến.
          Đội ngũ Dunix8 sẽ phản hồi nhanh chóng với chính sách phù hợp nhất dành cho bạn.
        </p>
        <div className="contact-divider" />
        <div className="contact-info-grid">
          {contactCards.map((item) => (
            <article className="contact-info-card" key={item.label}>
              <span>{item.icon}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <form className="contact-form">
        <div className="contact-form-heading">
          <span>✈</span>
          <h2>Gửi yêu cầu liên hệ</h2>
        </div>
        <label>
          Họ tên
          <input name="name" placeholder="Nhập họ và tên của bạn" />
        </label>
        <label>
          Số điện thoại
          <input name="phone" placeholder="Nhập số điện thoại" />
        </label>
        <label>
          Email
          <input name="email" placeholder="Nhập email của bạn" />
        </label>
        <label>
          Nội dung
          <textarea
            name="message"
            placeholder="Tôi muốn nhận báo giá sản phẩm, chính sách đại lý..."
          />
        </label>
        <button type="submit">Gửi yêu cầu</button>
        <p className="contact-safe-note">Thông tin của bạn được bảo mật tuyệt đối.</p>
      </form>
    </section>
  );
}
