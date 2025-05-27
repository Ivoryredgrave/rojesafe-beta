import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';

import logo from '../assets/contactbanner.webp';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: '#f5f5f5',
        mt: 8,
        borderTop: '1px solid #ddd',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
          py: { xs: 6, sm: 10 },
        }}
      >
        <Box>
          <Box
            component="img"
            src={logo}
            alt="RojeSafe"
            sx={{
              height: 150,
              mb: 2,
              filter: (theme) =>
                theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
            }}
          />

          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            {t('footer.contact')}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {t('footer.email')}
          </Typography>
        </Box>

        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
            {t('footer.followUs')}
          </Typography>

          {/* Redes sociales en 2x2 */}
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="Instagram"
                href="https://www.instagram.com/rojesafe_brandschutz/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#E4405F' }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Facebook"
                href="https://www.facebook.com/people/Rojesafe-GmbH/61575049869606/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#296cfa' }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/rojesafe/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#0A66C2' }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                href="https://www.youtube.com/@rojesafe"
                target="_blank"
                rel="noopener"
                sx={{ color: '#FF0000' }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>

      <Divider />

      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t('footer.rightsReserved', { year: new Date().getFullYear() })}
        </Typography>
      </Box>
    </Box>
  );
}
