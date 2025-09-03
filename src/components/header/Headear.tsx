'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Phone,
  KeyboardArrowDown,
  Menu as MenuIcon,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const MainNavBar = styled(AppBar)({
  backgroundColor: COLORS.WHITE,
  color: COLORS.DARK_TEXT,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  '@media (max-width: 768px)': {
    '& .MuiToolbar-root': {
      padding: '6px 0',
    },
  },
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '@media (max-width: 768px)': {
    gap: '8px',
  },
});

const Logo = styled(Box)({
  width: '150px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '@media (max-width: 768px)': {
    width: '60px',
    height: '60px',
  },
});

const PhoneButton = styled(Button)({
  color: COLORS.DARK_TEXT,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: COLORS.PRIMARY_LIGHT,
  },
  '@media (max-width: 768px)': {
    fontSize: '14px',
    padding: '6px 12px',
  },
});

const PhoneIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
  '@media (max-width: 768px)': {
    marginRight: '6px',
  },
});

const NavigationLink = styled(Button)({
  color: COLORS.DARK_TEXT,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  '&:hover': {
    backgroundColor: 'transparent',
    color: COLORS.PRIMARY_LIGHT,
  },
  '@media (max-width: 768px)': {
    fontSize: '14px',
    padding: '6px 12px',
  },
});

const Header: React.FC = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Barra principal de navegación */}
      <MainNavBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 0' }}>
            {/* Logo */}
            <LogoContainer>
              <Logo>
                <img 
                  src="/logos/capacitu.png" 
                  alt="ASOBARES CURSOS Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain'
                  }} 
                />
              </Logo>
            </LogoContainer>

            {/* Enlaces de navegación - Desktop */}
            <Box display="flex" gap={2} sx={{ '@media (max-width: 768px)': { display: 'none' } }}>
              <NavigationLink>Inicio</NavigationLink>
              <NavigationLink>Nosotros</NavigationLink>
              <NavigationLink
                onClick={handleServicesClick}
                endIcon={<KeyboardArrowDown />}
              >
                Cursos
              </NavigationLink>
              <NavigationLink>Contacto</NavigationLink>
            </Box>

            {/* Botón de menú móvil */}
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: COLORS.WHITE 
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Menú desplegable de Cursos */}
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleServicesClose}>Bartender Profesional</MenuItem>
              <MenuItem onClick={handleServicesClose}>Fundamentos de Bartending</MenuItem>
              <MenuItem onClick={handleServicesClose}>Gestión de Bar y Restaurante</MenuItem>
              <MenuItem onClick={handleServicesClose}>Comunicación Asertiva</MenuItem>
              <MenuItem onClick={handleServicesClose}>Servicio al Cliente</MenuItem>
              <MenuItem onClick={handleServicesClose}>Creación de Hoja de Vida</MenuItem>
            </Menu>

            {/* Botón de teléfono - Solo visible en desktop */}
            <Box sx={{ '@media (max-width: 768px)': { display: 'none' } }}>
              <PhoneButton>
                <PhoneIconContainer>
                  <Phone sx={{ color: COLORS.PRIMARY_DARK }} />
                </PhoneIconContainer>
                (800)-236-8937
              </PhoneButton>
            </Box>
          </Toolbar>
        </Container>
      </MainNavBar>

      {/* Menú móvil */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '280px',
            backgroundColor: COLORS.WHITE,
            padding: '20px',
          },
        }}
      >
        <Box sx={{ padding: '20px 0' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '24px', color: COLORS.PRIMARY_DARK }}>
            Menú
          </Typography>
          <List>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Nosotros" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Cursos" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Contacto" />
            </ListItem>
          </List>
          
          <Box sx={{ marginTop: '32px', textAlign: 'center' }}>
            <PhoneButton sx={{ width: '100%' }}>
              <PhoneIconContainer>
                <Phone sx={{ color: COLORS.PRIMARY_DARK }} />
              </PhoneIconContainer>
              (800)-236-8937
            </PhoneButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
