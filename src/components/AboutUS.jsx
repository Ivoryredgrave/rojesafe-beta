import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function AboutUS() {
  const { t } = useTranslation();

  return (
    <Container
      id="aboutus"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        {t('aboutUs.title')}
      </Typography>
    </Container>
  );
}
