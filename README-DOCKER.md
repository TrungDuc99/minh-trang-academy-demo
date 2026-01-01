# Hướng dẫn Deploy lên VPS với Docker

## Yêu cầu
- VPS có cài đặt Docker và Docker Compose
- Domain name (tùy chọn, có thể dùng IP)

## Các bước deploy

### 1. Cài đặt Docker trên VPS (nếu chưa có)

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Cài đặt Docker Compose
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

### 2. Upload code lên VPS

```bash
# Sử dụng git
git clone <repository-url>
cd minh-trang-academy---career-guidance

# Hoặc sử dụng scp
scp -r . user@your-vps-ip:/path/to/project
```

### 3. Tạo file .env

Tạo file `.env` trong thư mục project:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Build và chạy container

```bash
# Build và chạy với docker-compose
docker-compose up -d --build

# Hoặc chỉ build
docker-compose build

# Hoặc chạy với Docker trực tiếp
docker build --build-arg GEMINI_API_KEY=your_api_key -t minh-trang-academy .
docker run -d -p 80:80 --name minh-trang-academy minh-trang-academy
```

### 5. Kiểm tra

Mở trình duyệt và truy cập:
- `http://your-vps-ip` hoặc
- `http://your-domain.com`

### 6. Các lệnh quản lý

```bash
# Xem logs
docker-compose logs -f

# Dừng container
docker-compose down

# Khởi động lại
docker-compose restart

# Xem trạng thái
docker-compose ps

# Cập nhật code mới
git pull
docker-compose up -d --build
```

## Cấu hình Nginx Reverse Proxy (Tùy chọn)

Nếu bạn muốn sử dụng domain và HTTPS, cài đặt Nginx trên host:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Sau đó cài đặt SSL với Let's Encrypt:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Lưu ý bảo mật

⚠️ **Quan trọng**: API key của Gemini sẽ được embed vào code JavaScript khi build, nghĩa là nó sẽ hiển thị trong browser. Để bảo mật hơn, bạn nên:

1. Tạo một backend API proxy để xử lý các request đến Gemini API
2. Hoặc sử dụng API key với giới hạn domain/IP
3. Hoặc sử dụng environment variables được inject ở runtime (cần thay đổi kiến trúc)

## Troubleshooting

### Container không chạy
```bash
docker-compose logs web
```

### Port đã được sử dụng
Thay đổi port trong `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Thay vì 80:80
```

### Build lỗi
```bash
# Xóa cache và build lại
docker-compose build --no-cache
```
