import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ProductPage from "./components/ProductPage";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-6">
        Jewelry Collection
      </h1>
      <p className="max-w-xl text-gray-600 font-light leading-relaxed">
        Discover handcrafted pieces that reflect timeless beauty. Browse our
        collections to see what’s available now, what’s coming soon, and what
        has already found a new home.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comingsoon" element={<ProductGrid status="comingsoon" />} />
        <Route path="/available" element={<ProductGrid status="available" />} />
        <Route path="/sold" element={<ProductGrid status="sold" />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
