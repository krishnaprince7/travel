import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-8 text-gray-300' id='contact' >
    <div>
   <h1 className='text-[#00df9a] font-bold text-3xl items-center '>REACT.</h1>
<p className='py-4 font-medium'>Contact Fell free to reach out!</p>
<div className='flex md:w-[75%] justify-between my-6'>
<IoLogoInstagram  size={30} onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")}/>
<MdEmail size={30} onClick={()=> window.open("princekrishna5707@gmail.com")}/>
<FaGithub  size={30} onClick={()=> window.open("https://github.com/krishnaprince7")}/>
<FaLinkedin  size={30} onClick={()=> window.open("https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}/> 
</div>
    </div>
    <div className='lg:col-span-2 flex justify-between my-6'>
    <div>
    <h6 className='font-medium text-gray-400'>Solutions</h6>
      <ul>
        <li className='py-2 text-sm'>Anylatics</li>
        <li className='py-2 text-sm'>Commerce</li>
        <li className='py-2 text-sm'>Marketing</li>
        <li className='py-2 text-sm'>Insights</li>
      </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Support</h6>
      <ul>
        <li className='py-2 text-sm'>Pricing</li>
        <li className='py-2 text-sm'>Documenetation</li>
        <li className='py-2 text-sm'>Guides</li>
        <li className='py-2 text-sm'>API Status</li>
      </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Company</h6>
      <ul>
        <li className='py-2 text-sm'>About</li>
        <li className='py-2 text-sm'>Blogs</li>
        <li className='py-2 text-sm'>Jobs</li>
        <li className='py-2 text-sm'>Press</li>
      </ul>
    </div>
    <div>
    <h6 className='font-medium text-gray-400'>Legle</h6>
      <ul>
        <li className='py-2 text-sm'>Clame</li>
        <li className='py-2 text-sm'>Policy</li>
        <li className='py-2 text-sm'>Terms</li>
        <li className='py-2 text-sm'>Kuchbhi</li>
      </ul>
    </div>

    </div>

    </div>
  )
}

