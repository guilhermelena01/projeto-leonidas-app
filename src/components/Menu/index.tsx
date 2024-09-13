import { CloseIcon, HamburgerIcon } from "@/src/assets/fonts/svg/SvgComponents"
import { useHelp } from "@/src/hooks/useHelp"
import { useState } from "react"
import Link from "next/link"
import LogoLeonidas from "@/src/assets/logo-leonidas.png"
import Image from "next/image"
import { font } from "@/src/pages"

export default function Menu() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const helpHook = useHelp()

    return (
        <>
            <div className={`z-50 fixed w-full hidden sm:block ${font.className}`}>
                <div className={`w-full justify-center items-center flex text-lg h-48 text-white transition-all duration-200
                    ${helpHook.scrollTop !== 0 && "bg-[#210140] rounded-b-2xl"}`}>
                    <Image src={LogoLeonidas} alt="logo leonidas sanduba" className="absolute top-8" />
                    <span className="flex gap-x-24 mt-16">
                        <Link className="hover:scale-110 hover:text-[#73e831]" href="#home">HOME</Link>
                        <Link className="hover:scale-110 hover:text-[#73e831]" href="#nosso-lema">NOSSO LEMA</Link>
                        <Link className="hover:scale-110 hover:text-[#73e831]" href="#cardapio">CARDÁPIO</Link>
                        <Link className="hover:scale-110 hover:text-[#73e831]" href="#contato">CONTATO</Link>
                    </span>
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
                <div className={`bg-black w-full h-screen fixed top-0 z-30`}>
                    <div className="w-full flex flex-col justify-center items-center text-white  mt-52 gap-y-8 text-lg">
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