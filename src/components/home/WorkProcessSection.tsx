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
  CalendarToday,
  Build,
  ThumbUp,
  Phone,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const WorkProcessContainer = styled(Box)({
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

const ProcessAndContentWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
  '@media (max-width: 768px)': {
    gap: '30px',
  },
  '@media (max-width: 480px)': {
    gap: '24px',
  },
});

const ImageSection = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '@media (max-width: 1024px)': {
    order: 2,
  },
});

const MainImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '16px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
});

const CallToActionButton = styled(Button)({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  backgroundColor: COLORS.DARK_PURPLE,
  color: COLORS.WHITE,
  borderRadius: '12px',
  padding: '16px 24px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 4px 15px rgba(51, 26, 92, 0.3)',
  '&:hover': {
    backgroundColor: '#2a1450',
  },
  '@media (max-width: 768px)': {
    position: 'relative',
    bottom: 'auto',
    left: 'auto',
    marginTop: '20px',
    width: '100%',
  },
});

const ProcessSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1024px)': {
    order: 1,
  },
});

const ProcessHeader = styled(Box)({
  marginBottom: '40px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    marginBottom: '30px',
  },
});

const ProcessSubtitle = styled(Typography)({
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

const ProcessTitle = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: COLORS.DARK_PURPLE,
  lineHeight: 1.2,
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginBottom: '16px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.75rem',
    marginBottom: '12px',
  },
});

const ProcessDescription = styled(Typography)({
  fontSize: '18px',
  color: '#666',
  lineHeight: 1.6,
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
  '@media (max-width: 480px)': {
    fontSize: '15px',
  },
});

const StepsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  '@media (max-width: 768px)': {
    gap: '24px',
  },
});

const StepItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  position: 'relative',
  '@media (max-width: 768px)': {
    gap: '16px',
  },
});

const StepIcon = styled(Box)({
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  backgroundColor: COLORS.LOGO_ORANGE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '@media (max-width: 768px)': {
    width: '50px',
    height: '50px',
  },
  '@media (max-width: 480px)': {
    width: '45px',
    height: '45px',
  },
});

const StepContent = styled(Box)({
  flex: 1,
});

const StepNumber = styled(Typography)({
  fontSize: '14px',
  fontWeight: '600',
  color: COLORS.DARK_TEXT,
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  '@media (max-width: 768px)': {
    fontSize: '13px',
  },
});

const StepTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: COLORS.DARK_PURPLE,
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

const StepDescription = styled(Typography)({
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.6,
  '@media (max-width: 768px)': {
    fontSize: '15px',
  },
  '@media (max-width: 480px)': {
    fontSize: '14px',
  },
});

const StepConnector = styled(Box)({
  position: 'absolute',
  left: '30px',
  top: '60px',
  width: '2px',
  height: '120px',
  borderLeft: `2px dashed ${COLORS.LOGO_ORANGE}`,
  '@media (max-width: 768px)': {
    left: '25px',
    top: '50px',
    height: '120px',
  },
  '@media (max-width: 480px)': {
    left: '22.5px',
    top: '45px',
    height: '120px',
  },
});

const WorkProcessSection: React.FC = () => {
  return (
    <WorkProcessContainer>
      <Container maxWidth="xl">
        <ContentWrapper>
          {/* Header centrado arriba */}
          <ProcessHeader>
            <ProcessSubtitle variant="body2">
              WORK PROCESS
            </ProcessSubtitle>
            
            <ProcessTitle variant="h2">
              Stress free operations
            </ProcessTitle>
            
            <ProcessDescription variant="body1">
              With years of expertise, we deliver reliable AC repair and maintenance, ensuring fast, safe, and efficient service for your comfort.
            </ProcessDescription>
          </ProcessHeader>

          {/* Contenido de imagen y pasos en 2 columnas */}
          <ProcessAndContentWrapper>
            {/* Sección de Imagen Izquierda */}
            <ImageSection>
              <MainImage />
            </ImageSection>

            {/* Sección de Proceso Derecha */}
            <ProcessSection>
              <StepsContainer>
                <StepItem>
                  <StepIcon>
                    <CalendarToday sx={{ color: COLORS.WHITE, fontSize: '24px' }} />
                  </StepIcon>
                  <StepContent>
                    <StepNumber variant="body2">STEP-01</StepNumber>
                    <StepTitle variant="h6">Book your service</StepTitle>
                    <StepDescription variant="body1">
                      Call us or schedule online at your convenience. We'll confirm your appointment and send a skilled technician to your location.
                    </StepDescription>
                  </StepContent>
                  <StepConnector />
                </StepItem>

                <StepItem>
                  <StepIcon>
                    <Build sx={{ color: COLORS.WHITE, fontSize: '24px' }} />
                  </StepIcon>
                  <StepContent>
                    <StepNumber variant="body2">STEP-02</StepNumber>
                    <StepTitle variant="h6">Professional inspection & repair</StepTitle>
                    <StepDescription variant="body1">
                      Our certified experts carefully diagnose the issue, explain the problem, and provide a transparent solution—whether it's repair, installation, or maintenance.
                    </StepDescription>
                  </StepContent>
                  <StepConnector />
                </StepItem>

                <StepItem>
                  <StepIcon>
                    <ThumbUp sx={{ color: COLORS.WHITE, fontSize: '24px' }} />
                  </StepIcon>
                  <StepContent>
                    <StepNumber variant="body2">STEP-03</StepNumber>
                    <StepTitle variant="h6">Cool comfort restored</StepTitle>
                    <StepDescription variant="body1">
                      We complete the job efficiently and test your AC to ensure peak performance, so you can enjoy a perfectly cooled home or office.
                    </StepDescription>
                  </StepContent>
                </StepItem>
              </StepsContainer>
            </ProcessSection>
          </ProcessAndContentWrapper>
        </ContentWrapper>
      </Container>
    </WorkProcessContainer>
  );
};

export default WorkProcessSection;
