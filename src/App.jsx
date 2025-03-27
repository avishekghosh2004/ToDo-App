import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Important from "./pages/Important";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
        <Route path="/important" element={<Important todos={todos} />} />
      </Routes>
    </Router>
  );
}

export default App;
