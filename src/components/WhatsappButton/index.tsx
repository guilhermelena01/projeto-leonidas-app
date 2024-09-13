import { WhatsappIcon } from "@/src/assets/svgIcons";
import Link from "next/link";
import { useState } from "react";

export default function WhatsappButton() {
    const [isShaked, setShake] = useState(false)
    const [showWhatsMessage, setShowWppMessage] = useState(false)

    function shakeWhats() {
        setShake(!isShaked)
    }

    setInterval(() => {
        shakeWhats()
    }, 5000)

    return (
        <>
            <section>
                <article
                    onMouseEnter={() => setShowWppMessage(true)}
                    onMouseLeave={() => setShowWppMessage(false)}
                    className={`flex flex-col items-center ${showWhatsMessage && "bg-[#25D366] rounded-md p-4 shadow-xl"}`}>
                    <Link
                        href={"https://wa.me/554599974830"}
                        className={`w-12 bg-[#25D366] rounded-full p-1.5 ${isShaked && "animate-shake"} ${showWhatsMessage && "animate-none"}`}>
                        <WhatsappIcon fill={"#FFFFFF"} />
                    </Link>
                    <p className={`text-white font-bold ${showWhatsMessage ? "block" : "hidden"}`}>
                        Faça seu pedido pelo Whatsapp.
                    </p>
                </article>
            </section>
        </>
    )
}