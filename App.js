import React from 'react';
import './App.css';
import './home.css';
import './navbarcomp.css';

import MovieView from './Movieview';
import { useState, useEffect } from 'react';
import Navbar1 from './Navbarcomponent';
import Aboutview from './Aboutviewcomp';
import Home from './Homepa';
import Searchview from './Searchviewcom';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=9da9252cd6d6d122aec8d8e37ae3fb1f&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setSearchResults(data.results)
      })
    }   
  },[searchText])
  return (
    <div className="App">
      <Navbar1 searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutview />} />
        <Route
          path="/search"
          element={<Searchview keyword={searchText} searchResults={searchResults} />}
        />
        <Route path="/movie/:id" element={<MovieView />}></Route>
      </Routes>
    </div>
  );
}
export default App;

