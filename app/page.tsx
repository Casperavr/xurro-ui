import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XURRO",
  description: "Homepage",
};

export default function HomePage () {
    return(
        <div className="flex items-center justify-center h-full w-full">
            <div className="fixed h-auto w-full flex z-50 justify-center items-center animate-vibrate">
                <img className="h-1/2 mb-12 w-auto animate-popin" src="../xurro-transparant.png" alt="" />
            </div>
            <div className="fixed inset-0 h-full w-full bg-center bg-no-repeat object-cover opacity-70">
                <img src="../rave-background6.png" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </div>
    )
}