import React from 'react'
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>

    <h1 className='text-2xl'>CS - Ticket System</h1>
    <p className='text-[#A1A1AA]'>
      CS Ticket System helps teams streamline customer support by <br />
      providing an easy way to create, track, and resolve tickets. <br />
      Designed with a simple interface, it improves communication <br />
      between customers and support agents.
    </p>
  </aside>
  <nav>
    <h6 className="text-xl">Company</h6>
    <a className="link link-hover text-[#A1A1AA]">About Us</a>
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
    <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="text-xl">Services</h6>
    <a className="link link-hover text-[#A1A1AA]">Product & Services</a>
    <a className="link link-hover text-[#A1A1AA]">Customer Sttories</a>
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
  </nav>
  <nav>
    <h6 className="text-xl">Information</h6>
    <a className="link link-hover text-[#A1A1AA]">Terms & COnditions</a>
    <a className="link link-hover text-[#A1A1AA]">Privacy policy</a>
    <a className="link link-hover text-[#A1A1AA]">Join US</a>
  </nav>
  <nav>
    <h6 className='text-xl'>Social Links</h6>
    <div className='flex justify-center items-center gap-2'><FaXTwitter></FaXTwitter><a className="link link-hover text-[#A1A1AA]"> @CS - Ticket System</a></div>
    <div className='flex justify-center items-center gap-2'><FaLinkedin></FaLinkedin><a className="link link-hover text-[#A1A1AA]"> @CS - Ticket System</a></div>
    <div className='flex justify-center items-center gap-2'><FaFacebook></FaFacebook><a className="link link-hover text-[#A1A1AA]">  @CS - Ticket System</a></div>
    <div className='flex justify-center items-center gap-2'><IoIosMail></IoIosMail><a className="link link-hover text-[#A1A1AA]"> support@cst.com</a></div>
  </nav>
</footer>
  )
}

export default Footer