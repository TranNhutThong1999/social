# Cookie Authentication Guide

## Tổng quan

Dự án đã được chuyển từ localStorage sang cookie để lưu trữ JWT token. Điều này cung cấp bảo mật tốt hơn vì:

- Cookie httpOnly không thể truy cập từ JavaScript (chống XSS)
- Cookie tự động được gửi với mọi request
- Không cần quản lý token thủ công ở frontend

## Cấu trúc API

### 1. Authentication APIs

#### Login (`POST /api/auth/login`)
```typescript
// Request
{
  "email": "user@example.com",
  "password": "password123"
}

// Response
{
  "user": { ... },
  "success": true
}
// Cookie: auth-token được set tự động
```

#### Logout (`POST /api/auth/logout`)
```typescript
// Response
{
  "success": true
}
// Cookie: auth-token được clear tự động
```

#### Get Current User (`GET /api/auth/me`)
```typescript
// Response (nếu authenticated)
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "username": "johndoe",
  "avatar": "..."
}

// Response (nếu không authenticated)
{
  "error": "No token provided"
}
```

### 2. Protected APIs

#### Create Comment (`POST /api/posts/[id]/comments`)
```typescript
// Request
{
  "body": "Comment content"
}
// Cookie: auth-token được gửi tự động

// Response
{
  "id": 1,
  "postId": 1,
  "authorId": 1,
  "body": "Comment content",
  "createdAt": "2024-01-15T11:00:00Z",
  "updatedAt": "2024-01-15T11:00:00Z",
  "author": { ... }
}
```

#### Get Post Detail (`GET /api/posts/[id]`)
```typescript
// Response
{
  "id": 1,
  "title": "Post title",
  "content": "Post content",
  "isAuthenticated": true, // true nếu user đã login
  // ... other post data
}
```

## Frontend Implementation

### 1. Axios Configuration

```typescript
// modules/shared/lib/axios.ts
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Quan trọng: cho phép gửi cookie
  // ...
});
```

### 2. Authentication Hook

```typescript
// modules/auth/hooks/useAuth.ts
export const useAuth = () => {
  const login = useCallback(async (credentials: LoginCredentials) => {
    const { user } = await authApi.login(credentials);
    loginStore(user); // Chỉ lưu user data, không lưu token
  }, []);
  
  // ...
};
```

### 3. Auth Provider

```typescript
// modules/shared/components/AuthProvider.tsx
export const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await authApi.getCurrentUser();
        updateUser(user);
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      }
    };
    checkAuthStatus();
  }, []);
  
  return <>{children}</>;
};
```

## Backend Implementation

### 1. Auth Utility Functions

```typescript
// modules/shared/lib/auth.ts
export function verifyAuthToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) return { user: null, error: 'No token provided' };
  
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = users.find(u => u.id === decoded.userId);
  
  return { user };
}

export function requireAuth(request: NextRequest) {
  const authResult = verifyAuthToken(request);
  if (!authResult.user) {
    return {
      response: NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    };
  }
  return { user: authResult.user };
}
```

### 2. Protected API Routes

```typescript
// src/app/api/posts/[id]/comments/route.ts
export async function POST(request: NextRequest) {
  const authResult = requireAuth(request);
  if (authResult.response) {
    return authResult.response;
  }
  
  const user = authResult.user;
  // ... xử lý logic tạo comment
}
```

## Lợi ích của Cookie Authentication

1. **Bảo mật tốt hơn**: Cookie httpOnly không thể truy cập từ JavaScript
2. **Tự động**: Không cần quản lý token thủ công
3. **CSRF Protection**: Có thể sử dụng CSRF token
4. **Session Management**: Dễ dàng quản lý session

## Lưu ý

1. **CORS**: Đảm bảo server được cấu hình để chấp nhận credentials
2. **HTTPS**: Trong production, cookie nên được set với flag `secure: true`
3. **SameSite**: Cấu hình `sameSite: 'lax'` để cân bằng bảo mật và UX
4. **Expiration**: Token có thời hạn 7 ngày, có thể điều chỉnh trong API login

## Migration từ localStorage

Nếu bạn đang chuyển từ localStorage:

1. Xóa tất cả code liên quan đến localStorage token
2. Cập nhật axios interceptor để không gửi Authorization header
3. Thêm `withCredentials: true` vào axios config
4. Cập nhật auth provider để kiểm tra status từ cookie
5. Test lại tất cả protected routes
