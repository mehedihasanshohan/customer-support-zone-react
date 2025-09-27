import React from "react";
import { LuCalendarDays } from 'react-icons/lu';

const Ticket = ({ ticket, handleProgress }) => {
  const { id, title, description, priority, status,  customer, createdAt } = ticket;

  // Priority color mapping
  const priorityColors = {
    "HIGH PRIORITY": "bg-red-100 text-red-600",
    "MEDIUM PRIORITY": "bg-yellow-100 text-yellow-600",
    "LOW PRIORITY": "bg-green-100 text-green-600",
  };

  const statusStyles = {
    open: "bg-green-200 text-green-800",
    "in-progress": "bg-yellow-300 text-yellow-800",
    resolved: "bg-blue-100 text-blue-600",
  };

  const dotColors = {
    open: "bg-green-600",
    "in-progress": "bg-yellow-600",
    resolved: "bg-blue-600",
  };

  const normalizedStatus = status.toLowerCase();

  return (
    <div onClick={(event) => handleProgress(event, ticket)} className="bg-white cursor-pointer shadow-sm rounded-lg p-4 flex flex-col gap-2 border hover:shadow-md transition">
      {/* Title + Status on right */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div
          className={`px-2 py-1 flex justify-center items-center gap-1 text-xs rounded-full font-medium ${statusStyles[normalizedStatus]}`}
        > <div className={`h-2 w-2 rounded-full ${dotColors[normalizedStatus]}`}></div>
          {normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1)}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">{description}</p>

      {/* Bottom row: ID, Priority, Customer, Date */}
      <div className="flex items-center justify-between mt-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">{id}</span>
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              priorityColors[priority] || "bg-gray-100 text-gray-600"
            }`}
          >
            {priority}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500">{customer}</span>
          <div className="flex gap-2 justify-center items-center">
            <LuCalendarDays className="text-gray-800 "></LuCalendarDays>
            <span className="text-gray-400"> {createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
