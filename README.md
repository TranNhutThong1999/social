# Social Media Blog Application

Ứng dụng blog mạng xã hội hiện đại được xây dựng với Next.js, React và TypeScript.

## 🚀 Tính năng chính

- **Xác thực người dùng**: Đăng ký, đăng nhập, đăng xuất
- **Quản lý bài viết**: Xem bài viết
- **Hệ thống bình luận**: Thêm và xem bình luận cho bài viết
- **Giao diện responsive**: Tương thích với mọi thiết bị
- **Quản lý state**: Sử dụng Zustand và React Query
- **UI Components**: Hệ thống component được thiết kế theo nguyên tắc Atomic Design

## 🛠️ Công nghệ sử dụng

### Frontend
- **Next.js 15.5.2** - React framework với App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling framework
- **Zustand** - State management
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Axios** - HTTP client


### Backend API
- **Next.js API Routes** - Server-side API endpoints (Full-stack trong Next.js)
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📁 Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── login/             # Trang đăng nhập
│   ├── register/          # Trang đăng ký
│   └── post/[id]/         # Trang chi tiết bài viết
├── components/             # React components
│   ├── atoms/             # Components cơ bản (Button, Input, etc.)
│   ├── molecules/         # Components phức tạp hơn
│   ├── organisms/         # Components lớn (Header, PostList, etc.)
│   └── templates/         # Layout templates
├── modules/                # Feature modules
│   ├── auth/              # Module xác thực
│   ├── posts/             # Module bài viết
│   └── comments/          # Module bình luận
├── stores/                 # Zustand stores
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
```

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 18+ 
- Yarn hoặc npm

### Bước 1: Clone dự án
```bash
git clone <repository-url>
cd social
```

### Bước 2: Cài đặt dependencies
```bash
yarn install
# hoặc
npm install
```

### Bước 3: Chạy dự án ở môi trường development
```bash
yarn dev
# hoặc
npm run dev
```

Dự án sẽ chạy tại: `http://localhost:3000`

### Bước 4: Build và chạy production
```bash
yarn build
yarn start
# hoặc
npm run build
npm start
```

## �� Hướng dẫn sử dụng

### 1. Đăng ký tài khoản
- Truy cập `/register`
- Điền thông tin: email, mật khẩu, xác nhận mật khẩu
- Nhấn "Đăng ký" để tạo tài khoản mới

### 2. Đăng nhập
- Truy cập `/login`
- Nhập email và mật khẩu
- Nhấn "Đăng nhập" để vào hệ thống

### 3. Xem bài viết
- Trang chủ hiển thị danh sách tất cả bài viết
- Nhấn vào bài viết để xem chi tiết
- Sử dụng thanh tìm kiếm để tìm bài viết cụ thể

### 4. Bình luận
- Xem bài viết chi tiết
- Cuộn xuống phần bình luận
- Nhập nội dung bình luận
- Nhấn "Gửi bình luận"

## 🎨 Hệ thống Component

### Atomic Design Pattern
Dự án sử dụng nguyên tắc Atomic Design để tổ chức components:

- **Atoms**: Components cơ bản (Button, Input, LoadingSpinner)
- **Molecules**: Components phức tạp hơn (CommentForm, PostCard)
- **Organisms**: Components lớn (Header, PostList, CommentsSection)
- **Templates**: Layout templates (RootLayoutTemplate)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach


### API Configuration
Dự án sử dụng Next.js API Routes làm backend. Các endpoint API được định nghĩa trong `src/constants/api.ts`:

- **Authentication**: `/api/auth/login`, `/api/auth/register`, `/api/auth/logout`, `/api/auth/me`
- **Posts**: `/api/post`, `/api/post/[id]`, `/api/post/[id]/comments`

Các API routes được implement trong thư mục `src/app/api/`:
- `src/app/api/auth/` - Xử lý xác thực người dùng
- `src/app/api/post/` - Quản lý bài viết và bình luận

## 📱 Responsive Design

Dự án được thiết kế responsive với các breakpoint:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🧪 Testing

```bash
# Chạy tests
yarn test

# Chạy tests với coverage
yarn test:coverage

# Chạy tests trong watch mode
yarn test:watch
```

## 📦 Build và Deploy

### Build Production
```bash
yarn build
```

### Deploy lên Vercel
1. Kết nối repository với Vercel
2. Cấu hình environment variables
3. Deploy tự động khi push code

### Deploy lên server khác
```bash
yarn build
yarn start
```

## 📝 Scripts có sẵn

- `yarn dev` - Chạy development server với Turbopack
- `yarn build` - Build dự án cho production
- `yarn start` - Chạy production server
- `yarn lint` - Kiểm tra code style
- `yarn type-check` - Kiểm tra TypeScript types

### Lỗi build
```bash
# Xóa cache Next.js
rm -rf .next
yarn build
```

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest)

## 📄 License

Dự án này được phát hành dưới MIT License.
