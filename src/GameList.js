// src/GameList.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button} from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom'; // Import Link as RouterLink from react-router-dom

const StyledCard = styled(Card)({
  width: '80%', // Take full width of Grid item
  margin: 'auto',
  marginBottom: '20px',
  boxShadow: '1 4px 8px rgba(0,0,0,0.2)', // Add shadow to the card
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
});

const GameList = ({ games }) => {
  return (
    <div>      
    <Grid container spacing={3}>
      {games.map((game, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={game.imageURL}
                alt={game.gameName}
                style={{ maxHeight: 50, width: '50%', objectFit: 'contain' }}
              />
            </div>
            <CardContentWrapper>
              <Typography gutterBottom variant="h5" component="div">
                {game.gameName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {game.gameDescription}
              </Typography>
            </CardContentWrapper>
            <div style={{justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href={game.gameLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '10px'}} // Add margin to the button
            >
              Play Game
            </Button>
            </div>
          </StyledCard>
        </Grid>
      ))}        
    </Grid>
    <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="secondary" component={RouterLink} to="/">
          Back to Home
        </Button>
    </Grid>
  </div>
  );
};

export default GameList;
