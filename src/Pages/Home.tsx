import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-4/5 max-w-4xl">
        {/* Card do Gabriel Bortoleto */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-emerald-500 border-solid border-neutral-950 border-8 h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 text-center shadow-lg cursor-pointer transition 
          rounded-tl-3xl md:rounded-tl-4xl lg:rounded-tl-5xl"
        >
          <Link to="/bortoleto" className="text-2xl font-bold">Gabriel Bortoleto</Link>
        </motion.div>

        {/* Card do Rafael Câmara */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 border-solid border-red-600 border-8 h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 text-center shadow-lg cursor-pointer transition 
                     rounded-br-3xl md:rounded-br-4xl lg:rounded-br-5xl"
        >
          <Link to="/camara" className="text-2xl font-bold">Rafael Câmara</Link>
        </motion.div>
      </div>
    </div>
  );
}
