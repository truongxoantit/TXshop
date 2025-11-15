# Hướng Dẫn Deploy lên GitHub

## Cách 1: Tạo Repo trên GitHub Web

1. Truy cập https://github.com/new
2. Tạo repository mới với tên: `TXshop`
3. Chọn **Public** hoặc **Private** tùy ý
4. **KHÔNG** tích vào "Initialize with README"
5. Copy URL của repo (ví dụ: `https://github.com/username/TXshop.git`)

## Cách 2: Push Code

Chạy các lệnh sau trong terminal tại thư mục dự án:

```bash
# Thêm remote (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/TXshop.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

## Cách 3: Sử dụng Token (Nếu cần)

Nếu GitHub yêu cầu authentication:

```bash
# Sử dụng token trong URL
git remote add origin https://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@github.com/YOUR_USERNAME/TXshop.git

git push -u origin main
```

## Lưu Ý

- Đảm bảo đã commit tất cả thay đổi trước khi push
- Token GitHub đã được cung cấp trong code, có thể sử dụng để push
- Repo sẽ được tạo ở chế độ công khai (public) theo yêu cầu

