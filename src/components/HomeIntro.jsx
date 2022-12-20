import React from 'react'
import background from '../assets/images/pb (1).jpg'

import { Link } from 'react-router-dom'
const HomeIntro = () => {
    return (


        <section style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/bgimg.jpg"})` }}
        className="relative  bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0  sm:bg-transparent "
        ></div>
      
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Peaky blinders
      
              <strong className="block font-extrabold text-white">
                Season 6
              </strong>
            </h1>
      
            {/* <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
       */}



                               
                                

                           

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              {/* <Link
                to="/videoplayer"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
      
              <Link
                to="videoplayer"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link> */}

              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg" style={{ color: "white" }}>
                                    <Link to='/videoplayer'  className="inline-flex text-black bg-white border-0 py-2 px-12 mx-2 focus:outline-none hover:bg-neutral-400 rounded text-lg"   style={{border:"1px solid white"}}>Play</Link >

                                    <Link to  className="inline-flex   border-0 py-2 px-9 focus:outline-none  rounded text-lg opacity-25 hover:bg-neutral-400" style={{coloe:"white",opacity:"1",border:"1px solid white"}}>More Info</Link>
                                </p>
            </div>
          </div>
        </div>
      </section>




    )
}

export default HomeIntro
