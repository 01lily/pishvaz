import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products.json";

export default function ProductGrid({ status }) {
  const filtered = products.filter((p) => p.status === status);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {filtered.map((p) => (
        <motion.div key={p.id} whileHover={{ scale: 1.02 }}>
          <Link to={`/product/${p.id}`}>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-center font-light">{p.name}</div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
