import { useEffect, useState } from "react"

//Lanche-Divine
import Divine1 from "../assets/lanches/Divine/23.jpg"
import Divine2 from "../assets/lanches/Divine/27.jpg"
//Lanche-Emissario
import Emissario1 from "../assets/lanches/Emissario/22.webp"
//Lanche-Genesis
import Genesis1 from "../assets/lanches/Genesis/10.jpg"
import Genesis2 from "../assets/lanches/Genesis/12.webp"
import Genesis3 from "../assets/lanches/Genesis/26.webp"
//Lanche-Imperador
import Imperador1 from "../assets/lanches/Imperador/2.jpg"
import Imperador2 from "../assets/lanches/Imperador/41.jpg"
import Imperador3 from "../assets/lanches/Imperador/9.jpg"
//Lanche-Midas
import Midas1 from "../assets/lanches/Midas/15.webp"
import Midas2 from "../assets/lanches/Midas/21.webp"
//Lanche-Paladino
import Paladino1 from "../assets/lanches/Paladino/13.webp"
import Paladino2 from "../assets/lanches/Paladino/8.webp"
//Lanche-Radiance
import Radiance1 from "../assets/lanches/Radiance/24.webp"
//Lanche-Soberano
import Soberano1 from "../assets/lanches/Soberano/14.webp"
import Soberano2 from "../assets/lanches/Soberano/20.webp"
//Lanche-Supremo
import Supremo1 from "../assets/lanches/Supremo/16.webp"
import Supremo2 from "../assets/lanches/Supremo/19.webp"
import Supremo3 from "../assets/lanches/Supremo/25.webp"

export function useHelp() {
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const images = [
        [
            Divine1,
            Divine2,
            Emissario1
        ],
        [
            Imperador1,
            Imperador2,
            Imperador3
        ],
        [
            Genesis1,
            Genesis2,
            Genesis3
        ],
        [
            Midas1,
            Midas2,
            Radiance1
        ],
        [
            Paladino1,
            Paladino2,
            Soberano1,
        ],
        [
            Soberano2,
            Supremo1,
            Supremo2,
            Supremo3
        ],
    ]

    return {
        images,
        scrollTop,
        setScrollTop,
    }
}