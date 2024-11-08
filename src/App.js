import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import CategoryBar from './components/CategoryBar';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [searchQuery, setSearchQuery] = useState('Avengers');
  const handleCategoryChange = (Category) => {
    setSearchQuery(Category);
  };

  return (
    <div className="App">
      <Navbar onSearch={setSearchQuery} />
      <CategoryBar onCategoryChange={handleCategoryChange} />
      <ImageCarousel /> 
      <MovieCard searchQuery={searchQuery} />
    </div>
  );
}

export default App;