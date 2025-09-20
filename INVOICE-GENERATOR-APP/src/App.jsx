import { useState } from "react";
import "./App.css";
import { PiInvoice } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

export default function App() {
  const [items, setItems] = useState([{ desc: "", qty: 1, price: 0 }]);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === "desc" ? value : parseFloat(value);
    setItems(newItems);
  };

  const addItem = () => setItems([...items, { desc: "", qty: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const genrateHandler = () => {
    alert("Invoice Generated !");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex flex-col items-center">
      <div className="flex items-center gap-3 mb-6">
        <PiInvoice className="text-3xl text-purple-600" />
        <h1 className="text-4xl font-semibold">Invoice Generator</h1>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              placeholder="Description"
              value={item.desc}
              onChange={(e) => handleChange(index, "desc", e.target.value)}
              className="flex-2 p-2 rounded border dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              onChange={(e) => handleChange(index, "qty", e.target.value)}
              className="flex-1 p-2 rounded border dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleChange(index, "price", e.target.value)}
              className="flex-1 p-2 rounded border dark:bg-gray-800 dark:text-gray-100"
            />
            <button
              onClick={() => removeItem(index)}
              className="p-1.5 bg-red-500 rounded-full text-white hover:bg-red-600 cursor-pointer"
            >
              <IoClose className="text-lg" />
            </button>
          </div>
        ))}
        <div className="flex items-center gap-4">
          <button
            onClick={addItem}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4 cursor-pointer"
          >
            Add Item
          </button>
          <button
            className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-800 mb-4 cursor-pointer"
            onClick={genrateHandler}
          >
            Generate
          </button>
        </div>
        <p className="text-xl font-medium">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
