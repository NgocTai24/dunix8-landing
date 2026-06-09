import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata = {
  title: "Gioi thieu",
};

export default function AboutPage() {
  return (
    <section className="section page-intro">
      <SectionTitle
        eyebrow="Ve Dunix8"
        title="Thuong hieu cham soc vai gan voi nep song gon gang"
        description="Dunix8 tap trung vao cac san pham nuoc giat xa de dung, de ban va de tao long tin tren kenh online."
      />
      <div className="content-columns">
        <p>
          Cau truc website duoc thiet ke cho landing page san pham: co trang gioi
          thieu, danh muc, chi tiet san pham, tin tuc va lien he dai ly.
        </p>
        <p>
          Noi dung chinh nam trong thu muc markdown, giup doi marketing cap nhat
          nhanh ma khong can cham vao logic giao dien.
        </p>
      </div>
    </section>
  );
}
