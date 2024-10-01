export default function AboutPage () {
    return(
        <>
            <div className="mt-36 px-6 md:px-[10%]">
                <h1 className="text-2xl flex">ABOUT US</h1>

                <div className="flex justify-between mb-36 mt-12">
                    <div className="flex flex-col w-full font-bold tracking-wide leading-7">
                        <p className="mb-8">Welkom bij ons verhaal!</p>
                        <p className="mb-8">Wij zijn Jamie, Lars en Annabel, drie enthousiaste studenten die allemaal één grote passie delen: festivals. Wij houden ervan om die unieke sfeer te beleven, de energie van de menigte te voelen en onze favoriete artiesten te zien optreden. Maar als trouwe festivalgangers weten we ook dat een festival eigenlijk een marathon is. Soms sta je wel 10 tot 12 uur op de benen, dansend, genietend, maar laten we eerlijk zijn, tegen de avond wordt dat soms best zwaar.</p>
                        <p className="mb-8">Tijdens onze vele festivalbezoeken viel ons op hoe moeilijk het kan zijn om tot het einde vol energie mee te doen, vooral als je favoriete artiest pas later op de avond optreedt. Je wilt niets missen, maar hoe houd je dat vol?</p>
                        <p className="mb-8">Uit die gedachte is ons idee geboren. We wilden iets ontwikkelen dat festivalgangers, jullie dus, helpt om hun energie snel en langdurig op peil te houden. Na veel brainstormen en testen kwamen we uit op ons product: energiegel. Een compacte en handige oplossing waarmee jij, net als wij, die laatste uurtjes van een festival net zo intens en energiek kunt beleven als de eerste.</p>
                        <p className="mb-8">Met onze energiegel sta je er niet alleen krachtig bij aan het begin van de dag, maar ben je ook klaar voor de hoogtepunten aan het einde van de avond. We weten hoe belangrijk die momenten zijn en willen ervoor zorgen dat je ze volop kunt beleven!</p>
                        <p className="mb-8">Laten we samen genieten van elk festival, van de eerste tot de laatste noot!</p>
                    </div>

                </div>

            </div>

            <div className="inset-0 w-full h-1/2 bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background.webp" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}