import React from 'react';
import './App.css';
import logo from './logo.png'; // Assuming you have a logo image file
import game1 from './game1.jpg'; // Assuming you have a game image file
import game2 from './game2.jpg'; // Assuming you have a game2 image file
import game3 from './game3.jpg'; // Assuming you have a game3 image file

const Homepage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          Video Game Catalog
        </div>
      </header>

      <div className="welcome">
        <h1>Welcome to the Video Game Recommendations/Catalog App</h1>
        <p>Explore our collection of games and find your next favorite!</p>
      </div>

      <div className="search">
        <div>
          <input type="text" placeholder="Enter your search term" />
          <button type="submit">Search</button>
        </div>
      </div>

      <div className="links">
        {/* Links to different game pages */}
        <a href="/rpg-games">RPG Games</a>
        <a href="/action-games">Action Games</a>
      </div>

      <div className="recommendations">
        <h2>Recommended Games</h2>
        {/* Display recommended games here */}
      </div>

      <div className="game-images-container">
        <img src={game1} alt="Game 1" className="game-image" />
        <img src={game2} alt="Game 2" className="game-image" />
        <img src={game3} alt="Game 3" className="game-image" />
        {/* Add more game images here */}
      </div>
    </div>
  );
};

export default Homepage;
