import Genesis from "../../assets/lanches/genesis/5.png"
import Supremo from "../../assets/lanches/supremo/15.png"
import Imperador from "../../assets/lanches/imperador/sanduba-strogonoff.png"
import Image from "next/image"

export function Pics() {

  const pictures = [
    {
      pic1:
        <div className="w-full flex relative">
          <Image src={Genesis} alt="sanduba do rei leonidas" className="h-full w-full hover:cursor-zoom-in"/>,
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 lg:p-28 sm:pt-24" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
              Gênesis
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              Delicie-se com nossos suculentos lanches de cordeiro, preparados com cortes selecionados e temperos exclusivos, trazendo o sabor autêntico e sofisticado da carne de cordeiro em cada mordida.
            </p>
          </span>
        </div>,
      pic2:
        <div className="w-full flex relative">
          <Image src={Imperador} alt="salada ateniense" className="w-full" />
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24 lg:p-28" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
              Imperador
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              Nossos deliciosos lanches são preparados com um dos sabores mais amados pelo nosso povo, o famoso strogonoff. Um sabor incomparável que seu paladar jamais experimentou.
            </p>
          </span>
        </div>,
      pic3:
        <div className="w-full flex relative">
          <Image src={Supremo} alt="vitamina dos deuses" className="w-full" />
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24 lg:p-28" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
              Supremo
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              Experimente nossos lanches Supremos, lanches irresistíveis com patê de frango cremoso, queijo derretido, tomate fresco e pepino crocante, combinando sabor e frescor em cada mordida.
            </p>
          </span>
        </div>,
      pic4:
        <div className="w-full flex relative">
          <Image src={Supremo} alt="vitamina dos deuses" className="w-full" />
          <span className="text-white absolute top-0 w-1/2 right-0 h-full px-3 py-6 sm:p-14 sm:pt-24 lg:p-28" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <h3 className="text-sm sm:text-lg lg:text-4xl xl:text-5xl mb-4 lg:mt-24">
              Soberano
            </h3>
            <p className="text-xs sm:text-base lg:text-2xl xl:text-3xl">
              Descubra os Soberanos, uma deliciosa indulgência doce com camadas de Nutella, morangos suculentos e queijo, criando uma harmoniosa fusão de sabores que vão encantar seu paladar.            </p>
          </span>
        </div>
    }
  ]

  return {
    pictures
  }
}