// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MoviesPage from './pages/moviesPage/MoviesPage';
// import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';
// import Login from './pages/Login/Login'; // Import the Login component
import moviesData from './assets/movies.json';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesPage movieData={moviesData} />} />
          {/* <Route path="/login" element={<Login />} />  */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
