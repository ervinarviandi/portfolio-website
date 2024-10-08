"use client"
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
// import Logo from "@/public/ervinarviandi.jpg"
import Logo from "@/app/Assets/Profile/lrweb.jpg"
import Link from 'next/link'
import GradualSpacing from '../magicui/gradual-spacing'
import ShinyButton from '../magicui/shiny-button'
import { Button } from '../ui/moving-border'
import {motion} from "framer-motion"
const Hero = () => {
  const [isLoading, setLoading] = useState(true)

  return (
    <motion.section className='w-full h-[100vh] dark:bg-[#131313]   bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  relative flex items-center justify-center  '  initial={{ y: 250 }} animate={{ y: -10 }} transition={{  delay: 3.1, type: "spring" }}>
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#131313] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,transparent_20%,#0A0A0A_100%,#0A0A0A_80%)]"></div>
        <div className='lg:max-w-5xl mx-auto px-5'>
            <div className='grid md:grid-cols-2 gap-x-5'>
                <div className='flex flex-col relative z-10'>
                <Image src={Logo} width={150} height={200}  alt='profiles' className={` grayscale
                hover:grayscale-0
                duration-700 ease-in-out group-hover:opacity-75 lg:hidden block hover:rotate-12 lg:mt-32 
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
              onLoad={() => setLoading(false)} />
              <div className=' gap-x-2 flex items-center lg:mt-0 mt-7 '>
                {/* <p className='lg:text-lg text-md'>Hy I'm  </p> */}
                  <h2 className='lg:text-5xl text-2xl   font-bold'><span className='bg-gradient-to-r from-[#7af080] via-[#e0ff7d] to-[#e0ff7d] bg-clip-text text-transparent'> Ervin Arviandi</span>  </h2>
                  <span className='lg:text-5xl'>👋</span>
                  {/* <h2 className='text-5xl bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 via-teal-500 to-teal-500 font-bold'> ervin arviandi </h2> */}
              </div>
                  {/* <h2 className='text-2xl font-bold text-clip bg-transparent bg-gradient from-yellow-200 to-teal-500 mt-4'>Frontend Developer</h2> */}
                  <GradualSpacing
                className="font-display  text-lg font-bold tracking- [-0.1em] bg-clip-text text-transparent bg-gradient-to-b lg:mt-0 mt-4 from-sky-300 to-neutral-600    dark:from-neutral-200 dark:to-neutral-600 md:text-2xl md:leading-[5rem]"
              text="Software Engineering "
                   />
                  {/* <p className='mt-5 '
                  >Frontend Engineer, TypeScript Addict, based in Dompu West Nusa Tenggara </p> */}
                  {/* <p className='lg:text-md text-sm mt-7'>My professional path has been characterized by a dedication to web development, where I utilize Javascript, HTML, CSS, and ReactJS to transform creative visions into reality. My work ensures that the final products are not only visually appealing but also functional and optimized for a broad range of devices and browsers.</p> */}
                  <p className='lg:mt-0 mt-7 mb-5'>I study at , Bumigora University, majoring in software engineering. I create intuitive, fluid, modern, and visually appealing user interfaces that are pleasing to the user. Of course, using the latest technology.</p>
                 
                </div>
                <div className='flex flex-col relative z-10'>
                  <Image src={Logo} width={300} height={200} className={` grayscale 
                hover:grayscale-0
                duration-700 ease-in-out group-hover:opacity-75 mx-auto  rotate-6 lg:block hidden  
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
              onLoad={() => setLoading(false)}  alt='logo' />
                </div>
                <div className=''>
                  <Link href={"/contact"}>
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-[#131313] text-black dark:text-white  border-neutral-200 dark:border-neutral-700 "> 
                Get In Touch
                </Button>
                </Link>
                {/* <ShinyButton text="Get In Touch" className="p-4 border font-bold rounded-lg" /> */}
                {/* <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Get In Touch</Link> */}
                <Link href="/contact" className=" dark:text-[#777777] text-black font-bold py-2 px-4 rounded-lg">Resume</Link>
                </div>
            </div>
        </div>
                {/* <BackgroundBeams /> */}
    </motion.section>
  )
}

export default Hero