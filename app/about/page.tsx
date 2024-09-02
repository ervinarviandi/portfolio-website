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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
const Page = () => {




  const categories = [
    {
      name: 'Intro',
      posts: [
        {
          id: 1,
          title:  `Hello👋, I'm Ervin. With over 2+ years of experience in Web Development, covering both frontend. I'm particularly passionate about frontend side, where I focus on creating web applications that are not only precise but also user-friendly experiences.      
          `,
          date: '5h ago',
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "FYI, I really like and enjoy learning new things related to technology, as a front-end developer, I have to keep up with technological developments. In the future there will definitely be many new features, tools and programming languages that will make it easier for us to create and develop 🔨🔮 a website application. 💻📱,  I'am passionate about Frontend Developer and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
        {
          id: 3,
          title: "",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
      ],
    },
    {
      name: 'Career',
      posts: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
    },
    {
      name: 'Education',
      posts: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    },
  ]

  const [isLoading, setLoading] = useState(true)
  return (
    <>
    <Navigation/>
    <div className='w-full '>
        <div className='lg:max-w-5xl mx-auto px-5'>
          <div className='flex justify-between items-center pt-28'> 
          <Link href="/" className='flex items-center gap-2 mb-4 '> <HiOutlineArrowCircleLeft size={20}/>Kembali</Link>
          </div>

          <div className='mt-10'>
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl dark:bg-white/5 bg-gray-200 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      {/* <ul className="flex gap-2 text-white/50" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul> */}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
        </div>
          <Image src={Profile} width={160} height={100} alt='profile' className='rounded-full lg:hidden block' />
          <div className='grid md:grid-cols-2 gap-x-5'>
            <div className='flex flex-col lg:max-w-4xl mx-auto'>
              {/* < ConfettiFireworks /> */}
              {ConfettiFireworks()}
            {/* <LetterPullup words={"i’m  ervin arviandi "} delay={0.05} /> */}

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TikTokEmbed url="https://www.tiktok.com/@fooxi.io/video/7289111519676157190?is_from_webapp=1&sender_device=pc&web_id=7396504856021206544" width={325} />
            </div> */}
            <div className='paragraph mt-10'>
              <p className=' lg:text-md text-sm'>Hello👋, I&apos;m Ervin. With over 2+ years of experience in Web Development, covering both frontend. I&apos;m particularly passionate about frontend side, where I focus on creating web applications that are not only precise but also user-friendly experiences.</p>
              <p className='mt-5 lg:text-md text-sm'>
              FYI, I really like and enjoy learning new things related to technology, as a front-end developer, I have to keep up with technological developments. In the future there will definitely be many new features, tools and programming languages that will make it easier for us to create and develop 🔨🔮 a website application. 💻📱
              </p>
              <p className='mt-5 lg:text-md text-sm'>
              I&apos;am passionate about Frontend Developer and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮
              </p>


              <p className='mt-5 lg:text-md text-sm'>
                I a&#39;m Moh. Ervin Arviandi, a graduate from bumigora university in mataram, majoring in application software engineering, i graduate with gpa of 3.24, i aspire to become someone who is an expert in making applications, and work in a company. 
                
              </p>
            </div>
            </div>
            <div className='flex flex-col'>
              <Image src={Profile} width={200} height={200} alt='profile'  className={`
                duration-700 ease-in-out group-hover:opacity-75 mx-auto rounded-full lg:block hidden 
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
            <Cloud iconSlugs={['react',"nextdotjs", 'typescript', 'tailwindcss', "laravel", "firebase", "postgresql", "vercel","netlify","html","css","javascript","github","git","npm","yarn","bun","nodejs", "magicui", "figma", "shadcnui","nextui", "nodedotjs","svelte","prettier","eslint","postcss","html5","css3","bootstrap","framermotion", "magicui","aceternity","visualstudiocode", "mysql","adobephotoshop","notion" ]} /> 
            </div>
            <div className='flex flex-col'>
              <p className='my-5 lg:text-right lg:text-md text-sm'>During college, I have attended several seminars on web development and UI-UX designers, and I understand quite a bit about how to create a website or application, from design to maintenance, and the most important thing is how a website can be very easy to find and very easy to access on Google with a technique called Search Engine Optimization (SEO) and of course the website is very responsive when opened on various devices such as cellphones, tablets and laptops or computers, and is very user friendly.</p>
            </div>
          </div>

          {/* {FloatingNavDemo()} */}
          <Certificate/>
         
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page