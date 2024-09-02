import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { WavyBackground } from '../ui/wavy-background'
  // membuat  aplikasi dengan next js dan tailwind
  
const Questions = () => {
  return (
    <div className='w-full  py-10'>
        <div className='lg:max-w-6xl mx-auto px-5'>
          <h2 className='text-center lg:text-5xl md:text-4xl text-3xl font-bold'>Questions that nobody asked</h2>
          <p className='lg:text-lg md:text-md text-md text-center dark:text-gray-400 text-gray-700 mt-4'>but still my asked be helpfull</p>

          <div className='grdi :md:grid-cols-5 gap-x-5'></div>
          <div className='mt-10'>
              <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa itu aplikasi membuat website?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
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