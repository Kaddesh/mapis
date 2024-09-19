import Image from 'next/image'
import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Terms = () => {
  return (
    <div className='flex items-center justify-between w-full border rounded-lg p-4 mb-20'>
    <div className='flex flex-col gap-1 text-sm'>
        <div className='flex items-center space-x-2'> 
        <Image src="/assets/docker.svg" alt="docker" width={32} height={32} />
        <h1 className='font-semibold '>Terms and Attachment</h1>
        </div>
      <p className='text-xs pl-10 text-slate-400 cursor-pointer'>Review payment and delivery terms</p>
    </div>

    <div className='text-gray-400'>
        <RiArrowDropDownLine  size={30}/>
    </div>
    </div>
  )
}

export default Terms

