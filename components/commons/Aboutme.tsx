import React from 'react'
import Link from 'next/link'

const Aboutme = () => {
  return (
    <div className='w-full  '>
        <div className='lg:max-w-5xl mx-auto px-5'>
            <div className='grid md:grid-cols-2 lg:gap-16 gap-7 '>
                <div className='flex flex-col'>
                    <p className='text-md text-[#777777]'>About Me</p>
                    <p className=''>I&apos;m Ervin, a Front-end engineer who loves intuitive, clean and modern UI design.</p>
                </div>
                <div className='flex flex-col'>
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className='flex flex-col'>
                            <p className='text-md text-[#777777]'>Work</p>
                            <ul>
                                <li>
                                    <Link href="/contact" className=' dark:text-white text-[#454a55]'>
                                    Contact
                                    </Link>
                                    </li>
                                <li>
                                    <Link href="/works" className=' dark:text-white text-[#454a55]'>
                                    Portfolio
                                    </Link>
                                    </li>
                               
                                <li>
                                    <Link href="/studio" className=' dark:text-white text-[#454a55]'>
                                    Studio
                                    </Link>
                                    </li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-md text-[#777777]'>Social</p>
                            <ul>
                                <li>
                                    <Link href="https://github.com/ervinarviandi" target='_blank' className=' dark:text-white text-[#454a55]'>
                                    Source
                                    </Link>
                                    </li>
                                <li>
                                <Link href="https://500px.com/p/muhamadervin34?view=photos" target='_blank' className=' dark:text-white text-[#454a55]'>
                                    500px
                                    </Link>
                                </li>
                                
                                <li>
                                <Link href="/maps" target='_blank' className=' dark:text-white text-[#454a55]'>
                                    Maps
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