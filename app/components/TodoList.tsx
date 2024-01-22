import React from "react";

type toDo = {
  id: number;
  task: string;
  dueDate: string;
};

export default async function ToDoList() {
  
  // Fetch To-Dos from route handler
  const todos = await fetch("http://localhost:3000/todos", {
    next: { tags: ["ToDo"] },
  });

  // Parse response to JSON
  const data  = await todos.json();

  return (
    <div className="max-w-xl mx-auto pt-10">
      <h1 className="text-4xl font-bold mb-5">To-Do List</h1>
      <ul>
        {data.map((todo: toDo) => (
          <li
            key={todo.id}
            className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between"
          >
            <div>{todo.task}</div>
            <div className="bg-green-600 px-2 py-1 rounded text-sm">
              {todo.dueDate}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
