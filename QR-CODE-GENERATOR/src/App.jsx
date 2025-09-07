import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const App = () => {
  const [text, setText] = useState("");
  const generatorHandler = () => {
    setText(document.getElementById("text").value.trim());
  };
  return (
    <div>
      <h3>QR Code generator</h3>
      <input type="text" id="text" placeholder="Enter your text" />
      {text ? (
        <QRCodeSVG value={text} size={200} />
      ) : (
        <p>Please enter your text and click Generate Btn</p>
      )}
      <button type="button" onClick={generatorHandler}>
        Generator
      </button>
    </div>
  );
};

export default App;
