import Navigation from '@/components/commons/Navigation'
import React from 'react'

const page = () => {
  return (
    <>
    <Navigation/>
    <div className='w-full'>
        <div className='lg:max-w-5xl mx-auto px-5'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Contact</h2>
                <p className='lg:text-lg text-sm mt-5'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
            <div>
                <form action="mailto:muhamadervin34@gmail.com" method='get'>
                    <div className='mt-5'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='' />
                    </div>
                    <div className='mt-5'>
                    <label htmlFor="name">email</label>
                    <input type="text" className='' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="">textarea</label>
                   <textarea name="" id=""></textarea>
                    </div>

                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default page