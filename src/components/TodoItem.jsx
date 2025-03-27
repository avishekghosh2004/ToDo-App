import React, { useState } from "react";

export default function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);

  const deleteTask = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const toggleImportant = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, important: !t.important } : t
      )
    );
  };

  const saveEdit = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, text: newText, dueDate: newDueDate } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`p-3 rounded flex justify-between items-center mt-2 ${
        todo.completed ? "bg-green-300" : "bg-gray-200"
      }`}
    >
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            className="border p-2 w-full"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="date"
            className="border p-2"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={saveEdit}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 w-full">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text} {todo.important && "⭐"} (Due:{" "}
            {todo.dueDate || "No Due Date"})
          </span>
          <button
            className="bg-yellow-500 text-white px-2 py-1"
            onClick={toggleImportant}
          >
            ⭐
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1"
            onClick={deleteTask}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
