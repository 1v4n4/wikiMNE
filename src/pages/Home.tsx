import React from 'react';
import {  Typography } from '@mui/material';

const Home: React.FC = () => {

  return (
    <div>
      <h3>Kako da doprinesem?</h3>
      <Typography variant="h1">Napravi nalog</Typography>
      <Typography variant="body1">Promjene (editi), komentari ili bilo kakve interakcije sa Wiki sistemom biće povezane sa ovim nalogom. </Typography>
      <Typography variant="h3">h1</Typography>
      <Typography variant="h4" color="secondary"> secondary</Typography>
      <Typography variant="body1">This is regular text</Typography>
      <Typography variant="body2">This is bold</Typography>
      <Typography variant="subtitle1">This is subtitle1</Typography>
      <Typography variant="subtitle2">This is subtitle2</Typography>
      <Typography variant="caption">This is caption</Typography>
      <Typography variant="h1" color="text.secondary" >This is color text.secondary</Typography>


    </div>
  )
}

export default Home;