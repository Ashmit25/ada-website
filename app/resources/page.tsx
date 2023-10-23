import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import data from '@/data/slides.json'



const resources = () => {
  return (
    <>
        <Navbar/>
        <h1 className="text-4xl text-[#2977f5] mb-5 mt-10 mx-20">Resources</h1>
        <div className='gap-8 flex justify-evenly flex-wrap mx-20 my-10'>
          
            {data.map(card =>(
              <div className=" text-[#595959] w-80">
                <iframe src={card.video} className='rounded my-2 w-full'/>
                <h2 className="text-2xl my-2 text-center">{card.title}</h2>
                <p className='my-2 text-justify'>{card.description}</p>
                
                <button className='cursor-pointer bg-[#2977f5] text-white rounded w-full'><a href={card.link}>Link to Slides</a></button>
              </div>
            ))}
          
        </div>
        <Footer/>
    </>
  )
}

export default resources


