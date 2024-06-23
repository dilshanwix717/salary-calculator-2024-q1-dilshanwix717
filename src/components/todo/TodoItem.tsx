import React from "react";
import { FaBell } from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  let bellColor = "";
  switch (todo.priority) {
    case "HIGH":
      bellColor = "text-[#EB5757]";
      break;
    case "MEDIUM":
      bellColor = "text-[#F2C94C]";
      break;
    case "LOW":
      bellColor = "text-[#2F80ED]";
      break;
    default:
      bellColor = "text-[#2F80ED]";
  }

  const createdAt = new Date(todo.createdAt);
  const month = createdAt.toLocaleString("en-US", { month: "short" });
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const formattedDate = `${month}${day}`;

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4 mt-3">
      <div className="flex  ">
        <span className="mr-4 mt-2">
          <FaBell className={bellColor} />
        </span>
        <div>
          <span className="mr-4 mb-5 text-[#000000]">{todo.todo}</span>
          <br></br>
          {todo.completed && (
            <button className="mt-2 mb-5 text-sm text-[#BC006D]">
              Mark as done
            </button>
          )}
        </div>
      </div>
      <div className="space-x-3 ml-5">
        {!todo.completed && (
          <button className="text-sm bg-[#E8F5E9] text-[#219653] sm:px-2 px-1 py-1 rounded">
            Done
          </button>
        )}
        {todo.completed && (
          <button className="text-sm bg-[#f6efd9] text-[#F2C94C] sm:px-2 px-1 py-1 rounded">
            In progress
          </button>
        )}
        <span className="text-sm text-[#757575]">{formattedDate}</span>
      </div>
    </li>
  );
};

export default TodoItem;
