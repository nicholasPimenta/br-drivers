import { LogoInstagram } from "react-ionicons";

export function Bortoleto() {
  return (
    <div className="min-h-screen bg-emerald-700 text-white p-6 flex flex-col items-center">
      {/* Título do Piloto */}
      <h1 className="text-4xl font-bold text-center mb-6">Gabriel Bortoleto</h1>

      {/* Layout para Desktop e Tablet */}
      <div className="w-full max-w-5xl md:grid md:grid-cols-3 gap-8">
        {/* Coluna 1 - Imagem e informações iniciais */}
        <div className="flex flex-col items-center">
          <img
            src="/images/bortoleto.jpg"
            alt="Gabriel Bortoleto"
            className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white"
          />

          {/* Informações básicas do piloto */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-center bg-white text-emerald-700 p-4 rounded-lg shadow">
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

        {/* Coluna 2 e 3 - Texto Principal e trajetória */}
        <div className="md:col-span-2 mt-6 md:mt-0">
          <p className="text-lg text-justify">
            Gabriel Bortoleto é um dos principais talentos brasileiros no automobilismo. 
            Com uma carreira promissora, ele se destacou desde as categorias de base até sua 
            chegada à Fórmula 2. Seu talento chamou atenção após a conquista do título na 
            Fórmula 3, garantindo seu espaço na principal categoria de acesso à Fórmula 1.
          </p>

          {/* Tópicos de categorias anteriores */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Trajetória</h2>
            <p>
              🏎️ <strong>Fórmula 4 Italiana (2020-2021):</strong> Se destacou com vitórias e pódios.
            </p>
            <p>
              🏆 <strong>Fórmula Regional Europeia (2022):</strong> Vice-campeão e chamou atenção das equipes de F3.
            </p>
            <p>
              🏁 <strong>Fórmula 3 (2023):</strong> Campeão da temporada com domínio impressionante.
            </p>
          </div>

          {/* Link para Instagram */}
          <div className="mt-6 flex justify-start">
            <a
              href="https://www.instagram.com/gabrielbortoleto_/"
              target="_blank"
              className="flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <LogoInstagram className="text-2xl text-emerald-700" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}