"use client"
import Navigation from '@/components/commons/Navigation'
import React , {useState}from 'react'
import Image from 'next/image'
import Workspace from "@/public/studio-workspace.jpg"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Table from "@/app/studio/slug/table"
import Footer from '@/components/commons/Footer'
const Page = () => {
  const [isLoading, setLoading] = useState(true)
  return (
    <>
    <Navigation/>
    <div className='w-full '>
        <div className='lg:max-w-5xl mx-auto px-5 '>
            <div className='pt-20'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Studio</h2>
                <p className='lg:text-lg text-sm mt-5'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
                <CardContainer className="inter-var">
           <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
           <Image src={Workspace} width={500} height={300} className={`
                duration-700 ease-in-out group-hover:opacity-75 rounded-md 
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
              onLoad={() => setLoading(false)} alt='MyWorkspace'/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>



    {/* <iframe src="https://lottie.host/embed/b84e9e17-c820-46f0-8188-e435186ad5ee/Yl8j46KfFd.json"></iframe> */}

    <div>
      <p className='mt-7'>One of the most important things for me when working from office is having the right tools. So, let&apos;s start with my main device - the Advan Workplus </p>

      <div className='mt-10'>
        <h2 className='font-bold lg:text-4xl md-text-2xl text-xl my-5'>Advan Workplus</h2>
        <Table/>
      </div>

      <p>This Advan Workplus may not have the latest spech</p>

    </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page;