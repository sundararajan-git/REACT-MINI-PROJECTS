import { useState } from "react";

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
    <div className="w-full h-screen flex flex-col gap-5 items-center pt-12">
      <h1 className="text-green-600 font-semibold text-2xl">To Do App </h1>
      <br />
      <div className="flex gap-4  items-center">
        <input
          className="border border-gray-300 px-2 py-1 rounded-sm"
          onChange={listChangeHandler}
          value={currentList}
          placeholder="list"
        />
        <button
          type="button"
          className="bg-green-600 text-white px-4 py-1 rounded-sm"
          onClick={addHandler}
        >
          Add
        </button>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        {listCollection.map((i) => {
          return (
            <div key={i.id} className="flex items-center gap-2">
              {currentEdit === i.id ? (
                <input
                  className="border border-gray-300 px-2 py-1 rounded-sm"
                  id={"updateList" + i.id}
                  defaultValue={i.list}
                  placeholder="list"
                />
              ) : (
                <p>{i.list}</p>
              )}

              {currentEdit === i.id ? (
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-1 rounded-sm"
                  onClick={() => updateHandler(i.id)}
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-1 rounded-sm"
                    onClick={() => editHandler(i.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white px-4 py-1 rounded-sm"
                    onClick={() => deleteHandler(i.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
