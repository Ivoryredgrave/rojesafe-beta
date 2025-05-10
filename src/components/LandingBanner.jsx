import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import titleImg from '../assets/landingbanner.jpg';

const StyledBox = styled('div')(({ theme }) => ({
  width: '90%',
  maxWidth: '1400px',
  height: '100vh', 
  marginTop: theme.spacing(8),
  borderRadius: '20px',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${titleImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
 height: '85vh',
  },

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
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <StyledBox id="image" />
    </Box>
  );
}