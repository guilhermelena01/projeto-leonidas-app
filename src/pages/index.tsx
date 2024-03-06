import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import FotoInsta from "@/src/assets/img/420517857_391683869892802_4398154841072913416_n 2.png"
import { useState } from "react";
import { ArrowSvgToLeft, ArrowSvgToRight } from "../assets/svgIcons";
import VideoPlayer from "../components/Video";
import { useHelp } from "../hooks/useHelp";

export default function Home() {

  const helpHook = useHelp()

  const pictures = [
    {
      pic1:
        <div className="w-full flex relative">
          <img src="/sanduba-rei-leonidas.png" className="w-full" />,
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24" style={{ backgroundColor: "rgba(115, 86, 61, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4">
              SANDUBA DO REI LEÔNIDAS
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              O Sanduba do Rei Leônidas leva, não só o nome do nosso restaurante, mas também tudo o que queremos entregar a nossos clientes: ingredientes selecionados, sabor inigualável e uma experiência única.
            </p>
          </span>
        </div>,
      pic2:
        <div className="w-full flex relative">
          <img src="/36752415-ai-gerado-de-varias-tacas-do-saladas-em-uma-mesa-gratis-foto.jpg" className="w-full" />
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24" style={{ backgroundColor: "rgba(115, 86, 61, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4">
              SALADA ATENIENSE
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              A Salada Ateniense é uma celebração da simplicidade e elegância da culinária grega. Com ingredientes frescos e autênticos, cada garfada é uma viagem aos sabores mediterrâneos, combinando azeitonas, queijo feta, tomates suculentos e pepinos crocantes em uma harmonia de frescor e tradição.
            </p>
          </span>
        </div>,
      pic3:
        <div className="w-full flex relative">
          <img src="/20220201144535-sucosnaturais-header-fita-scaled.jpg" className="w-full" />
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24" style={{ backgroundColor: "rgba(115, 86, 61, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4">
              VITAMINA DOS DEUSES
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              Um elixir celestial de saúde e sabor, a Vitamina dos Deuses é uma explosão de frescor e vitalidade. Cada gole é uma homenagem aos sabores mais puros da natureza, combinando frutas frescas selecionadas cuidadosamente para proporcionar uma experiência divina ao paladar.
            </p>
          </span>
        </div>
    }
  ]

  return (
    <>
      <Menu />
      <div className="w-full overflow-x-hidden">
        <div id="home" className="bg-blue-400">
          <VideoPlayer />
        </div>
        <div id="nosso-lema" className="w-full font-via-appia text-primary px-8 lg:px-16 xl:px-48 2xl:px-72 xl:py-32">
          <h1 className="text-3xl my-8 xl:my-16 lg:text-4xl 2xl:text-6xl">
            “Transforme suas capacidades com os segredos milenares dos guerreiros espartanos e dos filósofos atenienses.”
          </h1>
          <p className="sm:text-lg xl:text-xl 2xl:text-2xl">
            Bem-vindo ao Leonida’s, onde a tradição e a inovação se unem para criar uma experiência gastronômica verdadeiramente transformadora. Inspirados pelos antigos guerreiros espartanos e pelos sábios filósofos atenienses, buscamos não apenas alimentar o corpo, mas também nutrir a alma. <br /><br />

            Em um mundo onde a correria muitas vezes obscurece a importância da alimentação saudável, encontramos na história e na filosofia da Grécia Antiga uma fonte de inspiração e sabedoria. Acreditamos nos segredos milenares que podem transformar não apenas o que comemos, mas também quem somos. <br /><br />

            No coração do nosso restaurante, está o compromisso com a qualidade, a autenticidade e o respeito pela tradição. Desde os ingredientes frescos e selecionados até o cuidado artesanal em cada prato, cada detalhe é pensado para proporcionar uma experiência única e memorável. <br /><br />

            Junte-se a nós nessa jornada de descoberta e redescoberta dos sabores e valores que têm resistido ao teste do tempo. Aqui, cada refeição é uma oportunidade de nutrir não apenas o corpo, mas também a mente e o espírito. <br />
          </p>
        </div>

        <div className="w-full flex font-via-appia bg-primary text-white flex-col items-center mt-4 md:mt-12 md:text-xl lg:text-2xl xl:text-[40px]" id="cardapio">
          <h1 className="py-3 xl:my-14">
            CONHEÇA NOSSO CARDÁPIO ESPECIAL
          </h1>
          <div className="w-full flex h-40 sm:h-72 lg:h-[658px]">
            {pictures.map(picture => (helpHook.pictureId == 0 ? picture.pic1 : helpHook.pictureId == 1 ? picture.pic2 : picture.pic3))}
            <button onClick={helpHook.switchPicTLeft} className={`absolute left-2 mt-14 sm:mt-28 lg:mt-60 ${helpHook.pictureId == 0 && "hidden"}`}>
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
            <button onClick={helpHook.switchPicToRight} className={`absolute right-2 mt-14 sm:mt-28 lg:mt-60 rotate-180 ${helpHook.pictureId == 2 && "hidden"}`}>
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

        <div className="w-full flex flex-col items-center justify-center px-16 py-8 font-via-appia md:py-8 xl:py-32" id="social-media">
          <h1 className="text-center mb-4 md:text-3xl md:my-4 xl:mb-16 xl:text-5xl">
            ACOMPANHE NOSSO TRABALHO, NO INSTAGRAM <br />
            <Link href={"https://www.instagram.com/leonidassanduba/"}>@leonidassanduba</Link>
          </h1>
          <div className="w-full md:w-3/4 xl:w-1/2 grid grid-cols-3 gap-2">
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
            <Image src={FotoInsta} alt="foto do instagram" />
          </div>
        </div>

        <div className="w-full flex flex-col md:pl-16 md:h-96 xl:h-[580px] md:relative bg-primary text-white font-via-appia justify-center items-center md:items-start md:justify-normal pt-4 xl:pt-10 2xl:pt-16 md:gap-y-3" id="location">
          <h2 className="text-lg md:text-3xl xl:text-5xl md:w-80 xl:w-1/4 md:text-center md:pt-4 md:-ml-20 xl:-ml-5">VENHA CONHECER NOSSA CASA</h2>
          <svg className="hidden md:block w-20 md:ml-10 xl:w-32 xl:ml-20 2xl:ml-40 xl:my-4" viewBox="0 0 119 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.5 68.25C70.4381 68.25 79.3333 59.5042 79.3333 48.75C79.3333 37.9957 70.4381 29.25 59.5 29.25C48.5619 29.25 39.6667 37.9957 39.6667 48.75C39.6667 59.5042 48.5619 68.25 59.5 68.25ZM59.5 39C64.969 39 69.4167 43.3729 69.4167 48.75C69.4167 54.1271 64.969 58.5 59.5 58.5C54.0309 58.5 49.5833 54.1271 49.5833 48.75C49.5833 43.3729 54.0309 39 59.5 39Z" fill="white" />
            <path d="M56.6242 106.343C57.4634 106.932 58.4688 107.249 59.5 107.249C60.5312 107.249 61.5367 106.932 62.3758 106.343C63.8832 105.295 99.3105 80.145 99.1667 48.75C99.1667 27.2464 81.3712 9.75 59.5 9.75C37.6288 9.75 19.8333 27.2464 19.8333 48.7256C19.6895 80.145 55.1168 105.295 56.6242 106.343ZM59.5 19.5C75.9071 19.5 89.25 32.6186 89.25 48.7744C89.3541 70.4096 67.4928 89.8365 59.5 96.2081C51.5121 89.8316 29.6459 70.3999 29.75 48.75C29.75 32.6186 43.0929 19.5 59.5 19.5Z" fill="white" />
          </svg>
          <p className="mb-4 md:text-xl xl:text-4xl md:w-52 xl:w-80 2xl md:-ml-2 2xl:ml-20">
            R. Afonso Pena, 1672
            Centro - Cascavel/PR</p>
          <iframe className="w-full md:w-[70%] md:h-64 md:top-0 md:right-0 md:p-0 h-48 py-0.5 md:absolute xl:h-[80%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3970078378097!2d-53.45210028522562!3d-24.95260381948541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d56eede66921%3A0xbb82308c7f99d53!2sLe%C3%B4nidas%20Sanduba!5e0!3m2!1spt-BR!2sbr!4v1708592355205!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id="contato" className="w-full flex flex-col sm:flex-row relative py-4 lg:p-0 bg-white font-via-appia text-primary md:justify-center">
          <img src="/36752415-ai-gerado-de-varias-tacas-do-saladas-em-uma-mesa-gratis-foto.jpg" alt="Prato de saladas Leonidas" className="w-full hidden lg:flex opacity-60 h-[760px]" />
          <h1 className="hidden md:flex text-4xl xl:text-6xl absolute xl:mt-8 drop-shadow-[0_1px_1px_rgba(0,0,0,8)] lg:text-white">ENTRE EM CONTATO</h1>
          <div className="w-full lg:absolute lg:flex md:gap-x-12 xl:gap-x-24">
            <form className="w-full flex flex-col justify-center items-center gap-y-2 px-4 pb-8 pt-2 md:mt-16 xl:mt-32 xl:pl-72 md:relative">
              <h2 className="text-lg md:hidden">ENTRE EM CONTATO</h2>
              <input placeholder="Nome completo" type="text" className="w-full xl:text-xl" />
              <input placeholder="Seu melhor e-mail" type="email" className="w-full xl:text-xl" />
              <input placeholder="Seu telefone" type="tel" className="w-full xl:text-xl" />
              <input placeholder="Qual o assunto?" type="text" className="w-full xl:text-xl" />
              <textarea placeholder="Como podemos te ajudar?" id="" cols={30} rows={10} className="w-full xl:text-xl"></textarea>
              <button className="bg-primary text-white p-2 md:absolute -bottom-6 left-32 xl:left-72 border xl:text-xl hover:bg-white hover:text-primary hover:border hover:border-primary">ENVIAR FORMULÁRIO</button>
            </form>
  
            <div className="w-full flex flex-col items-center justify-center lg:text-white md:flex-row md:mt-16 xl:mt-32 lg:justify-normal lg:items-start">
              <div className="flex lg:flex-col md:justify-center gap-x-4">
                <ul>
                  <h2 className="text-lg md:text-xl xl:text-3xl mb-2 lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">Horário de atendimento</h2>
                  <li className="xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">Terça a Sexta: 19h às 23h</li>
                  <li className="xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">Sábados e feriados: 14h às 18h</li>
                  <li className="xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">Domingos: 15h às 18h</li>
                </ul>
  
                <ul>
                  <h2 className="text-lg md:text-xl xl:text-3xl mb-2 lg:mt-8 lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">Nossas mídias sociais</h2>
                  <Link href={"https://www.instagram.com/leonidassanduba/"} className="flex gap-x-2 md:items-center md:text-lg md:gap-x-1 xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" className="fill-primary lg:fill-white" /></svg>
                    @leonidassanduba
                  </Link>
                  <Link href={"https://www.instagram.com/leonidassanduba/"} className="flex gap-x-2 md:items-center md:text-lg md:gap-x-1 xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" className="fill-primary lg:fill-white" /></svg>
                    /leonidassanduba
                  </Link>
                  <li className="flex gap-x-2 md:items-center md:text-lg md:gap-x-1 xl:text-xl lg:drop-shadow-[0_1px_1px_rgba(0,0,0,8)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4"><title>whatsapp</title><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" className="fill-primary lg:fill-white" /></svg>
                    45 9 9928-3578
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center py-2 font-via-appia bg-primary text-white md:mt-8 lg:m-0 md:py-4 xl:text-lg">
          <p>Desenvolvido por Guilherme Lena</p>
        </footer>
      </div>
    </>

  )
}
