import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <div id="video-section">
        <div style={{ padding: "54.55% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/914351315?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder={0} allow="autoplay" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div style={{ width: "100%" }} className="font-via-appia text-primary px-8">
        <h1 className="text-3xl my-8">
          “Transforme suas capacidades com os segredos milenares dos guerreiros espartanos e dos filósofos atenienses.”
        </h1>
        <p className="text-lg">
          Bem-vindo ao Leonida’s, onde a tradição e a inovação se unem para criar uma experiência gastronômica verdadeiramente transformadora. Inspirados pelos antigos guerreiros espartanos e pelos sábios filósofos atenienses, buscamos não apenas alimentar o corpo, mas também nutrir a alma. <br /><br />

          Em um mundo onde a correria muitas vezes obscurece a importância da alimentação saudável, encontramos na história e na filosofia da Grécia Antiga uma fonte de inspiração e sabedoria. Acreditamos nos segredos milenares que podem transformar não apenas o que comemos, mas também quem somos. <br /><br />

          No coração do nosso restaurante, está o compromisso com a qualidade, a autenticidade e o respeito pela tradição. Desde os ingredientes frescos e selecionados até o cuidado artesanal em cada prato, cada detalhe é pensado para proporcionar uma experiência única e memorável. <br /><br />

          Junte-se a nós nessa jornada de descoberta e redescoberta dos sabores e valores que têm resistido ao teste do tempo. Aqui, cada refeição é uma oportunidade de nutrir não apenas o corpo, mas também a mente e o espírito. <br />
        </p>
      </div>

      <div className="w-full flex" id="cardapio">
        
      </div>
    </>

  )
}
