import Youtube from "./Youtube";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Classic React App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>footer: {counter}</p>
    </>
  );
}
