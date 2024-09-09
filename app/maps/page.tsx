"use client"
import React from 'react'
import Link from 'next/link'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <motion.section className='w-full' initial={{ y: 250 }} animate={{ y: -10 }} transition={{  type: "spring" }}>
      <div className='lg:max-w-5xl mx-auto px-5'>
          <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Maps</h2>
          <p className='lg:text-lg text-sm mt-5 dark:text-[#777777]'>find me by looking at the location map below.</p>
          <hr className='border-2 border-dashed w-full mt-5' />
          <div >
          <Link href="/" className='flex items-center gap-2 my-5 hover:text-sky-500 text-[#] '> <HiOutlineArrowCircleLeft size={20}/>Back</Link>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8395613665245!2d118.43039520500704!3d-8.554082543056339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dca6f73d9d4c0a5%3A0xd3c86b70715905e7!2sCCWJ%2B9M8%2C%20Kandai%20Dua%2C%20Woja%2C%20Dompu%20Regency%2C%20West%20Nusa%20Tenggara%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1725705966226!5m2!1sen!2sus"  style={{border:0}} className='h-screen w-full my-7' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <Maps/> */}
      </div>  
    </motion.section>
  )
}

export default page