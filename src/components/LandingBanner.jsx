import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import titleImg from '../assets/landingbanner.jpg';
import { useTranslation } from 'react-i18next';

const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',          // cambiar de 100vw a 100%
  height: '100%',
  borderRadius: 0,
  border: 'none',
  boxShadow: 'none',
  backgroundImage: `url(${titleImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  boxSizing: 'border-box',
  color: '#fff',

  ...(theme.applyStyles ? theme.applyStyles('dark', {
    backgroundImage: `url(${titleImg})`,
  }) : {}),
}));

export default function LandingBanner() {
  const { t } = useTranslation();
  return (
    <Box
      id="home"
      sx={(theme) => ({
        marginTop: '94px',
        width: '100%',              // cambia aquí también
        height: 'calc(100vh - 94px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflowX: 'hidden',      // evita overflow horizontal
        ...(theme.applyStyles ? theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }) : {}),
      })}
    >
      <StyledBox>
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            bottom: 20,
            width: '100%',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.85)',
            textShadow: '0 0 8px rgba(0,0,0,0.7)',
            fontWeight: 500,
          }}
        >
            {t('landingBanner.subtitle')}
        </Typography>
      </StyledBox>
    </Box>
  );
}