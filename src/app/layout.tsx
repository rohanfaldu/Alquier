'use client';
import { Outfit } from "next/font/google";
import "./globals.css";
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-open-sans",
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${outfit.variable} ${openSans.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen bg-[#F2F3F7]">
          <div className="container mx-auto max-w-[768px] bg-[#FFFFFF]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
