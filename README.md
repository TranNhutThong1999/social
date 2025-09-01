# Social Media Application

A modern, responsive social media platform built with Next.js, TypeScript, and Tailwind CSS. This application provides a complete social networking experience with user authentication, posts, comments, and real-time interactions.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure login/register system with JWT tokens
- **Posts Management**: Create, read, update, and delete posts
- **Comments System**: Interactive commenting on posts with real-time updates
- **User Profiles**: Personalized user experience with avatar support
- **Responsive Design**: Mobile-first approach with modern UI/UX

### Technical Features
- **Next.js 14**: App Router with server-side rendering
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **State Management**: Zustand for client-side state management
- **API Integration**: RESTful API with proper error handling
- **Component Architecture**: Atomic design pattern for scalable components

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Icons**: Custom SVG icons
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: Yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.17 or higher)
- **Yarn** package manager
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd social
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   
   # Authentication
   JWT_SECRET=your-secret-key-here
   
   # Database (if applicable)
   DATABASE_URL=your-database-connection-string
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
social/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   │   ├── atoms/          # Basic building blocks
│   │   ├── molecules/      # Composite components
│   │   ├── organisms/      # Complex components
│   │   └── templates/      # Page layouts
│   ├── modules/            # Feature-based modules
│   │   ├── auth/           # Authentication module
│   │   ├── posts/          # Posts module
│   │   └── comments/       # Comments module
│   ├── hooks/              # Custom React hooks
│   ├── stores/             # State management
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles and Tailwind config
└── package.json            # Dependencies and scripts
```

## 🎯 Usage Guide

### Authentication
1. **Register**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Profile**: Manage your user profile and settings

### Creating Posts
1. Navigate to the home page
2. Use the post creation form
3. Add content, images, and tags
4. Publish your post

### Interacting with Content
- **Like/Unlike**: Click the like button on posts
- **Comment**: Add comments to posts
- **Share**: Share posts with other users
- **Follow**: Follow other users to see their content

### Navigation
- **Home**: View all posts from followed users
- **Profile**: Access your personal profile
- **Search**: Find users and content
- **Notifications**: Stay updated with latest activities

## 🧪 Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript compiler check

# Testing (if configured)
yarn test         # Run tests
yarn test:watch   # Run tests in watch mode
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `styles/tailwind.config.ts`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

### Next.js
Next.js configuration is in `next.config.ts` with optimized settings for production.

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive navigation menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized images and assets

## 🔒 Security Features

- JWT-based authentication
- Protected API routes
- Input validation and sanitization
- Secure password handling
- CORS protection

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **AWS**: Use AWS Amplify or custom server setup
- **Docker**: Build and deploy using containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Follow the atomic design pattern for components
- Write meaningful commit messages
- Include proper error handling

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process using port 3000
npx kill-port 3000
```

**Build errors**
```bash
# Clear Next.js cache
rm -rf .next
yarn install
yarn build
```

**TypeScript errors**
```bash
# Check for type issues
yarn type-check
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation and troubleshooting guide

---

**Happy coding! 🎉**
