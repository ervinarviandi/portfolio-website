"use client"
import Navigation from '@/components/commons/Navigation'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Tabs from "@/app/works/slug/Projects"
import Footer from '@/components/commons/Footer'

// const categories = [
//   {
//     name: 'Web Developer',
//     posts: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//   },
//   {
//     name: 'UI/UX Design',
//     posts: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//   },
//   {
//     name: 'Graphics Design',
//     posts: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   },
// ]

import {motion} from "framer-motion"

export default function Page() {
  return (
    <>
    <Navigation/>
    <motion.section className='w-full' initial={{ y: 250 }} animate={{ y: -10 }} transition={{  type: "spring" }}>
      <div className='lg:max-w-5xl mx-auto px-5'>
      <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Portfolio</h2>
      <p className='lg:text-lg text-sm mt-5 dark:text-[#777777]'>I&apos;ve worked on a variety of projects, ranging from small MVPs to full-scale applications, also developed a wide array of features
      and functionalities in projects.</p>
      <hr className='border-2 border-dashed w-full mt-5' />
        <Tabs/>
      </div>
    </motion.section>
    <Footer/>
    </>
  )
}