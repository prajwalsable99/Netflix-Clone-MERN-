import React from 'react'
// import axios from 'axios'
import Row from '../components/Row'
import {HomepageURLS} from '../utils/api_store'
const HomeCom = () => {

    
  return (
  <>
  <Row title="Trending" key="1" slider="slider1" cur_url={HomepageURLS.trending}></Row>
  <Row title="Upcoming" key="2" slider="slider2" cur_url={HomepageURLS.upcoming}></Row>
  <Row title="Popular Movies" key="3" slider="slider3" cur_url={HomepageURLS.popular_movies}></Row>
  <Row title="Popular Shows" key="4" slider="slider4" cur_url={HomepageURLS.popular_shows}></Row>
  
  </>
  )
}

export default HomeCom
