# Social App - Tối ưu hóa cấu trúc

## Cấu trúc dự án đã được tối ưu hóa

Dự án này đã được tái cấu trúc để loại bỏ trùng lặp và tạo cấu trúc rõ ràng hơn:

### 📁 Cấu trúc thư mục

```
modules/
├── auth/                    # Module xác thực
│   ├── components/         # Components liên quan đến auth
│   ├── hooks/             # Custom hooks cho auth
│   ├── services/          # API services cho auth
│   └── types.ts           # Type definitions
├── posts/                  # Module bài viết
│   ├── components/        # Components liên quan đến posts
│   ├── hooks/            # Custom hooks cho posts
│   ├── services/         # API services cho posts
│   └── types.ts          # Type definitions
├── comments/               # Module bình luận
│   ├── components/       # Components liên quan đến comments
│   ├── hooks/           # Custom hooks cho comments
│   └── types.ts         # Type definitions
└── shared/                 # Shared resources
    ├── components/       # Shared UI components
    ├── services/        # Shared services
    ├── hooks/          # Shared hooks
    ├── utils/          # Utility functions
    ├── store/          # State management
    └── providers/      # React providers
```

### 🔧 Những thay đổi chính

1. **Loại bỏ trùng lặp:**
   - Xóa thư mục `shared` cũ
   - Thống nhất services: chỉ giữ lại `postsApi`, `authApi`
   - Thống nhất components: loại bỏ PostCard, CommentForm trùng lặp

2. **Tối ưu hóa imports:**
   - Tất cả imports từ `@/shared` → `@/modules/shared`
   - Components từ modules cụ thể: `@/modules/posts/components/PostCard`

3. **Cấu trúc rõ ràng:**
   - Mỗi module có trách nhiệm riêng biệt
   - Shared resources được tập trung trong `modules/shared`
   - API services được thống nhất và tối ưu

### 🚀 Cách sử dụng

```typescript
// Import components từ modules cụ thể
import { PostCard } from '@/modules/posts/components/PostCard';
import { CommentForm } from '@/modules/comments/components/CommentForm';

// Import shared components
import { Header, Button } from '@/modules/shared/components';

// Import services
import { postsApi } from '@/modules/posts/services/posts.api';
import { authApi } from '@/modules/auth/services/auth.api';
```

### 📋 Lợi ích của cấu trúc mới

1. **Không trùng lặp:** Mỗi component/service chỉ có một phiên bản
2. **Dễ bảo trì:** Cấu trúc rõ ràng, dễ tìm và sửa
3. **Scalable:** Dễ dàng thêm modules mới
4. **Performance:** Giảm bundle size do loại bỏ code trùng lặp
5. **Consistency:** Thống nhất cách tổ chức và naming

### 🔄 Migration

Tất cả imports đã được cập nhật tự động. Nếu có lỗi, hãy kiểm tra:
- Import paths có đúng format mới không
- Components/services có tồn tại trong đường dẫn mới không
