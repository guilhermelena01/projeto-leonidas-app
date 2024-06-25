import SandubaReiLeonidas from "../../../public/sanduba-rei-leonidas.png"
import SaladaLeonidas from "@/public/36752415-ai-gerado-de-varias-tacas-do-saladas-em-uma-mesa-gratis-foto.jpg"
import VitaminaDosDeus from "@/public/20220201144535-sucosnaturais-header-fita-scaled.jpg"
import Image from "next/image"

export function Pics() {

    const pictures = [
        {
          pic1:
            <div className="w-full flex relative">
              <Image src={SandubaReiLeonidas} alt="sanduba do rei leonidas" className="w-full" />,
              <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 lg:p-28 sm:pt-24" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
                  SANDUBA DO REI LEÔNIDAS
                </h3>
                <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
                  O Sanduba do Rei Leônidas leva, não só o nome do nosso restaurante, mas também tudo o que queremos entregar a nossos clientes: ingredientes selecionados, sabor inigualável e uma experiência única.
                </p>
              </span>
            </div>,
          pic2:
            <div className="w-full flex relative">
              <Image src={SaladaLeonidas} alt="salada ateniense" className="w-full" />
              <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24 lg:p-28" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
                  SALADA ATENIENSE
                </h3>
                <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
                  A Salada Ateniense é uma celebração da simplicidade e elegância da culinária grega. Com ingredientes frescos e autênticos, cada garfada é uma viagem aos sabores mediterrâneos, combinando azeitonas, queijo feta, tomates suculentos e pepinos crocantes em uma harmonia de frescor e tradição.
                </p>
              </span>
            </div>,
          pic3:
            <div className="w-full flex relative">
              <Image src={VitaminaDosDeus} alt="vitamina dos deuses" className="w-full" />
              <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24 lg:p-28" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
                  VITAMINA DOS DEUSES
                </h3>
                <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
                  Um elixir celestial de saúde e sabor, a Vitamina dos Deuses é uma explosão de frescor e vitalidade. Cada gole é uma homenagem aos sabores mais puros da natureza, combinando frutas frescas selecionadas cuidadosamente para proporcionar uma experiência divina ao paladar.
                </p>
              </span>
            </div>
        }
      ]

    return {
        pictures
    }
}