// src/GameWiki.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon from Material-UI icons
import './GameWiki.css';
import gamesData from './data/games-wiki.json';

const GameWiki = () => {
  return (
    <div className="game-wiki">
      <div className="back-button">
        <Button variant="contained" color="secondary" component={Link} to="/">
          <ArrowBackIcon />
        </Button>
      </div>
      <h1>Game Wiki</h1>
      <div className="game-list">
        {gamesData.map((game) => (
          <Accordion key={game.id} className="game-post">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${game.id}-content`}
              id={`panel${game.id}-header`}
            >
              <Typography variant="h5" className="game-name">{game.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="game-section">
                <Typography variant="h6">Setup</Typography>
                <Typography>{game.setup}</Typography>
              </div>
              <div className="game-section">
                <Typography variant="h6">Gameplay</Typography>
                <Typography>{game.gameplay}</Typography>
              </div>
              <div className="game-section">
                <Typography variant="h6">Winning</Typography>
                <Typography>{game.winning}</Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default GameWiki;
