import React from 'react'
import Link from 'next/link'

const Aboutme = () => {
  return (
    <div className='w-full  py-10'>
        <div className='lg:max-w-6xl mx-auto px-5'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                    <p className='text-md'>About Me</p>
                    <p className=''>I&apos;m Ervin, a Front-end engineer who loves intuitive, clean and modern UI design.</p>
                </div>
                <div className='flex flex-col'>
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className='flex flex-col'>
                            <p className='text-md'>Work</p>
                            <ul>
                                <li>
                                    <Link href="/contact" className=' dark:text-[#777777] text-[#454a55]'>
                                    Contact
                                    </Link>
                                    </li>
                                <li>
                                    <Link href="" className=' dark:text-[#777777] text-[#454a55]'>
                                    Experience
                                    </Link>
                                    </li>
                               
                                <li>
                                    <Link href="" className=' dark:text-[#777777] text-[#454a55]'>
                                    Studio
                                    </Link>
                                    </li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <p>Learn Coding</p>
                            <ul>
                                <li>
                                    <Link href="" className=' dark:text-[#777777] text-[#454a55]'>
                                    Contact
                                    </Link>
                                    </li>
                                <li>
                                <Link href="" className=' dark:text-[#777777] text-[#454a55]'>
                                    Certificate
                                    </Link>
                                </li>
                                <li>
                                <Link href="" className=' dark:text-[#777777] text-[#454a55]'>
                                    Skills & Tools
                                    </Link>
                                    </li>
                            
                            </ul>
                        </div>
                        {/* <div className='flex flex-col'>
                        <p>Learn Coding</p>
                            <ul>
                                <li>Contact</li>
                                <li>Experience</li>
                                <li>Skills & Tools</li>
                                <li>Studio</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme