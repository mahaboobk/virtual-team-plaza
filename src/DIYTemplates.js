// src/DIYTemplates.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import diyTemplatesData from './data/diy-templates.json';
import { Link as RouterLink } from 'react-router-dom'; // Import Link as RouterLink from react-router-dom

const StyledCard = styled(Card)({
  width: '70%',
  margin: 'auto',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

const CardContentWrapper = styled(CardContent)({
  padding: '16px', // Padding for inner content
});

const DIYTemplates = () => {
  return (
    <div>
    <h1>DIY Templates</h1>
    <Grid container spacing={3}>
      {diyTemplatesData.map((template, index) => (
        <Grid item xs={12} key={index}>
          <StyledCard>
            <CardContentWrapper>
              <Typography variant="h5" gutterBottom align="left">
                {template.gameName && template.gameLink ? (
                  <Link component={RouterLink} to={template.gameLink} target="_blank" rel="noopener noreferrer">
                    {template.gameName}
                  </Link>
                ) : (
                  template.gameName
                )}
              </Typography>
              {template.gameDescription && (
                <Typography variant="body1" gutterBottom align="left">
                  <strong>Description:</strong> {template.gameDescription}
                </Typography>
              )}
              {template.imageURL && (
                <Typography variant="body1" align="left">
                  <strong>Image URL:</strong> {template.imageURL}
                </Typography>
              )}
            </CardContentWrapper>
          </StyledCard>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="secondary" component={RouterLink} to="/">
          Back to Home
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default DIYTemplates;
