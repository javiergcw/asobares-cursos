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
  AttachMoney,
  AccessTime,
  LocationOn,
  Email,
  Phone,
  KeyboardArrowDown,
  Menu as MenuIcon,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const TopInfoBar = styled(Box)({
  backgroundColor: COLORS.DARK_PURPLE,
  color: COLORS.WHITE,
  padding: '8px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '14px',
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const InfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const MainNavBar = styled(AppBar)({
  backgroundColor: COLORS.WHITE,
  color: COLORS.DARK_TEXT,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  '@media (max-width: 768px)': {
    '& .MuiToolbar-root': {
      padding: '12px 0',
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
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: `linear-gradient(180deg, ${COLORS.LOGO_BLUE} 0%, ${COLORS.LOGO_ORANGE} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '50%',
    background: COLORS.LOGO_BLUE,
    borderRadius: '25px 25px 0 0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    bottom: '0',
    background: COLORS.LOGO_ORANGE,
    borderRadius: '0 0 25px 25px',
  },
  '@media (max-width: 768px)': {
    width: '40px',
    height: '40px',
  },
});

const PhoneButton = styled(Button)({
  backgroundColor: COLORS.CALL_TO_ACTION_BLUE,
  color: COLORS.WHITE,
  borderRadius: '25px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#2563eb',
  },
  '@media (max-width: 768px)': {
    padding: '8px 16px',
    fontSize: '14px',
    '& .MuiButton-startIcon': {
      marginRight: '8px',
    },
  },
});

const PhoneIconContainer = styled(Box)({
  backgroundColor: COLORS.LOGO_ORANGE,
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '12px',
  '@media (max-width: 768px)': {
    width: '32px',
    height: '32px',
    marginRight: '8px',
  },
});

const NavigationLink = styled(Button)({
  color: COLORS.DARK_TEXT,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  '&:hover': {
    backgroundColor: 'transparent',
    color: COLORS.CALL_TO_ACTION_BLUE,
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
      {/* Barra superior de información */}
      <TopInfoBar>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <InfoItem>
              <AttachMoney sx={{ color: COLORS.WHITE }} />
              <Typography variant="body2" sx={{ color: COLORS.WHITE }}>
                We do not received extra charges
              </Typography>
            </InfoItem>
            
            <Box display="flex" gap={4}>
              <InfoItem>
                <AccessTime sx={{ color: COLORS.LIGHT_GRAY }} />
                <Typography variant="body2" sx={{ color: COLORS.LIGHT_GRAY }}>
                  9am - 5pm (Mon - Sat)
                </Typography>
              </InfoItem>
              
              <InfoItem>
                <LocationOn sx={{ color: COLORS.LIGHT_GRAY }} />
                <Typography variant="body2" sx={{ color: COLORS.LIGHT_GRAY }}>
                  3146 Koontz Lane, TAMPA
                </Typography>
              </InfoItem>
            </Box>
            
            <InfoItem>
              <Email sx={{ color: COLORS.LIGHT_GRAY }} />
              <Typography variant="body2" sx={{ color: COLORS.LIGHT_GRAY }}>
                info@thandaservicing.com
              </Typography>
            </InfoItem>
          </Box>
        </Container>
      </TopInfoBar>

      {/* Barra principal de navegación */}
      <MainNavBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', padding: '16px 0' }}>
            {/* Logo */}
            <LogoContainer>
              <Logo />
              <Box>
                                 <Typography
                   variant="h5"
                   component="div"
                   sx={{
                     fontWeight: 'bold',
                     color: COLORS.DARK_TEXT,
                     lineHeight: 1,
                   }}
                 >
                   ASOBARES
                 </Typography>
                 <Typography
                   variant="h5"
                   component="div"
                   sx={{
                     fontWeight: 'bold',
                     color: COLORS.DARK_TEXT,
                     lineHeight: 1,
                   }}
                 >
                   CURSOS
                 </Typography>
              </Box>
            </LogoContainer>

            {/* Enlaces de navegación - Desktop */}
            <Box display="flex" gap={2} sx={{ '@media (max-width: 768px)': { display: 'none' } }}>
              <NavigationLink>Home</NavigationLink>
              <NavigationLink>About</NavigationLink>
              <NavigationLink
                onClick={handleServicesClick}
                endIcon={<KeyboardArrowDown />}
              >
                Services
              </NavigationLink>
              <NavigationLink>Finance</NavigationLink>
              <NavigationLink>Maintenance</NavigationLink>
            </Box>

            {/* Botón de menú móvil */}
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: COLORS.DARK_TEXT 
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Menú desplegable de Services */}
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
              <MenuItem onClick={handleServicesClose}>HVAC Services</MenuItem>
              <MenuItem onClick={handleServicesClose}>Plumbing</MenuItem>
              <MenuItem onClick={handleServicesClose}>Electrical</MenuItem>
              <MenuItem onClick={handleServicesClose}>Maintenance</MenuItem>
            </Menu>

            {/* Botón de teléfono - Solo visible en desktop */}
            <Box sx={{ '@media (max-width: 768px)': { display: 'none' } }}>
              <PhoneButton>
                <PhoneIconContainer>
                  <Phone sx={{ color: COLORS.WHITE }} />
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
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '24px', color: COLORS.DARK_PURPLE }}>
            Menu
          </Typography>
          <List>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Finance" />
            </ListItem>
            <ListItem onClick={handleMobileMenuToggle} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <ListItemText primary="Maintenance" />
            </ListItem>
          </List>
          
          <Box sx={{ marginTop: '32px', textAlign: 'center' }}>
            <PhoneButton sx={{ width: '100%' }}>
              <PhoneIconContainer>
                <Phone sx={{ color: COLORS.WHITE }} />
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
