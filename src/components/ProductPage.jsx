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
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] object-cover rounded-2xl mb-6"
      />
      <h1 className="text-2xl font-light mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-6">{product.description}</p>
      {product.status === "available" && (
        <button
          className="bg-black text-white rounded-2xl px-6 py-3 hover:bg-gray-800 transition"
          onClick={handlePurchase}
        >
          Purchase Now
        </button>
      )}
    </div>
  );
}
