# 🧹 Clean Code Guide

## 📋 Tổng quan
Hướng dẫn này mô tả các nguyên tắc và best practices để viết clean code trong dự án Social.

## 🎯 Nguyên tắc Clean Code

### 1. **Naming Conventions**
- **Variables/Constants**: camelCase
- **Components**: PascalCase
- **Files**: kebab-case hoặc PascalCase cho components
- **Types/Interfaces**: PascalCase với prefix mô tả

```typescript
// ✅ Good
const userData = { name: 'John' };
const UserProfile = () => {};
interface UserProfileProps {}

// ❌ Bad
const user_data = { name: 'John' };
const userprofile = () => {};
```

### 2. **File Structure**
```
src/
├── components/
│   ├── atoms/          # Basic components (Button, Input)
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex components
│   └── templates/      # Page layouts
├── hooks/              # Custom hooks
├── lib/                # Utilities, constants
├── types/              # Type definitions
└── stores/             # State management
```

### 3. **Component Guidelines**

#### Props Interface
```typescript
interface ComponentProps {
  // Required props first
  title: string;
  onAction: () => void;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  
  // HTML attributes
  className?: string;
}
```

#### Component Structure
```typescript
import React from 'react';
import { cn } from '@/lib/utils/cn';

interface ComponentProps {
  // props definition
}

export const Component: React.FC<ComponentProps> = ({
  // destructure props
}) => {
  // hooks
  // handlers
  // render
};
```

### 4. **Error Handling**

#### Use Error Boundaries
```typescript
<ErrorBoundary fallback={CustomErrorComponent}>
  <YourComponent />
</ErrorBoundary>
```

#### Use Custom Error Hook
```typescript
const { handleError } = useErrorHandler({
  showToast: true,
  toastMessage: 'Custom error message'
});
```

### 5. **Type Safety**

#### Avoid `any`
```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
}

// ❌ Bad
const user: any = { id: '1', name: 'John' };
```

#### Use Generic Types
```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

### 6. **Constants Management**

#### Use Constants File
```typescript
// lib/constants/routes.ts
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
} as const;
```

### 7. **Performance Best Practices**

#### Memoization
```typescript
const MemoizedComponent = React.memo(Component);
const memoizedValue = useMemo(() => expensiveCalculation(data), [data]);
const memoizedCallback = useCallback(() => handleAction(id), [id]);
```

#### Lazy Loading
```typescript
const LazyComponent = lazy(() => import('./LazyComponent'));
```

### 8. **Code Organization**

#### Single Responsibility
```typescript
// ✅ Good - Each function has one purpose
const validateEmail = (email: string): boolean => { /* ... */ };
const validatePassword = (password: string): boolean => { /* ... */ };

// ❌ Bad - Function does multiple things
const validateForm = (form: any) => {
  // validates email, password, and submits form
};
```

#### DRY Principle
```typescript
// ✅ Good - Reusable utility
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

// ❌ Bad - Duplicate code
const formatDate1 = (date: Date) => { /* ... */ };
const formatDate2 = (date: Date) => { /* ... */ };
```

### 9. **Testing Guidelines**

#### Component Testing
```typescript
describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### 10. **Documentation**

#### JSDoc Comments
```typescript
/**
 * Validates user email format
 * @param email - The email to validate
 * @returns true if email is valid, false otherwise
 */
const validateEmail = (email: string): boolean => {
  // implementation
};
```

## 🛠️ Tools & Scripts

### ESLint
```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix auto-fixable issues
```

### Prettier
```bash
npm run format      # Format code
npm run format:check # Check formatting
```

### TypeScript
```bash
npm run type-check  # Check types
```

## 📝 Checklist

Trước khi commit code, hãy đảm bảo:

- [ ] Code follows naming conventions
- [ ] No TypeScript errors
- [ ] No ESLint warnings/errors
- [ ] Code is properly formatted
- [ ] Components are properly typed
- [ ] Error handling is implemented
- [ ] No console.log statements in production code
- [ ] Constants are extracted to appropriate files
- [ ] Functions have single responsibility
- [ ] Code is readable and self-documenting

## 🔄 Continuous Improvement

- Regular code reviews
- Refactor complex functions
- Update dependencies regularly
- Monitor bundle size
- Performance optimization
- Security audits
