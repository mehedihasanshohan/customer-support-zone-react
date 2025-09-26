import React from "react";
import { LuCalendarDays } from 'react-icons/lu';

const Ticket = ({ ticket, handleProgress }) => {
  const { id, title, description, priority, status, customer, date } = ticket;

  // Priority color mapping
  const priorityColors = {
    "HIGH PRIORITY": "bg-red-100 text-red-600",
    "MEDIUM PRIORITY": "bg-yellow-100 text-yellow-600",
    "LOW PRIORITY": "bg-green-100 text-green-600",
  };

  // Status color mapping
  const statusColors = {
    Open: "bg-green-100 text-green-600",
    "In-Progress": "bg-yellow-100 text-yellow-600",
    Closed: "bg-gray-100 text-gray-600",
  };

  return (
    <div onClick={() => handleProgress(ticket)} className="bg-white cursor-pointer shadow-sm rounded-lg p-4 flex flex-col gap-2 border hover:shadow-md transition">
      {/* Title + Status on right */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${
            statusColors[status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
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
            <span className="text-gray-400"> {date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
