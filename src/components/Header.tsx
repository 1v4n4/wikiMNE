import * as React from 'react';
import { AppBar, PaletteMode, Box, Toolbar, Button, IconButton, Typography, Menu, MenuItem, Container } from '@mui/material';
import { Menu as MenuIcon, LightMode, DarkMode } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "/node_modules/flag-icons/css/flag-icons.min.css";


interface Props {
  mode: PaletteMode;
  toggleMode: any;
}

const Header: React.FC<Props> = ({mode, toggleMode}) => {
  const history = useNavigate();

  const pages = ['doma', 'misija', 'projects', 'kontakt'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: String) => {

    // TO DO: Fix type error

    // @ts-ignore
    history(page)
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background:  mode === 'light' ? '#f7f7f7' : '#121212'  }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page === "doma" ? "/" : "/" + page)}>
                  <Typography variant='h6' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page[0]}
                color="primary"
                onClick={() => history(page === "doma" ? "/" : "/" + page)}
                sx={{ m: 2, display: 'block' }}
              >
                <Typography variant='h6' textAlign="center">

                <motion.h5
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(67,67,67)',
                }}
              >

                    {page}

              </motion.h5>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton color="secondary" type='button' onClick={() => mode === "light" ? toggleMode("dark") : toggleMode("light")}>
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;