"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Certificate = () => {
    
    const [isLoading, setLoading] = useState(true);

    const certificate = [
        {
            id  :  1 ,
            logo:"/logo/webinar/baparekraf.png" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Baparekraf Developer Day",
            title: "Belajar Fundamental Front-End Web Development",
            date: "Sabtu 02-april-2022"
        },
        {
            id  :  2 ,
            logo:"/logo/webinar/dicoding.jpeg" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Dicoding",
            title: "Following Some Events from Dicoding",
            date: "Senin 23-mei-2023"

            
        },
        {
            id  :  3 ,
            logo:"/logo/webinar/wibinx.png" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "wibinx",
            title: "Kickstart Your Career in IT: UI/UX & Web Developer ",
            date: "Senin 23-mei-2023"

            
        },
        {
            id  :  4 ,
            logo:"/logo/webinar/harisenin.png" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Harisenin.com",
            title:"Coding Camp Exploring Front-End Developer : Wonders & Opportunities",
            date: "Senin 02-april-2022"

        },
        {
            id  :  5 ,
            logo:"/logo/webinar/revou.png" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Revou",
            title:"Become Software Engineer at Bukalapak",
            date: "Senin 29-agustus-2024"

        },
        {
            id  :  6 ,
            logo:"/logo/webinar/cintessa.jpg" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Cintesa Academy",
            title:"Road To Front-End Developer Dengan ReactJS",
            date: "Senin 02-april-2022"

        },
        {
            id  :  7 ,
            logo:"/logo/webinar/download.png" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Dibimbing.Id",
            title:"Digital Skill Fair 30.0 Front-End Web Development",
            date: "Senin 02-april-2022"

        },
        {
            id  :  7 ,
            logo:"/logo/webinar/hacktive8.jpg" ,
            Link : "https://github.com/abhishek-raj/Projects",
            name : "Hacktive8",
            title:" Dari Beginner sampai Jadi Front End Developer: Bikin Aplikasi Dengan Next.js & TypeScript.",
            date: "Senin 02-april-2022"

        },
    ];
  return (
    <div className='w-full'>
        <div className='lg:max-w-5xl mx-auto lg:px-0 px-5'>
            <h2 className='lg:text-3xl text-2xl font-bold mt-20'>Certificate </h2>
            <p className='lg:text-md text-sm mt-7'>Some webinar certificates that I have received from several well-known platforms when learning about the career of a frontend developer in the industry, web development and UI UX designer</p>
            <p className='text-sm mt-5 '>Klick <Link href="/certificate" className='hover:font-bold text-[#7bf080]'>here</Link> to see all certificates</p>
            <div className='grid gap-5 mt-10'>
                <div className='w-full flex flex-col gap-5 border-l  relative lg:ml-10 '>  
                { certificate.map((items) => (
                    <div key={items.id}>
                        <div className='flex items-center justify-between   -ml-6 '>
                        <div className=''>
                            <div className='flex items-center gap-x-2'>
                        <Image src={items.logo} width={50} height={50} alt={items.name}
                        className={`
                            rounded-full   dark:border-gray-600 border-gray-300 absolute 
                            ${
                              isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                            })`}
                          onLoad={() => setLoading(false)} />
                      
                        <div className='mt-2 ml-16'>
                        <h2>{items.name}</h2>
                        <div className=''>
                            <p className='lg:text-md text-sm dark:text-gray-400 text-gray-600'>{items.title}</p>
                        </div>
                        </div>
                            </div>
                        </div>
                        <div>
                            {/* right */}
                        </div>
                        </div>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate