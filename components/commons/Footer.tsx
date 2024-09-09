import React from 'react'
import { RiGithubFill } from "react-icons/ri";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='w-full border-t backdrop-blur-xl mt-7   '>
        <div className='lg:max-w-5xl mx-auto py-4  lg:flex justify-between items-center '>
            <p className='text-center dark:text-[#777777] text-[#758498] text-sm '>© 2024 developed by ervin arviandi</p>
            <Link href="https://github.com/ervinarviandi" className='lg:flex hidden text-sm text-center justify-center  items-center dark:text-[#777777]  text-[#758498]  hover:underline' target='_blank'>
           see the recent update on GitHub
            < RiGithubFill size={20} className='ml-1'/>
            </Link>  
        </div>
    </div>
  )
}

export default Footer