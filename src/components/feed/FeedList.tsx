import { useState, useEffect } from "react";
import TodoItem from "./FeedItem";
import React from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const tasksPerPage = 3;

  useEffect(() => {
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="mt-10 border border-gray-200 rounded-md p-2 bg-white">
      <ul>
        {todos.slice(0, tasksPerPage).map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
