"use client"
import React from 'react'
import { useState } from 'react';
import Cloud from "@/components/magicui/icon-cloud";
import CloudIcons from "@/components/atoms/Cloud"
import { ModeToggle } from '@/components/atoms/ModeToggle';
import Link from 'next/link';
import LetterPullup from '@/components/magicui/letter-pullup';
import Image from 'next/image';
import Profile from "@/app/Assets/Profile/Profile.png"
import Navigation from '@/components/commons/Navigation';
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import FloatingNavDemo from "@/components/commons/FloatingNavDemo"
import { TikTokEmbed } from 'react-social-media-embed';
import Certificate from '@/app/about/slug/Certificate';
import { ConfettiFireworks } from '@/components/commons/particles/ConfetiFireworksButton';
import Footer from '@/components/commons/Footer';
import {motion} from "framer-motion"
import Maps from '../maps/page';
const Page = () => {


  const [isLoading, setLoading] = useState(true)
  return (
    <>
    <Navigation/>
    <motion.section  className='w-full ' initial={{ y: 250 }} animate={{ y: -10 }} transition={{ type: "spring" }}>
        <div className='lg:max-w-5xl mx-auto px-5'>
          <div className='flex justify-between items-center pt-16'> 
          <Link href="/" className='flex items-center gap-2 mb-4 mt-6 '> <HiOutlineArrowCircleLeft size={20}/>Back</Link>
          </div>

          <h2 className='lg:text-5xl text-2xl font-bold'>About 👋</h2>
                <p className='lg:text-lg text-sm mt-5 dark:text-[#777777]'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
                <hr className='border-2 border-dashed w-full mt-5' />

          <div className='mt-10'>
        
        </div>
          <Image src={Profile} width={160} height={100} alt='profile' className=' lg:hidden block mt-10' />
          <div className='grid md:grid-cols-2 gap-x-5 mt-10'>
            <div className='flex flex-col lg:max-w-4xl mx-auto'>
              {/* < ConfettiFireworks /> */}
              {ConfettiFireworks()}
            {/* <LetterPullup words={"i’m  ervin arviandi "} delay={0.05} /> */}

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TikTokEmbed url="https://www.tiktok.com/@fooxi.io/video/7289111519676157190?is_from_webapp=1&sender_device=pc&web_id=7396504856021206544" width={325} />
            </div> */}
            <div className='paragraph mt-10'>
              <p className=' lg:text-md text-sm '>Hello👋, I&apos;m Ervin. With over 2+ years of experience in Web Development, covering both frontend. I&apos;m particularly passionate about frontend side, where I focus on creating web applications that are not only precise but also user-friendly experiences.</p>
              <p className='mt-5 lg:text-md text-sm'>
              FYI, I really like and enjoy learning new things related to technology, as a front-end developer, I have to keep up with technological developments. In the future there will definitely be many new features, tools and programming languages that will make it easier for us to create and develop 🔨🔮 a website application. 💻📱
              </p>
              <p className='mt-5 lg:text-md text-sm font-Inconsolata border-l-2 pl-2 border-[#454a55]'>
              I&apos;am passionate about Frontend Developer and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮
              </p>


              <p className='mt-5 lg:text-md text-sm'>
                I a&#39;m Moh. Ervin Arviandi, a graduate from bumigora university of mataram, majoring in application software engineering, i aspire to become someone who is an expert in making applications, and work in a company. 
                
              </p>
            </div>
            </div>
            <div className='flex flex-col'>
              <Image src={Profile} width={250} height={250} alt='profile'  className={`
                duration-700 ease-in-out group-hover:opacity-75 mx-auto  lg:block hidden mt-20 
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
              onLoad={() => setLoading(false)} />
            </div>
          </div>
          <div className='lg:max-w-3xl px-5'>
            <div className='grid md:grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                {/* <p className='text-xs'>
                  diabwah ini saya gunakan
                </p> */}
              </div>
              <div className='flex flex-col'></div>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='lg:text-2xl text-lg font-bold'>
              Tools & Skills
            </h2>
            <p className='mt-5'>
              I have experience with the following tools and technologies:
            </p>
            {/* <p className='mt-5 text-xs '> ini adalah beberapa teknologi yang sering saya gunakan untuk membuat projek</p> */}
              
          </div>

          <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col'>
            <Cloud iconSlugs={['react',"nextdotjs", 'typescript', 'tailwindcss', "laravel", "firebase", "postgresql", "vercel","netlify","html","css","javascript","github","git","npm","yarn","bun","nodejs", "magicui", "figma", "shadcnui","nextui", "nodedotjs","svelte","prettier","eslint","postcss","html5","css3","bootstrap","framermotion", "magicui","aceternity","visualstudiocode", "mysql","adobephotoshop","notion", "daisyui", "framermotion", ]} /> 
            </div>
            <div className='flex flex-col mt-16'>
              <p className='lg:mt-20  lg:text-right lg:text-md text-sm'>During college, I have attended several seminars on web development and UI-UX designers, and I understand quite a bit about how to create a website or application, from design to maintenance, and the most important thing is how a website can be very easy to find and very easy to access on Google with a technique called Search Engine Optimization (SEO) and of course the website is very responsive when opened on various devices such as cellphones, tablets and laptops or computers, and is very user friendly.</p>
            </div>
          </div>
         

          {/* {FloatingNavDemo()} */}
          <Certificate/>

       
         
        </div>
    </motion.section>
    <Footer/>
    </>
  )
}

export default Page