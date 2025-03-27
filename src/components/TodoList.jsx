import React, { useState } from "react";
import {
  MdEdit,
  MdDelete,
  MdCheckCircle,
  MdRadioButtonUnchecked,
} from "react-icons/md";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editId, setEditId] = useState(null);
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!taskText.trim() || !date) return;
    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: taskText, date } : task
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText, date, completed: false },
      ]);
    }
    setTaskText("");
    setDate("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const startEdit = (task) => {
    setTaskText(task.text);
    setDate(task.date);
    setEditId(task.id);
  };

  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border p-2 flex-1 rounded shadow"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded shadow"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded shadow"
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 border rounded bg-white shadow-md"
          >
            <div className="flex items-center gap-3">
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? (
                  <MdCheckCircle className="text-green-500 text-xl" />
                ) : (
                  <MdRadioButtonUnchecked className="text-gray-500 text-xl" />
                )}
              </button>
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.text}
              </span>
              <span className="text-sm text-gray-400">({task.date})</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(task)}
                className="text-yellow-500"
              >
                <MdEdit className="text-xl" />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500"
              >
                <MdDelete className="text-xl" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
