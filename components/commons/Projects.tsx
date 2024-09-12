"use client"  
import Image from "next/image"
import cardlist from "@/app/Projects"
import Link from "next/link"
import { useState } from "react"
import { Project } from "next/dist/build/swc"
import { AiFillGithub } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



interface card {
  card: Project
  demo: boolean
  source: string
  profiles: string
}

const Projects = () => {

  const [isLoading, setLoading] = useState(true);
  return (
    <>
    < div className='w-full py-10'>
        <div className='lg:max-w-5xl mx-auto px-5'>
          <h2 className="lg:text-3xl text-xl font-bold my-5">Check out my latest work</h2>
            {/* <Cards/> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 ">
              {
                cardlist.map((card, index) =>  (
                  <div key={index} className="group relative rounded-lg   duration-300 ease-in-out hover:scale-[102%] hover:shadow-md dark:border-none dark:hover:bg-[#1e1e1e]  ">
                  <div className="group relative overflow-hidden  ">
                    <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-lg rounded-tr-lg bg-amber-500 p-1 backdrop-blur  text-black z-30  duration-200 text-sm ">
                     {card.featured}
                    </div>
                    {/* <div data-testid="ribbon" id="ribbon-container" className="before:bg-amber-500 after:bg-amber-500"><div className=" flex items-center justify-center bg-amber-400  text-[11px] font-medium text-black"><span data-testid="ribbon-text" className="-ml-4 font-roboto-condensed">New</span><div className="absolute mx-4 h-6 w-2 animate-right-infinite bg-white opacity-30 shadow-sm shadow-white"></div></div></div> */}
                    <Image
                      src={card.image}
                      width={500}
                      height={500}
                      alt="QrCode"
                      loading="lazy"
                      className={`
                        duration-700 ease-in-out hover:blur-2xl rounded-t-lg group-hover:opacity-75 
                        ${
                          isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                        })`}
                      onLoad={() => setLoading(false)} 

                    />
                    <div className="absolute inset-0 translate-y-[100%] rounded-t-lg bg-gradient-to-b from-[#000000]/60 via-[#000000]/90 to-[#000000]/90 px-4 py-7 transition-all duration-300  group-hover:translate-y-0  
                    flex items-center justify-center gap-x-5 ">
                      <Link
                        href={card.demo !== undefined ? card.demo : "card.demo"} target="_blank"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        
                        <FaArrowUpRightFromSquare size={20} />
                      </Link>
                      <Link
                        href={card.source !== undefined ? card.source : "card.source"} target="_blank"
                        className="0 group flex items-center justify-center gap-2 py-[50px] text-gray-200  hover:text-[#05b6d3] "
                      >
                        <AiFillGithub size={20}/>
                        
                      </Link>
                      
                    </div>
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}
    
                  <div className="p-4">
                    <h2 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-200 bg-clip-text text-lg font-bold group-hover:text-transparent md:text-xl    ">
                      {card.name}
                    </h2>
                    <p className="md:text-md py-3 text-sm dark:text-[#777777]">
                     {card.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {/* <ReactLogo />
                      <TypescriptLogo />
                      <TailwindLogo />
                      <NextLogo />
                      <FramerLogo /> */}
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects