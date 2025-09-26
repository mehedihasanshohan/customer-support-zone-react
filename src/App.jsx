import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'

function App() {

  const ticketPromise =  fetch('/ticket.json')
    .then(res => res.json())
    .catch(err => console.log(err))

  return (
    <div className=''>
      {/* <Navbar /> */}
      <Banner></Banner>
      <Suspense fallback={<h2>Loading... </h2>}>
        <Tickets ticketPromise={ticketPromise}></Tickets>
      </Suspense>
    </div>
  )
}

export default App
