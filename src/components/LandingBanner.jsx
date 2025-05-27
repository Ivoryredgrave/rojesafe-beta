import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import titleImg from '../assets/landingbanner.jpg';

const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

if (isMobile) {
  return (
    <Box
      id="home"
      sx={{
        marginTop: '94px',
        width: '100%',
        height: 'auto',
        px: 2,
        pt: 4,
        pb: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ width: '100%', borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={titleImg}
          alt="Landing"
          sx={{ height: 250, objectFit: 'cover' }}
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            padding: 2,
            fontWeight: 500,
            color: '#212121',
          }}
        >
          {t('landingBanner.subtitle')}
        </Typography>
      </Card>
    </Box>
  );
}

  return (
    <Box
      id="home"
      sx={(theme) => ({
        marginTop: '94px',
        width: '100%',
        height: 'calc(100vh - 94px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflowX: 'hidden',
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
