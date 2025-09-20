import { useState } from "react";
import "./App.css";
import { LuListTodo } from "react-icons/lu";

const App = () => {
  const [currentList, setCurrentList] = useState("");
  const [listCollection, setListCollection] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(false);

  const listChangeHandler = (e) => {
    setCurrentList(e.target.value);
  };

  const addHandler = () => {
    setListCollection((prev) => {
      return [...prev, { id: prev.length + 1, list: currentList }];
    });
    setCurrentList("");
  };

  const editHandler = (id) => {
    setCurrentEdit(id);
  };

  const deleteHandler = (id) => {
    setListCollection((prev) => {
      return prev.filter((l) => l.id !== id);
    });
  };

  const updateHandler = (id) => {
    const updateList = document.getElementById("updateList" + id);
    setListCollection((prev) => {
      return prev.map((l) => {
        if (l.id === id) {
          return { ...l, list: updateList?.value?.trim() };
        } else {
          return l;
        }
      });
    });
    setCurrentEdit(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-center gap-3 mb-4">
        <LuListTodo className="text-3xl text-purple-600" />
        <h1 className="font-bold text-3xl tracking-wide">To-Do App</h1>
      </div>

      <div className="flex gap-3 items-center w-full max-w-lg">
        <input
          className="flex-1 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
          onChange={listChangeHandler}
          value={currentList}
          placeholder="Enter a task..."
        />
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 text-white rounded-lg shadow-md font-medium cursor-pointer"
          onClick={addHandler}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-lg mt-6">
        {listCollection.map((i) => (
          <div
            key={i.id}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            {currentEdit === i.id ? (
              <input
                className="flex-1 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700"
                id={"updateList" + i.id}
                defaultValue={i.list}
                placeholder="Update task..."
              />
            ) : (
              <p className="flex-1 text-gray-800 dark:text-gray-200">
                {i.list}
              </p>
            )}

            <div className="flex gap-2 ml-3">
              {currentEdit === i.id ? (
                <button
                  type="button"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-medium cursor-pointer"
                  onClick={() => updateHandler(i.id)}
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium cursor-pointer"
                    onClick={() => editHandler(i.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium cursor-pointer"
                    onClick={() => deleteHandler(i.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
