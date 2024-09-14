import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Genesis from "../../assets/lanches/genesis/5.png"
import Supremo from "../../assets/lanches/supremo/15.png"
import Imperador from "../../assets/lanches/imperador/sanduba-strogonoff.png"

export function CarouselCustomNavigation() {
    return (
        <Carousel placeholder={"teste"} transition={{ duration: 2 }} className="rounded-xl">
            <Image
                src={Genesis}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <Image
                src={Supremo}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <Image
                src={Imperador}
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}