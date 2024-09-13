import React from 'react'
import GitHubCalendar, { ThemeInput } from 'react-github-calendar';

const Featured = () => {

  const explicitTheme: ThemeInput = {
    light: ['#ef4444', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

    const Featured = [
      {
        id: 1,
        name: "Clean & Intuitive",
        title: "Eye Catching, Modern & Minimalist Design.",
        description: "Keep the User Interface clean with a modern touch without compromising the User Experience.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
      {
        id: 2,
        name: "Detail Oriented",
        title: "Keen Eye for Spotting Small Details.",
        description: "Awareness to ease of access, User Interface consistency, and improved User Experience.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
      {
        id: 3,
        name: "Pretty & Optimized",
        title: "Comprehensible and Optimized Code.",
        description: "Writing clean code is a top priority while keeping it as optimized as possible.",
        image: "/featured.png",
        link: "https://github.com/abhishek-raj/Projects",
      },
    ];

 




  return (
    <div  className='w-full  mx-auto lg:pb-40 pb-16  '>
        <div className='lg:max-w-5xl mx-auto px-5 py-10 '>
      
       
        {/* <ActivityCalendar data={data} theme={explicitTheme} /> */}
          {
            Featured.map((item) => {
              return (
                <div key={item.id} className='flex flex-col '>
                  <div className='flex flex-col h-full w-full '>
                    <p className='text-md font-bold dark:text-[#7bf080] text-[#7bf080] mt-20 mb-5'>
                    {item.name}
                    </p>
                  <h2 className='lg:text-4xl text-2xl font-bold mb-4'>
                    {item.title}
                  </h2>
                    <p className='text-md  dark:text-[#777777]  '>{item.description}</p>
                </div>
                  </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Featured