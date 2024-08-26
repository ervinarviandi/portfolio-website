import React from 'react'
import { RiGithubFill } from "react-icons/ri";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='w-full border-t  '>
        <div className='lg:max-w-6xl mx-auto px-5 py-4  lg:flex justify-between items-center '>
            <p className='text-center dark:text-gray-400 text-gray-700 text-sm '>© 2024 developed by ervin arviandi</p>
            <Link href="https://github.com/ervinarviandi" className='text-sm text-center justify-center flex items-center dark:text-gray-400 text-gray-700 hover:underline' target='_blank'>
           see the recent update on GitHub
            < RiGithubFill size={20} className='ml-1'/>
            </Link>  
        </div>
    </div>
  )
}

export default Footer