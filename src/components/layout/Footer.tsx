import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" href="/">
          <span className="brand-mark">D8</span>
          <span>{site.name}</span>
        </Link>
        <p>{site.tagline}</p>
      </div>
      <div>
        <strong>Lien he</strong>
        <p>{site.phone}</p>
        <p>{site.email}</p>
        <p>{site.address}</p>
      </div>
      <div>
        <strong>Danh muc</strong>
        <Link href="/san-pham">San pham</Link>
        <Link href="/tin-tuc">Tin tuc</Link>
        <Link href="/lien-he">Dai ly</Link>
      </div>
    </footer>
  );
}
