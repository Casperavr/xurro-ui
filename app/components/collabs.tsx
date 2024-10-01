import Carousel from "./carousel";

import binnnenstad from "../../public/debinnenstad.webp";
import ittw from "../../public/ITTW.webp";


export default function CollabComponent() {

    const images = [
        {
            id: 0,
            index: 0,
            src: binnnenstad,
            alt: "",
            title: "De Binnenstad ADE - 18/10"
        },
        {
            id: 1,
            index: 1,
            src: ittw,
            alt: "",
            title: "Into The Woods ADE - 19/10"
        },
      ]


    return(
        <>
            <div className="py-24">
                <Carousel images={images} />
            </div>
        </>
    )
}