import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Home({ todos, setTodos }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      dueDate,
      important: isImportant,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDueDate("");
    setIsImportant(false);
  };

  return (
    <div className="p-5 ml-64">
      <h2 className="text-2xl font-bold mb-4">All Todos</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          className="border p-2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-white px-3 py-2"
          onClick={() => setIsImportant(!isImportant)}
        >
          {isImportant ? "⭐ Unmark" : "⭐ Mark Important"}
        </button>
        <button className="bg-blue-500 text-white px-3 py-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
