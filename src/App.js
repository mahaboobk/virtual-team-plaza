// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import GameLibrary from './GameLibrary';
import AddGame from './AddGame';
import GameWiki from './GameWiki';
import DIYTemplates from './DIYTemplates';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-library" element={<GameLibrary />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/game-wiki" element={<GameWiki />} />
          <Route path="/diy-templates" element={<DIYTemplates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
