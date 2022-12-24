import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Notfound from './pages/Notfound';
import HomeVideo from './components/HomeVideo';
import MovieCard from './pages/MovieCard';
import Movies from './pages/Movies';

const App = () => {


  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/login' element={<Login></Login>}> </Route>
        <Route exact path='/Signup' element={<Signup></Signup>}> </Route>
        <Route exact path='/' element={<Netflix></Netflix>}> </Route>
        <Route exact path="/videoplayer" element={<HomeVideo></HomeVideo>}></Route>
        <Route exact path="/movie_info" element={<MovieCard></MovieCard>}></Route>
        <Route exact path='/Movies' element={<Movies></Movies>}> </Route>
        <Route exact path='*' element={<Notfound></Notfound>}> </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
