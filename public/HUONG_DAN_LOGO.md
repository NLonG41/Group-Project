# Hướng dẫn thêm Logo USTH

## Cách 1: Sử dụng URL logo online

1. Mở file `src/config/logo.ts`
2. Thay đổi dòng `logoUrl: undefined` thành URL của logo:
   ```typescript
   logoUrl: 'https://example.com/logo.png',
   ```
3. Lưu file và refresh trang web

## Cách 2: Đặt file logo vào thư mục public

1. Đặt file logo vào thư mục `public/` với một trong các tên sau:
   - `logo.png` (khuyến nghị)
   - `logo.jpg`
   - `logo.svg`
   - `logo.webp`

2. Component sẽ tự động load file logo

## Lưu ý:

- Nếu bạn cung cấp cả URL và file, URL sẽ được ưu tiên
- Nếu không có logo, sẽ hiển thị icon SVG fallback (3 màu đỏ, trắng, xanh)
- Kích thước logo được tự động điều chỉnh theo prop `size`

