import { useState, useEffect } from "react";
import "./App.css";
import { FaRegNoteSticky } from "react-icons/fa6";
import { RiDeleteBin3Fill } from "react-icons/ri";

export default function App() {
  const [notes, setNotes] = useState(["Hello world"]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (noteText.trim() === "") return;
    setNotes([...notes, noteText.trim()]);
    setNoteText("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FaRegNoteSticky className="text-2xl text-purple-600" />
        <h1 className="text-2xl text-center font-semibold">Notes App</h1>
      </div>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="flex-1 p-3 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300"
        />
        <button
          onClick={addNote}
          className="px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300"
        >
          Add
        </button>
      </div>

      {notes.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No notes yet!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <p className="mb-4">{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
              >
                <RiDeleteBin3Fill className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
