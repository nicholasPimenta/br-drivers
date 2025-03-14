import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Bortoleto } from "./Pages/Bortoleto";
import { Camara } from "./Pages/Camara";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bortoleto" element={<Bortoleto />} />
      <Route path="/camara" element={<Camara />} />
    </Routes>
  );
}
