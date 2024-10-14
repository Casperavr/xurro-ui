"use client"

import { useState } from "react";

export default function HomePageLogo () {
    const [ logoClicked, setLogoClicked ] = useState<boolean>(false);
    const [ onLoad, setOnLoad ] = useState<boolean>(true);

    const handleLogoClick = () => {
        if(onLoad){
            setOnLoad(false);
        };
        if(!logoClicked){
            setLogoClicked(true);
            setTimeout(() => {
                setLogoClicked(false);
            }, 1500);
        }
    }

    return(
        <>
            <button onClick={handleLogoClick} className={`absolute h-[75%] md:w-auto w-10/12 flex z-10 justify-center overflow-hidden items-center animate-vibrate`}>
                <img className={`${logoClicked ? "animate-rotate " : ""}${onLoad ? "animate-popin " : ""}w-11/12 h-auto md:h-1/2 md:w-auto`} src="../xurro-transparant.webp" alt="Homepage transparent xurro logo" />
            </button>
        </>
    )
}