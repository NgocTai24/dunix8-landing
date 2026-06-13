# Dunix8 Landing

Website landing page giới thiệu sản phẩm nước giặt xả và sản phẩm chăm sóc nhà cửa Dunix8. Dự án dùng Next.js App Router, build static export và quản lý nội dung sản phẩm/tin tức bằng Markdown.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem giao diện.

## Kiểm tra build

```bash
npm run lint
npm run build
```

## Cấu trúc thư mục

```txt
dunix8-landing/
├── content/
│   ├── products/          # Markdown sản phẩm
│   └── news/              # Markdown tin tức
├── docs/                  # Tài liệu dự án, workflow, SEO, content guide
├── public/
│   ├── images/
│   │   ├── about/         # Ảnh catalogue/giới thiệu
│   │   ├── logo/          # Logo
│   │   ├── news/          # Ảnh tin tức
│   │   └── products/      # Ảnh sản phẩm
│   └── favicon.ico
├── src/
│   ├── app/               # Route App Router
│   ├── components/        # Component layout, sản phẩm, tin tức, common
│   ├── data/              # Cấu hình site và danh mục
│   ├── lib/               # Hàm đọc markdown, sản phẩm, tin tức
│   └── types/             # TypeScript types
├── next.config.ts
└── package.json
```

## Route chính

- `/`: Trang chủ.
- `/gioi-thieu`: Giới thiệu thương hiệu.
- `/san-pham`: Trang sản phẩm duy nhất, lọc bằng `?category=<categorySlug>`.
- `/san-pham/[slug]`: Chi tiết sản phẩm.
- `/tin-tuc`: Danh sách tin tức.
- `/tin-tuc/[slug]`: Chi tiết tin tức.
- `/lien-he`: Form liên hệ/tư vấn.

Không còn route `/danh-muc/...`. Link danh mục phải trỏ về `/san-pham?category=<categorySlug>`.

## Tài liệu

- `docs/PROJECT_OVERVIEW.md`: Tổng quan dự án, route, công nghệ và UI hiện tại.
- `docs/CONTENT_GUIDE.md`: Cách viết Markdown sản phẩm/tin tức.
- `docs/WORKFLOW.md`: Quy trình chạy, thêm nội dung, kiểm tra build.
- `docs/ROLES.md`: Vai trò admin nội dung, marketing, developer, SEO reviewer.
- `docs/SEO_RULES.md`: Quy tắc SEO và liên kết nội bộ.

## Ghi chú nội dung

Website chỉ giới thiệu sản phẩm và nhận tư vấn, không hiển thị giá sản phẩm. Vì vậy frontmatter sản phẩm không dùng thuộc tính `price`.

## Build tĩnh

Dự án đang cấu hình `output: "export"` trong `next.config.ts`, phù hợp để xuất static site khi deploy lên hosting tĩnh.
