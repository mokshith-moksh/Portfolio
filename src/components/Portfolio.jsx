import React from 'react'
import Testimonials from './Testimonials'
import reviews from '../data'

const Portfolio = () => {
  return (
    <div name="portfolio">
      <div className="flex flex-col w-[100vw] h-[140vh] md:h-[100vh] justify-center items-center bg-[#121120]">
     
     
     <div className="text-center">
       
       <h1 className="text-4xl font-bold text-gray-400 -translate-y-16"><span className='text-purple-500'>My</span> Portfolio</h1>
       
       <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto -translate-y-16"></div>
       
       <Testimonials reviews={reviews}/>

     </div>
   </div>
    </div>
  )
}

export default Portfolio
