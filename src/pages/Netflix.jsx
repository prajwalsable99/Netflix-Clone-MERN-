import React from 'react'
import Header from '../components/Header'
import HomeIntro from '../components/HomeIntro'

// import HomeVideo from '../components/HomeVideo'
import firebaseAuth from '../utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import HomeCom from './HomeCom'
const Netflix = () => {
  const nav=useNavigate()
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      nav('/login')
    }
  });

  return (
    <>
    <Header></Header>
    <HomeIntro></HomeIntro>
    <HomeCom></HomeCom>
    
    </>
  )
}

export default Netflix
