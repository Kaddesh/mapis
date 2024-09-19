import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Quote = () => {
  return (
    <div className='flex items-center justify-between mb-5'>
    <div>
      <h1 className='text-base font-semibold'>Quote Details</h1>
      <p className='text-slate-400 text-xs'>Created on wed, 12th June 2022, 08:00am</p>
    </div>

    <div className='flex gap-2 text-xs'>
      <button className='bg-[#175CFF] py-2 px-3 rounded-md text-white'>Respond</button>
      <button className='bg-red-600 py-2 px-3 rounded-md text-white flex items-center justify-between '> <span className='inline-block mr-1'><FaTimes /></span>  Adjust</button>
    </div>
    </div>
  )
}

export default Quote
