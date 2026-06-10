import Image from "next/image";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata = {
  title: "Gioi thieu",
};

export default function AboutPage() {
  const images = [
    {
      src: "/images/about/catalogue-cover.webp",
      title: "Catalogue tong quan",
    },
    {
      src: "/images/about/catalogue-giat-xa.webp",
      title: "Dong giat xa",
    },
    {
      src: "/images/about/catalogue-lau-san.webp",
      title: "Dong lau san",
    },
    {
      src: "/images/about/catalogue-rua-chen.webp",
      title: "Dong rua chen",
    },
  ];

  return (
    <section className="section page-intro">
      <SectionTitle
        eyebrow="Ve Dunix8"
        title="Thuong hieu cham soc nha cua voi tinh than tuoi sang, sach se"
        description="Dunix8 tap trung vao cac san pham giat xa va ve sinh gia dung de dung, de ban va de tao long tin tren kenh online."
      />
      <div className="content-columns">
        <p>
          Trang gioi thieu duoc xay dung tu cac anh catalogue ban da them trong
          `public/images/about`, giup khach hang nhin thay bo san pham ngay khi
          vao website.
        </p>
        <p>
          Noi dung chinh nam trong thu muc markdown, giup doi marketing cap nhat
          nhanh ma khong can cham vao logic giao dien.
        </p>
      </div>
      <div className="about-gallery">
        {images.map((item) => (
          <figure key={item.src}>
            <Image
              src={item.src}
              alt={`${item.title} Dunix8`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
