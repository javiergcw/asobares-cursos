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
  Phone,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const AboutContainer = styled(Box)({
  backgroundColor: COLORS.WHITE,
  padding: '80px 0',
  width: '100%',
  '@media (max-width: 768px)': {
    padding: '40px 0',
  },
});

const ContentWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  minHeight: '600px',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
  '@media (max-width: 768px)': {
    gap: '30px',
    minHeight: 'auto',
  },
  '@media (max-width: 480px)': {
    gap: '24px',
  },
});

const VisualSection = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '20px',
  height: '100%',
  alignSelf: 'stretch',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto auto',
    gap: '15px',
    height: 'auto',
  },
  '@media (max-width: 480px)': {
    gap: '12px',
  },
});

const ImageContainer = styled(Box)({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  position: 'relative',
  '&:nth-of-type(1)': {
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
  },
  '&:nth-of-type(2)': {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  },
  '&:nth-of-type(3)': {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
  },
  '@media (max-width: 768px)': {
    '&:nth-of-type(1)': {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },
    '&:nth-of-type(2)': {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
    },
    '&:nth-of-type(3)': {
      gridColumn: '1 / 2',
      gridRow: '3 / 4',
    },
  },
});

const TechImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  '@media (max-width: 768px)': {
    height: '200px',
  },
  '@media (max-width: 480px)': {
    height: '150px',
  },
});

const TextSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: '40px 0',
  '@media (max-width: 768px)': {
    padding: '20px 0',
    height: 'auto',
    gap: '24px',
  },
  '@media (max-width: 480px)': {
    padding: '16px 0',
    gap: '20px',
  },
});

const AboutHeader = styled(Typography)({
  fontSize: '16px',
  fontWeight: '600',
  color: COLORS.DARK_TEXT,
  marginBottom: '16px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  '@media (max-width: 768px)': {
    fontSize: '14px',
    marginBottom: '12px',
    textAlign: 'left',
  },
});

const MainHeadline = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: COLORS.DARK_PURPLE,
  lineHeight: 1.2,
  marginBottom: '24px',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginBottom: '16px',
    textAlign: 'left',
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
  marginBottom: '32px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  '@media (max-width: 480px)': {
    fontSize: '15px',
    marginBottom: '16px',
  },
});

const BulletPoint = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
  '@media (max-width: 768px)': {
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
});

const OrangeArrow = styled(Box)({
  width: '20px',
  height: '20px',
  backgroundColor: COLORS.LOGO_ORANGE,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const BulletText = styled(Typography)({
  fontSize: '16px',
  color: COLORS.DARK_TEXT,
  fontWeight: '500',
  '@media (max-width: 768px)': {
    fontSize: '15px',
  },
});

const LogosContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '32px',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    gap: '15px',
    marginBottom: '24px',
    justifyContent: 'flex-start',
  },
});

const LogoItem = styled(Box)({
  width: '80px',
  height: '60px',
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  border: '1px solid #e9ecef',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    width: '70px',
    height: '50px',
  },
  '@media (max-width: 480px)': {
    width: '60px',
    height: '45px',
  },
});

const LogoImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const HireUsButton = styled(Button)({
  backgroundColor: COLORS.LOGO_ORANGE,
  color: COLORS.WHITE,
  borderRadius: '25px',
  padding: '16px 32px',
  textTransform: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#e55a00',
  },
  '@media (max-width: 768px)': {
    padding: '14px 24px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '16px',
  },
  '@media (max-width: 480px)': {
    padding: '12px 20px',
    fontSize: '15px',
  },
});

const PhoneSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginLeft: '24px',
  height: '56px',
  padding: '8px 0',
  '@media (max-width: 768px)': {
    marginLeft: '0',
    height: 'auto',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
});

const CallText = styled(Typography)({
  fontSize: '14px',
  color: '#666',
  marginBottom: '0',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  lineHeight: '1',
  marginTop: '0',
});

const PhoneNumber = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: COLORS.DARK_PURPLE,
  lineHeight: '1',
  marginTop: '0',
  '@media (max-width: 768px)': {
    fontSize: '1.25rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.1rem',
  },
});

const AboutCompany: React.FC = () => {
  return (
    <AboutContainer>
      <Container maxWidth="xl">
        <ContentWrapper>
          {/* Sección Visual Izquierda */}
          <VisualSection>
            <ImageContainer>
              <TechImage />
            </ImageContainer>
            <ImageContainer>
              <TechImage />
            </ImageContainer>
            <ImageContainer>
              <TechImage />
            </ImageContainer>
          </VisualSection>

          {/* Sección de Texto Derecha */}
          <TextSection>
            <AboutHeader variant="body2">
              ABOUT COMPANY
            </AboutHeader>
            
            <MainHeadline variant="h2">
              We are most popular repair company
            </MainHeadline>
            
            <Description variant="body1">
              With years of expertise, we deliver reliable AC repair and maintenance, ensuring fast, safe, and efficient service for your comfort.
            </Description>
            
            <BulletPoint>
              <OrangeArrow>
                <ArrowForward sx={{ color: COLORS.WHITE, fontSize: '14px' }} />
              </OrangeArrow>
              <BulletText>Fast Fixes, Affordable Prices</BulletText>
            </BulletPoint>
            
            <BulletPoint>
              <OrangeArrow>
                <ArrowForward sx={{ color: COLORS.WHITE, fontSize: '14px' }} />
              </OrangeArrow>
              <BulletText>Reliable Plumbing Solutions Guaranteed</BulletText>
            </BulletPoint>
            
            <BulletPoint>
              <OrangeArrow>
                <ArrowForward sx={{ color: COLORS.WHITE, fontSize: '14px' }} />
              </OrangeArrow>
              <BulletText>24/7 Emergency Support</BulletText>
            </BulletPoint>
            
            <LogosContainer>
              <LogoItem>
                <LogoImage />
              </LogoItem>
              <LogoItem>
                <LogoImage />
              </LogoItem>
              <LogoItem>
                <LogoImage />
              </LogoItem>
              <LogoItem>
                <LogoImage />
              </LogoItem>
              <LogoItem>
                <LogoImage />
              </LogoItem>
            </LogosContainer>
            
                         <Box sx={{ 
               display: 'flex', 
               alignItems: 'center',
               '@media (max-width: 768px)': {
                 flexDirection: 'column',
                 alignItems: 'stretch',
               }
             }}>
               <HireUsButton endIcon={<ArrowForward />}>
                 HIRE US TODAY
               </HireUsButton>
               
               <PhoneSection>
                 <CallText variant="body2">
                   GIVE US A CALL
                 </CallText>
                 <PhoneNumber variant="h3">
                   (800)-236-8937
                 </PhoneNumber>
               </PhoneSection>
             </Box>
          </TextSection>
        </ContentWrapper>
      </Container>
    </AboutContainer>
  );
};

export default AboutCompany;
