# Script để push code lên GitHub
# Chạy script này: .\push-to-github.ps1

Write-Host "=== TXshop - Push to GitHub ===" -ForegroundColor Cyan

# Kiểm tra git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git chưa được cài đặt!" -ForegroundColor Red
    exit 1
}

# Kiểm tra đã commit chưa
$status = git status --porcelain
if ($status) {
    Write-Host "Có thay đổi chưa commit. Đang commit..." -ForegroundColor Yellow
    git add .
    git commit -m "Update: TXshop files"
}

# Yêu cầu nhập username GitHub
$username = Read-Host "Nhập username GitHub của bạn"
if (-not $username) {
    Write-Host "Username không được để trống!" -ForegroundColor Red
    exit 1
}

# Token GitHub
$token = "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"

# Tạo repo trên GitHub
Write-Host "`nĐang tạo repository trên GitHub..." -ForegroundColor Yellow
$headers = @{
    "Authorization" = "token $token"
    "Accept" = "application/vnd.github.v3+json"
}
$body = @{
    name = "TXshop"
    description = "Cửa hàng online với admin panel và Telegram integration"
    private = $false
} | ConvertTo-Json

try {
    $repo = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "Đã tạo repository thành công!" -ForegroundColor Green
    Write-Host "URL: $($repo.html_url)" -ForegroundColor Cyan
} catch {
    Write-Host "Không thể tạo repo tự động. Vui lòng tạo thủ công trên GitHub.com" -ForegroundColor Yellow
    Write-Host "Sau đó chạy các lệnh sau:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/$username/TXshop.git" -ForegroundColor White
    Write-Host "git branch -M main" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
    exit 0
}

# Thêm remote và push
Write-Host "`nĐang thêm remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
$remoteUrl = "https://$token@github.com/$username/TXshop.git"
git remote add origin $remoteUrl

Write-Host "Đang push code lên GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Đã push code lên GitHub thành công!" -ForegroundColor Green
    Write-Host "Xem tại: https://github.com/$username/TXshop" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Có lỗi xảy ra khi push code" -ForegroundColor Red
}

