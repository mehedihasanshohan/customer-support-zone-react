// import React, { use } from 'react'
// import Ticket from './Ticket';

// const Tickets = ({playersPromise}) => {

//   const tickets = use(playersPromise);
//   console.log(tickets);

//   return (
//     <>
//       {
//         tickets.map(ticket =>
//           <Ticket key={ticket.id}
//                   ticket={ticket}>
//           </Ticket>)
//       }
//     </>
//   )
// }

// export default Tickets

import React, { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketPromise }) => {
  const tickets = use(ticketPromise);

  return (
  <div className="max-w-6xl mx-auto p-6 grid grid-cols-12 gap-6">
  {/* Left side (Customer Tickets) */}
    <div className="col-span-12 lg:col-span-9">
      <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>

  {/* Right side (Task Status + Resolved Task) */}
    <div className="col-span-12 lg:col-span-3">
      <h2 className="text-lg font-semibold mb-4">Task Status</h2>
      <div className="bg-white rounded-lg shadow-sm p-4 border">
        <p className="text-gray-500 text-sm mb-2">
          Select a ticket to add to Task Status
        </p>
        <div className="text-gray-400 text-sm">No tasks yet.</div>
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
