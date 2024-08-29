import Navigation from '@/components/commons/Navigation'
import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from '@/components/commons/Footer';
const page = () => {


    const Contact = [
        {
            id: 1,
            title: "Github",
            icon: <IoLogoGithub/>
        },
        {
            id: 2,
            title: "Twitter",
            icon: < MdOutlineEmail />
        },
        {
            id: 3,
            title: "Instagram",
            icon: <FaLinkedinIn/>
        },
        {
            id: 4,
            title: "Linkedin",
            icon: <LuGithub/>
        },    

        {
            id: 5,
            title: "Facebook",
            icon: <LuGithub/>
        }

    ]

  return (
    <>
    <Navigation/>
    <div className='w-full'>
        <div className='lg:max-w-5xl mx-auto px-5'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Contact</h2>
                <p className='lg:text-lg text-sm mt-5'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
            <div className=''>
                {
                    Contact.map(({id, title, icon}) => (
                        <div key={id} className='lg:flex items-center gap-x-2'>
                            <Link href={''} className='flex items-center gap-x-2 py-3 px-4  hover:bg-slate-500 rounded-xl'>{title} {icon}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page