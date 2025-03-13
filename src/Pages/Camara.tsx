import { LogoInstagram } from "react-ionicons";

export function Camara() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-700 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Rafael Câmara</h1>
      <p className="text-lg text-center max-w-2xl">
        Informações sobre sua carreira, principais títulos e trajetória...
      </p>
      <a
        href="https://www.instagram.com/gabrielbortoleto"
        target="_blank"
        className="mt-4 flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
      >
        <LogoInstagram className="text-2xl" />
        Instagram
      </a>
    </div>
  );
}