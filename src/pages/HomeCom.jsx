import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from '../components/Row'
const HomeCom = () => {

    const [trending,setTrending]=useState({name:"1"})

    // const samp=async()=>{
    //         let res= await fetch("");
    //         const data= await res.json()
    //         console.log(data.results);
    //         setTrending(data.results)
    // }       

    // useEffect(()=>{
    //     samp()
    // },[]);

  return (
  <>
  <Row title="trending"></Row>
  
  </>
  )
}

export default HomeCom
