import { CloseIcon, HamburgerIcon } from "@/src/assets/fonts/svg/SvgComponents"
import styles from "@/src/styles/Menu.module.css"
import { useState } from "react"

export default function Menu() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
            <div style={{ width: "100%", position: "fixed", zIndex: "30", display: "none" }}>
                <div style={{ width: "100%", height: "80px", display: "flex", fontSize: "20px", color: "white", backgroundColor: "rgba(115, 86, 61, 0.8)    ", justifyContent: "center", columnGap: "46px" }}>
                    <button>HOME</button>
                    <button>NOSSOS VALORES E MISSÃO</button>
                    <button style={{ fontSize: "38px" }}>LEÔNIDAS</button>
                    <button>CARDÁPIO</button>
                    <button>CONTATO</button>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                {showMobileMenu ?
                    <button onClick={() => { setShowMobileMenu(!showMobileMenu) }} style={{ position: "absolute", zIndex: "40", top: "2", right: 6 }}>
                        <CloseIcon />
                    </button> :
                    <button onClick={() => { setShowMobileMenu(!showMobileMenu) }} style={{ position: "absolute", zIndex: "40", top: "2", right: 6 }}>
                        <HamburgerIcon />
                    </button>
                }
            </div>
            {showMobileMenu &&
                <div className="bg-primary w-full h-screen fixed top-0 z-30">
                    <div className="w-full flex flex-col justify-center items-center text-white font-via-appia mt-52 gap-y-8 text-lg">
                        <button>HOME</button>
                        <button>NOSSOS VALORES E MISSÃO</button>
                        <button style={{ fontSize: "38px" }}>LEÔNIDAS</button>
                        <button>CARDÁPIO</button>
                        <button>CONTATO</button>
                    </div>
                </div>
            }
        </>
    )
}