// src/AddGame.js
import React, { useState } from 'react';
import GameForm from './GameForm';
import './AddGame.css';

const AddGame = () => {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="add-game">
      <h1>Add New Game</h1>
      <GameForm addGame={addGame} />
    </div>
  );
};

export default AddGame;
