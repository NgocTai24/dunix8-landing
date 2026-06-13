# Project Overview

Dunix8 Landing là website giới thiệu sản phẩm nước giặt xả và sản phẩm chăm sóc nhà cửa Dunix8. Dự án dùng Next.js App Router, build static export và quản lý nội dung sản phẩm/tin tức bằng Markdown.

## Mục tiêu

- Giới thiệu thương hiệu Dunix8 với giao diện xanh tím sáng, sạch, hiện đại.
- Trình bày sản phẩm theo danh mục nhưng chỉ dùng một trang danh sách `/san-pham`.
- Dẫn người dùng đến trang chi tiết sản phẩm và form liên hệ/tư vấn.
- Cho phép cập nhật sản phẩm và tin tức qua file Markdown, không cần sửa component.

## Route chính

- `/`: Trang chủ, hero banner, tính năng, danh mục, sản phẩm nổi bật và tin tức mới.
- `/gioi-thieu`: Giới thiệu thương hiệu, giá trị, nhóm sản phẩm và hình ảnh catalogue.
- `/san-pham`: Trang danh sách sản phẩm duy nhất. Bộ lọc danh mục dùng query `?category=...`.
- `/san-pham/[slug]`: Trang chi tiết sản phẩm.
- `/tin-tuc`: Trang danh sách tin tức.
- `/tin-tuc/[slug]`: Trang chi tiết tin tức.
- `/lien-he`: Trang liên hệ/tư vấn đại lý.

Không còn route `/danh-muc/...`. Các liên kết danh mục phải trỏ về `/san-pham?category=<categorySlug>`.

## Công nghệ

- Next.js 16 App Router.
- React 19.
- CSS chính trong `src/app/globals.css`.
- Markdown frontmatter đọc bằng `gray-matter`.
- Markdown content render HTML bằng `remark` và `remark-html`.
- Cấu hình `output: "export"` trong `next.config.ts`, ảnh dùng `unoptimized: true`.

## Ghi chú UI hiện tại

- Template chủ đạo: nền trắng/xanh nhạt, điểm nhấn tím, xanh dương và cyan.
- Header dạng thanh trắng bo góc, sticky, có CTA “Tư vấn ngay”.
- Packshot sản phẩm dùng `object-fit: contain` để tránh cắt ảnh.
- Các card sản phẩm/tin tức dùng nền trắng, viền xanh nhạt, hover nâng nhẹ.
- Background mây/bọt/lavender hiện dựng bằng CSS decorative layers và ảnh sản phẩm có sẵn.
