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
import { useRouter } from 'next/router';

import logo from '../public/images/logo.png';
import Logo from '../Logo';

const pages: Array<{ titulo: string; rota: string }> = [
  { titulo: 'Apresentação', rota: '' },
  { titulo: 'Sobre', rota: 'sobre' },
  { titulo: 'WebGis', rota: 'webgis' },
  { titulo: 'Ajuda', rota: 'ajuda' },
];

function GeneralMenu() {
  const { pathname } = useRouter();
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
            <Link href="/" passHref legacyBehavior>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontWeight: 700,
                  color: '#0F1C3C',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Logo sx={{ width: 56, height: 56 }} />
                  GeoIA
                </Box>
              </Typography>
            </Link>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {pages.map((page) => {
                return (
                  <Link href={`/${page.rota}`} passHref key={page.rota} legacyBehavior>
                    <Typography
                      component="a"
                      sx={{
                        cursor: 'pointer',
                        fontSize: 18,
                        padding: '15px 15px',
                        textDecoration: 'none',
                        borderRadius: 5,
                        color: pathname === `/${page.rota}` ? '#FFF' : '#0F1C3C',
                        backgroundColor: pathname === `/${page.rota}` ? '#0F1C3C' : '#FFF',
                        '&:hover': {
                          borderRadius: pathname === `/${page.rota}` ? 5 : 0,
                          borderBottom: pathname === `/${page.rota}` ? '' : 4,
                          borderBottomColor: '#0F1C3C',
                        },
                      }}
                      onClick={handleCloseNavMenu}
                    >
                      {page.titulo}
                    </Typography>
                  </Link>
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
              <Avatar src="/images/logo.svg" sx={{ width: 50, height: 50 }} />
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
                  <MenuItem key={page.rota} onClick={handleCloseNavMenu}>
                    <Link
                      href={`/${page.rota}`}
                      passHref
                      key={page.rota}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page.titulo}</Typography>
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
