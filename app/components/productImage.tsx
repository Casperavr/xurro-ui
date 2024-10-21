"use client"

import { useState } from "react";

export default function ProductImage() {
    const [ logoClicked, setLogoClicked ] = useState<boolean>(false);
    const [ onLoad, setOnLoad ] = useState<boolean>(true);

    const handleProductClick = () => {
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
        <button onClick={handleProductClick} className="md:w-5/12 w-full md:mr-12 py-12 h-3/4 flex justify-center items-center bg-[#111] rounded-3xl animate-vibrate mb-[5%]">
            <img className={`${logoClicked ? "animate-pop " : ""}${onLoad ? "animate-popin " : ""}h-[95%]`} src="../product-xurro.png"/>
        </button>
    )
}