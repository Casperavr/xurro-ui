import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [ mailBody, setMailBody ] = useState<string>("");

    const handleMailBody = (textinput: string) => {
        const bodySpaceReplace = textinput.replaceAll(" ", "%20");
        const bodyLineBreakReplace = bodySpaceReplace.replaceAll("\n", "%0D%0A")
        setMailBody(bodyLineBreakReplace);
    }


    return(
        <>
            <div className="h-1/2 px-6 py-3 md:px-[10%] w-full flex flex-col md:flex-row justify-between items-start bg-black">

                <div className="w-full h-1/2 md:w-1/2 md:h-full font-semibold mt-12">
                    <h1 className="text-sm mb-2">CONTACT</h1>
                    <div className="flex flex-col ml-2">
                        <p className="text-xs h-4">Send an email to info.xurro@gmail.com</p>
                        <textarea className="text-xs font-semibold text-black p-1 w-3/4 h-10" name="mailbody" onChange={(e) => {handleMailBody(e.target.value)}}/>

                        <a 
                            className="text-xs underline text-end mr-[25%]" 
                            href={`mailto:info.xurro@gmail.com?body=${mailBody}`} 
                            target="_blank"
                            >
                            Send Mail
                        </a>
                    </div>
                    
                    <p className="text-xs h-4 ml-2">Check out our Instagram or Github below</p>

                    <div className="flex ml-2">
                        <a className="h-6 w-auto mr-1" target="_blank" title="Opens Instagram in a new tab" href="https://www.instagram.com/xurro.official/?igsh=enFrbHJkd3N1MXow">
                            <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF"></path> </g></svg>
                        </a>
                        <a className="h-6 w-6 mx-1" href="https://github.com/Casperavr/xurro-ui" target="_blank" title="Opens Github in a new tab">
                            <img className="h-6 w-6" src="../github-mark-white.png" alt="github logo" />
                        </a>
                    </div>

                    <h1 className="text-sm mt-12 mb-2">INFO</h1>
                    <p className="text-xs ml-2">kvk&nbsp;&nbsp;&nbsp; 95084614</p>
                    <p className="text-xs ml-2">BTW Idenditificatie&nbsp;&nbsp;&nbsp; NL866995006B01</p>

                </div>


                <div className="w-full h-1/2 md:w-1/2 md:h-full font-semibold mt-12">
                    <h1 className="text-sm mb-6 md:text-end">PAGES</h1>
                    <div className="flex flex-col md:justify-end mr-2">
                        <Link className="text-sm underline md:text-end text-xs" href={"/"}>HOME</Link>
                        <Link className="text-sm underline md:text-end text-xs" href={"/product"}>PRODUCT</Link>
                        <Link className="text-sm underline md:text-end text-xs" href={"/events"}>EVENTS</Link>
                        <Link className="text-sm underline md:text-end text-xs" href={"/about"}>ABOUT US</Link>
                        <Link className="text-sm underline md:text-end text-xs" href={"/faq"}>FAQ</Link>
                    </div>


                    
                </div>

            </div>
        </>
    )
}








