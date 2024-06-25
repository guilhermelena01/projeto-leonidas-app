import { CloseIcon, HamburgerIcon } from "@/src/assets/fonts/svg/SvgComponents"
import { useHelp } from "@/src/hooks/useHelp"
import { mainFontFamily } from "@/src/pages"
import Link from "next/link"
import { useState } from "react"

export default function Menu() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const helpHook = useHelp()

    return (
        <>
            <div className={`z-50 fixed w-full hidden sm:block ${mainFontFamily.className}`}>
                <div className={`w-full font-via-appia gap-x-11 justify-center flex text-xl h-20 text-white ${helpHook.scrollTop !== 0 && "bg-black rounded-b-2xl"}`}>
                    <button><Link className="hover:font-bold" href="#home">HOME</Link></button>
                    <button><Link className="hover:font-bold" href="#nosso-lema">NOSSO LEMA</Link></button>
                    <button className="cursor-default" style={{ fontSize: "38px" }}>LEÔNIDAS</button>
                    <button><Link className="hover:font-bold" href="#cardapio">CARDÁPIO</Link></button>
                    <button><Link className="hover:font-bold" href="#contato">CONTATO</Link></button>
                </div>
            </div>

            {showMobileMenu ?
                <button onClick={() => { setShowMobileMenu(!showMobileMenu) }} style={{ position: "fixed", zIndex: "40", top: "2", right: 6 }}>
                    <CloseIcon />
                </button> :
                <button onClick={() => { setShowMobileMenu(!showMobileMenu) }} style={{ position: "fixed", zIndex: "40", top: "2", right: 6 }} className="sm:hidden">
                    <HamburgerIcon />
                </button>}

            {showMobileMenu &&
                <div className={`bg-black w-full h-screen fixed top-0 z-30 ${mainFontFamily.className}`}>
                    <div className="w-full flex flex-col justify-center items-center text-white font-via-appia mt-52 gap-y-8 text-lg">
                    <button><Link href="#home">HOME</Link></button>
                    <button><Link href="#nosso-lema">NOSSO LEMA</Link></button>
                    <button style={{ fontSize: "38px" }}>LEÔNIDAS</button>
                    <button><Link href="#cardapio">CARDÁPIO</Link></button>
                    <button><Link href="#contato">CONTATO</Link></button>
                    </div>
                </div>
            }
        </>
    )
}