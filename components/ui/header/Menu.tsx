import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const pages = [
  ['Apresentação', 'home'],
  ['Sobre', 'sobre'],
  ['WebGis', 'webgis'],
  ['Ajuda', 'ajuda'],
];

function GeneralMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: '100%',
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar src="/logo.svg" sx={{ width: 56, height: 56 }} />
              <Typography
                variant="h5"
                component="a"
                href="/home"
                sx={{
                  fontWeight: 700,
                  color: '#0F1C3C',
                  textDecoration: 'none',
                }}
              >
                GeoIA
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {pages.map((page) => {
                return (
                  <>
                    <Link href={`/${page[1]}`} passHref key={page[1]} onClick={handleCloseNavMenu}>
                      <Typography
                        component="a"
                        sx={{
                          cursor: 'pointer',
                          fontWeight: 600,
                          padding: '20px 15px',
                          textDecoration: 'none',
                          color: '#0F1C3C',
                          '&:hover': {
                            backgroundColor: '#0F1C3C',
                            color: '#FFF',
                          },
                        }}
                      >
                        {page[0]}
                      </Typography>
                    </Link>
                  </>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar src="/logo.svg" sx={{ width: 50, height: 50 }} />
              <Typography
                variant="h5"
                component="a"
                href="/home"
                sx={{
                  fontWeight: 700,
                  color: '#0F1C3C',
                  textDecoration: 'none',
                }}
              >
                GeoIA
              </Typography>
            </Box>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  <MenuItem key={page[1]} onClick={handleCloseNavMenu}>
                    <Link href={`/${page[1]}`} passHref key={page[1]} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page[0]}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default GeneralMenu;
