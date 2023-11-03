import React, { useEffect, useState } from 'react';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import  getDesignTokens  from '../style/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = createTheme(getDesignTokens(mode));

  useEffect(() => {
    setMode(mode);
  }, [mode]);

return(
  <ThemeProvider theme={theme}><CssBaseline />
    <Header mode={mode} toggleMode={setMode} />
    <Outlet />
    <Footer />
  </ThemeProvider>
  );
}

export default RootLayout;
