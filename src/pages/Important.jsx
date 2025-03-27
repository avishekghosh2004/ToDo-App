import React from "react";
import TodoItem from "../components/TodoItem";

export default function Important({ todos }) {
  const importantTodos = todos.filter((todo) => todo.important);

  return (
    <div className="p-5 ml-64">
      <h2 className="text-2xl font-bold">Important Todos</h2>
      {importantTodos.length > 0 ? (
        importantTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No important tasks.</p>
      )}
    </div>
  );
}
