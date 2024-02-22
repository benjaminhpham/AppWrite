// Topics to learn
// -> Core of React (State of UI manipulation, DOM)
// -> component reusability
// -> reusing of components (props)
// -> how to progate change (hooks)

// Additional addon to React
// -> router (React don't have router)
// -> state management (React don't have state management: redux, redux toolkit, zustard, context API)
// -> class based component (legacy code)
// -> BAAS Apps (social media clone, e-commerce app...)

// Alter React
// -> React is not a complete solution in most cases
//       -> no SEO, browser render of JS, no routing
// -> framework: NextJS, Gatsby, Remix

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
