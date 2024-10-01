import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XURRO | FAQ",
    description: "FAQ",
  };



export default function FaqPage() {
    return (
        <>
            <div className="mt-36 px-6 md:px-[10%]">
                <h1 className="text-2xl flex">FAQ</h1>

                <div className="flex-col justify-between mb-36 mt-12">

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Kan ik de gels ook bestellen?</p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Energiegels bestellen kan bij ons helaas (nog) niet, maar neem graag een kijkje onder het kopje Events om te zien op welke vette evenementen je onze gels kan halen.</p>
                    </div>

                    <hr />

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mt-6 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Zit er cafeïne in de gels?</p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Nee, in onze gels zit geen cafeïne. Wij vinden het belangrijk de gels zo gezond mogelijk te maken en voor de gezondheid van het hart verwerken wij geen cafeïne in de gels.</p>
                    </div>

                    <hr />

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mt-6 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Zijn energiegels gezond?</p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Energiegels geven een snelle energieboost tijdens een lange dag vol dansen en feesten. Ze bevatten simpele koolhydraten die je lichaam direct kan gebruiken, waardoor ze handig zijn wanneer je uren achter elkaar in beweging bent. Onze gels bevatten ook elektrolyten die helpen om je vochtbalans op peil te houden, vooral bij warm weer of intensief dansen. Hoewel de energiegels je snel energie kunnen geven, bevatten ze wel veel suiker en soms kunstmatige stoffen. Als je er te veel van neemt of ze gebruikt buiten het festival, kan dit leiden tot een hoge suikerinname of maagklachten. Energiegels zijn dus perfect voor tijdens een festival, maar gebruik ze met mate en bij voldoende beweging.</p>
                    </div>

                    <hr />

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mt-6 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Bevatten de energiegels allergenen? </p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Onze energiegels bevatten geen allergenen!</p>
                    </div>

                    <hr />

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mt-6 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Hoeveel energiegels kan ik per dag gebruiken?</p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Dit hangt af van je activiteitenniveau, maar wij raden aan om niet meer dan 1 gel per dag te gebruiken. Ook wordt het combineren van de gels met alcohol en drugs afgeraden.</p>
                    </div>

                    <hr />

                    <div className="flex flex-col w-full font-bold tracking-wide leading-7 mt-6 mb-2">
                        <p className="mb-6 font-black">Q:&nbsp;&nbsp; Kan ik een energiegel nemen in plaats van een maaltijd?</p>
                        <p className="mb-6 leading-5">A:&nbsp;&nbsp; Nee, een energiegel is geen vervanging voor eten. Het zorgt een snelle energieboost door de suikers die het bevat.</p>
                    </div>

                </div>
            </div>

            <div className="flex inset-0 w-full h-[50vh] bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background5.png" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>        </>
    )
}