export default function ProductPage () {
    return(
        <>
            <div className="mt-36 px-[10%] flex">
                <div>
                    <h1 className="text-2xl">THE PRODUCT</h1>
                    <p className="mt-24 mb-36 w-5/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                    <p className="mt-24 mb-36 w-5/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, provident? Molestias, consequuntur voluptatum libero excepturi perspiciatis, fuga nesciunt incidunt fugit dolorem soluta magnam repellendus blanditiis itaque officiis. Ipsum, neque quo?</p>
                </div>
                <div className="my-32 px-12 py-12 w-5/12 border">
                    <p>IMAGE</p>
                </div>
            </div>
            <div className="inset-0 w-full h-1/2 bg-center bg-no-repeat object-cover opacity-60">
                <img src="../rave-background.jpeg" alt="Homepage background image of rave" className="overflow-hidden object-cover object-center h-full w-full" />
            </div>
        </>
    )
}