// src/GameList.js
import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => {
  return (
    <div>
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <h2>{game.gameName}</h2>
          <div>
            <img src={game.imageURL} alt={game.gameName} width="70" height="70" />
          </div>
          <p>{game.gameDescription}</p>
          <a href={game.gameLink} target="_blank" rel="noopener noreferrer">Play Game</a>          
        </div>
      ))}
    </div>
  );
};

export default GameList;
