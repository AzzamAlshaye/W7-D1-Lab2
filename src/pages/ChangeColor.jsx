import React, { useState } from "react";

export default function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition duration-300 px-5 md:px-0 ${bgColor}`}
    >
      <div className="bg-[#FFFCF5] shadow-2xl border-2 border-[#dfddd8] p-8 rounded-2xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Pick a Background Color</h1>
        {/* Updated grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Solid Colors */}
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="px-4 py-2 bg-red-500 shadow-lg shadow-red-500/50 text-white rounded hover:bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("bg-blue-500")}
            className="px-4 py-2 bg-blue-500 shadow-lg shadow-blue-600/50 text-white rounded hover:bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("bg-green-500")}
            className="px-4 py-2 bg-green-500 shadow-lg shadow-green-600/50 text-white rounded hover:bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("bg-yellow-400")}
            className="px-4 py-2 bg-yellow-400 shadow-lg shadow-yellow-500/50 text-white rounded hover:bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("bg-purple-500")}
            className="px-4 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 text-white rounded hover:bg-purple-600"
          >
            Purple
          </button>
          <button
            onClick={() => setBgColor("bg-pink-500")}
            className="px-4 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 text-white rounded hover:bg-pink-600"
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("bg-indigo-500")}
            className="px-4 py-2 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white rounded hover:bg-indigo-600"
          >
            Indigo
          </button>
          <button
            onClick={() => setBgColor("bg-teal-500")}
            className="px-4 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-white rounded hover:bg-teal-600"
          >
            Teal
          </button>
          <button
            onClick={() => setBgColor("bg-orange-500")}
            className="px-4 py-2 bg-orange-500 shadow-lg shadow-orange-500/50 text-white rounded hover:bg-orange-600"
          >
            Orange
          </button>
          <button
            onClick={() => setBgColor("bg-emerald-500")}
            className="px-4 py-2 bg-emerald-500 shadow-lg shadow-emerald-500/50 text-white rounded hover:bg-emerald-600"
          >
            Emerald
          </button>
          <button
            onClick={() => setBgColor("bg-cyan-500")}
            className="px-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded hover:bg-cyan-600"
          >
            Cyan
          </button>
          <button
            onClick={() => setBgColor("bg-violet-500")}
            className="px-4 py-2 bg-violet-500 shadow-lg shadow-violet-500/50 text-white rounded hover:bg-violet-600"
          >
            Violet
          </button>
          <button
            onClick={() => setBgColor("bg-lime-500")}
            className="px-4 py-2 bg-lime-500 shadow-lg shadow-lime-500/50 text-white rounded hover:bg-lime-600"
          >
            Lime
          </button>
          <button
            onClick={() => setBgColor("bg-amber-500")}
            className="px-4 py-2 bg-amber-500 shadow-lg shadow-amber-500/50 text-white rounded hover:bg-amber-600"
          >
            Amber
          </button>
          <button
            onClick={() => setBgColor("bg-white")}
            className="px-4 py-2 bg-white shadow-lg shadow-white/50 text-black border-2 border-gray-500 rounded hover:bg-white"
          >
            White
          </button>

          {/* Gradient Buttons */}
          <button
            onClick={() =>
              setBgColor("bg-gradient-to-r from-pink-500 to-yellow-500")
            }
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 shadow-lg text-white rounded hover:from-pink-600 hover:to-yellow-600"
          >
            Sunset
          </button>
          <button
            onClick={() =>
              setBgColor("bg-gradient-to-r from-blue-500 to-green-500")
            }
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg text-white rounded hover:from-blue-600 hover:to-green-600"
          >
            Ocean
          </button>
          <button
            onClick={() =>
              setBgColor("bg-gradient-to-r from-yellow-400 to-orange-500")
            }
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg text-white rounded hover:from-yellow-500 hover:to-orange-600"
          >
            Mango
          </button>
          <button
            onClick={() =>
              setBgColor("bg-gradient-to-r from-indigo-500 to-pink-500")
            }
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg text-white rounded hover:from-indigo-600 hover:to-pink-600"
          >
            Purple Bliss
          </button>
          <button
            onClick={() =>
              setBgColor("bg-gradient-to-r from-green-400 to-blue-500")
            }
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg text-white rounded hover:from-green-500 hover:to-blue-600"
          >
            Emerald Sea
          </button>
        </div>
      </div>
    </div>
  );
}
