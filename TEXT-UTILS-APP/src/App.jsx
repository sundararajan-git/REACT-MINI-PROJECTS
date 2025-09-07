import React, { useState } from "react";
import Alert from "./Alert";
import TextForm from "./TextForm";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-4">
      <h1 className="text-4xl mb-6 text-center">Text Utils App</h1>
      <Alert alert={alert} />
      <TextForm heading="Enter your text below" showAlert={showAlert} />
    </div>
  );
};

export default App;
