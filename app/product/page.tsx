import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XURRO | Product",
    description: "Product",
  };



export default function ProductPage () {
    return(
        <>
            <div className="mt-36 px-6 md:px-[10%]">
                <h1 className="text-2xl flex">HET PRODUCT</h1>

                <div className="flex md:flex-row flex-col justify-between mb-36 mt-12">
                    <div className="flex flex-col md:w-5/12 font-bold tracking-wide leading-7">
                        <p className="mb-8">*Energie, verpakt in een gelletje*</p>
                        <p className="mb-8">Op zoek naar een extra boost om het festival tot het einde vol te houden? Onze energiegel geeft je precies wat je nodig hebt. Elk zakje zit boordevol energie, dankzij maltodextrine, een lichtzoet en gemakkelijk verteerbaar koolhydraat dat wordt gewonnen uit zetmeel. Maltodextrine staat bekend om zijn vermogen om snel energie te leveren, waardoor het ideaal is voor wanneer je snel een efficiënte oppepper nodig hebt.</p>
                        <p className="mb-8">Wat deze energiegel anders maakt, is dat het geen cafeïne bevat. Zo bescherm je je hart en kun je zonder zorgen genieten van die extra boost. Elk zakje bevat 40g, waarvan ..g aan koolhydraten voor langdurige energie.</p>
                        <p className="mb-8">Op dit moment is de gel verkrijgbaar in één heerlijke smaak: ... </p>
                        <p className="mb-8">Wil je op de hoogte blijven van onze nieuwe smaken en producten? Klik 
                            <a className="font-black underline" href="https://www.instagram.com/xurro.official/?igsh=enFrbHJkd3N1MXow" target="_blank" title="INSTAGRAM">
                                &nbsp;hier&nbsp;
                            <svg className="inline relative bottom-1" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                            </a>
                            &nbsp;en blijf up-to-date!
                        </p>
                    </div>

                    <div className="md:w-5/12 w-full">
                        <div className="md:mr-12 py-12 h-3/4 flex justify-center items-center border">
                            <p>IMAGE</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="inset-0 w-full h-1/2 bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background.webp" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}