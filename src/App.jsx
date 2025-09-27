import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'
import Footer from './components/Footer'

function App() {

  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);



  const handleProgress = (ticket) => {
    // setInProgressCount(inProgressCount + 1);
    //  if(!selectedTicket.find(t => t.id === ticket.id)) {
    //   setSelectedTicket([...selectedTicket, ticket]);
    // }
    const isAlreadyAdded = selectedTicket.find(t => t.id === ticket.id);

    if (isAlreadyAdded) {
     alert("This ticket is already added!");
    return; // Exit the function without adding
    }

    // Add ticket if not already added
    setInProgressCount(inProgressCount + 1);
    setSelectedTicket([...selectedTicket, ticket]);
  }

  const handleResolved = () => {
    setResolvedCount(resolvedCount + 1);
  }

  const completeTask = () => {
    if(selectedTicket.length > 0) {
      setSelectedTicket(selectedTicket.slice(1));
      handleResolved();
      setInProgressCount(inProgressCount - 1);
    }
  }

  const ticketPromise =  fetch('/ticket.json')
    .then(res => res.json())
    .catch(err => console.log(err))

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
        ></Tickets>
      </Suspense>

      <Footer></Footer>
    </div>
  )
}

export default App
