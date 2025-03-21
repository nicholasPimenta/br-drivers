import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray to-gray-900 text-white">
      {/* Texto inicial de boas-vindas */}
      <h1 className="mt-4 text-lg font-semibold mb-4">Escolha um piloto:</h1>
      <p className="text-center text-gray-300 text-lg max-w-80 md:text-xl md:max-w-2xl mx-auto">
        Conheça as trajetórias de Gabriel Bortoleto e Rafael Câmara, dois
        talentosos pilotos brasileiros que estão se destacando no automobilismo
        internacional.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-4/5 max-w-4xl m-4">
        {/* Card do Gabriel Bortoleto */}
        <Link to="/bortoleto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="relative bg-emerald-500 border-solid border-neutral-950 border-8 h-72 md:h-80 lg:h-96 flex items-center justify-center p-1 text-center shadow-lg cursor-pointer transition 
            rounded-tl-3xl md:rounded-tl-4xl lg:rounded-tl-5xl overflow-hidden hover:shadow-lg hover:shadow-emerald-500/50"
          >
            <img
              src="../bortoleto.png"
              alt="Gabriel Bortoleto"
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition rounded-tl-3xl md:rounded-tl-4xl lg:rounded-tl-5xl"
            />
            <span className="absolute text-2xl font-bold text-white">
              Gabriel Bortoleto
            </span>
          </motion.div>
        </Link>

        {/* Card do Rafael Câmara */}
        <Link to="/camara">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="relative bg-blue-600 border-solid border-red-600 border-8 h-72 md:h-80 lg:h-96 flex items-center justify-center p-1 text-center shadow-lg cursor-pointer transition 
            rounded-br-3xl md:rounded-br-4xl lg:rounded-br-5xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/50"
          >
            <img
              src="../camara.png"
              alt="Rafael Câmara"
              className="w-full h-full object-cover opacity-70 hover:opacity-100 transition rounded-br-3xl md:rounded-br-4xl lg:rounded-br-5xl"
            />
            <span className="absolute text-2xl font-bold text-white">
              Rafael Câmara
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
