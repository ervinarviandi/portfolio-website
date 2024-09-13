import React from 'react'
import Taskboard from './slug/Taskboard'
import Navigation from '@/components/commons/Navigation'
import Footer from "@/components/commons/Footer"
const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full'>
        <div className='lg:max-w-5xl mx-auto px-5'>
        <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Taskboard</h2>
          <p className='lg:text-lg text-sm mt-5 dark:text-[#777777]'>The task board to keep track of your tasks.</p>
        <hr className='border-2 border-dashed w-full mt-5' />
        <div>
            <Taskboard/>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page