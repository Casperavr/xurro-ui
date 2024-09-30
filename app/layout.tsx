"use client";


import "./globals.css";
import Link from "next/link";
import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ navOpen, setNavOpen ] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <html className="h-full" lang="en">
      <body className={`font-kanit font-black italic antialiased h-full`}>
          <nav className="pointer-events-auto fixed top-12 z-10 flex h-12 max-h-12 w-full items-center justify-between px-6 py-1 md:px-[10%]"> {/* bg-black bg-opacity-10 */}
            <div className="pointer-events-auto flex items-center">
              <Link href={"/"}>
                <span className="font-kanit font-black italic text-2xl">XURRO</span>
              </Link>
            </div>

            <div className="pointer-events-auto hidden items-center gap-8 font-bold text-base md:flex">
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
                (LANGUAGE)
              </button>
            </div>
            
            <button onClick={toggleNav} className={`${navOpen ? "hidden " : ""}md:hidden`}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="42" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
            </button>

            </nav>


            <div className={`${!navOpen ? "hidden " : ""}fixed z-50 flex h-full w-full flex-col items-end justify-center gap-16 font-bold bg-gray-700 bg-opacity-80`}>
              

              <div className="pointer-events-auto fixed top-12 z-10 flex h-12 max-h-12 w-full items-center justify-between px-6 py-1 md:px-[10%]">
                <div className="pointer-events-auto flex items-center">
                  <Link href={"/"}>
                    <span className="font-kanit font-black italic text-4xl">XURRO</span>
                  </Link>
                </div>


                <button onClick={toggleNav} className={`${!navOpen ? "hidden " : ""}md:hidden`}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="42" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" /></svg>
                </button>



                <button onClick={toggleNav} className={`${navOpen ? "hidden " : ""}md:hidden`}>
                  <div >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="42" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
                  </div>
                </button>
              </div>
              
              <div className="pr-8 flex h-full w-full flex-col items-end justify-center gap-16">
                <Link onClick={toggleNav} className="pointer-events-auto" href={"/product"}>
                  PRODUCT
                </Link>
                <Link onClick={toggleNav} className="pointer-events-auto" href={"/events"}>
                  EVENTS
                </Link>
                <Link onClick={toggleNav} className="pointer-events-auto" href={"/about"}>
                  ABOUT US
                </Link>
                <Link onClick={toggleNav} className="pointer-events-auto" href={"/faq"}>
                  FAQ
                </Link>
                <button className="pointer-events-auto">
                  (LANGUAGE)
                </button>
              </div>
            </div>


        <main className="relative z-0 overflow-auto pt-12 h-full">
          {children}
        </main>

        <div className="fixed bottom-0 h-12 px-6 md:px-[10%] w-full flex justify-between items-center bg-black">
          <p className="text-xs">kvk: 95084614</p>
          <a className="h-1/2 w-auto" target="_blank" title="Opens instagram in a new tab" href="https://www.instagram.com/xurro.official/?igsh=enFrbHJkd3N1MXow">
            <svg className="h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF"></path> </g></svg>
          </a>
        </div>
      </body>
    </html>
  );
}
