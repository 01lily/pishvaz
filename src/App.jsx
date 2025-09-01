import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid status="available" />} />
        <Route path="/comingsoon" element={<ProductGrid status="comingsoon" />} />
        <Route path="/available" element={<ProductGrid status="available" />} />
        <Route path="/sold" element={<ProductGrid status="sold" />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
