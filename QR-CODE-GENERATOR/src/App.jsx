import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";
import { IoQrCodeOutline } from "react-icons/io5";

const App = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generatorHandler = () => {
    if (!text.trim()) return;
    setQrValue(text);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <IoQrCodeOutline className="text-2xl text-purple-600" />
          <h3 className="text-2xl font-bold">QR Code Generator</h3>
        </div>

        <input
          type="text"
          id="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="button"
          onClick={generatorHandler}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-semibold mb-4 cursor-pointer"
        >
          Generate
        </button>

        <div className="mt-4 flex items-center justify-center">
          {qrValue ? (
            <QRCodeSVG value={qrValue} size={200} />
          ) : (
            <p className="text-gray-500">
              Please enter your text and click Generate
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
