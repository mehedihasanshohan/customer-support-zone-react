

import React, { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketPromise, handleProgress, selectedTicket }) => {
  const tickets = use(ticketPromise);




  return (
  <div className="max-w-6xl mx-auto mt-8 grid grid-cols-12 gap-6">
  {/* Left side (Customer Tickets) */}
    <div className="col-span-12 lg:col-span-9">
      <h2 className="text-lg text-[#34485A] font-semibold mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} handleProgress={handleProgress} />
        ))}
      </div>
    </div>

  {/* Right side (Task Status + Resolved Task) */}
    <div className="col-span-12 lg:col-span-3">
      <h2 className="text-lg text-[#34485A] font-semibold mb-4">Task Status</h2>
      <div className="brounded-lg ">
       {selectedTicket.length === 0 ? (
            <p className="text-[#627382]  mb-2">
              Select a ticket to add to Task Status
            </p>
          ) : (
            <ul className="space-y-2 h-128 overflow-y-auto pr-2">
              {selectedTicket.map((t) => (
                <li
                  key={t.id}
                  className="bg-white shadow-2xl p-4 border rounded justify-between items-center"
                >
                  <span className="text-black font-medium">{t.title}</span>
                  <button className="w-full bg-green-700 cursor-pointer rounded-md mt-2">Completed</button>
                </li>
              ))}
            </ul>
          )}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-4">Resolved Task</h2>
      <div className="bg-white rounded-lg shadow-sm p-4 border">
        <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
      </div>
    </div>
  </div>
  );
};

export default Tickets;
