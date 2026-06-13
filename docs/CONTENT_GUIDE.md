# Content Guide

Nội dung chính nằm trong `content/products` và `content/news`. Mỗi file Markdown gồm frontmatter ở đầu file và phần nội dung chi tiết bên dưới.

## Sản phẩm

Tạo file mới trong `content/products/<slug>.md`.

Frontmatter bắt buộc:

```yaml
---
title: "Tên sản phẩm"
description: "Mô tả ngắn hiển thị trên card và trang chi tiết."
category: "Tên danh mục"
categorySlug: "nuoc-giat"
volume: "3kg"
fragrance: "Hương Lavender"
image: "/images/products/ten-anh.jpg"
featured: true
benefits:
  - "Lợi ích 1"
  - "Lợi ích 2"
---
```

Không dùng thuộc tính `price`. Website chỉ giới thiệu thông tin sản phẩm, không hiển thị giá.

`categorySlug` nên khớp một slug trong `src/data/categories.ts`:

- `nuoc-giat`
- `nuoc-xa`
- `nuoc-rua-chen`
- `nuoc-rua-tay`
- `nuoc-lau-san`
- `nuoc-tay-toilet`

Ảnh sản phẩm đặt trong `public/images/products/`, đường dẫn trong Markdown bắt đầu bằng `/images/products/...`.

Phần nội dung sau frontmatter nên có các heading:

- `## Mô tả sản phẩm`
- `## Điểm nổi bật`
- `## Hướng dẫn sử dụng`

## Tin tức

Tạo file mới trong `content/news/<slug>.md`.

Frontmatter bắt buộc:

```yaml
---
title: "Tiêu đề tin tức"
description: "Mô tả ngắn của bài viết."
date: "2026-01-01"
category: "Tin tức"
image: "/images/news/ten-anh.jpg"
---
```

Ảnh tin tức đặt trong `public/images/news/`.

Nội dung bài viết nên ngắn gọn, dễ đọc, dùng heading `##` để chia ý. Ưu tiên tiếng Việt tự nhiên, tập trung vào hoạt động thương hiệu, sản phẩm mới, chính sách bán hàng và mẹo chăm sóc nhà cửa.

## Hình ảnh chung

- Logo: `public/images/logo/logo.jpg`.
- Ảnh catalogue/giới thiệu: `public/images/about/`.
- Ảnh sản phẩm: `public/images/products/`.
- Ảnh tin tức: `public/images/news/`.

Nếu muốn UI giống template hơn, nên bổ sung thêm background scene đã cắt riêng như mây, bọt nước, lavender, icon SVG tính năng và packshot PNG/WebP nền trong suốt.
