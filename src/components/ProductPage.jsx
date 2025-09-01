import { useParams } from "react-router-dom";
import products from "../data/products.json";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-6">Product not found.</p>;

  const handlePurchase = () => {
    const subject = encodeURIComponent(`Purchase Request: ${product.name}`);
    const body = encodeURIComponent(
      `Hello, I would like to purchase: ${product.name}\n\n${product.description}`
    );
    window.location.href = `mailto:yourcompany@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-cover object-center rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-light tracking-wide mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>
          {product.status === "available" && (
            <button
              className="bg-black text-white rounded-2xl px-6 py-3 uppercase tracking-wide hover:bg-gray-800 transition"
              onClick={handlePurchase}
            >
              Purchase Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
