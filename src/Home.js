// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src="/images/csg-logo.png" alt="CSG Logo" className="logo" />
      </header>
        <h1 className="home-title">VIRTUAL TEAM PLAZA</h1>
      <h2 className="subheading">Welcome to virtual team plaza, where the thrill of gaming meets the professionalism of the corporate world.</h2>
      <div className="cards">
        <Link to="/game-library" className="card" style={{ backgroundImage: 'url(/images/game-library-bg.jpg)' }}>
          <div className="card-header">
            <h2>Game Library</h2>
          </div>
          <p>Explore and add new games to the library.</p>
          <button className="find-out-more">Find Out More</button>
        </Link>
        <Link to="/game-wiki" className="card" style={{ backgroundImage: 'url(/images/game-wiki-bg.jpg)' }}>
          <div className="card-header">
            <h2>Game Wiki</h2>
          </div>
          <p>Learn more about different games.</p>
          <button className="find-out-more">Find Out More</button>
        </Link>
        <Link to="/diy-templates" className="card" style={{ backgroundImage: 'url(/images/diy-templates-bg.jpg)' }}>
          <div className="card-header">
            <h2>DIY Templates</h2>
          </div>
          <p>Create and customize your own game templates.</p>
          <button className="find-out-more">Find Out More</button>
        </Link>

      </div>
    </div>
  );
};

export default Home;
