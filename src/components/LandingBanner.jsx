import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import titleImg from '../assets/landingbanner.jpg';

const StyledBox = styled('div')(({ theme }) => ({
  width: '90%',
  maxWidth: '1400px',
  height: '85vh',
  marginTop: theme.spacing(10),
  borderRadius: '20px',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${titleImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',

  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${titleImg})`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function LandingBanner() {
  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <StyledBox id="image">
        
      </StyledBox>
    </Box>
  );
}
