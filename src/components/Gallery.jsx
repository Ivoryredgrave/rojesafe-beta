import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';

const images = [img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Container
      id="gallery"
      ref={ref}
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          {t('gallery.title')}
        </Typography>
      </motion.div>

      <Box sx={{ maxWidth: 1150, margin: '0 auto' }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          style={{ borderRadius: '12px', overflow: 'hidden', height: '650px' }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.img
                src={src}
                alt={`Gallery image ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                initial={{ opacity: 0.5 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
