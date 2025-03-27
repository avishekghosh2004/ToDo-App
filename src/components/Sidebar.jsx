import React from "react";
import { MdOutlineTaskAlt, MdHome } from "react-icons/md";

export default function Sidebar({ setActiveTab }) {
  return (
    <div className="w-60 h-screen bg-blue-500 text-white flex flex-col p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">TodoApp</h2>
      <button
        className="flex items-center space-x-3 p-3 hover:bg-blue-600 rounded transition"
        onClick={() => setActiveTab("home")}
      >
        <MdHome className="text-2xl" />
        <span>Home</span>
      </button>
      <button
        className="flex items-center space-x-3 p-3 hover:bg-blue-600 rounded transition"
        onClick={() => setActiveTab("tasks")}
      >
        <MdOutlineTaskAlt className="text-2xl" />
        <span>Tasks</span>
      </button>
    </div>
  );
}
