import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"

const Navebar = () => {
    const [show,setshow] = useState(false)

    const open = () =>{
        setshow(!show)
    }
  return (
    <div className='flex justify-between items-center px-4 mt-8 max-w-[1240] text-white'>
   <h1 className='text-[#00df9a] font-bold text-3xl items-center '>REACT.</h1>
   <ul className='hidden md:flex cursor-pointer'>
    <li className='text-white px-4'>
      <Link   to="/" spy={true}  smooth={true} offset={0} duration={1200}>Home</Link>
    </li> 
    <li className='text-white px-4'>
      <Link to="anlytics" spy={true}  smooth={true} offset={0} duration={1200}>Company</Link>
    </li> 
    <li className='text-white px-4'>
      <Link   to="hero" spy={true}  smooth={true} offset={0} duration={1200}>Resorce</Link>
    </li> 
    <li className='text-white px-4'>
      <Link   to="resorce" spy={true}  smooth={true} offset={0} duration={1200}>About</Link>
    </li> 
    <li className='text-white px-4'>
      <Link   to="contact" spy={true}  smooth={true} offset={0} duration={1200}>Contact</Link>
    </li> 
   </ul>
<div className='cursor-pointer block md:hidden' onClick={open}  >
    {show ? <IoClose size={30}/>: <RiMenu3Line size={30}/>}
</div>
<div className={show ? 'absolute top-0 left-0 h-[15cm] m-4 border-r border-r-gray-900 w-[5cm] px-0 duration-300 ease-in-out bg-black' : "fixed left-[-100%]"}>
<h1 className='text-[#00df9a] font-bold text-3xl items-center mt-4 '>REACT.</h1>

    <ul className='pt-7 uppercase bg-black'>
    <li className='text-white p-4 border-b border-b-gray-400'>
      <Link   to="test1" spy={true}  smooth={true} offset={-100} duration={1200}>Home</Link>
    </li> 
    <li className='text-white p-4 border-b border-b-gray-400'>
      <Link  onClick={open} to="anlytics" spy={true}  smooth={true} offset={0} duration={1200}>Company</Link>
    </li> 
    <li className='text-white p-4 border-b border-b-gray-400'>
      <Link   to="hero" spy={true}  smooth={true} offset={0} duration={1200}>Resorce</Link>
    </li> 
    <li className='text-white p-4 border-b border-b-gray-400'>
      <Link   to="resorce" spy={true}  smooth={true} offset={0} duration={1200}>About</Link>
    </li> 
    <li className='text-white p-4 border-b border-b-gray-400'>
      <Link   to="contact" spy={true}  smooth={true} offset={0} duration={1200}>Contact</Link>
    </li> 
    </ul>
</div>
    </div>
  )
}

export default Navebar

// border-b border-b-gray-400