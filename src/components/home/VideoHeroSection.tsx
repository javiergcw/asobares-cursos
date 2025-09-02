'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  styled,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import {
  PlayArrow,
  Close,
} from '@mui/icons-material';

// Importar constantes de colores
import { COLORS } from '../../utils/colors';

// Componentes estilizados
const VideoHeroContainer = styled(Box)({
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

const VideoSection = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '600px',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
  '@media (max-width: 768px)': {
    height: '400px',
  },
  '@media (max-width: 480px)': {
    height: '300px',
  },
});

const BackgroundImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/img/image.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(51, 26, 92, 0.6)',
    zIndex: 1,
  },
});

const ContentOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    padding: '30px 20px',
  },
});

const MotivationalText = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: COLORS.WHITE,
  lineHeight: 1.3,
  marginBottom: '40px',
  maxWidth: '800px',
  '@media (max-width: 768px)': {
    fontSize: '1.8rem',
    marginBottom: '30px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.5rem',
    marginBottom: '25px',
  },
});

const HighlightedWord = styled('span')({
  color: COLORS.LOGO_ORANGE,
});

const PlayButtonContainer = styled(Box)({
  position: 'relative',
  marginTop: '20px',
});

const PlayButton = styled(Button)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: COLORS.LOGO_ORANGE,
  color: COLORS.WHITE,
  border: '4px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 25px rgba(255, 102, 0, 0.4)',
  '&:hover': {
    backgroundColor: '#e55a00',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
  '@media (max-width: 768px)': {
    width: '70px',
    height: '70px',
  },
  '@media (max-width: 480px)': {
    width: '60px',
    height: '60px',
  },
});

const PlayIcon = styled(PlayArrow)({
  fontSize: '40px',
  marginLeft: '4px',
  '@media (max-width: 768px)': {
    fontSize: '35px',
  },
  '@media (max-width: 480px)': {
    fontSize: '30px',
  },
});

const PulsingCircle = styled(Box)({
  position: 'absolute',
  top: '-10px',
  left: '-10px',
  right: '-10px',
  bottom: '-10px',
  border: '2px dashed rgba(255, 255, 255, 0.6)',
  borderRadius: '50%',
  animation: 'pulse 2s infinite',
  '@media (max-width: 768px)': {
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
  },
  '@media (max-width: 480px)': {
    top: '-6px',
    left: '-6px',
    right: '-6px',
    bottom: '-6px',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '50%': {
      transform: 'scale(1.1)',
      opacity: 0.7,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
});

const VideoDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: '100%',
    height: '100%',
    margin: '20px',
    borderRadius: '16px',
    overflow: 'hidden',
  },
});

const VideoContent = styled(DialogContent)({
  padding: 0,
  position: 'relative',
  backgroundColor: '#000',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: COLORS.DARK_TEXT,
  zIndex: 10,
  '&:hover': {
    backgroundColor: COLORS.WHITE,
  },
});

const VideoFrame = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
  minHeight: '400px',
});

const VideoHeroSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <VideoHeroContainer>
      <Container maxWidth="xl">
        <ContentWrapper>
          <VideoSection>
            <BackgroundImage />
            <ContentOverlay>
              <MotivationalText variant="h1">
                Getting the job done—no matter where, no<br />
                matter how <HighlightedWord>big</HighlightedWord> or <HighlightedWord>small</HighlightedWord>. What truly<br />
                matters is staying <HighlightedWord>positive</HighlightedWord>.
              </MotivationalText>
              
              <PlayButtonContainer>
                <PulsingCircle />
                <PlayButton onClick={handleOpenVideo}>
                  <PlayIcon />
                </PlayButton>
              </PlayButtonContainer>
            </ContentOverlay>
          </VideoSection>
        </ContentWrapper>
      </Container>

      {/* Popup de Video */}
      <VideoDialog
        open={isVideoOpen}
        onClose={handleCloseVideo}
        fullWidth
        maxWidth="lg"
      >
        <VideoContent>
          <CloseButton onClick={handleCloseVideo}>
            <Close />
          </CloseButton>
          <VideoFrame
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="AC Repair Service Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContent>
      </VideoDialog>
    </VideoHeroContainer>
  );
};

export default VideoHeroSection;
