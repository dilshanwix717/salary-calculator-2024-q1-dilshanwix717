import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import React from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  useEffect(() => {
    fetch("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const paginatedTodos = todos.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(todos.length / tasksPerPage);

  return (
    <div className="mt-10 border border-gray-200 rounded-md p-2 bg-white">
      <ul>
        {paginatedTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
      <div className="flex justify-center mt-4 ">
        <button
          className="px-4 py-2 rounded-md mr-2 "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md p-2 m-2  ${
              currentPage === index + 1
                ? "  text-[#BC006D] border-[#BC006D]  "
                : "border-gray-200"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 rounded-md bg-white ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TodoList;
