import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';

export default function ConsentNotice() {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Paper
      elevation={6}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        p: 2,
        bgcolor: '#212121',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1300,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
        color: '#fff',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          mb: { xs: 1, sm: 0 },
          color: '#fff',
        }}
      >
        {t('cookie.message')}{' '}
      </Typography>
      <Button
        onClick={handleAccept}
        variant="contained"
        color="primary"
        sx={{ ml: { sm: 2 }, minWidth: 100 }}
      >
        {t('cookie.accept')}
      </Button>
    </Paper>
  );
}