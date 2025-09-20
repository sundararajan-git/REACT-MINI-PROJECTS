import { useState } from "react";
import Alert from "./Alert";
import TextForm from "./TextForm";
import "./App.css";
import { BsGrid1X2Fill } from "react-icons/bs";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <BsGrid1X2Fill className="text-xl text-purple-600" />
        <h1 className="text-2xl font-semibold">Text Utils App</h1>
      </div>
      <Alert alert={alert} />
      <TextForm heading="Enter your text below" showAlert={showAlert} />
    </div>
  );
};

export default App;
