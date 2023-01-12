import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {API_KEY} from '../utils/api_store'
import { onAuthStateChanged } from 'firebase/auth'
import firebaseAuth from '../utils/firebase-config'
import { Link } from 'react-router-dom'
const MovieCard = () => {

  const [useremail, setEmail] = useState("");

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);}
  );
  const loc=useLocation();
  // console.log(loc)
  const [movie,setMovie]=useState({});

const addtoliked=async()=>{
  const response = await fetch(`http://localhost:5000/api/addtoLiked`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      
    },

    body: JSON.stringify({ useremail,movie })
  });
  const note = await response.json();
  console.log(note)
  alert(note.message)


    



}

  useEffect(()=>{
    getMovieInfo(loc.state.id);
   
  },[])
    


  const getMovieInfo=async (id)=>{

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const data =await res.json();
    console.log(data);
    setMovie(data);


  }

  
  return (
    
      
  <section className=' bg-slate-700 h-screen pt-9'>


    <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-red  bg-zinc-900 px-4 mx-auto pt-3">
  <img className="w-full" src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`} alt="jpg"></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-white">{movie.original_title}</div>
    <p className="text-gray-600 text-base">
      {movie.overview}
    </p>
  </div>
  <div className="px-6 py-4">
    <Link to='/videoplayer' className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 bg-red-500"  >Play</Link>
    <button  onClick={addtoliked} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">Add to list</button>
   
  </div>
    </div>

    </section>
  )
}

export default MovieCard
