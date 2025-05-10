import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import aboutUsImage from '../assets/aboutUs.jpg';

export default function AboutUS() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Container
      id="aboutus"
      ref={ref}
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
          textAlign: 'center',
          mb: 4,
        }}
      >
        {t('aboutUs.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          maxWidth: 900,
        }}
      >
        <motion.img
          src={aboutUsImage}
          alt="Alejandro Jegher"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            width: 350,
            height: 'auto',
            borderRadius: 8,
            objectFit: 'cover',
            border: '4px solid #de383e',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'left' }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Alejandro Jegher
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            CEO
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('aboutUs.description')}
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}
