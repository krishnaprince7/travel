import React from 'react'

const Analtics = () => {
  return (
    <div className='w-full bg-white h-screen px-2 py-5' id='anlytics'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img src="/images/laptop.jpg" className="w-[500px] mx-auto my-4" alt="" />
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>DATA ANYLATICS DASHBORD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p>
Cookies are created to identify you when you visit a new website. The web server — which stores the website's data — sends a short stream of identifying information to your web browser in the form of cookies. This identifying data (known sometimes as “browser cookies”) is processed and read by “name-value” pairs. </p>
        <button onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className="text-[#00df9a] rounded-md bg-black pl-0 w-[200px] py-3 my-5 font-medium mx-auto md:mx-0 hover:scale-[1.1] hover:duration-500">Get Started</button>

    </div>

    </div>
   

    </div>
  )
}

export default Analtics