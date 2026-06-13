# SEO Rules

## Quy tắc chung

- Mỗi trang chi tiết cần có `title` và `description` rõ ràng.
- Slug dùng tiếng Việt không dấu, chữ thường, ngăn cách bằng dấu gạch ngang.
- Mỗi trang chỉ nên có một H1.
- Nội dung nên có heading H2 để chia ý.
- Tránh nhồi từ khóa, ưu tiên câu chữ tự nhiên.

## Sản phẩm

- Tiêu đề nên gồm tên sản phẩm, thương hiệu và dung tích nếu có.
- Mô tả ngắn nên nêu công dụng chính, mùi hương hoặc lợi ích nổi bật.
- Không viết giá trong nội dung/frontmatter nếu không có yêu cầu mới.
- `categorySlug` phải khớp dữ liệu trong `src/data/categories.ts` để bộ lọc hoạt động.

## Tin tức

- Tiêu đề ngắn, rõ chủ đề.
- Mô tả nên tóm tắt nội dung trong 1-2 câu.
- Ảnh đại diện nên liên quan trực tiếp tới sự kiện, sản phẩm hoặc chủ đề bài viết.
- Nội dung nên có mở bài, phần chính và kết luận ngắn.

## Liên kết nội bộ

- Link xem tất cả sản phẩm: `/san-pham`.
- Link danh mục sản phẩm: `/san-pham?category=<categorySlug>`.
- Link chi tiết sản phẩm: `/san-pham/<slug>`.
- Link tin tức: `/tin-tuc/<slug>`.
