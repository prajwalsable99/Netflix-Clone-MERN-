import React from 'react'
// import { useNavigate } from 'react-router-dom'
import video1 from '../assets/videos/video1.webm'
const HomeVideo = () => {
    // const navigate=useNavigate();
    return (
        <section className="w-full h-screen">
     
        <video  loop controls src={video1} className="relative inset-0 object-cover w-full h-full"></video>
        
          </section>
  )
}

export default HomeVideo
