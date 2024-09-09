"use client"
import React from 'react'
import Image from 'next/image'
import Certificate from '@/app/certificate/slug/Certificate'
import Navigation from '@/components/commons/Navigation'
import {motion} from "framer-motion"

const page = () => {
  return (
    <>
    <Navigation/>
    <motion.section className='w-full' initial={{ y: 250 }} animate={{ y: -10 }} transition={{  type: "spring" }}>
        <div className='lg:max-w-5xl mx-auto px-5 '>
            <h2 className='certificate font-bold text-3xl pt-16 '>Certificate</h2>
            <p className='mt-5 dark:text-[#777777]'>Some webinar certificates that I have received from several well-known platforms when learning about the career of a frontend developer in the industry, web development and UI UX designer</p>
            <hr  className='w-full border-2 border-dashed mt-5'/>
            <Certificate/>
        </div>
    </motion.section>
    </>
  )
}

export default page