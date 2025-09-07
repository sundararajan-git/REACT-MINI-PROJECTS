import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default App;
