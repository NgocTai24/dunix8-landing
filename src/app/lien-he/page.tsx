import { site } from "@/data/site";

export const metadata = {
  title: "Lien he",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div>
        <p className="eyebrow">Lien he phan phoi</p>
        <h1>Can bao gia hoac tu van dai ly Dunix8?</h1>
        <p>
          Gui thong tin nhu cau, khu vuc ban hang va san luong du kien. Doi ngu
          Dunix8 se phan hoi voi chinh sach phu hop.
        </p>
      </div>
      <form className="contact-form">
        <label>
          Ho ten
          <input name="name" placeholder="Nguyen Van A" />
        </label>
        <label>
          So dien thoai
          <input name="phone" placeholder={site.phone} />
        </label>
        <label>
          Noi dung
          <textarea name="message" placeholder="Toi muon nhan bao gia san pham..." />
        </label>
        <button type="submit">Gui yeu cau</button>
      </form>
    </section>
  );
}
