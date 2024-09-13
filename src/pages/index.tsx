import { Noto_Serif_JP } from "next/font/google"
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import FotoInsta from "@/src/assets/img/420517857_391683869892802_4398154841072913416_n 2.png"
import SanduicheNatureba from "../../public/sanduiche-natural.jpg"
import SaladaLeonidas from "@/public/36752415-ai-gerado-de-varias-tacas-do-saladas-em-uma-mesa-gratis-foto.jpg"
import { useHelp } from "../hooks/useHelp";
import { maskPhone } from "../util/utils";
import { Pics } from "../components/Pics";
import { useState } from "react";
import { WhatsappIcon } from "../assets/svgIcons";
import WhatsappButton from "../components/WhatsappButton";

export const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Home() {
  const helpHook = useHelp()
  const pictures = Pics()
  const [zoomIn, setZoomIn] = useState(false)
  let user = process.env.NEXT_PUBLIC_USERNAME
  let pass = process.env.NEXT_PUBLIC_PASSWORD

  return (
    <>
      <Menu />
      <div className={`w-full overflow-x-hidden relative ${font.className}`}>
        <span className="fixed right-8 bottom-8 z-40"><WhatsappButton /></span>
        <div id="home" className="relative">
          <p className="absolute z-30 inset-0 text-white text-2xl lg:text-5xl xl:text-6xl top-20 lg:top-72 xl:top-96 px-12 xl:px-72 text-center">Prepare-se para uma verdadeira revolução alimentar: saborosa, nutritiva e medicinal.</p>
          <Image src={SanduicheNatureba} alt="" className="brightness-75 w-full" />
        </div>
        <div id="nosso-lema" className="w-full text-black px-8 lg:px-16 xl:px-48 2xl:px-72 xl:py-32">
          <p className="sm:text-base xl:text-lg 2xl:text-2xl">
            Bem-vindo ao Leonida’s Sanduba, onde a tradição e a inovação se unem para criar uma experiência gastronômica verdadeiramente transformadora. Inspirados pelos antigos guerreiros espartanos e pelos sábios filósofos atenienses, buscamos não apenas alimentar o corpo, mas também nutrir a alma. <br /><br />

            Em um mundo onde a correria muitas vezes obscurece a importância da alimentação saudável, encontramos na história e na filosofia da Grécia Antiga uma fonte de inspiração e sabedoria. Acreditamos nos segredos milenares que podem transformar não apenas o que comemos, mas também quem somos. <br /><br />

            No coração do nosso restaurante, está o compromisso com a qualidade, a autenticidade e o respeito pela tradição. Desde os ingredientes frescos e selecionados até o cuidado artesanal em cada prato, cada detalhe é pensado para proporcionar uma experiência única e memorável. <br /><br />

            Junte-se a nós nessa jornada de descoberta e redescoberta dos sabores e valores que têm resistido ao teste do tempo. Aqui, cada refeição é uma oportunidade de nutrir não apenas o corpo, mas também a mente e o espírito. <br />
          </p>
        </div>

        <div className={`w-full flex ${zoomIn ? "h-full" : "h-[1080px]"} overflow-hidden bg-[#210140] text-white flex-col items-center mt-4 md:mt-12 md:text-xl lg:text-2xl xl:text-[40px]`} id="cardapio">
          <h1 className="my-4 xl:my-14">
            CONHEÇA NOSSO CARDÁPIO ESPECIAL
          </h1>
          <div className={`w-full flex relative ${zoomIn ? "h-full" : "h-[900px]"}`} onClick={() => setZoomIn(!zoomIn)}>
            <button onClick={helpHook.switchPicTLeft} className={`absolute left-4 inset-y-0 transition-all duration-300 hover:scale-105 ${helpHook.pictureId == 0 && "hidden"}`}>
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
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-16 py-8 md:py-8 xl:py-32 text-black" id="social-media">
          <span className="text-center mb-4 md:text-3xl md:my-4 xl:mb-16 xl:text-5xl">
            ACOMPANHE NOSSO TRABALHO NO INSTAGRAM <br />
            <Link href={"https://www.instagram.com/leonidassanduba/"} className="hover:font-bold">@leonidassanduba</Link>
          </span>
          <div className="w-full md:w-3/4 xl:w-1/2 grid grid-cols-3 gap-2">
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
          </div>
        </div>

        <div className="w-full flex flex-col md:pl-16 md:h-96 xl:h-[580px] md:relative bg-[#210140] text-white justify-center items-center md:items-start md:justify-normal pt-4 xl:pt-10 2xl:pt-16 md:gap-y-3" id="location">
          <h2 className="text-lg md:text-3xl xl:text-5xl md:w-80 xl:w-1/4 md:text-center md:pt-4 md:-ml-20 xl:-ml-5">VENHA CONHECER NOSSA CASA</h2>
          <svg className="hidden md:block w-20 md:ml-10 xl:w-32 xl:ml-20 2xl:ml-40 xl:my-4" viewBox="0 0 119 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.5 68.25C70.4381 68.25 79.3333 59.5042 79.3333 48.75C79.3333 37.9957 70.4381 29.25 59.5 29.25C48.5619 29.25 39.6667 37.9957 39.6667 48.75C39.6667 59.5042 48.5619 68.25 59.5 68.25ZM59.5 39C64.969 39 69.4167 43.3729 69.4167 48.75C69.4167 54.1271 64.969 58.5 59.5 58.5C54.0309 58.5 49.5833 54.1271 49.5833 48.75C49.5833 43.3729 54.0309 39 59.5 39Z" fill="white" />
            <path d="M56.6242 106.343C57.4634 106.932 58.4688 107.249 59.5 107.249C60.5312 107.249 61.5367 106.932 62.3758 106.343C63.8832 105.295 99.3105 80.145 99.1667 48.75C99.1667 27.2464 81.3712 9.75 59.5 9.75C37.6288 9.75 19.8333 27.2464 19.8333 48.7256C19.6895 80.145 55.1168 105.295 56.6242 106.343ZM59.5 19.5C75.9071 19.5 89.25 32.6186 89.25 48.7744C89.3541 70.4096 67.4928 89.8365 59.5 96.2081C51.5121 89.8316 29.6459 70.3999 29.75 48.75C29.75 32.6186 43.0929 19.5 59.5 19.5Z" fill="white" />
          </svg>
          <p className="mb-4 md:text-xl xl:text-4xl md:w-52 xl:w-80 2xl md:-ml-2 2xl:ml-20">
            R. Afonso Pena, 1672
            Centro - Cascavel/PR</p>
          <iframe title="teste" className="w-full md:w-[70%] md:h-64 md:top-0 md:right-0 md:p-0 h-48 py-0.5 md:absolute xl:h-[80%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3970078378097!2d-53.45210028522562!3d-24.95260381948541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d56eede66921%3A0xbb82308c7f99d53!2sLe%C3%B4nidas%20Sanduba!5e0!3m2!1spt-BR!2sbr!4v1708592355205!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
      </div>
    </>

  )
}
