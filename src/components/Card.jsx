import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import rocket from "../assets/rocket.png"


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative w-[100%] h-[100vh]'>

      
      <div className='flex flex-col justify-center items-center'>
                <img className='rounded-xl shadow-2xl w-[70vw] h-[30vh] lg:w-[30vw] lg:h-[20vw] ' src={review.image}/>
                <a href={review.web} className=' absolute z-10  translate-x-[30vw] translate-y-[10vh] lg:translate-x-[12vw]  rotate-3'>
                  <img src={rocket} alt="" className=' animate-bounce' />
                </a>
        <span  className='text-violet-600 uppercase  text-lg font-extrabold mt-6'>{review.job}</span>
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>

        <div>
      </div>


    </div>
  )
}

export default Card
