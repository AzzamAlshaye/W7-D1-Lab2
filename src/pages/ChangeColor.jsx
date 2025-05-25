// src/components/ColorSwitcher.jsx
import React, { useState } from "react";

export default function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition duration-300 ${bgColor}`}
    >
      <div className="bg-[#FFFCF5] shadow-2xl border-2 border-[#dfddd8] p-8 rounded-2xl flex flex-col items-center justify-center">
        {" "}
        <h1 className="text-2xl font-bold mb-6">Pick a Background Color</h1>
        <div className="space-x-4">
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="px-4 py-2 bg-red-500 shadow-lg shadow-red-500/50 text-white rounded  hover:bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("bg-blue-500")}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg shadow-blue-600/50 hover:bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("bg-green-500")}
            className="px-4 py-2 bg-green-500 text-white rounded shadow-lg shadow-green-600/50 hover:bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("bg-yellow-400")}
            className="px-4 py-2 bg-yellow-400 text-white rounded shadow-lg  shadow-yellow-500/50 hover:bg-yellow-500"
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}
