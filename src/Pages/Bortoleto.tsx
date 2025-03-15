import {
  ArrowBackCircle,
  CarSharp,
  CarSportSharp,
  Flag,
  LogoInstagram,
  TrophySharp,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";

export function Bortoleto() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-emerald-700 text-white p-6 flex flex-col items-center">
        {/* Cabeçalho com botão de voltar e título */}
        <div className="w-full max-w-6xl flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <ArrowBackCircle width="40px" height="40px" color="#FEFEFE" />
          </button>
          <h1 className="text-4xl font-bold text-center flex-1">Gabriel Bortoleto</h1>
        </div>

      {/* Layout para Desktop e Tablet */}
      <div className="w-full max-w-6xl lg:grid lg:grid-cols-3 gap-8">
        {/* Coluna 1 - Imagem e informações iniciais */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:p-6 md:gap-4 lg:flex-col lg:p-0 lg:gap-0 lg:justify-normal">
          <img
            src="/assets/bortoletoCard.png"
            alt="Gabriel Bortoleto"
            className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
          />

          {/* Informações básicas do piloto */}
          <div className="mt-4 grid grid-cols-2 gap-2 bg-white text-emerald-700 p-4 rounded-lg shadow">
            <p className="font-semibold">Nascimento:</p>
            <p>14/10/2004</p>
            <p className="font-semibold">Categoria:</p>
            <p>Fórmula 1</p>
            <p className="font-semibold">Equipe:</p>
            <p>Kick Sauber</p>
            <p className="font-semibold">Resultado 2024:</p>
            <p>Campeão - F2</p>
          </div>
        </div>

        {/* Texto Introdutório */}
        <div className="md:col-span-2 mt-6 md:mt-0">
          <p className="text-lg text-justify">
            Gabriel Lourenzo Bortoleto Oliveira é um piloto Brasileiro que
            compete na Formula 1 pela equipe Kick Sauber. Nascido no dia 14 de
            Outubro de 2004, ele nos últimos anos tem se destacando nas
            categorias de base, tendo como principais destaques o título da
            Formula 3 em 2023 com uma excelente consistência e da Formula 2 em
            2024 após um começo complicado, e com ambos títulos sendo em sua
            temporada de estreia. Nesse meio tempo, Bortoleto também esteve como
            Piloto de Desenvolvimento da Mclaren antes de se tornar titular pela
            Sauber em 2025.
          </p>

          {/* Kart */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Kart
            </h2>
            <p className="text-lg text-justify">
              Bortoleto iniciou sua carreira em 2012 no Campeonato Sul-Americano
              de Kart e ficou até 2019. Seu principal ano foi 2018 onde
              conquistou dois Terceiros Lugares no Campeonato Europeu e Mundial,
              e Vice-Campeão no WSK Super Master Series e o Andrea Margutti
              Trophy.
            </p>
          </div>
        </div>

        <div className="md:col-span-full mt-6 md:mt-0">
          {/* Formula 4 */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula 4
            </h2>
            <p className="text-lg text-justify">
              Sua primeira categoria de Monopostos foi na Formula 4 Italiana em
              2020, pela equipe Prema Powerteam. Conquistou o primeiro pódio na
              rodada de Mugello, onde chegou a vencer uma das baterias, junto de
              um segundo e terceiro lugar, e com mais dois pódios em Monza,
              Bortoleto fechou o Campeonato na Quinta Posição com 157 pontos, a
              frente de um de seus parceiros de equipe, além de fechar na Quarta
              Posição entre os Novatos.
            </p>
          </div>

          {/* Formula Regional Europeia */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula Regional Europeia
            </h2>
            <p className="text-lg text-justify">
              Em 2021, ele migrou para a Formula Regional Europeia competindo
              pela equipe FA Racing by MP Motorsport, e fez uma temporada
              modesta, foram poucas corridas nos pontos, sendo onze delas
              consecutivas sem pontuar, e um pódio conquistado em Red Bull Ring
              com um Segundo Lugar, terminando na Décima Quinta Posição com 44
              pontos.
            </p>
            <p className="text-lg text-justify mt-2">
              No ano seguinte, foi para a R-ace GP e o desempenho melhorou, foi
              mais constante nos pontos, teve mais pódios e conseguiu duas
              vitórias, uma em Spa Francorchamps e outra em Catalunya, e
              terminou na Sexta posição com 176 pontos, demostrando evolução.
            </p>
          </div>

          {/* Formula 3 */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula 3
            </h2>
            <p className="text-lg text-justify">
              Após dois anos na Formula Regional Europeia, Bortoleto subiu para
              a Formula 3 na competitiva equipe Trident, e a constância que ele
              mostrou no ano anterior, ficou bem mais evidente. Pontuou muito
              mais, teve apenas um abandono e duas corridas fora dos pontos, e
              somado com as suas duas vitórias em Sahkir e Melbourne mais quatro
              pódios, ele conquistou o título de forma antecipada no Qualy de
              Monza e terminou a temporada com 164 pontos, 45 a mais que o
              Vice-Campeão.
            </p>
          </div>

          {/* Formula 2 */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula 2
            </h2>
            <p className="text-lg text-justify">
              Com o seu título da Formula 3, Bortoleto foi promovido para a
              Formula 2 e agora pela equipe Invicta Racing. E diferente da sua
              temporada anterior, o começo de Campeonato não foi dos melhores,
              apesar de sua pole na abertura em Sakhir, chegou a ficar quatro
              corridas sem marcar pontos, e três delas abandonando, mas a partir
              de Imola ele passou a engrenar com seus primeiros pódios, a
              primeira vitória veio em Red Bull Ring e começava a subir na
              tabela.
            </p>
            <p className="text-lg text-justify mt-2">
              O ponto de virada do Campeonato foi em Monza, onde mesmo largando
              da última posição em ambas corridas, marcou pontos na primeira
              corrida e venceu a segunda, onde colou no líder Isack Hadjar. Na
              rodada seguinte, em Baku, ele marcou importantes pontos e
              finalmente assumia a liderança do Campeonato, e aí nas rodadas
              finais, ele administrou a vantagem que obteve e mesmo na rodada
              final em Yas Marina onde ele e Hadjar iniciaram o final de semana
              separados por meio ponto, Bortoleto não se intimidou e fez sua
              parte, para conquistar o título da Formula 2 com 214,5 pontos,
              22,5 pontos a mais contra Isack Hadjar, o Vice-Campeão.
            </p>
          </div>

          {/* Formula 1 */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula 1
            </h2>
            <p className="text-lg text-justify">
              Sua trajetória na Formula 1 iniciou ainda em 2022, onde entrou
              para a A14 Management, gerenciada por Fernando Alonso. E em 2023
              se tornou Piloto de Desenvolvimento da Mclaren, ficando até 2024.
            </p>
            <p className="text-lg text-justify mt-2">
              No dia 6 de Novembro de 2024, ele foi anunciado como Titular da
              equipe Kick Sauber, onde terá o Veterano Nico Hulkenberg como
              companheiro de equipe. Bortoleto será o primeiro Brasileiro na
              Formula 1 numa temporada completa desde Felipe Massa em 2017 e
              fará com que o Brasil tenha uma participação em uma corrida da
              categoria desde Pietro Fittipaldi no GP de Abu Dhabi de 2020. O
              número que ele escolheu foi o 5, que já teve Sebastian Vettel
              utilizando entre 2015 e 2022, a grande razão para ele ter
              escolhido este número foi o mesmo que ele usou no título da
              Formula 3.
            </p>
          </div>
          <div className="border-2 rounded-lg shadow-green-950/90 mt-4 p-4">
            {/* Tópicos de categorias anteriores */}
            <div className="my-2">
              <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
                Trajetória
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <CarSharp width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Kart (2012-2019);</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <CarSportSharp width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Fórmula 4 Italiana (2020):</strong>
                  </p>
                </div>
                <p className="text-center lg:text-justify">
                  Se destacou com vitórias e pódios, terminou em Quinto;
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <CarSportSharp width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Fórmula Regional (2021-2022):</strong>
                  </p>
                </div>
                <p className="text-center lg:text-justify">
                  Duas Temporadas, uma modesta com um Décimo Quinto e outra mais
                  constante com um Sexto Lugar, ambos na Europeia;
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <TrophySharp width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Fórmula 3 (2023):</strong>
                  </p>
                </div>
                <p className="text-center lg:text-justify">
                  Campeão da temporada com domínio impressionante;
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <TrophySharp width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Fórmula 2 (2024):</strong>
                  </p>
                </div>
                <p className="text-center lg:text-justify">
                  Campeão com uma incrível arrancada;
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2 justify-center lg:justify-start">
                  <Flag width="20px" height="20px" color="#FEFEFE" />
                  <p>
                    <strong>Fórmula 1 (2025):</strong>
                  </p>
                </div>
                <p className="text-center lg:text-justify">
                  Títular da Kick Sauber.
                </p>
              </div>
            </div>

            {/* Link para Instagram */}
            <div className="mt-4 mb-2 flex items-center justify-center">
              <a
                href="https://www.instagram.com/gabrielbortoleto_/"
                target="_blank"
                className="flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
              >
                <LogoInstagram
                  color="#007A55"
                  height="20px"
                  width="20px"
                  className="text-2xl"
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
