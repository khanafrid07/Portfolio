import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-scroll'; 

const pages = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certificates' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#1a1a1a',
        height: '5.5rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Link to='home' smooth={true} duration={500}>
            
            
            <Typography
          
              variant="h6"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 800,
                fontSize: "xx-large",
                color: 'white',
                letterSpacing: '.2rem',
                cursor: 'pointer',
                textAlign:{xs:"center", sm: "left"},
                
              }}
            >
              Afrid Khan
            </Typography>
            </Link>

          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none', order: "1" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'white', 
                      width: '100%', 
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>

          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.id}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: 'none' }}
              >
                <Button sx={{ color: 'white', fontWeight: 500 }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          
          <Box sx={{ display: {xs: "none", sm: "flex"} }}>
            <IconButton>
              <InstagramIcon sx={{ color: 'white', fontSize: {xs: "1.5rem", sm: "1.8rem"} }} />
            </IconButton>
            <IconButton>
              <FacebookIcon sx={{ color: 'white', fontSize: {xs: "1.5rem", sm: "1.8rem"} }} />
            </IconButton>
            <IconButton>
              <XIcon sx={{ color: 'white', fontSize: {xs: "1.5rem", sm: "1.8rem"} }} />
            </IconButton>
            <IconButton>
              <GitHubIcon sx={{ color: 'white', fontSize: {xs: "1.5rem", sm: "1.8rem"} }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
