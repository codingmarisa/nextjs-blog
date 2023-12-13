import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CodingMarisa - Blog',
  description: 'Blog by CodingMarisa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* TODO: Footer */}
      </body>
    </html>
  );
}
