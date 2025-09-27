import { Suspense, useState} from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'
import Footer from './components/Footer'
import { toast, ToastContainer } from 'react-toastify'


const ticketPromise =  fetch('/ticket.json')
    .then(res => res.json())
    .catch(err => console.log(err))

function App() {

  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);


  const handleProgress = (event, ticket) => {
    event.preventDefault();
    const isAlreadyAdded = selectedTicket.find(t => t.id === ticket.id);
    if (isAlreadyAdded) {
     toast("This ticket is already added!");
    return;
    }

    const updatedTicket = { ...ticket, status: "In-Progress" };
    setSelectedTicket([...selectedTicket, updatedTicket]);
    setInProgressCount(inProgressCount + 1);

    toast.success("Ticket added to Task Status");
  }




  const handleResolved = () => {
    setResolvedCount(resolvedCount + 1);
  }


  const completeTask = (ticket) => {
  // Remove from in-progress
  setSelectedTicket(selectedTicket.filter(t => t.id !== ticket.id));

  const updatedTicket = { ...ticket, status: "resolved" };
  setResolvedTasks([...resolvedTasks, updatedTicket]);

  setInProgressCount(inProgressCount - 1);
  setResolvedCount(resolvedCount + 1);

  toast.success("Task marked as completed");
};




  return (
    <div className=''>
      <Navbar />
      <Banner inProgressCount={inProgressCount}
              resolvedCount={resolvedCount}
              handleProgress={handleProgress}
              handleResolved={handleResolved}
      >
      </Banner>
      <Suspense fallback={<h2>Loading... </h2>}>
        <Tickets handleProgress={handleProgress}
                 ticketPromise={ticketPromise}
                 selectedTicket={selectedTicket}
                 completeTask={completeTask}
                 resolvedTasks={resolvedTasks}
        ></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
