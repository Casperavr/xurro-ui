import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [ navOpen, setNavOpen ] = useState<boolean>(false);

    const toggleNav = () => {
      setNavOpen(!navOpen);
    };
    return (
        <>
            <nav className="pointer-events-auto fixed top-12 md:top-0 z-20 flex h-12 md:h-10 max-h-12 w-full items-center justify-between px-6 py-1 md:px-[10%] bg-black bg-opacity-50"> {/* bg-black bg-opacity-10 */}
                <div className="pointer-events-auto flex items-center transform transition duration-500 hover:scale-150">
                    <Link href={"/"}>
                        <span className="font-kanit font-black italic text-2xl">XURRO</span>
                    </Link>
                </div>

                <div className="pointer-events-auto hidden items-center gap-8 font-bold text-base md:flex">
                    <Link className="pointer-events-auto transform transition duration-500 hover:scale-150" href={"/product"}>
                        PRODUCT
                    </Link>
                    <Link className="pointer-events-auto transform transition duration-500 hover:scale-150" href={"/events"}>
                        EVENTS
                    </Link>
                    <Link className="pointer-events-auto transform transition duration-500 hover:scale-150" href={"/about"}>
                        ABOUT US
                    </Link>
                    <Link className="pointer-events-auto transform transition duration-500 hover:scale-150" href={"/faq"}>
                        FAQ
                    </Link>
                    {/* <button className="pointer-events-auto">
                        (LANGUAGE)
                    </button> */}
                </div>

                <button onClick={toggleNav} className={`${navOpen ? "hidden " : ""}md:hidden`}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="42" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
                </button>

            </nav>


            <div className={`${!navOpen ? "hidden " : ""}fixed z-50 flex h-full w-full flex-col items-end justify-center gap-16 font-bold bg-gray-700 bg-opacity-80`}>


                <div className="pointer-events-auto fixed top-12 z-50 flex h-12 max-h-12 w-full items-center justify-between px-6 py-1 md:px-[10%]">
                    <div className="pointer-events-auto flex items-center">
                        <Link href={"/"}>
                            <span className="font-kanit font-black italic text-2xl">XURRO</span>
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
                    {/* <button className="pointer-events-auto">
                        (LANGUAGE)
                    </button> */}
                </div>
            </div>
        </>
    )
}