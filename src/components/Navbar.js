import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (                    
    <nav className="navbar">

      <div className="logo">
      book<span className="highlight">my</span>show
      </div>

      <div className="search-bar-container">
      <input 
        type="text" 
        placeholder="Search movies..." 
        value={query}
        onChange={handleSearch}
      />
      </div>

      <div className="location-dropdown">
          <select>
            <option>Delhi-NCR</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
        </div>
      
        <button className="sign-in-button">Sign in</button>

    </nav>
  );
};

export default Navbar;
