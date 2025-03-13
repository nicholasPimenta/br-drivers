import { LogoInstagram } from "react-ionicons";

export function Camara() {
  return (
    <div className="min-h-screen bg-blue-800 text-white p-6 flex flex-col items-center">
      {/* Título do Piloto */}
      <h1 className="text-4xl font-bold text-center mb-6">Rafael Câmara</h1>

      {/* Layout para Desktop e Tablet */}
      <div className="w-full max-w-5xl md:grid md:grid-cols-3 gap-8">
        {/* Coluna 1 - Imagem e informações iniciais */}
        <div className="flex flex-col items-center">
          <img
            src="/images/camara.jpg"
            alt="Rafael Câmara"
            className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
          />

          {/* Informações básicas do piloto */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-center bg-white text-blue-800 p-4 rounded-lg shadow">
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
            Rafael Câmara é um jovem talento brasileiro no automobilismo. Integrante da 
            Ferrari Driver Academy, ele mostrou sua velocidade desde o kart e continua sua 
            ascensão nas categorias de base da Fórmula 1. Após um forte desempenho na Fórmula 
            Regional, ele garantiu seu espaço na Fórmula 3 com a equipe Trident.
          </p>

          {/* Tópicos de categorias anteriores */}
          <div className="mt-6">
            <h2 className="text-2xl text-center font-semibold mb-3">Trajetória</h2>
            <p>
              🏎️ <strong>Kart (2019-2021):</strong> Campeão mundial e destaque nas principais competições.
            </p>
            <p>
              🏆 <strong>Fórmula 4 (2022):</strong> Vice-campeão na Itália e campeão nos Emirados Árabes.
            </p>
            <p>
              🏁 <strong>Fórmula Regional (2023):</strong> Fortes resultados que garantiram sua vaga na F3.
            </p>
          </div>

          {/* Link para Instagram */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/rafaccamara88/"
              target="_blank"
              className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <LogoInstagram className="text-2xl text-blue-800" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}