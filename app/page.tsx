import type { Metadata } from "next";
import CollabComponent from "./components/collabs";

export const metadata: Metadata = {
  title: "XURRO",
  description: "Homepage",
};

export default function HomePage () {
    return(
        <>
            <div className="flex items-center justify-center h-[95vh] w-full overflow-hidden pt-12 md:pt-10">
                <div className="absolute h-auto md:w-auto w-10/12 flex z-10 justify-center overflow-hidden items-center animate-vibrate">
                    <img className="w-11/12 h-auto md:h-1/2 md:w-auto animate-popin" src="../xurro-transparant.webp" alt="Homepage transparent xurro logo" />
                </div>
                <div className="inset-0 h-full w-full bg-center bg-no-repeat object-cover opacity-70">
                    <img src="../rave-background6.webp" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
                </div>
            </div>

            <div className="h-1/2 md:px-[2%] mx-auto py-3 bg-[#111]">
                <h1 className="text-sm mb-6 font-semibold px-6 md:px-[8%]">COLLABS</h1>

                <CollabComponent/>
            </div>
        </>
    )
}