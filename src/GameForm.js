// src/GameForm.js
import React, { useState } from 'react';

const GameForm = ({ addGame }) => {
  const [gameName, setGameName] = useState('');
  const [gameLink, setGameLink] = useState('');
  const [gameDescription, setgameDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      gameName,
      gameLink,
      gameDescription,
      imageURL,
    };
    addGame(newGame);
    setGameName('');
    setGameLink('');
    setgameDescription('');
    setImageURL('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Game Name:</label>
        <input
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Game Link:</label>
        <input
          type="text"
          value={gameLink}
          onChange={(e) => setGameLink(e.target.value)}
          required
        />
      </div>
      <div>
        <label>About Game:</label>
        <input
          type="number"
          value={gameDescription}
          onChange={(e) => setgameDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
};

export default GameForm;
