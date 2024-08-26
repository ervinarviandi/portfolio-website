import Navigation from '@/components/commons/Navigation'
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/adzkinbr.png"
import Logo1 from "@/public/shostsqr.png"
import Logo2 from "@/public/cek-khodam.png"
import Footer from '@/components/commons/Footer'
const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full'>
        <div className="lg:max-w-5xl mx-auto px-5 py-10 ">
            <div className='pt-20 '>
                <h2 className='lg:text-5xl text-2xl font-bold'>Works</h2>
                <p className='lg:text-lg text-sm mt-5'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-5 '>
              <div className='flex flex-col relative '>
                <div className='backdrop-blur-lg  bg-transparent rounded-xl overflow-hidden'>
                <Image src={Logo} width={500} height={500} alt='work' className='rounded-xl bg-transparent backdrop-blur-lg blur hover:blur-none duration-700 transition-all'/>
                </div>
                <h3 className=' absolute font-bold text-3xl right-0 left-0 bottom-0 top-0 text-center place-content-center  text-white '>Web Developer</h3>
                </div>
              <div className='flex flex-col relative '>
                <div className='backdrop-blur-lg bg-transparent rounded-xl overflow-hidden '>
                <Image src={Logo1} width={500} height={500} alt='work' className='ounded-xl bg-transparent backdrop-blur-lg blur hover:blur-none duration-700 transition-all'/>
                </div>
                <h3 className='absolute left-0 right-0 top-0 bottom-0 text-center place-content-center text-white text-2xl font-bold'>Graphics Design</h3>
                </div>
              <div className='flex flex-col relative '>
                <div className='backdrop-blur-lg bg-transparent rounded-xl overflow-hidden'>
                <Image src={Logo2} width={500} height={500} alt='work' className='ounded-xl bg-transparent backdrop-blur-lg blur hover:blur-none duration-700 transition-all'/>
                </div>
                <div className=''>
                <h3 className='absolute font-bold text-2xl left-0 right-0 bottom-0 top-0 text-center place-content-center text-white '>UI/UX Design</h3>
                </div>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page