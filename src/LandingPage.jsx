import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import AppAppBar from './components/AppAppBar';

import LandingBanner from './components/LandingBanner';
import Services from './components/Services';
import AboutUS from './components/AboutUS';
import Footer from './components/Footer';
import ConsentNotice from './components/ConsentNotice';
import Divider from '@mui/material/Divider';
import Gallery from './components/Gallery';

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

      <>
        <Services />
        <Divider />
        <Gallery />
        <Divider />
        <AboutUS />
        <Footer />
        <ConsentNotice />
      </>

    </ThemeProvider>
  );
}
