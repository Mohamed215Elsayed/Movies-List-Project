import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from 'axios';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //get all movies by axios 
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=190e39986dab0938986d1ec4cc5a6c93");
    setMovies(res.data.results);
    // console.log(res.data.total_pages);
    setPageCount(res.data.total_pages);
  }
  useEffect(() => {
    getAllMovies();
  }, []);

  
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=190e39986dab0938986d1ec4cc5a6c93&language=ar&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

    //to search in api 
    const search = async (word) => {
      if (word === "") {
        getAllMovies();
      } else {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=190e39986dab0938986d1ec4cc5a6c93&query=${word}&language=ar`)
        setMovies(res.data.results);
        setPageCount(res.data.total_pages);
      }
    }


  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} getPage = {getPage} pageCount = {pageCount} />} />
            <Route path='/movie-details/:id' element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
