import React from 'react'
import { useState,useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import firebaseAuth from '../utils/firebase-config'
const MyList = () => {


    
  const [useremail, setEmail] = useState();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);}
  );

  useEffect(() => {
    if (useremail) {
      getLikedMoviesList();
      
    }
  }, [useremail]);


    const [likedmovies,setliked]=useState([]);

    const getLikedMoviesList=async()=>{
        
        console.log(useremail);
        const response = await fetch(`http://localhost:5000/api/getLikedMovies`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            
          },
    
          body: JSON.stringify({ useremail })
        });
        const note = await response.json();
        console.log(note)
        setliked(note.likedmovies)
      }

  return (
    <div>
      {
        likedmovies.map((movie,key)=><li key={key}>{movie.title}</li>)
      }
    </div>
  )
}

export default MyList
