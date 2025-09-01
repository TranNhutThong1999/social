# Molecules Components

Thư mục này chứa các component molecules được tổ chức theo nhóm chức năng.

## Cấu trúc thư mục

### 📝 `post/` - Components liên quan đến bài viết
- `PostCard.tsx` - Card hiển thị thông tin bài viết
- `PostDetails.tsx` - Chi tiết bài viết
- `PostCardSkeleton.tsx` - Skeleton loading cho PostCard
- `PostListSkeleton.tsx` - Skeleton loading cho danh sách bài viết
- `content/` - Các component nội dung bài viết
  - `PostHeader.tsx` - Header của bài viết
  - `PostContent.tsx` - Nội dung bài viết
  - `PostDetailContent.tsx` - Nội dung chi tiết bài viết

### 💬 `comment/` - Components liên quan đến bình luận
- `CommentListSkeleton.tsx` - Skeleton loading cho danh sách bình luận

### 🔐 `auth/` - Components liên quan đến xác thực
- `AuthSkeleton.tsx` - Skeleton loading cho các form xác thực

### 🔧 `common/` - Components chung có thể sử dụng ở nhiều nơi
- `SearchAndFilter.tsx` - Component tìm kiếm và lọc
- `Pagination.tsx` - Component phân trang

## Cách sử dụng

```tsx
// Import từ nhóm cụ thể
import { PostCard, PostDetails } from '@/src/components/molecules/post';
import { SearchAndFilter, Pagination } from '@/src/components/molecules/common';

// Hoặc import tất cả
import { PostCard, SearchAndFilter, Pagination } from '@/src/components/molecules';
```

## Nguyên tắc tổ chức

1. **Nhóm theo chức năng**: Mỗi thư mục con đại diện cho một domain chức năng
2. **Tái sử dụng**: Components trong `common/` có thể được sử dụng ở nhiều nơi
3. **Dễ bảo trì**: Cấu trúc rõ ràng giúp dễ dàng tìm và sửa đổi components
4. **Mở rộng**: Dễ dàng thêm components mới vào nhóm phù hợp
