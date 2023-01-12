/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { genres } from '../utils/genreslist';
import { useState,useEffect } from 'react';


import hidestyel from '../components/sliderstyle.css'
import { useNavigate } from 'react-router-dom';
const Movies = () => {

  const navigate=useNavigate();
    const [gen ,setGen]=useState({gid:28});
    
    const onchange=(e)=>{
       
        setGen({gid:e.target.value});
       
   

    }
    const [MoviesList,setMoviesList]=useState([]);


  const getMovies =async()=>{
   const res =await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=af5f6a137e02c292119db472e96cca2b&with_genres=${gen.gid}`);
   const data=await res.json();

   setMoviesList(data.results);
   console.log(data.results)

  }
    useEffect(()=>{
        console.log("changed cureent ==>",gen.gid)
        getMovies()
    },[gen])
   


  return (
   <section className='bg-black'>
   {/* <Header></Header> */}
    <div>
        <select className='example mt-2 ml-43 bg-black text-white text-3xl font-normal leading-normal  mb-2  ' id='selectgen' value={gen.gid} onChange={onchange}>
            
      {
          genres.map((genre,k)=>(<option value={genre.id} key={genre.id}>{genre.name}</option>))
        }
        </select>
    </div>
   
    <div className="grid gap-2 lg:grid-cols-4 bg-black text-white pt-2">
                {MoviesList.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img onClick={()=>{
          navigate('/movie_info',{state:{id:items.id}})
        }}
                            className="object-cover w-full h-48 hover:scale-105 ease-in-out duration-300"
                            src={`https://image.tmdb.org/t/p/w300${items.backdrop_path}`}
                            alt="imagef"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-white">
                                
                                {items.original_title}
                            </h4>
                            {/* <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>

    
    </section>


  )

}

export default Movies
