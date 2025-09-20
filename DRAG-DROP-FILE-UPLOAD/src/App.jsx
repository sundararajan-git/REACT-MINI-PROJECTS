import { useState, useRef } from "react";
import "./App.css";
import { MdFileUpload } from "react-icons/md";

export default function App() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const onFiles = (fList) => {
    const arr = Array.from(fList);
    setFiles((prev) => [...prev, ...arr]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };

  const handleUpload = () => {
    alert(`${files.length} file(s) ready to upload`);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <MdFileUpload className="text-3xl text-purple-600" />
          <h1 className="text-3xl font-medium">Drag & Drop File Uploader</h1>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center mb-4 bg-white dark:bg-gray-800"
        >
          <p className="mb-2">Drag files here or</p>
          <button
            onClick={() => inputRef.current.click()}
            className="px-4 py-2 bg-purple-600 text-white rounded cursor-pointer"
          >
            Browse
          </button>
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
        </div>

        <div className="mb-4">
          {files.length === 0 ? (
            <p className="text-sm text-gray-500">No files selected</p>
          ) : (
            <ul className="space-y-2">
              {files.map((f, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded"
                >
                  <div>
                    <p>{f.name}</p>
                    <p className="text-xs text-gray-500">
                      {(f.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setFiles(files.filter((_, idx) => idx !== i))
                    }
                    className="text-red-500 px-2 cursor-pointer"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
          >
            Upload
          </button>
          <button
            onClick={() => setFiles([])}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
