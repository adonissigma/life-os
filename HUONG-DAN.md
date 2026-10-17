# Life OS – Hướng dẫn (không cần biết code)

## A. Đưa web lên mạng (GitHub Pages)
1. Giải nén file zip. Vào github.com → **New repository** → đặt tên `life-os` → **Public** → Create.
2. Trong repo: **Add file → Upload files** → kéo TOÀN BỘ nội dung thư mục `life-os` (index.html, css, js...) vào → **Commit changes**.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, thư mục `/ (root)` → Save.
4. Đợi 1–2 phút, link web hiện ở đầu trang Pages (dạng `https://tên-bạn.github.io/life-os/`).

## B. Chạy thử trên máy (VS Code)
1. Mở thư mục bằng VS Code → tab Extensions → cài **Live Server**.
2. Chuột phải `index.html` → **Open with Live Server**.
(Không double-click file index.html trực tiếp: trình duyệt sẽ chặn.)

## C. Cấu trúc
- `js/core/` – lõi (lưu dữ liệu, cài đặt, khuôn danh sách)
- `js/modules/<tên>/` – MỖI tính năng 1 thư mục
- `js/features/` – tính năng phụ: `export.js` (xuất), `island.js` (Dynamic Island)
- `css/glass.css` – giao diện Liquid Glass
- `js/modules.config.js` – danh sách module đang bật

## D. Thêm module mới (VD: Tài chính)
1. Tạo thư mục `js/modules/finance/index.js` (nhờ Claude viết nội dung).
2. Mở `js/modules.config.js`, thêm 1 dòng import + thêm vào danh sách.
Xóa/tắt module = bỏ khỏi danh sách đó.

## E. Làm việc với branch (trên web GitHub)
1. Nút chọn nhánh (chữ `main`) → gõ `feature/finance` → **Create branch**.
2. Sửa/upload file ở nhánh đó → Commit.
3. **Pull request → Create → Merge** khi đã ưng. Hỏng thì cứ bỏ nhánh, `main` vẫn an toàn.

## F. Lưu ý
- Dữ liệu lưu trong trình duyệt của bạn (không lên server). Thay máy/xóa cache sẽ mất → dùng **Cài đặt → Xuất tất cả** để backup.
