import { Home } from "./Pages/Home";
import { Camara } from "./Pages/Camara";
import { Bortoleto } from "./Pages/Bortoleto";
import { Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bortoleto" element={<Bortoleto />} />
      <Route path="/camara" element={<Camara />} />
    </Routes>
  );
}
