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
  ArrowForward,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const ServicesContainer = styled(Box)({
  padding: '80px 0',
  width: '100%',
  '@media (max-width: 768px)': {
    padding: '40px 0',
  },
  '@media (max-width: 480px)': {
    padding: '32px 0',
  },
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '60px',
  '@media (max-width: 768px)': {
    gap: '40px',
  },
  '@media (max-width: 480px)': {
    gap: '32px',
  },
});

const HeaderSection = styled(Box)({
  textAlign: 'center',
  maxWidth: '800px',
  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
});

const ServicesSubtitle = styled(Typography)({
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
  '@media (max-width: 480px)': {
    fontSize: '13px',
    marginBottom: '10px',
  },
});

const MainHeadline = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: COLORS.DARK_PURPLE,
  lineHeight: 1.2,
  marginBottom: '0',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    lineHeight: '1.3',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.75rem',
  },
});

const ServicesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  width: '100%',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  '@media (max-width: 480px)': {
    gap: '16px',
  },
});

const ServiceCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  '@media (max-width: 768px)': {
    gap: '0',
  },
  '@media (max-width: 480px)': {
    gap: '0',
  },
});

const ServiceImage = styled(Box)({
  width: '100%',
  height: '300px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '16px',
  '@media (max-width: 768px)': {
    height: '250px',
    borderRadius: '12px',
  },
  '@media (max-width: 480px)': {
    height: '200px',
    borderRadius: '10px',
  },
});





const ContentSection = styled(Box)({
  backgroundColor: COLORS.WHITE,
  padding: '24px',
  margin: '0 16px',
  marginTop: '-40px',
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
  '@media (max-width: 768px)': {
    padding: '20px',
    margin: '0 12px',
    marginTop: '-32px',
    borderRadius: '12px',
  },
  '@media (max-width: 480px)': {
    padding: '16px',
    margin: '0 8px',
    marginTop: '-24px',
    borderRadius: '10px',
  },
});

const ServiceTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: COLORS.DARK_TEXT,
  marginBottom: '12px',
  '@media (max-width: 768px)': {
    fontSize: '18px',
    marginBottom: '10px',
  },
  '@media (max-width: 480px)': {
    fontSize: '16px',
    marginBottom: '8px',
  },
});

const ServiceDescription = styled(Typography)({
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.5,
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    fontSize: '15px',
    marginBottom: '16px',
  },
  '@media (max-width: 480px)': {
    fontSize: '14px',
    marginBottom: '14px',
  },
});

const BookServiceButton = styled(Button)({
  backgroundColor: COLORS.LOGO_ORANGE,
  color: COLORS.WHITE,
  borderRadius: '25px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#e55a00',
  },
  '@media (max-width: 768px)': {
    padding: '10px 20px',
    fontSize: '15px',
  },
  '@media (max-width: 480px)': {
    padding: '8px 16px',
    fontSize: '14px',
  },
});

// Datos de los servicios
const servicesData = [
  {
    id: 1,
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair to restore your comfort.',
    image: '/img/image.webp',
    isSpecial: true,
  },
  {
    id: 2,
    title: 'AC Installation',
    description: 'Professional installation of energy efficient air conditioning systems.',
    image: '/img/image.webp',
    isSpecial: false,
  },
  {
    id: 3,
    title: 'AC Duct Cleaning',
    description: 'Thorough cleaning of air ducts to improve airflow, enhance cooling.',
    image: '/img/image.webp',
    isSpecial: false,
  },
  {
    id: 4,
    title: 'AC Duct Sealing',
    description: 'Expert sealing of air ducts to prevent leaks, boost efficiency.',
    image: '/img/image.webp',
    isSpecial: false,
  },
  {
    id: 5,
    title: 'Attic Insulation',
    description: 'High-quality attic insulation to reduce energy loss, improve cooling.',
    image: '/img/image.webp',
    isSpecial: false,
  },
  {
    id: 6,
    title: 'Air-Quality',
    description: 'Advanced air quality solutions to remove pollutants, control humidity.',
    image: '/img/image.webp',
    isSpecial: false,
  },
];

const ServicesSection: React.FC = () => {
  const handleBookService = (serviceId: number) => {
    console.log(`Booking service: ${serviceId}`);
    // Aquí iría la lógica para reservar el servicio
  };

  return (
    <ServicesContainer>
      <Container maxWidth="xl">
        <ContentWrapper>
          {/* Header Section */}
          <HeaderSection>
            <ServicesSubtitle variant="body2">
              OUR SERVICES
            </ServicesSubtitle>
            <MainHeadline variant="h2">
              Comprehensive AC services for every need
            </MainHeadline>
          </HeaderSection>

          {/* Services Grid */}
          <ServicesGrid>
            {servicesData.map((service) => (
                             <ServiceCard key={service.id}>
                 <ServiceImage
                   sx={{
                     backgroundImage: `url(${service.image})`,
                   }}
                 />
                 
                 <ContentSection>
                   <ServiceTitle variant="h3">
                     {service.title}
                   </ServiceTitle>
                   
                   <ServiceDescription variant="body1">
                     {service.description}
                   </ServiceDescription>
                   
                   <BookServiceButton
                     endIcon={<ArrowForward />}
                     onClick={() => handleBookService(service.id)}
                     sx={{
                       backgroundColor: COLORS.LOGO_ORANGE,
                       '&:hover': {
                         backgroundColor: COLORS.DARK_PURPLE,
                       },
                     }}
                   >
                     BOOK SERVICE
                   </BookServiceButton>
                 </ContentSection>
               </ServiceCard>
            ))}
          </ServicesGrid>
        </ContentWrapper>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;
