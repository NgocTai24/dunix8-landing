Dunix8 Landing
===============

Website landing page gioi thieu san pham nuoc giat xa Dunix8, xay dung bang Next.js App Router va noi dung markdown.

## Chay du an

```bash
npm run dev
```

Mo `http://localhost:3000` de xem giao dien.

## Cau truc

- `src/app`: route va layout cua website.
- `src/components`: component dung lai cho layout, san pham, tin tuc.
- `content/products`: noi dung san pham bang markdown.
- `content/news`: bai viet SEO bang markdown.
- `docs`: tai lieu van hanh, workflow va quy tac SEO.

## Build tinh

Du an dang cau hinh `output: "export"` trong `next.config.ts`, phu hop de xuat static site khi deploy len hosting tinh.
