import React from 'react'

const Contact = () => {
  return (
    <div className='p-6'>
      <div className='max-w-[500px] shadow-2xl mx-auto my-[3rem] py-6 px-8 rounded-xl'>
        <h1 className='text-[2.5rem] mb-5 font-bold'>Contact Us</h1>
          <input className=' w-full mb-5 py-3 px-2 rounded-lg shadow-xl' type="text" placeholder='Full Name'/>
 
          <input className=' w-full mb-5 py-3 px-2 rounded-lg shadow-xl' type="email" placeholder='Email Address'/>

        <textarea className='w-full mb-5 rounded-lg py-3 px-2 shadow-xl' rows={4} placeholder='Your Message' ></textarea>
        <button className='py-2 px-4 text-lg rounded-2xl bg-black font-[600] text-white'>Submit</button>
      </div>
    </div>
  )
}

export default Contact