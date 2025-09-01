import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products.json";

export default function ProductGrid({ status }) {
  const filtered = products.filter((p) => p.status === status);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {filtered.map((p) => (
        <motion.div key={p.id} whileHover={{ scale: 1.01 }}>
          <Link to={`/product/${p.id}`}>
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[450px] object-cover object-center hover:opacity-90 transition"
              />
              <div className="text-center py-4 text-base font-light tracking-wide text-gray-800">
                {p.name}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
