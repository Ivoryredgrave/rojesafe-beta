import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import brands from '../assets/Brandschutz.webp';
import homeRepair from '../assets/homeRepair.jpg';
import isolation from '../assets/isolation.jpg';

const items = [
  {
    icon: <FireplaceIcon />,
    titleKey: 'page1.isolationTitle',
    descriptionKey: 'page1.isolationDescription',
    image: `url(${isolation})`,
  },
  {
    icon: <LocalFireDepartmentIcon />,
    titleKey: 'page1.brandschutzTitle',
    descriptionKey: 'page1.brandschutzDescription',
    image: `url(${brands})`,
  },
  {
    icon: <HomeRepairServiceIcon />,
    titleKey: 'page1.innenausbauTitle',
    descriptionKey: 'page1.innenausbauDescription',
    image: `url(${homeRepair})`,
  },
];

function Page1() {
  const { t } = useTranslation();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="page1" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          {t('page1.productFeaturesTitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          {t('page1.productFeaturesDescription')}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          {items.map(({ icon, titleKey, descriptionKey }, index) => (
            <Box
              key={index}
              component={Button}
              onClick={() => setSelectedItemIndex(index)}
              sx={{
                p: 2,
                width: '100%',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.action.hover,
                },
                ...(selectedItemIndex === index && {
                  backgroundColor: 'action.selected',
                }),
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1,
                  textAlign: 'left',
                  textTransform: 'none',
                  color: 'text.secondary',
                  width: '100%',
                }}
              >
                {icon}
                <Typography variant="h6">{t(titleKey)}</Typography>
                <Typography variant="body2">{t(descriptionKey)}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: '100%',
              maxWidth: 500,
              display: 'flex',
              pointerEvents: 'none',
              aspectRatio: '5 / 6',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: selectedFeature.image,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '2px solid #de383e',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default Page1;
