import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-xl font-bold">Todo App</h2>
      <Link to="/" className="p-2 hover:bg-gray-700 rounded">
        🏠 Home
      </Link>
      <Link to="/important" className="p-2 hover:bg-gray-700 rounded">
        ⭐ Important
      </Link>
    </div>
  );
}
