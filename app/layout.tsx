"use client";

import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {


  return (
    <html className="h-full" lang="en">
      <body className={`font-kanit font-black italic antialiased h-full`}>
        <Header />

        <main className="z-0 overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
