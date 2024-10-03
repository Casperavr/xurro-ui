import type { Metadata } from "next";
import CollabComponent from "./components/collabs";
import HomePageLogo from "./components/homepageLogo";

export const metadata: Metadata = {
  title: "XURRO",
  description: "Homepage",
};

export default function HomePage () {
    return(
        <>
            <div className="flex items-center justify-center h-[95vh] w-full overflow-hidden pt-12 md:pt-10">
                <HomePageLogo/>
                <div className="inset-0 h-full w-full bg-center bg-no-repeat object-cover opacity-70">
                    <img src="../rave-background6.webp" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
                </div>
            </div>

            <div className="h-1/2 md:px-[2%] mx-auto py-3 bg-[#111]">
                <h1 className="text-sm mb-6 font-semibold px-6 md:px-[8%]">COLLABS</h1>
                <p className="text-sm mb-6 font-semibold px-6 md:px-[8%]">Hieronder zie je de festivals waar je ons al op kunt verwachten.</p>

                <CollabComponent/>
            </div>
        </>
    )
}