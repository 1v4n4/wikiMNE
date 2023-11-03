import React from 'react';
import { BottomNavigation, Paper, Typography, Link } from '@mui/material';

// TO DO: Change color of the footer upper line for the dark mode

const Footer: React.FC = () => (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation>
      <Typography>
      © 2023
          <Link color="text.secondary" href="https://github.com/1v4n4" target="_blank" rel="noreferrer" underline='none'> 1v4n4</Link>
      </Typography>
      </BottomNavigation>
    </Paper>
  );

export default Footer;
