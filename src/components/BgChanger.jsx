import React, { useState } from "react";
import BgChangerButton from "./BgChangerButton";

export default function BgChanger() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <BgChangerButton color="red" setColor={setColor} />
          <BgChangerButton color="blue" setColor={setColor} />
          <BgChangerButton color="green" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}
