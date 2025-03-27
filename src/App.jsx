import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

export default function App() {
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1">
        {activeTab === "tasks" ? (
          <TodoList />
        ) : (
          <h1 className="text-3xl text-center mt-10">Welcome to TodoApp</h1>
        )}
      </div>
    </div>
  );
}
