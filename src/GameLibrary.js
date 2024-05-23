// src/GameLibrary.js
import React, { useEffect, useState } from 'react';
import GameList from './GameList';
import './GameLibrary.css';
import { Link } from 'react-router-dom';

const GameLibrary = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/games.json')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="game-library">
      <h1>Game Library</h1>
      <GameList games={games} />      
    </div>

  );
};

export default GameLibrary;
