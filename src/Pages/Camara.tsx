import {
  CarSharp,
  CarSportSharp,
  Flag,
  LogoInstagram,
  TrophySharp,
} from "react-ionicons";

export function Camara() {
  return (
    <div className="min-h-screen bg-blue-800 text-white p-6 flex flex-col items-center">
      {/* Título do Piloto */}
      <h1 className="text-4xl font-bold text-center mb-6">Rafael Câmara</h1>

      {/* Layout para Desktop e Tablet */}
      <div className="w-full max-w-6xl lg:grid lg:grid-cols-3 gap-8">
        {/* Coluna 1 - Imagem e informações iniciais */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:p-6 md:gap-4 lg:flex-col lg:p-0 lg:gap-0 lg:justify-normal">
          <img
            src="/images/camara.jpg"
            alt="Rafael Câmara"
            className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
          />

          {/* Informações básicas do piloto */}
          <div className="mt-4 grid grid-cols-2 gap-2 bg-white text-blue-800 p-4 rounded-lg shadow">
            <p className="font-semibold">Nascimento:</p>
            <p>05/05/2005</p>
            <p className="font-semibold">Categoria:</p>
            <p>Fórmula 3</p>
            <p className="font-semibold">Equipe:</p>
            <p>Trident</p>
            <p className="font-semibold">Resultado 2024:</p>
            <p>Campeão - FRECA</p>
          </div>
        </div>

        {/* Coluna 2 e 3 - Texto Principal e trajetória */}
        <div className="md:col-span-2 mt-6 md:mt-0">
          <p className="text-lg text-justify">
            Rafael Chaves Câmara é um jovem talento brasileiro no automobilismo,
            compete pela equipe Trident na Formula 3. Nascido no dia 5 de Maio
            de 2005 e Integrante da Ferrari Driver Academy, ele tem começado a
            mostrar cada vez mais seu bom desempenho, com o Vice-Campeonato da
            Formula 4 dos Emirados Árabes Unidos de 2022 e o Título da Formula
            Regional Europeia de 2024, ambos pela Prema Racing.
          </p>

          {/* Kart */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Kart
            </h2>
            <p className="text-lg text-justify">
              Sua carreira no Kart iniciou em 2014 e durou até 2021. Seu grande
              ano foi 2019, onde foi Vice-Campeão no Mundial de Kart pela classe
              OK Junior e ao terminar sua trajetória em 2021, Câmara teve várias
              conquistas pelo caminho, como na WSK Champions Cup e WSK Super
              Master Series, além de um Vice-Campeonato no Europeu de Kart.
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
              Câmara competiu em três Categorias da Formula 4 em seu primeiro
              ano nos monopostos em 2022, todas elas com excelente desempenho,
              sendo elas: A dos Emirados Árabes Unidos, onde foi Vice-Campeão
              com 210 pontos, seis vitórias e mais dois pódios, a ADAC F4 com o
              Terceiro Lugar com 193 pontos, uma vitória e nove pódios, e pra
              finalizar na Formula 4 Italiana, também tendo terminado em
              Terceiro com 239 pontos, duas vitórias e onze pódios.
            </p>
          </div>

          {/* Formula Regional */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula Regional
            </h2>
            <p className="text-lg text-justify">
              Depois das boas impressões nas Categorias de Formula 4, ele migrou
              para a Formula Regional tanto da Europa quanto do Oriente Médio,
              onde competiu em 2023 e 2024.
            </p>
            <p className="text-lg text-justify mt-2">
              Na Formula Regional do Oriente Médio, Câmara andou pela equipe
              Mumbai Falcons e terminou na terceira posição nas duas vezes que
              disputou, em 2023 teve seis pódios e 131 pontos, enquanto que em
              2024 teve duas vitórias e 118 pontos.
            </p>
            <p className="text-lg text-justify mt-2">
              Por outro lado na Formula Regional Europeia, os resultados
              seguiram fortes, andando pela Prema nas duas temporadas, ele em
              2023 foi o quinto colocado com 173 pontos, duas vitórias e cinco
              pódios, e em 2024 veio a sua consagração, com o Título do
              Campeonato e 309 pontos, sete vitórias, doze pódios, sendo sete
              deles consecutivos, Câmara coroou sua excelente trajetória nas
              categorias de base com um Título de expressão.
            </p>
          </div>

          {/* Formula 3 */}
          <div className="mt-6">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Formula 3
            </h2>
            <p className="text-lg text-justify">
              Agora para a Temporada de 2025, Câmara irá competir pela equipe
              Trident, uma das mais fortes do grid, e com isso fica cada vez
              mais perto de chegar a Formula 1.
            </p>
          </div>

          {/* Tópicos de categorias anteriores */}
          <div className="border-2 rounded-lg shadow-blue-950/90 mt-4 p-4">
          <div className="my-2">
            <h2 className="text-2xl text-center lg:text-start font-semibold mb-3">
              Trajetória
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 justify-center lg:justify-start">
                <CarSharp width="20px" height="20px" color="#FEFEFE" />
                <p>
                  <strong>Kart (2014-2021);</strong>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row gap-2 justify-center lg:justify-start">
                <CarSportSharp width="20px" height="20px" color="#FEFEFE" />
                <p>
                  <strong>Fórmula 4 (2022):</strong>
                </p>
              </div>
              <p className="text-center lg:text-justify">
                Vice-campeão nos Emirados
                Árabes e terceiro na Itália e Alemanha;
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row gap-2 justify-center lg:justify-start">
                <TrophySharp width="20px" height="20px" color="#FEFEFE" />
                <p>
                  <strong>Fórmula Regional (2023-2024):</strong>
                </p>
              </div>
              <p className="text-center lg:text-justify">
                Dois Terceiros no
                Oriente Médio, já na Europeia foi Quinto em 2023 e Campeão de 2024;
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row gap-2 justify-center lg:justify-start">
                <Flag width="20px" height="20px" color="#FEFEFE" />
                <p>
                  <strong>Fórmula 3 (2025):</strong>
                </p>
              </div>
              <p className="text-center lg:text-justify">
                Titular da Equipe Trident.
              </p>
            </div>
          </div>

          {/* Link para Instagram */}
          <div className="mt-4 mb-2 flex items-center justify-center">
            <a
              href="https://www.instagram.com/rafaccamara88/"
              target="_blank"
              className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <LogoInstagram
                color="#193CB8"
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