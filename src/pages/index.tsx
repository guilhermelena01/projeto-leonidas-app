import { Noto_Serif_JP } from "next/font/google"
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import FotoInsta from "@/src/assets/img/420517857_391683869892802_4398154841072913416_n 2.png"
import SanduicheNatureba from "../../public/sanduiche-natural.jpg"
import { useHelp } from "../hooks/useHelp";
import { Pics } from "../components/Pics";
import { useState } from "react";
import { PinIcon } from "../assets/svgIcons";
import { CarouselCustomNavigation } from "../components/Carousel";

export const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Home() {
  const helpHook = useHelp()
  const pictures = Pics()
  const [zoomIn, setZoomIn] = useState(false)

  return (
    <>
      <Menu />
      <div className={`w-full overflow-x-hidden ${font.className}`}>
        <div id="home" className="relative">
          <p className="absolute z-30 inset-0 text-white text-2xl lg:text-5xl xl:text-6xl top-20 lg:top-72 xl:top-96 px-12 xl:px-72 text-center">Prepare-se para uma verdadeira revolução alimentar: saborosa, nutritiva e medicinal.</p>
          <Image src={SanduicheNatureba} alt="" className="brightness-75 w-full" />
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
          className={`w-full flex ${zoomIn ? "h-full" : "h-[1080px]"} overflow-hidden bg-[#210140] text-white flex-col items-center mt-4 md:mt-12 md:text-xl lg:text-2xl xl:text-4xl`}
          id="cardapio">
          <h1 className="my-4 xl:my-14">
            CONHEÇA NOSSO CARDÁPIO ESPECIAL
          </h1>
          <CarouselCustomNavigation />
          {/* <div className={`w-full flex relative ${zoomIn ? "h-full" : "h-[900px]"}`} onClick={() => setZoomIn(!zoomIn)}>
            <button onClick={helpHook.switchPicTLeft} className={`absolute left-4 inset-y-0 transition-all duration-300 hover:scale-105 ${helpHook.pictureId == 0 && "hidden"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 41"
                className="w-4 sm:w-7 lg:w-8"
              >
                <path
                  fill={"#fff"}
                  d="M24.378 0c.412 0 .833.138 1.148.405.632.534.632 1.408 0 1.942L3.917 20.64l21.294 18.017c.631.534.631 1.408 0 1.942-.631.535-1.665.535-2.296 0L.474 21.611c-.632-.534-.632-1.408 0-1.943L23.23.405A1.794 1.794 0 0124.379 0z"
                ></path>
              </svg>
            </button>
            <button onClick={helpHook.switchPicToRight} className={`absolute right-4 inset-y-0 rotate-180 transition-all duration-300 hover:scale-105 ${helpHook.pictureId == 2 && "hidden"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 41"
                className="w-4 sm:w-6 lg:w-8"
              >
                <path
                  fill={"#fff"}
                  d="M24.378 0c.412 0 .833.138 1.148.405.632.534.632 1.408 0 1.942L3.917 20.64l21.294 18.017c.631.534.631 1.408 0 1.942-.631.535-1.665.535-2.296 0L.474 21.611c-.632-.534-.632-1.408 0-1.943L23.23.405A1.794 1.794 0 0124.379 0z"
                ></path>
              </svg>
            </button>
          </div> */}
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
            <span className="hidden md:block"><PinIcon width="100" height="100" /></span>
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
      </div>
    </>

  )
}
