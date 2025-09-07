import React, { useState } from "react";

export default function TextForm({ heading, showAlert }) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase!", "success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    setText("");
    showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    showAlert("Extra Spaces Removed!", "success");
  };

  return (
    <div>
      <h2 className="text-2xl mb-3">{heading}</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        className="w-full p-2 border rounded mb-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        placeholder="Enter text here..."
      ></textarea>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleUppercase}
        >
          Uppercase
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLowercase}
        >
          Lowercase
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div>
        <h3 className="text-xl mb-2">Text Summary:</h3>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          Estimated Reading Time:{" "}
          {(
            0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length
          ).toFixed(2)}{" "}
          minutes
        </p>
      </div>
    </div>
  );
}
