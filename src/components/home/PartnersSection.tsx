'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  styled,
} from '@mui/material';

// Importar Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const PartnersContainer = styled(Box)({
  backgroundColor: COLORS.WHITE,
  padding: '80px 0',
  width: '100%',
  '@media (max-width: 768px)': {
    padding: '40px 0',
  },
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  '@media (max-width: 768px)': {
    gap: '25px',
  },
  '@media (max-width: 480px)': {
    gap: '20px',
  },
});

const HeaderSection = styled(Box)({
  textAlign: 'center',
  marginBottom: '20px',
});

const Subtitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: '600',
  color: COLORS.DARK_TEXT,
  marginBottom: '16px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  '@media (max-width: 768px)': {
    fontSize: '14px',
    marginBottom: '12px',
  },
});

const MainTitle = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: COLORS.PRIMARY_DARK,
  lineHeight: 1.2,
  marginBottom: '24px',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginBottom: '16px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.75rem',
    marginBottom: '12px',
  },
});

const Description = styled(Typography)({
  fontSize: '18px',
  color: '#666',
  lineHeight: 1.6,
  maxWidth: '800px',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
  '@media (max-width: 480px)': {
    fontSize: '15px',
  },
});

const SwiperContainer = styled(Box)({
  width: '100%',
  '& .swiper': {
    padding: '20px 0 60px 0',
  },
  '& .swiper-slide': {
    display: 'flex',
    justifyContent: 'center',
  },
});

const LogoCard = styled(Box)({
  width: '200px',
  height: '120px',
  backgroundColor: COLORS.WHITE,
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  border: '1px solid #e0e0e0',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
  },
  '@media (max-width: 768px)': {
    width: '180px',
    height: '110px',
    padding: '18px',
  },
  '@media (max-width: 480px)': {
    width: '160px',
    height: '100px',
    padding: '16px',
  },
});

const LogoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
  '@media (max-width: 768px)': {
    borderRadius: '6px',
  },
  '@media (max-width: 480px)': {
    borderRadius: '4px',
  },
});

const LogoText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 'bold',
  color: COLORS.DARK_TEXT,
  textAlign: 'center',
  lineHeight: 1.2,
  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
  '@media (max-width: 480px)': {
    fontSize: '11px',
  },
});

const LogoSlogan = styled(Typography)({
  fontSize: '10px',
  color: '#666',
  textAlign: 'center',
  lineHeight: 1.2,
  marginTop: '4px',
  '@media (max-width: 768px)': {
    fontSize: '9px',
    marginTop: '3px',
  },
  '@media (max-width: 480px)': {
    fontSize: '8px',
    marginTop: '2px',
  },
});



// Datos de los logos
const partnerLogos = [
  {
    id: 1,
    name: 'Bavaria',
    slogan: 'Cerveza de Colombia',
    logo: '/logos/bavaria.webp',
  },
  {
    id: 2,
    name: 'Crabs',
    slogan: 'Seafood & More',
    logo: '/logos/crabs.webp',
  },
  {
    id: 3,
    name: 'Diageo',
    slogan: 'Celebrating life every day, everywhere',
    logo: '/logos/diageo.webp',
  },
  {
    id: 4,
    name: 'Dislicores',
    slogan: 'Tu licor de confianza',
    logo: '/logos/dislicores.webp',
  },
  {
    id: 5,
    name: 'DocDoc',
    slogan: 'Innovación en cada sorbo',
    logo: '/logos/docdoc.webp',
  },
  {
    id: 6,
    name: 'Makers',
    slogan: 'Handmade in small batches',
    logo: '/logos/makers.webp',
  },
  {
    id: 7,
    name: 'Logo',
    slogan: 'Tu marca de confianza',
    logo: '/logos/logo.webp',
  },
];

const PartnersSection: React.FC = () => {
  return (
    <PartnersContainer id="partners">
      <Container maxWidth="xl">
        <ContentWrapper>
          {/* Header Section */}
          <HeaderSection>
            <Subtitle variant="body2">
              NUESTROS ALIADOS ESTRATÉGICOS
            </Subtitle>
            
            <MainTitle variant="h2">
              Empresas que Confían en Nosotros
            </MainTitle>
            
            <Description variant="body1">
              Trabajamos con empresas líderes en sus sectores para ofrecer formación de calidad y oportunidades de desarrollo profesional. Nuestros partners confían en nuestra metodología y compromiso con la excelencia educativa.
            </Description>
          </HeaderSection>

          {/* Swiper Section */}
          <SwiperContainer>
                         <Swiper
               modules={[Autoplay]}
               spaceBetween={30}
               slidesPerView={6}
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
               }}
               loop={true}
               breakpoints={{
                 320: {
                   slidesPerView: 2,
                   spaceBetween: 30,
                 },
                 592: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                 },
                 906: {
                   slidesPerView: 4,
                   spaceBetween: 30,
                 },
                 1100: {
                   slidesPerView: 5,
                   spaceBetween: 30,
                 },
                 1350: {
                   slidesPerView: 6,
                   spaceBetween: 30,
                 },
               }}
             >
              {partnerLogos.map((logo) => (
                                  <SwiperSlide key={logo.id}>
                    <LogoCard>
                      <LogoImage src={logo.logo} alt={logo.name} />
                    </LogoCard>
                  </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </ContentWrapper>
      </Container>
    </PartnersContainer>
  );
};

export default PartnersSection;
