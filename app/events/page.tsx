import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XURRO | Events",
    description: "Events",
  };


export default function EventsPage() {
    return (
        <>
            <div className="mt-36 md:px-[10%]">
                <h1 className="text-2xl flex">EVENTS</h1>

                <div className="flex justify-between mb-36 mt-12">
                    <div className="flex flex-col w-5/12 ">
                        <p className="mb-36">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                    </div>

                    <div className="w-5/12">
                        <div className="mr-12 py-12 h-3/4 flex justify-center items-center border">
                            <p>IMAGE</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="inset-0 w-full h-1/2 bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background.jpeg" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}