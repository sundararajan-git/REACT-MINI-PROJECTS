import { useState } from "react";
import "./App.css";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <BsBoxSeamFill className="text-2xl text-purple-600" />
        <h1 className="text-2xl font-medium">Product Showcase</h1>
      </div>

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
              className="mt-3 px-4 py-2 bg-purple-500 text-white rounded cursor-pointer"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-600"
              >
                <IoClose className="text-xl text-red-600" />
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
              <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
                Add to Cart
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-red-600 rounded cursor-pointer"
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

const products = [
  {
    id: 1,
    title: "Leather Jacket",
    price: 129.99,
    img: "https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?_gl=1*1qfx46d*_ga*MTEzMDg2NDYzMi4xNzQ3NjE2OTU0*_ga_8JE65Q40S6*czE3NTgzNDcxMjkkbzEyJGcxJHQxNzU4MzQ3MzA3JGozOSRsMCRoMA..",
    desc: "Premium leather jacket.",
  },
  {
    id: 2,
    title: "Sneakers",
    price: 79.99,
    img: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?_gl=1*hill6c*_ga*MTEzMDg2NDYzMi4xNzQ3NjE2OTU0*_ga_8JE65Q40S6*czE3NTgzNDcxMjkkbzEyJGcxJHQxNzU4MzQ3MzU1JGo1OSRsMCRoMA..",
    desc: "Comfortable everyday sneakers.",
  },
  {
    id: 3,
    title: "Watch",
    price: 199.99,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    desc: "Classic analog watch.",
  },
];
