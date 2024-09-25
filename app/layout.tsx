import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Kanit } from "next/font/google"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const kanit = Kanit({
//   weight: '900',
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "XURRO Is Life",
  description: "7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-kanit font-black italic antialiased`}>
          <nav className="pointer-events-none fixed top-12 z-10 flex h-12 max-h-12 w-full items-center justify-between px-6 py-1 md:px-[10%] bg-gray-800 bg-opacity-80">
            <div className="pointer-events-auto flex items-center">
              <Link href={"/"}>
                <span className="font-kanit font-black italic text-4xl">XURRO</span>
              </Link>
            </div>

            <div className="pointer-events-auto hidden items-center gap-8 font-bold text-xl md:flex">
              <Link className="pointer-events-auto" href={"/product"}>
                PRODUCT
              </Link>
              <Link className="pointer-events-auto" href={"/events"}>
                EVENTS
              </Link>
              <Link className="pointer-events-auto" href={"/about"}>
                ABOUT US
              </Link>
              <Link className="pointer-events-auto" href={"/faq"}>
                FAQ
              </Link>
              <button  className="pointer-events-auto">
                LANGUAGE
              </button>
            </div>
            
            <div className="md:hidden">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="42" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
            </div>
          </nav>

        <main className="relative z-0 overflow-auto pt-12">
          {children}
        </main>

        <div className="fixed bottom-0 h-12 w-full flex justify-center items-center bg-black">
          <a target="_blank" href="https://www.instagram.com/xurro.official/?igsh=enFrbHJkd3N1MXow">instagram</a>
        </div>
      </body>
    </html>
  );
}
