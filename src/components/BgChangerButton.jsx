import React from "react";

export default function BgChangerButton({ color, setColor }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
}
