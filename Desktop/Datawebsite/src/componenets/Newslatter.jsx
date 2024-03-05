import React from 'react'

const Newslatter = () => {
  return (
    <div className='w-full py-16 text-white px-4' id='resorce'>
    <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & trick to optmize your flow?</h1>
        <p>Sign up to our newsletter and stay up to date.</p>
    </div>
<div className='my-4'>
<div className='flex flex-col md:flex-row sm:flex-row items-center justify-between w-full'>
    <input type="email" placeholder='Enetr Email' className='p-3 flex w-full rounded-md text-black'/>
    <button onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:scale-[1.1] hover:duration-500'>Notify Me</button>
</div>
<p>We care about the protection of your data. Read our <span className='text-[#00df9a]'> privecy policy.</span></p>

</div>
    </div>
  )
}

export default Newslatter