import { useState } from "react";
import "./App.css";
import { FaCalculator } from "react-icons/fa6";

const App = () => {
  const [exp, setExp] = useState("");
  const [ans, setAns] = useState("0");

  const btnHandler = (char) => {
    if (char === "=") {
      const ans = simpleCalc(exp);
      if (ans === false) {
        setAns("Error");
      } else {
        setAns(ans);
      }
    } else if (char === "AC") {
      setExp("");
      setAns(0);
    } else if (char === "X") {
      const rmExp = exp.slice(0, -1);
      setExp(rmExp);
      if (rmExp === "") {
        setAns(0);
      } else {
        const ans = simpleCalc(rmExp);
        if (ans !== false) {
          setAns(ans);
        }
      }
    } else {
      setExp(exp + char);
      const ans = simpleCalc(exp + char);
      if (ans !== false) {
        setAns(ans);
      }
    }
  };

  const simpleCalc = (exp) => {
    if (/[\+\-\*\/\%\.]$/.test(exp)) {
      return false;
    }
    return new Function("return " + exp)();
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-white">
      <div className="flex items-center gap-2 mb-2">
        <FaCalculator className="text-2xl" />
        <h3 className="text-2xl text-purple-600 font-medium">Calculator</h3>
      </div>
      <section className="bg-gray-900 w-[400px] p-6 py-10 rounded-md">
        <div className="bg-white rounded-md p-2 pe-6 flex flex-col gap-4 items-end w-full">
          <span className="text-xl">{exp}</span>
          <span className="text-xl font-medium">{ans}</span>
        </div>
        <br />
        <div className="grid grid-cols-4 text-white gap-4">
          <button type="btn" onClick={() => btnHandler("AC")}>
            AC
          </button>
          <button type="btn" onClick={() => btnHandler("X")}>
            X
          </button>
          <button type="btn" onClick={() => btnHandler("%")}>
            %
          </button>
          <button type="btn" onClick={() => btnHandler("/")}>
            /
          </button>
          <button type="btn" onClick={() => btnHandler("7")}>
            7
          </button>
          <button type="btn" onClick={() => btnHandler("8")}>
            8
          </button>
          <button type="btn" onClick={() => btnHandler("9")}>
            9
          </button>
          <button type="btn" onClick={() => btnHandler("*")}>
            *
          </button>
          <button type="btn" onClick={() => btnHandler("4")}>
            4
          </button>
          <button type="btn" onClick={() => btnHandler("5")}>
            5
          </button>
          <button type="btn" onClick={() => btnHandler("6")}>
            6
          </button>
          <button type="btn" onClick={() => btnHandler("-")}>
            -
          </button>
          <button type="btn" onClick={() => btnHandler("1")}>
            1
          </button>
          <button type="btn" onClick={() => btnHandler("2")}>
            2
          </button>
          <button type="btn" onClick={() => btnHandler("3")}>
            3
          </button>
          <button type="btn" onClick={() => btnHandler("+")}>
            +
          </button>
          <button type="btn" onClick={() => btnHandler("Null")}>
            Null
          </button>
          <button type="btn" onClick={() => btnHandler("0")}>
            0
          </button>
          <button type="btn" onClick={() => btnHandler(".")}>
            .
          </button>
          <button type="btn" onClick={() => btnHandler("=")}>
            =
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
