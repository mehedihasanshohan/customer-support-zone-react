import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-white'>
    <div className="navbar max-w-6xl mx-auto px-4 lg:px-0 m-0 text-black font-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CS- Ticket System</a>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1  text-xl font-medium">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="px-4 py-2 text-white rounded-lg
                      bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
                      hover:bg-gradient-to-r hover:from-[#9F62F2]
                      hover:to-[#632EE3]">
      + New Ticket
    </button>
  </div>
</div>
</div>
  )
}

export default Navbar