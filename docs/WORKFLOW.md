# Workflow

## Chạy dự án

```bash
npm install
npm run dev
```

Mặc định dev server chạy tại `http://localhost:3000`.

## Kiểm tra trước khi deploy

```bash
npm run lint
npm run build
```

Dự án dùng static export, vì vậy cần đảm bảo build không phát sinh route dynamic không có `generateStaticParams`.

## Thêm sản phẩm

1. Thêm ảnh vào `public/images/products/`.
2. Tạo file Markdown trong `content/products/`.
3. Điền đủ frontmatter theo `docs/CONTENT_GUIDE.md`.
4. Nếu là danh mục mới, thêm slug vào `src/data/categories.ts`.
5. Kiểm tra trang `/san-pham` và bộ lọc `/san-pham?category=<categorySlug>`.
6. Chạy `npm run lint` và `npm run build`.

## Thêm tin tức

1. Thêm ảnh vào `public/images/news/`.
2. Tạo file Markdown trong `content/news/`.
3. Điền đủ frontmatter theo `docs/CONTENT_GUIDE.md`.
4. Kiểm tra trang `/tin-tuc` và `/tin-tuc/[slug]`.
5. Chạy `npm run lint` và `npm run build`.

## Chỉnh UI

- Component layout nằm trong `src/components/layout/`.
- Component sản phẩm nằm trong `src/components/product/`.
- Component tin tức nằm trong `src/components/news/`.
- CSS tổng nằm trong `src/app/globals.css`.
- Khi chỉnh header/footer, kiểm tra trên mobile vì header là sticky và menu có thể tràn ngang.

## Quy tắc route danh mục

Không tạo lại route `/danh-muc/...` nếu không thật sự cần. Danh mục sản phẩm hiện được xử lý bằng query trên trang `/san-pham`.
