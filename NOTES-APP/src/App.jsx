import React, { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
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
      <h1 className="text-4xl mb-6 text-center">📝 Notes App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="flex-1 p-3 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300"
        />
        <button
          onClick={addNote}
          className="px-6 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
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
              <p className="mb-2">{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
