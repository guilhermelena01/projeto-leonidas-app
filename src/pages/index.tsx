import { Noto_Serif_JP } from "next/font/google"
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import FotoInsta from "@/src/assets/img/420517857_391683869892802_4398154841072913416_n 2.png"
import Espiral from "../assets/lanches/FOTO GRANDE ESPIRAL UNIVERSO.webp"
import Carousel from "../components/Carousel";
import { useHelp } from "../hooks/useHelp";
import { PinIcon, WhatsappIcon } from "../assets/svgIcons";
import { useState } from "react";

export const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Home() {
  const helpHook = useHelp()
  const [shake, setShake] = useState(false)
  const [expandWppButton, setExpandWppButton] = useState(false)

  function shakeWppButton() {
    setShake(!shake)
  }

  setInterval(() => {
    shakeWppButton()
  }, 2000)

  return (
    <>
      <Menu />
      <main className={`w-full overflow-x-hidden ${font.className}`}>

        <div id="home" className="relative">
          <p className="absolute z-30 inset-0 text-white text-2xl lg:text-5xl xl:text-6xl top-20 lg:top-72 xl:top-96 px-12 xl:px-72 text-center">Prepare-se para uma verdadeira revolução alimentar: saborosa, nutritiva e medicinal.</p>
          <Image src={Espiral} alt="" className="brightness-75 w-full" />
        </div>

        <div id="nosso-lema" className="w-full text-black px-8 lg:px-16 xl:px-48 2xl:px-72 xl:py-32">
          <p className="sm:text-base xl:text-lg 2xl:text-2xl">
            Bem-vindo ao Leonida’s, onde a tradição e a inovação se unem para criar uma experiência gastronômica verdadeiramente transformadora. Inspirados pelos antigos guerreiros espartanos e pelos sábios filósofos atenienses, buscamos não apenas alimentar o corpo, mas também nutrir a alma. <br /><br />

            Em um mundo onde a correria muitas vezes obscurece a importância da alimentação saudável, encontramos na história e na filosofia da Grécia Antiga uma fonte de inspiração e sabedoria. Acreditamos nos segredos milenares que podem transformar não apenas o que comemos, mas também quem somos. <br /><br />

            No coração do nosso restaurante, está o compromisso com a qualidade, a autenticidade e o respeito pela tradição. Desde os ingredientes frescos e selecionados até o cuidado artesanal em cada prato, cada detalhe é pensado para proporcionar uma experiência única e memorável. <br /><br />

            Junte-se a nós nessa jornada de descoberta e redescoberta dos sabores e valores que têm resistido ao teste do tempo. Aqui, cada refeição é uma oportunidade de nutrir não apenas o corpo, mas também a mente e o espírito. <br />
          </p>
        </div>

        <div
          className={`w-full flex overflow-hidden bg-[#210140] text-white flex-col items-center mt-4 md:mt-12 md:text-xl lg:text-2xl xl:text-4xl`}
          id="cardapio">
          <h1 className="my-4 xl:my-14">
            CONHEÇA NOSSO CARDÁPIO ESPECIAL
          </h1>
          <Carousel
            images={helpHook.images}
          />
        </div>

        <section className="w-full flex flex-col items-center justify-center px-16 py-8 md:py-8 xl:py-32 text-black gap-8" id="social-media">
          <article className="text-center md:text-2xl xl:text-3xl">
            ACOMPANHE NOSSO TRABALHO NO INSTAGRAM <br />
            <Link href={"https://www.instagram.com/leonidassanduba/"} className="hover:font-bold">@leonidassanduba</Link>
          </article>
          <article className="w-full md:w-3/4 xl:w-1/2 grid grid-cols-3 gap-2">
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
          </article>
        </section>

        <section className="w-full flex flex-col md:flex-row gap-8 md:gap-0 bg-[#210140] text-white justify-center md:items-start items-center md:min-h-60" id="location">
          <article className="flex flex-col gap-4 md:gap-6 items-center md:p-8">
            <h2 className="text-lg md:text-2xl xl:text-4xl md:text-center">
              VENHA CONHECER NOSSA CASA!
            </h2>
            <span className="hidden md:block"><PinIcon width={100} height={100} /></span>
            <span className="flex md:flex-col items-center">
              <p className="md:text-xl text-center md:w-60">
                R. Afonso Pena, 1672
                Centro - Cascavel/PR</p>
            </span>
          </article>
          <iframe
            className="w-full md:h-72 flex"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3970078378097!2d-53.45210028522562!3d-24.95260381948541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d56eede66921%3A0xbb82308c7f99d53!2sLe%C3%B4nidas%20Sanduba!5e0!3m2!1spt-BR!2sbr!4v1708592355205!5m2!1spt-BR!2sbr"
            style={{ border: 0 }} loading="lazy">

          </iframe>
        </section>

        <button
          onMouseEnter={() => setExpandWppButton(true)}
          onMouseLeave={() => setExpandWppButton(false)}
          className={`fixed bottom-8 right-8 z-50 ${expandWppButton && "w-auto"}`}>
          <span className={`bg-[#25D366] p-2 w-auto flex items-center gap-1.5 shadow-xl rounded-full text-white font-bold ${shake && "animate-shake"}`}>
            <Link target="_blank" href="https://wa.me/5545999974830" className="flex gap-1.5">
              <WhatsappIcon width={28} height={28} />
              {expandWppButton && "Clique aqui e faça seu pedido"}
            </Link>
          </span>
        </button>
      </main>
    </>

  )
}
