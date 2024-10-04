"use client"

import { useState } from "react";

export default function ContactForm() {
    const [ mailBody, setMailBody ] = useState<string>("");
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleMailBody = (textinput: string) => {
        const bodySpaceReplace = textinput.replaceAll(" ", "%20");
        const bodyLineBreakReplace = bodySpaceReplace.replaceAll("\n", "%0D%0A")
        setMailBody(bodyLineBreakReplace);
    }

    const copyToClipboard = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        } catch (err) {
          console.error(err);
        }
      };
    
    return (
        <div className="md:w-5/12 md:mr-12 h-full flex flex-col p-6 ml-2 justify-center items-center font-bold tracking-wide leading-7 bg-[#111] rounded-3xl ">
            <p className="w-full">
                Stuur een email naar 
                <span className="underline">
                    &nbsp;info.xurro@gmail.com
                </span>
                <button className="ml-1 px-1 border rounded transform transition duration-500 hover:scale-110" onClick={() => copyToClipboard("info.xurro@gmail.com")}>
                    {isCopied ? "Copied!" : "Copy"}
                    <svg className="inline h-3 w-3" fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.842 93.843"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M74.042,11.379h-9.582v-0.693c0-1.768-1.438-3.205-3.206-3.205h-6.435V3.205C54.819,1.437,53.381,0,51.614,0H42.23 c-1.768,0-3.206,1.438-3.206,3.205V7.48H32.59c-1.768,0-3.206,1.438-3.206,3.205v0.693h-9.582c-2.393,0-4.339,1.945-4.339,4.34 v73.785c0,2.394,1.946,4.34,4.339,4.34h54.238c2.394,0,4.339-1.946,4.339-4.34V15.719C78.38,13.324,76.434,11.379,74.042,11.379z M32.617,25.336h28.61c1.709,0,3.102-1.391,3.102-3.1v-3.438h7.554l0.021,68.164l-49.939,0.021V18.801h7.554v3.436 C29.517,23.945,30.907,25.336,32.617,25.336z"></path> </g> </g></svg>
                </button>
            </p>
            <textarea placeholder="Schrijf je mail hier" className="font-semibold text-black p-1 w-full h-16 mt-1 bg-[#eee]" name="mailbody" onChange={(e) => {handleMailBody(e.target.value)}}/>

            <a 
                className="underline text-end w-full ml-auto" 
                href={`mailto:info.xurro@gmail.com?body=${mailBody}`} 
                target="_blank"
                >
                Stuur Mail
            </a>
        </div>
    )
}