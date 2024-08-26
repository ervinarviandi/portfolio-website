import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { WavyBackground } from '../ui/wavy-background';
import { LuGithub } from "react-icons/lu";
import GitHubCalendar, { ThemeInput } from 'react-github-calendar';
import Profile from "@/public/avatar-ervin.png"
import Spotify from "@/public/Spotify_icon.svg.png"
const Featured = () => {

  const explicitTheme: ThemeInput = {
    light: ['#ef4444', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

    const Featured = [
      {
        id: 1,
        name: "Clean & Intuitive",
        title: "Eye Catching, Modern & Minimalist Design.",
        description: "Keep the User Interface clean with a modern touch without compromising the User Experience.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
      {
        id: 2,
        name: "Detail Oriented",
        title: "Keen Eye for Spotting Small Details.",
        description: "Awareness to ease of access, User Interface consistency, and improved User Experience.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
      {
        id: 3,
        name: "Pretty & Optimized",
        title: "Comprehensible and Optimized Code.",
        description: "Writing clean code is a top priority while keeping it as optimized as possible.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
    ];

 




  return (
    <div  className='w-full  max-w-4xl mx-auto pb-40 '>
        <div className='lg:max-w-6xl mx-auto px-5 py-10 '>
          <div className='lg:flex items-center gap-2 '>
          <div className='  lg:w-2/12 w-full my-3 lg:my-0  border border-gray-200 dark:border-neutral-800 rounded-lg'>
          {/* <Image src={Profile} className='rounded-lg' width={500} height={500} alt='profile' /> */}
          <div className='p-5'>
            <Link href="https://open.spotify.com/intl-id/track/6YUUQapDEqBF1yP3iHlsut?si=4bc1f1fbdba0418f" className='lg:flex-col flex items-center gap-2 overflow-hidden' target='_blank'>
          <Image src={Spotify} width={70} height={70} alt='spotifyembed'/>
            <p>Spotify </p>
            </Link>
          </div>
          </div>
          <div className=' lg:w-10/12 w-full   dark:text-gray-400 text-gray-700 border border-gray-200 dark:border-neutral-800 p-3 rounded-lg'>
            <div className='py-5 flex items-center gap-x-2 justify-end '>
            <LuGithub size={20} />
            <Link href="https://github.com/ervinarviandi" >ervinarviandi</Link>
            </div>
        <GitHubCalendar username="ervinarviandi" theme={explicitTheme} colorScheme='dark'  />
          </div>
          </div>
        {/* <ActivityCalendar data={data} theme={explicitTheme} /> */}
          {
            Featured.map((item) => {
              return (
                <div key={item.id} className='flex flex-col '>
                  <div className='flex flex-col h-full w-full '>
                    <p className='text-md font-bold dark:text-cyan-300 text-cyan-500 mt-20 mb-5'>
                    {item.name}
                    </p>
                  <h2 className='lg:text-4xl text-2xl font-bold mb-4'>
                    {item.title}
                  </h2>
                    <p className='text-md  dark:text-gray-400 text-gray-500  '>{item.description}</p>
                </div>
                  </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Featured