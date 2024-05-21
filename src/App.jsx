
import MoviesPage from './pages/moviesPage/MoviesPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleMovieComponents from './pages/moviesPage/singleMovie/SingleMovieComponents'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MoviesPage/>}/>
        <Route path=':movie_url' element={<SingleMovieComponents/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
