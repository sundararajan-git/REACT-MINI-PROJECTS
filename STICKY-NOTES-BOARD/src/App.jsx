import { useState, useEffect } from "react";
import { FaNoteSticky } from "react-icons/fa6";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [dragId, setDragId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("stickyNotes") || "[]");
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!text.trim()) return;

    const x = Math.floor(Math.random() * 400) + 20;
    const y = Math.floor(Math.random() * 200) + 20;

    setNotes((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), x, y, color: randomColor() },
    ]);
    setText("");
  };

  const remove = (id) => setNotes((n) => n.filter((note) => note.id !== id));

  function handleDragStart(e, id) {
    setDragId(id);
  }

  function handleDrop(e) {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setNotes((prev) => prev.map((n) => (n.id === dragId ? { ...n, x, y } : n)));
    setDragId(null);
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <FaNoteSticky className="text-2xl text-purple-600" />
        <h1 className="text-2xl font-medium">Sticky Notes Board</h1>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 p-2 rounded border dark:bg-gray-800"
        />
        <button
          onClick={addNote}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <div
        className="relative w-full h-[60vh] bg-white dark:bg-gray-800 rounded p-4 overflow-hidden"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {notes.length === 0 && (
          <p className="text-sm text-gray-500">No notes yet — add one!</p>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            draggable
            onDragStart={(e) => handleDragStart(e, note.id)}
            className="absolute p-3 rounded shadow cursor-move w-40"
            style={{ left: note.x, top: note.y, background: note.color }}
          >
            <div className="flex justify-between items-start gap-2">
              <div className="text-sm text-black">{note.text}</div>
              <button onClick={() => remove(note.id)} className="text-red-700">
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function randomColor() {
  const colors = [
    "#FFFB8F",
    "#FFB3B3",
    "#B7E4C7",
    "#CDE7FF",
    "#EAD7FF",
    "#FFE4C7",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
