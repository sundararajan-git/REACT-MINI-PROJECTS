import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Leather Jacket",
    price: 129.99,
    img: "https://via.placeholder.com/300x200?text=Jacket",
    desc: "Premium leather jacket.",
  },
  {
    id: 2,
    title: "Sneakers",
    price: 79.99,
    img: "https://via.placeholder.com/300x200?text=Sneakers",
    desc: "Comfortable everyday sneakers.",
  },
  {
    id: 3,
    title: "Watch",
    price: 199.99,
    img: "https://via.placeholder.com/300x200?text=Watch",
    desc: "Classic analog watch.",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-6">📦 Product Showcase</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-800 rounded shadow p-4"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.price.toFixed(2)}</p>
            <button
              onClick={() => setSelected(p)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-600"
              >
                ✕
              </button>
            </div>
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-64 object-cover rounded my-4"
            />
            <p className="mb-2">{selected.desc}</p>
            <p className="font-mono mb-4">${selected.price.toFixed(2)}</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Add to Cart
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
