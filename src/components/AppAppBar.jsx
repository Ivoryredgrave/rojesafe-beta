import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo_rojesafe.png';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#212121',
  padding: '8px 16px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const { t, i18n } = useTranslation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    { label: 'navbar.page1', href: '#home' },
    { label: 'navbar.page2', href: '#services' },
    { label: 'navbar.aboutUs', href: '#aboutus' },
    { label: 'navbar.contact', href: '#footer' },
  ];

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.checked ? 'de' : 'en';
    i18n.changeLanguage(selectedLanguage);
    setIsChecked(event.target.checked);
  };

  return (
    <>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#212121',
          height: 30,
          justifyContent: 'center',
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Toolbar
            disableGutters
            sx={{
              minHeight: '30px !important',
              px: 2,
              pr: 4,
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: 20, color: '#ffffff' }} />
              <Typography variant="caption" sx={{ color: '#ffffff', fontSize: '1.0rem' }}>
                079 718 5905
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 20, color: '#ffffff' }} />
              <Typography variant="caption" sx={{ color: '#ffffff', fontSize: '1.0rem' }}>
                rojesafe@hotmail.com
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: '#212121',
          backgroundImage: 'none',
          boxShadow: 1,
          top: 30,
        }}
      >
        <Container maxWidth={false} disableGutters>
          <StyledToolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, ml: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="RojeSafe Logo"
                sx={{ width: 38, height: 38 }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: '#cc0018',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  lineHeight: 1,
                }}
              >
                ROJESAFE
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'center',
                gap: 3,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  variant="text"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    textTransform: 'none',
                    '&:hover': {
                      color: '#e0e0e0',
                    },
                  }}
                >
                  {t(item.label)}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: 'white', fontWeight: 600 }}>
                {i18n.language === 'de' ? 'DE' : 'EN'}
              </Typography>
              <Switch
                checked={isChecked}
                onChange={handleLanguageChange}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#64b5f6',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#64b5f6',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#888',
                  }
                }}
              />
            </Box>


            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton aria-label="open drawer" onClick={toggleDrawer(true)} sx={{ color: '#FFFFFF' }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: '#212121',
                  },
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={toggleDrawer(false)} sx={{ color: '#FFFFFF' }}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  {navItems.map((item) => (
                    <MenuItem key={item.label} onClick={toggleDrawer(false)}>
                      <Button
                        href={item.href}
                        fullWidth
                        sx={{
                          color: '#FFFFFF',
                          fontSize: '1rem',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          textTransform: 'none',
                          fontWeight: 500,
                          py: 1,
                          '&:hover': {
                            color: '#e0e0e0',
                          },
                        }}
                      >
                        {t(item.label)}
                      </Button>
                    </MenuItem>
                  ))}
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>

    </>
  );
} 