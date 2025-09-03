'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  styled,
} from '@mui/material';
import {
  LocationOn,
  Email,
  Phone,
  ArrowForward,
  Facebook,
  Twitter,
  YouTube,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const FooterContainer = styled(Box)({
  backgroundColor: COLORS.PRIMARY_DARK,
  color: COLORS.WHITE,
  padding: '60px 0 20px 0',
  '@media (max-width: 768px)': {
    padding: '40px 0 20px 0',
  },
});

const CallToActionSection = styled(Box)({
  backgroundColor: COLORS.PRIMARY_LIGHT,
  borderRadius: '20px',
  padding: '40px',
  marginBottom: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '30px 20px',
    marginBottom: '40px',
    textAlign: 'left',
    gap: '24px',
    alignItems: 'flex-start',
  },
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const Logo = styled(Box)({
  width: '60px',
  height: '60px',
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
    borderRadius: '30px 30px 0 0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    bottom: '0',
    background: COLORS.LOGO_ORANGE,
    borderRadius: '0 0 30px 30px',
  },
});

const CallToActionContent = styled(Box)({
  textAlign: 'right',
  '@media (max-width: 768px)': {
    textAlign: 'left',
  },
});

const BookButton = styled(Button)({
  backgroundColor: COLORS.PRIMARY_DARK,
  color: COLORS.WHITE,
  borderRadius: '25px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '16px',
  '&:hover': {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  '@media (max-width: 768px)': {
    width: 'auto',
    padding: '14px 24px',
  },
});

const FooterColumn = styled(Box)({
  marginBottom: '40px',
  '@media (max-width: 768px)': {
    marginBottom: '24px',
  },
});

const FooterLink = styled(Typography)({
  color: COLORS.WHITE,
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: COLORS.WHITE,
    transform: 'translateY(-2px)',
    textShadow: '0 2px 8px rgba(255,255,255,0.3)',
  },
  '@media (max-width: 768px)': {
    marginBottom: '8px',
  },
});

const ContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
  '@media (max-width: 768px)': {
    marginBottom: '12px',
  },
});

const PaymentMethodContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  marginTop: '16px',
  '@media (max-width: 768px)': {
    gap: '12px',
    marginTop: '12px',
  },
});

const PaymentMethod = styled(Box)({
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '80px',
  height: '40px',
});

const VisaLogo = styled(PaymentMethod)({
  backgroundColor: '#1A1F71',
  color: COLORS.WHITE,
});

const StripeLogo = styled(PaymentMethod)({
  backgroundColor: COLORS.WHITE,
  color: COLORS.DARK_TEXT,
  border: '1px solid #e0e0e0',
});

const PayPalLogo = styled(PaymentMethod)({
  backgroundColor: '#003087',
  color: COLORS.WHITE,
});

const MastercardLogo = styled(PaymentMethod)({
  background: 'linear-gradient(45deg, #FF5F00, #EB001B)',
  color: COLORS.WHITE,
});

const GPayLogo = styled(PaymentMethod)({
  backgroundColor: COLORS.LIGHT_GRAY,
  color: COLORS.DARK_TEXT,
});

const BottomBar = styled(Box)({
  borderTop: `1px solid ${COLORS.LIGHT_GRAY}`,
  paddingTop: '20px',
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left',
    alignItems: 'flex-start',
  },
});

const SocialMediaContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
});

const SocialIcon = styled(Box)({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: COLORS.WHITE,
          border: `2px solid ${COLORS.PRIMARY_DARK}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    '& > *': {
      color: COLORS.PRIMARY_LIGHT,
    },
  },
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xl">


        {/* Columnas de información */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
          gap: { xs: 2, sm: 3, md: 4 } 
        }}>
          {/* Quick Links */}
          <FooterColumn>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              marginBottom: { xs: '16px', md: '20px' } 
            }}>
              Enlaces Rápidos
            </Typography>
                         <FooterLink>Inicio</FooterLink>
             <FooterLink>Nosotros</FooterLink>
             <FooterLink>Cursos</FooterLink>
             <FooterLink>Contacto</FooterLink>
          </FooterColumn>

          {/* Legal */}
          <FooterColumn>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              marginBottom: { xs: '16px', md: '20px' } 
            }}>
              Legal
            </Typography>
            <FooterLink>Términos y Condiciones</FooterLink>
            <FooterLink>Política de Reembolso</FooterLink>
            <FooterLink>Política de Privacidad</FooterLink>
          </FooterColumn>

          {/* Get Support */}
          <FooterColumn>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              marginBottom: { xs: '16px', md: '20px' } 
            }}>
              Contacto
            </Typography>
            <ContactItem>
              <LocationOn sx={{ color: COLORS.WHITE }} />
              <Typography>Bogotá, Colombia</Typography>
            </ContactItem>
            <ContactItem>
              <Email sx={{ color: COLORS.WHITE }} />
              <Typography>info@asobarescursos.com</Typography>
            </ContactItem>
            <ContactItem>
              <Phone sx={{ color: COLORS.WHITE }} />
              <Typography>+57 300 123 4567</Typography>
            </ContactItem>
          </FooterColumn>
        </Box>

        {/* Barra inferior */}
        <BottomBar>
                     <Typography variant="body2" sx={{ color: COLORS.WHITE }}>
             Copyright 2025 AsoBares Cursos.
           </Typography>
          
                                 <SocialMediaContainer>
              <SocialIcon>
                                <Facebook sx={{ color: COLORS.PRIMARY_DARK }} />
              </SocialIcon>
              <SocialIcon>
                                <Twitter sx={{ color: COLORS.PRIMARY_DARK }} />
              </SocialIcon>
              <SocialIcon>
                                <YouTube sx={{ color: COLORS.PRIMARY_DARK }} />
              </SocialIcon>
            </SocialMediaContainer>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
