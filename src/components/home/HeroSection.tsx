'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  MenuItem,
  styled,
} from '@mui/material';
import {
  ArrowForward,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const HeroContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(51, 26, 92, 0.7)', // DARK_PURPLE con transparencia
    zIndex: 1,
  },
  '@media (max-width: 768px)': {
    minHeight: 'auto',
    padding: '60px 0',
  },
});

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  color: COLORS.WHITE,
  width: '100%',
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  '@media (max-width: 768px)': {
    gap: '32px',
  },
});

const LeftContent = styled(Box)({
  width: '100%',
  maxWidth: '600px',
  '@media (max-width: 768px)': {
    maxWidth: '100%',
    textAlign: 'center',
  },
});

const FastReliable = styled(Typography)({
  fontSize: '18px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: '16px',
  color: COLORS.WHITE,
  '@media (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '12px',
  },
});

const MainHeadline = styled(Typography)({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: '20px',
  color: COLORS.WHITE,
  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginBottom: '16px',
    lineHeight: 1.3,
  },
});



const ViewServicesButton = styled(Button)({
  backgroundColor: COLORS.LOGO_ORANGE,
  color: COLORS.WHITE,
  borderRadius: '25px',
  padding: '16px 32px',
  textTransform: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '16px',
  marginBottom: '16px',
  '&:hover': {
    backgroundColor: '#e55a00',
  },
  '@media (max-width: 768px)': {
    padding: '14px 24px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '300px',
  },
});



// Formulario de estimación rápida
const EstimateForm = styled(Box)({
  backgroundColor: COLORS.WHITE,
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  width: '100%',
  '@media (max-width: 768px)': {
    padding: '20px',
    borderRadius: '16px',
  },
});

const FormTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: COLORS.DARK_TEXT,
  marginBottom: '16px',
  textAlign: 'left',
  '@media (max-width: 768px)': {
    fontSize: '18px',
    marginBottom: '20px',
    textAlign: 'center',
  },
});

const FormField = styled(Box)({
  marginBottom: '16px',
  flex: '1',
  minWidth: '200px',
  '@media (max-width: 768px)': {
    minWidth: '100%',
    marginBottom: '20px',
  },
});

const FieldLabel = styled(Typography)({
  fontSize: '14px',
  fontWeight: '600',
  color: COLORS.DARK_TEXT,
  marginBottom: '8px',
  textTransform: 'uppercase',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: COLORS.LOGO_BLUE,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.LOGO_BLUE,
    },
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: COLORS.LOGO_ORANGE,
  color: COLORS.WHITE,
  borderRadius: '12px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  minWidth: '120px',
  height: '48px',
  '&:hover': {
    backgroundColor: '#e55a00',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    height: '56px',
    fontSize: '18px',
    padding: '16px 24px',
  },
});

const HeroSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Container maxWidth="xl">
          <ContentWrapper>
            {/* Contenido izquierdo */}
            <LeftContent>
              <FastReliable variant="body1">
                FAST & RELIABLE
              </FastReliable>
              
              <MainHeadline variant="h1">
                Precision cooling for perfect comfort.
              </MainHeadline>
              
              <ViewServicesButton endIcon={<ArrowForward />}>
                VIEW OUR SERVICES 
              </ViewServicesButton>
            </LeftContent>

            {/* Formulario de estimación rápida */}
            <EstimateForm as="form" onSubmit={handleSubmit}>
              <FormTitle>
                Get a quick estimate
              </FormTitle>
              
              <Box sx={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                alignItems: 'center',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  gap: '0',
                }
              }}>
                <FormField>
                  <FieldLabel>NAME</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    variant="outlined"
                  />
                </FormField>
                
                <FormField>
                  <FieldLabel>PHONE</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    variant="outlined"
                  />
                </FormField>
                
                <FormField>
                  <FieldLabel>EMAIL</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    variant="outlined"
                  />
                </FormField>
                
                <FormField>
                  <FieldLabel>SELECT SERVICE</FieldLabel>
                  <StyledTextField
                    fullWidth
                    select
                    placeholder="Select your service"
                    value={formData.service}
                    onChange={handleInputChange('service')}
                    variant="outlined"
                  >
                    <MenuItem value="hvac">HVAC Services</MenuItem>
                    <MenuItem value="plumbing">Plumbing</MenuItem>
                    <MenuItem value="electrical">Electrical</MenuItem>
                    <MenuItem value="maintenance">Maintenance</MenuItem>
                  </StyledTextField>
                </FormField>
                
                <SubmitButton type="submit" endIcon={<ArrowForward />}>
                  SUBMIT →
                </SubmitButton>
              </Box>
            </EstimateForm>
          </ContentWrapper>
        </Container>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
