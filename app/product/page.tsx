import { Metadata } from "next";

export const metadata: Metadata = {
    title: "XURRO | Product",
    description: "Product",
  };



export default function ProductPage () {
    return(
        <>
            <div className="mt-36 px-[10%] flex justify-between">
                <div className="w-5/12">
                    <h1 className="text-2xl flex">THE PRODUCT</h1>
                    <div className="my-16 mr-12 py-12 h-3/4 flex justify-center items-center border">
                        <p>IMAGE</p>
                    </div>
                </div>
                <div className="flex flex-col items-end w-5/12">
                    <p className="mt-24 mb-36 text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                    <p className="mt-24 mb-36 text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                </div>
            </div>
            <div className="inset-0 w-full h-1/2 bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background.jpeg" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}