import { Metadata } from "next";
import CollabComponent from "../components/collabs";
import ContactForm from "../components/contactForm";

export const metadata: Metadata = {
    title: "XURRO | Events",
    description: "Events",
  };


export default function EventsPage() {
    return (
        <>
            <div className="mt-36 px-6 md:px-[10%]">
                <h1 className="text-2xl flex">EVENTS</h1>

                <div className="flex flex-col md:flex-row justify-between mb-36 mt-12">
                    <div className="flex flex-col md:w-5/12 font-bold tracking-wide leading-7">
                        <p className="mb-8">Wil jij nou ook ons gelletje op jouw festival verkopen? Voor samenwerkingen kun je contact opnemen via het contactformulier hiernaast.</p>
                        <p className="mb-8">Hier onder zie je de festivals waar je ons al op kunt verwachten.</p>
                    </div>

                    <ContactForm />
                </div>

            </div>

            <div className="h-1/2 md:px-[2%] mx-auto py-3 bg-[#111]">
                <h1 className="text-sm mb-6 font-semibold px-6 md:px-[8%]">COLLABS</h1>

                <CollabComponent/>
            </div>

            <div className="flex w-full h-[50vh] bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background3.jpg" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}