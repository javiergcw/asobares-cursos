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
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const HeroContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/img/restaurantes.webp)',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  gap: '20px',
  '@media (max-width: 768px)': {
    gap: '24px',
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
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'none',
  letterSpacing: '1.5px',
  marginBottom: '12px',
  color: COLORS.WHITE,
  '@media (max-width: 768px)': {
    fontSize: '13px',
    marginBottom: '10px',
  },
});

const MainHeadline = styled(Typography)({
  fontSize: '2.8rem',
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: '16px',
  color: COLORS.WHITE,
  '@media (max-width: 768px)': {
    fontSize: '1.8rem',
    marginBottom: '14px',
    lineHeight: 1.3,
  },
});



const ViewServicesButton = styled(Button)({
  backgroundColor: COLORS.PRIMARY_DARK,
  color: COLORS.WHITE,
  borderRadius: '20px',
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '12px',
  marginBottom: '12px',
  height: '56px',
  '&:hover': {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  '@media (max-width: 768px)': {
    padding: '12px 20px',
    fontSize: '15px',
    width: '100%',
    maxWidth: '280px',
    height: '56px',
  },
});



// Formulario de estimación rápida
const EstimateForm = styled(Box)({
  backgroundColor: COLORS.WHITE,
  borderRadius: '16px',
  padding: '20px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  width: '100%',
  '@media (max-width: 768px)': {
    padding: '16px',
    borderRadius: '14px',
  },
});

const FormTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  color: COLORS.DARK_TEXT,
  marginBottom: '14px',
  textAlign: 'left',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '16px',
    textAlign: 'center',
  },
});

const FormField = styled(Box)({
  marginBottom: '14px',
  flex: '1',
  minWidth: '180px',
  '@media (max-width: 768px)': {
    minWidth: '100%',
    marginBottom: '16px',
  },
});

const FieldLabel = styled(Typography)({
  fontSize: '12px',
  fontWeight: '600',
  color: COLORS.DARK_TEXT,
  marginBottom: '6px',
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
  backgroundColor: COLORS.PRIMARY_DARK,
  color: COLORS.WHITE,
  borderRadius: '10px',
  padding: '10px 20px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  minWidth: '100px',
  height: '56px',
  '&:hover': {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
  '@media (max-width: 768px)': {
    width: '100%',
    height: '56px',
    fontSize: '16px',
    padding: '14px 20px',
  },
});

const ErrorText = styled(Typography)({
  fontSize: '12px',
  color: '#d32f2f',
  marginTop: '4px',
  marginLeft: '4px',
});

const SuccessDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
});

const SuccessIcon = styled(CheckCircle)({
  fontSize: '60px',
  color: '#4caf50',
  marginBottom: '16px',
});

const SuccessTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#2e7d32',
  marginBottom: '12px',
});

const SuccessMessage = styled(Typography)({
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.5,
});

const HeroSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const [errors, setErrors] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Limpiar errores y mensaje de éxito anteriores
    setErrors({
      name: '',
      phone: '',
      email: '',
      service: '',
    });
    setShowSuccessDialog(false);

    let hasErrors = false;
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      service: '',
    };

    // Validar campos requeridos
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre';
      hasErrors = true;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa tu número telefónico';
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
      hasErrors = true;
    } else {
      // Validar formato de email básico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Por favor ingresa un correo electrónico válido';
        hasErrors = true;
      }
    }

    if (!formData.service) {
      newErrors.service = 'Por favor selecciona un curso';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Limpiar formulario después del envío
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
    });

    // Mostrar popup de éxito
    setShowSuccessDialog(true);

    // Cerrar automáticamente después de 3 segundos
    setTimeout(() => {
      setShowSuccessDialog(false);
    }, 3000);

    console.log('✅ ¡Información enviada correctamente! Te contactaremos pronto. ');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 100; // Offset para que no baje tanto
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <Container maxWidth="xl">
          <ContentWrapper>
            {/* Contenido izquierdo */}
            <LeftContent>
              <FastReliable variant="body1">
                Formación profesional
              </FastReliable>

              <MainHeadline variant="h1">
                Capacítate en el arte de la gastronomía y el servicio al cliente.
              </MainHeadline>

              <ViewServicesButton endIcon={<ArrowForward />} onClick={scrollToServices}>
                Ver nuestros cursos
              </ViewServicesButton>
            </LeftContent>

            {/* Formulario de estimación rápida */}
            {/* <EstimateForm as="form" onSubmit={handleSubmit}>
              <FormTitle>
                Solicita información de nuestros cursos
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
                  <FieldLabel>NOMBRE</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Ingresa tu nombre completo"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    variant="outlined"
                    error={!!errors.name}
                  />
                  {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </FormField>

                <FormField>
                  <FieldLabel>TELÉFONO</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Ingresa tu número telefónico"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    variant="outlined"
                    error={!!errors.phone}
                  />
                  {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                </FormField>

                <FormField>
                  <FieldLabel>CORREO</FieldLabel>
                  <StyledTextField
                    fullWidth
                    placeholder="Ingresa tu correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    variant="outlined"
                    error={!!errors.email}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FormField>

                <FormField>
                  <FieldLabel>SELECCIONA CURSO</FieldLabel>
                  <StyledTextField
                    fullWidth
                    select
                    placeholder="Selecciona el curso de tu interés"
                    value={formData.service}
                    onChange={handleInputChange('service')}
                    variant="outlined"
                    error={!!errors.service}
                  >
                    <MenuItem value="bartender">Bartender Profesional</MenuItem>
                    <MenuItem value="mesero">Servicio de Mesero</MenuItem>
                    <MenuItem value="cocina">Cocina Básica</MenuItem>
                    <MenuItem value="atencion">Atención al Cliente</MenuItem>
                  </StyledTextField>
                  {errors.service && <ErrorText>{errors.service}</ErrorText>}
                </FormField>

                <FormField sx={{ flex: '0.3' }}>
                  <Box sx={{ height: '18px' }} /> 
                  <SubmitButton type="submit" endIcon={<ArrowForward />} sx={{ width: '100%' }}>
                    Enviar
                  </SubmitButton>
                </FormField>
              </Box>
            </EstimateForm> */}
          </ContentWrapper>
        </Container>
      </HeroContent>

      {/* Popup de éxito */}
      <SuccessDialog
        open={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        aria-labelledby="success-dialog-title"
      >
        <DialogContent>
          <SuccessIcon />
          <SuccessTitle id="success-dialog-title">
            ¡Formulario Enviado!
          </SuccessTitle>
          <SuccessMessage>
            Tu información ha sido enviada correctamente. Te contactaremos pronto para brindarte más detalles sobre nuestros cursos.
          </SuccessMessage>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '0 20px 20px' }}>
          <Button
            onClick={() => setShowSuccessDialog(false)}
            variant="contained"
            sx={{
              backgroundColor: COLORS.PRIMARY_DARK,
              color: COLORS.WHITE,
              borderRadius: '25px',
              padding: '8px 24px',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: COLORS.PRIMARY_LIGHT,
              },
            }}
          >
            Entendido
          </Button>
        </DialogActions>
      </SuccessDialog>
    </HeroContainer>
  );
};

export default HeroSection;
