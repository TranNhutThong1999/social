# Social Media Blog Application

A modern social media blog application built with Next.js, React, and TypeScript.

**Repository**: [https://github.com/TranNhutThong1999/social.git](https://github.com/TranNhutThong1999/social.git)

## 🌐 Live Demo

**Demo Link**: [https://social-xr23.vercel.app/](https://social-xr23.vercel.app/)

Experience the application live with all features including user authentication, post management, and comment system.

## 🚀 Main Features

- **User Authentication**: Registration, login, logout
- **Post Management**: View posts
- **Comment System**: Add and view comments for posts
- **Responsive Interface**: Compatible with all devices
- **State Management**: Using Zustand and React Query
- **UI Components**: Component system designed following Atomic Design principles

## ⚠️ Important Notice

**Data Storage Limitation**: This application currently stores user registration data and comments only on the client-side (browser) without a persistent database. This means:
- User accounts and comments will be lost when the browser is refreshed or closed
- Data is not synchronized across different devices or browsers
- This is a demo/development version for UI/UX demonstration purposes
- For production use, a proper database backend should be implemented

**Demo Accounts**: For testing purposes, the application provides pre-configured demo accounts that are always available:
- john@example.com / password123
- jane@example.com / password123

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
- **Client-side Storage** - Data stored in browser memory/localStorage (no persistent database)

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
- Node.js 22.11.0
- Yarn or npm

### Step 1: Clone the project
```bash
git clone https://github.com/TranNhutThong1999/social.git
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
- **Note**: Account data is stored only in browser memory and will be lost on page refresh

### 2. Login
- Visit `/login`
- Enter email and password
- Click "Login" to access the system
- **Note**: You can only login with accounts created in the current browser session

#### Demo Accounts Available
For testing purposes, you can use these pre-configured demo accounts:
- **Email**: john@example.com | **Password**: password123
- **Email**: jane@example.com | **Password**: password123

These demo accounts are available directly on the login page for easy access.

### 3. View Posts
- Homepage displays a list of all posts
- Click on a post to view details
- Use the search bar to find specific posts

### 4. Comments
- View post details
- Scroll down to the comments section
- Enter comment content
- Click "Send Comment"
- **Note**: Comments are stored only in browser memory and will be lost on page refresh

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
