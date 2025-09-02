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
  gap: '60px',
  '@media (max-width: 768px)': {
    gap: '40px',
  },
  '@media (max-width: 480px)': {
    gap: '30px',
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
  color: COLORS.DARK_PURPLE,
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
  minWidth: '200px',
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
    minWidth: '180px',
    height: '110px',
    padding: '18px',
  },
  '@media (max-width: 480px)': {
    minWidth: '160px',
    height: '100px',
    padding: '16px',
  },
});

const LogoImage = styled(Box)({
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
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
    name: 'TRANE',
    slogan: "It's Hard To Stop A Trane",
  },
  {
    id: 2,
    name: 'YORK',
    slogan: 'Heating & Cooling',
  },
  {
    id: 3,
    name: 'bryant',
    slogan: 'Heating & Cooling Systems',
  },
  {
    id: 4,
    name: 'Rheem',
    slogan: 'Built to be better',
  },
  {
    id: 5,
    name: 'Goodman',
    slogan: 'Quality you can trust',
  },
  {
    id: 6,
    name: 'LENNOX',
    slogan: 'Innovation never felt so good',
  },
  {
    id: 7,
    name: 'Carrier',
    slogan: 'The world leader in high technology',
  },
  {
    id: 8,
    name: 'American Standard',
    slogan: 'Built to last',
  },
  {
    id: 9,
    name: 'Amana',
    slogan: 'Built to be better',
  },
  {
    id: 10,
    name: 'Frigidaire',
    slogan: 'The world\'s most trusted brand',
  },
];

const PartnersSection: React.FC = () => {
  return (
    <PartnersContainer>
      <Container maxWidth="xl">
        <ContentWrapper>
          {/* Header Section */}
          <HeaderSection>
            <Subtitle variant="body2">
              QUALITY BRANDS WE TRUST
            </Subtitle>
            
            <MainTitle variant="h2">
              Our Partners
            </MainTitle>
            
            <Description variant="body1">
              Our trusted partner is more than just a collaborator—they're an extension of our team. With shared values, mutual respect, and a commitment to excellence, they work alongside us to deliver innovative solutions and exceptional results.
            </Description>
          </HeaderSection>

          {/* Swiper Section */}
          <SwiperContainer>
                         <Swiper
               modules={[Autoplay]}
               spaceBetween={8}
               slidesPerView={6}
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
               }}
               loop={true}
               breakpoints={{
                 320: {
                   slidesPerView: 2,
                   spaceBetween: 6,
                 },
                 592: {
                   slidesPerView: 2,
                   spaceBetween: 8,
                 },
                 906: {
                   slidesPerView: 3,
                   spaceBetween: 10,
                 },
                 1100: {
                   slidesPerView: 4,
                   spaceBetween: 12,
                 },
                 1350: {
                   slidesPerView: 5,
                   spaceBetween: 15,
                 },
               }}
             >
              {partnerLogos.map((logo) => (
                <SwiperSlide key={logo.id}>
                  <LogoCard>
                    <LogoImage />
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
