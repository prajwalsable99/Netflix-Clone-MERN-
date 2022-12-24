import React from 'react'
// import { useNavigate } from 'react-router-dom'
import video1 from '../assets/videos/video1.webm'
import video2 from '../assets/videos/prajwal.mp4'
const HomeVideo = () => {
    // const navigate=useNavigate();
    return (
        <section className="w-full h-screen">
     
        <video  loop controls src={video2} className="relative inset-0 object-cover w-full h-full"></video>
        
          </section>
  )
}

export default HomeVideo
