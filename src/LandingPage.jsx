import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import AppAppBar from './components/AppAppBar';

import LandingBanner from './components/LandingBanner';
import Services from './components/Services';
import AboutUS from './components/AboutUS';
import Footer from './components/Footer';

import Divider from '@mui/material/Divider';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <LandingBanner />

      <div>
        <Services />
        <Divider />
        <AboutUS />
        <Footer />
      </div>

    </ThemeProvider>
  );
}
