// src/GameLibrary.js
import GameList from './GameList';
import gamesData from './data/games.json';

const GameLibrary = () => {
  return (
    <div className="game-library">
      <h1>Game Library</h1>
      <GameList games={gamesData} />     
    </div>
  );
};

export default GameLibrary;
