# Group-Project

Ứng dụng web quản trị viên cho hệ thống quản lý lớp học và lịch học.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng ở chế độ development:
```bash
npm run dev
```

3. Build cho production:
```bash
npm run build
```

## Cấu trúc dự án

- `src/components/` - Các component chung (Login, Header, Sidebar, MainLayout)
- `src/pages/` - Các trang chính của ứng dụng
- `src/App.tsx` - Component chính với routing

## Tính năng

### Layout chính
- **Header**: Hiển thị tên admin và nút đăng xuất
- **Sidebar**: Menu điều hướng với các chức năng chính

### Màn hình đăng nhập
- Form đăng nhập với logo, email, password
- Validation cơ bản

### Các trang chính
- Dashboard: Thống kê tổng quan
- Class Scheduling: Quản lý lịch học
- Course Section Management: Quản lý lớp học phần
- User Management: Quản lý người dùng
- Subject Management: Quản lý môn học
- Classroom Management: Quản lý phòng học
- Semester Management: Quản lý học kỳ
- Send Notifications: Gửi thông báo
