import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import herobg from '../assets/images/hero.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import firebaseAuth from '../utils/firebase-config'
const Signup = () => {




  const [signupdata, setSignupData] = useState({ name: "", email: "", password: "" });

  const handleclick = (e) => {
    e.preventDefault();
    console.log(signupdata.name, signupdata.email, signupdata.password);
    alert("register under process")

    registerUser(signupdata.email,signupdata.password);
    setSignupData({ name: "", email: "", password: "" });



  }


  const onchange = (e) => {
    //VVIP

    setSignupData({ ...signupdata, [e.target.name]: e.target.value })
  }

  const registerUser = async (email, password) => {

    try {

      await createUserWithEmailAndPassword(firebaseAuth, email, password);

      alert("user registered")
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });




  return (
    <section className="w-full h-screen">

      <div className="relative">
        <img
          src={herobg}
          className="absolute inset-0 object-cover w-full "
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-25">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">


                  Unlimited movies, <br className="hidden md:block" />
                  TV shows {' '}
                  <span className="text-teal-accent-400">and more.</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg" style={{ color: "white" }}>
                  Watch anywhere. Cancel anytime.
                </p>



              </div>

              
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Ready to watch?
                  </h3>
                  <form onSubmit={handleclick}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        name
                      </label>
                      <input
                        placeholder="John"
                        required

                        type="text"
                        onChange={onchange}
                        value={signupdata.name}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <input
                        placeholder="xyz@gmail.com"
                        required
                        type="email"
                        onChange={onchange}
                        value={signupdata.email}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        password
                      </label>
                      <input
                        placeholder="****"
                        required
                        type="password"
                        minLength={6}
                        onChange={onchange}
                        value={signupdata.password}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Already have Account ? <Link className='text-red-600' to="/Login">Sign in</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "black", height: "3rem" }}>

      </div>
    </section>

  )
}

export default Signup
