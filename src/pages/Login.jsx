import React from 'react'
import { Link } from 'react-router-dom';
// import hero from '../assets/images/hero.jpg'
import logo from '../assets/images/nfl.png'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth'
import firebaseAuth from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom';
const Login = () => {




  const [logindata, setLoginData] = useState({  email: "", password: "" });

  const handleclick = (e) => {
    e.preventDefault();
    console.log(logindata.name, logindata.email, logindata.password);
    alert("logging in")

    loginUser(logindata.email,logindata.password);
    setLoginData({  email: "", password: "" });



  }


  const onchange = (e) => {
    //VVIP

    setLoginData({ ...logindata, [e.target.name]: e.target.value })
  }

  const loginUser = async (email, password) => {

    try {

      await signInWithEmailAndPassword(firebaseAuth, email, password);

      alert("user login")
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });





  return (
 
<section className="w-full h-screen bg-black">
<div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
  <img  className='mx-auto w-2/6 text-center' src={logo} alt="NETFLIX"></img>
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl text-white" >Get started today!</h1>

    <p className="mt-4 text-gray-500">
      Enter details and login to enjoy streaming servies.
    </p>
  </div>

  <form onSubmit={handleclick} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">Email</label>

      <div className="relative">
        <input
          type="email"
          required
          onChange={onchange}
          value={logindata.email}
          id="email"
          name="email"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

      
      </div>
    </div>

    <div>
      <label htmlFor="password" className="sr-only">Password</label>
      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter password"
          required
          onChange={onchange}
          value={logindata.password}
          id="password"
          name="password"
        />

      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        No account?
        <Link to="/signup"className="underline text-red-600">Sign up</Link>
      </p>

      <button
        type="submit"
        className="ml-3 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </div>
  </form>
</div>
</section>
  );
  
}

export default Login
