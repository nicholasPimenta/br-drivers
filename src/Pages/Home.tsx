import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 max-w-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 p-6 rounded-lg text-center shadow-lg cursor-pointer transition"
        >
          <Link to="/bortoleto" className="text-2xl font-bold">Gabriel Bortoleto</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-600 p-6 rounded-lg text-center shadow-lg cursor-pointer transition"
        >
          <Link to="/camara" className="text-2xl font-bold">Rafael Câmara</Link>
        </motion.div>
      </div>
    </div>
  );
}