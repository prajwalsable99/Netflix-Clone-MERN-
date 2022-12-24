import React from 'react'
import { useLocation } from 'react-router-dom'

const MovieCard = () => {

  const loc=useLocation();
  console.log(loc)
  return (
    <div>
      hey i am movie card
      {loc.state.id}
    </div>
  )
}

export default MovieCard
