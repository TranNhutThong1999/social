import { Providers } from '@/modules/auth/providers/Providers';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/organisms/Header';

const inter = Inter({ subsets: ['latin'] });
export default async function RootLayoutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get('auth-token')?.value;

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers token={token}>
          <article className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            <main className="container mx-auto px-4 py-5 sm:py-12 max-w-6xl">
              {children}
            </main>
          </article>
        </Providers>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              maxWidth: '90vw',
            },
          }}
        />
      </body>
    </html>
  );
}
