import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRef,useEffect } from 'react';
import sliderstyle from './sliderstyle.css'
const Row = (props) => {
  const slideLeft = (e) => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = (e) => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 300;
  };






  const poster="https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg";
  return (
    <section className='bg-black'>
      <h1 className='text-white bg-black font-medium leading-tight text-4xl mt-0 mb-2  pt-3 px-10'>{props.title}</h1>
    <div className='relative flex items-center'>
<MdChevronLeft className='opacity cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={200}  />
    <div id='slider'  className='example flex overflow-x-scroll scroll scroll-smooth  whitespace-nowrap   '   >
       

    <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
            
    <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
      <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       <img
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            />
       














       
            
      
    </div>
    <MdChevronRight className='opacity cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={200} />
      </div>
    </section>
  )
}

export default Row
