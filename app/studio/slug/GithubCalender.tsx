import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub } from "react-icons/lu";
import Profile from "@/public/avatar-ervin.png"
import Spotify from "@/public/Spotify_icon.svg.png"
import GitHubCalendar, { ThemeInput } from 'react-github-calendar';
const GithubCalender = () => {

    const explicitTheme: ThemeInput = {
        light: ['#ef4444', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#383838', '#0e4429', '#006d32', '#26a641', '#39d353'],
      };
  return (
    <div className='lg:flex items-center gap-2 mt-7 '>
    <div className='  lg:w-2/12 w-full my-3 lg:my-0  border border-gray-200 dark:border-neutral-800 rounded-lg'>
    {/* <Image src={Profile} className='rounded-lg' width={500} height={500} alt='profile' /> */}
    <div className='p-5'>
      <Link href="https://open.spotify.com/intl-id/track/6YUUQapDEqBF1yP3iHlsut?si=4bc1f1fbdba0418f" className='lg:flex-col flex items-center gap-2 overflow-hidden' target='_blank'>
    <Image src={Spotify} width={70} height={70} alt='spotifyembed' className=''/>
      <p className='text-sm '>Spotify </p>
      </Link>
    </div>
    </div>
    <div className=' lg:w-10/12 w-full   dark:text-gray-400 text-gray-700 border border-gray-200 dark:border-neutral-800 p-3 rounded-lg'>
      <div className='py-5 flex items-center gap-x-2 justify-end '>
      <LuGithub size={20} />
      <Link href="https://github.com/ervinarviandi" >ervinarviandi</Link>
      </div>
  <GitHubCalendar username="ervinarviandi" colorScheme='dark' theme={explicitTheme}    />
    </div>
    </div>
  )
}

export default GithubCalender