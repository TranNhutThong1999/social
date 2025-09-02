# Social Media Blog Application

A modern social media blog application built with Next.js, React, and TypeScript.

## 🚀 Main Features

- **User Authentication**: Registration, login, logout
- **Post Management**: View posts
- **Comment System**: Add and view comments for posts
- **Responsive Interface**: Compatible with all devices
- **State Management**: Using Zustand and React Query
- **UI Components**: Component system designed following Atomic Design principles

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling framework
- **Zustand** - State management
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **Axios** - HTTP client


### Backend API
- **Next.js API Routes** - Server-side API endpoints (Full-stack within Next.js)
- **JWT** - Authentication

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (private)/         # Protected routes
│   ├── (public)/          # Public routes (login, register)
│   └── api/               # API endpoints
├── components/             # React components
│   ├── atoms/             # Basic UI components
│   ├── molecules/         # Composite components
│   ├── organisms/         # Complex components
│   └── templates/         # Layout templates
├── modules/                # Feature modules
│   ├── auth/              # Authentication
│   ├── posts/             # Posts management
│   └── comments/          # Comments system
├── hooks/                  # Custom React hooks
├── stores/                 # State management
├── types/                  # TypeScript types
├── utils/                  # Utility functions
└── mocks/                  # Mock data
```

## 🚀 Installation and Running the Project

### System Requirements
- Node.js 18+ 
- Yarn or npm

### Step 1: Clone the project
```bash
git clone <repository-url>
cd social
```

### Step 2: Install dependencies
```bash
yarn install
# or
npm install
```

### Step 3: Run the project in development environment
```bash
yarn dev
# or
npm run dev
```

The project will run at: `http://localhost:3000`

### Step 4: Build and run production
```bash
yarn build
yarn start
# or
npm run build
npm start
```

## 📖 Usage Guide

### 1. Account Registration
- Visit `/register`
- Fill in information: email, password, confirm password
- Click "Register" to create a new account

### 2. Login
- Visit `/login`
- Enter email and password
- Click "Login" to access the system

### 3. View Posts
- Homepage displays a list of all posts
- Click on a post to view details
- Use the search bar to find specific posts

### 4. Comments
- View post details
- Scroll down to the comments section
- Enter comment content
- Click "Send Comment"

## 🎨 Component System

### Atomic Design Pattern
The project uses Atomic Design principles to organize components:

- **Atoms**: Basic components (Button, Input, LoadingSpinner)
- **Molecules**: More complex components (CommentForm, PostCard)
- **Organisms**: Large components (Header, PostList, CommentsSection)
- **Templates**: Layout templates (RootLayoutTemplate)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach


### API Configuration
The project uses Next.js API Routes as the backend. API endpoints are defined in `src/constants/api.ts`:

- **Authentication**: `/api/auth/login`, `/api/auth/register`, `/api/auth/logout`, `/api/auth/me`
- **Posts**: `/api/post`, `/api/post/[id]`, `/api/post/[id]/comments`

API routes are implemented in the `src/app/api/` directory:
- `src/app/api/auth/` - Handle user authentication
- `src/app/api/post/` - Manage posts and comments

## 📱 Responsive Design

The project is designed to be responsive with the following breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🧪 Testing

```bash
# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch
```

## 📦 Build and Deploy

### Production Build
```bash
yarn build
```

### Deploy to Vercel
1. Connect repository to Vercel
2. Configure environment variables
3. Automatic deployment when pushing code

### Deploy to other servers
```bash
yarn build
yarn start
```

## 📝 Available Scripts

- `yarn dev` - Run development server with Turbopack
- `yarn build` - Build project for production
- `yarn start` - Run production server
- `yarn lint` - Check code style
- `yarn type-check` - Check TypeScript types

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
yarn build
```

## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest)

## 📄 License

This project is released under the MIT License.
