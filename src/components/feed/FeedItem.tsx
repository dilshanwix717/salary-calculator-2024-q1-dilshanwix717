import React from "react";
import { FaBell } from "react-icons/fa";
import image from "../../assets/user.png";
import "./FeedItem.scss";

const TodoItem = ({ todo, index }) => {
  const createdAt = new Date(todo.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = createdAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li className="  border-b-2 py-2 gap-4 mt-5 mb-3 p-10">
      <div className="flex items-center">
        <div className="user mr-5">
          <img src={image} alt="" />
        </div>
        <div>
          <span className="mr-4 font-bold">{todo.createdBy}</span>
          created
          <span className="ml-4 mb-5 font-bold text-[#BC006D]">
            {todo.todo}
          </span>
        </div>
      </div>
      <div className="space-x-3 ml-8">
        <span className="text-sm text-[#757575]">{`${formattedDate} at ${formattedTime}`}</span>
      </div>
    </li>
  );
};

export default TodoItem;
