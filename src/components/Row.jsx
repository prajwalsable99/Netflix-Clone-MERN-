/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useEffect } from 'react';
import sliderstyle from './sliderstyle.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_KEY,BASE_URL } from '../utils/api_store';
import { async } from '@firebase/util';



const Row = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [MoviesList,setMoviesList]=useState([]);


  // const setApi=axios.create({baseURL:BASE_URL});

  // const getTrending=setApi.get('/movie/trending',{params:{API_KEY}})
  const getTrending =async(param)=>{
    const res =await fetch(`${param}`);
    const data=await res.json();

    setMoviesList(data.results);
    console.log(data.results)

}
  
  useEffect(
    ()=>{
    
    getTrending(props.cur_url);

    }
    ,[]);
  
  const slideLeft = (e) => {
    var slider = document.getElementById(props.slider);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = (e) => {
    var slider = document.getElementById(props.slider);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const navigate=useNavigate();





  const poster="https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg";
  return (
    <section className='bg-black'>
      <h1 className='text-white bg-black font-medium leading-tight text-4xl mt-0 mb-2  pt-3 px-10'>{props.title}</h1>
      {/* <h1 className='text-white bg-black font-medium leading-tight text-4xl mt-0 mb-2  pt-3 px-10'>{props.cur_url}</h1> */}
    <div className='relative flex items-center'>
<MdChevronLeft className='opacity cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={200}  />
    <div id={props.slider}  className='example flex overflow-x-scroll scroll scroll-smooth  whitespace-nowrap   '   >
       
    {
      MoviesList.map((movie,k)=>((<img key={k} onClick={()=>{
          navigate('/movie_info',{state:{id:movie.id}})
        }}
                  className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt='/'
                />)

      ))
    }
    {/* <img onClick={()=>{
      navigate('/movie_info')
    }}
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={poster}
              alt='/'
            /> */}
            
    








       
            
      
    </div>
    <MdChevronRight className='opacity cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={200} />
      </div>
    </section>
  )
}

export default Row
