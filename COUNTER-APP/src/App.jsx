import { useState } from "react";
import "./App.css";
import { SiCountingworkspro } from "react-icons/si";

const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center  w-full h-screen bg-white">
      <div className="flex items-center gap-3">
        <SiCountingworkspro className="text-2xl" />
        <h1 className="font-semibold text-2xl text-purple-600">Counter</h1>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl">{count}</p>
      </div>
      <br />
      <button
        type="button"
        className="px-4 py-2 rounded-md text-white hover:cursor-pointer bg-purple-600"
        onClick={countHandler}
      >
        Count
      </button>
    </div>
  );
};

export default App;
