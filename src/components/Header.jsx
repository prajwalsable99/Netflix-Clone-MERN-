import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/nfl.png'
import firebaseAuth from '../utils/firebase-config'
import { signOut } from 'firebase/auth'
const Header = () => {
    const navigate =useNavigate();
    const logout =()=>{
        signOut(firebaseAuth).then(() => {
            navigate('/Login')
            console.log("log out")
          }).catch((error) => {
           console.log(error)
          });
    }
    return (
        <header className=" text-gray-400 body-font sticky top-0 z-50 " style={{background:"black",opacity:"0.9",color:"white"}}>
  <div className="container mx-auto flex flex-wrap px-5 py-1 flex-col md:flex-row items-center  ">
    <Link className="flex  title-font font-medium items-center text-white mb-4 md:mb-0">
    
        
   
      <span className="ml-3 text-xl">< img className="object-cover h-15 w-28" viewBox="0 0 24 24" src={logo} alt='img'></img></span>
    </Link>
    <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-slate-500" >Home</Link>
      <Link to ='/Shows'className="mr-5 hover:text-slate-500">TV Shows</Link>
      <Link to='/Movies' className="mr-5 hover:text-slate-500">Movies</Link>
      <Link to='/newpopular' className="mr-5 hover:text-slate-500" >New & Popular</Link>
      <Link to='/mylist' className="mr-5 hover:text-slate-500">My list</Link>
    </nav>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button onClick={logout} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log out
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>

 
</header>
    )
}

export default Header