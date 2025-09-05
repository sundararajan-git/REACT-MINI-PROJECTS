import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center  w-full h-screen">
      <h1 className="font-semibold text-xl">Counter App</h1>
      <br />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-3xl">{count}</p>
      </div>
      <br />
      <button
        type="button"
        className="px-4 py-2 rounded-md text-white hover:cursor-pointer bg-green-600"
        onClick={countHandler}
      >
        Count
      </button>
    </div>
  );
};

export default App;
