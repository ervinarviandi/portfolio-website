import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { WavyBackground } from '../ui/wavy-background'
import { version } from 'os'
  // membuat  aplikasi dengan next js dan tailwind
  
const Questions = () => {
  return (
    <div className='w-full  py-10'>
        <div className='lg:max-w-5xl mx-auto px-5'>
          <h2 className='text-center lg:text-5xl md:text-4xl text-3xl font-bold'>Questions that nobody asked</h2>
          <p className='lg:text-lg md:text-md text-md text-center  mt-4 dark:text-[#777777]'>but still my asked be helpfull</p>

          <div className='grid md:grid-cols-5 gap-x-5'></div>
          <div className='mt-10'>
              <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-left'>What technologies are used to create the application?</AccordionTrigger>
              <AccordionContent>
                So many technologies 👌.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, b    
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </div>
    </div>
  )
}

export default Questions