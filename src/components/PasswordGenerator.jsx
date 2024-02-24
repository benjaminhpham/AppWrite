import React, { useCallback, useEffect, useState, useRef } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length - 1; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window, navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name="length"
          id="length"
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers">numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characters">characters</label>
        </div>
      </div>
    </div>
  );
}
