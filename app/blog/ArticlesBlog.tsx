import React from 'react'
import Writing from './slug/Writing'
import Link from 'next/link'
const ArticlesBlog = () => {
  return (
    <div className='w-full'>
        <div className='lg:max-w-6xl mx-auto px-5'>
           <div className='flex flex-col gap-y-7 mt-5'>
            {
                Writing.map ((card, index) =>       
                    <Link href={card.Links} key={index} className='flex justify-between items-center  border-t border-[#777777] p-4  '>
                      <div className=''>
                        {card.title}
                        <p className='mr-7'>
                        {card.description}
                        </p>
                      </div>
                        <p className='text-[#777777]'> {card.date}</p>
                    </Link>
                )
            }
           </div>
        </div>
    </div>
  )
}

export default ArticlesBlog