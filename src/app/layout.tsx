'use client';
import { useRouter } from 'next/navigation';
import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
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
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={` ${outfit.variable} ${openSans.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen bg-[#F2F3F7]">
          <div className="container mx-auto max-w-[768px] bg-[#FFFFFF]">
            <div className="flex items-center relative w-full pt-[28px] pb-[28px] pr-[16px] pl-[16px] bg-[#FFFFFF]">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                router.back();
              }} className="left-0">
                <Image
                  src="/images/back-img.svg"
                  alt="Back"
                  className=""
                  width={24}
                  height={24}
                />
              </a>
              <h1 className="font-outfit font-medium text-[20px] leading-[24px] text-[#004FAC] flex-1 text-center">Alquiler</h1>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
