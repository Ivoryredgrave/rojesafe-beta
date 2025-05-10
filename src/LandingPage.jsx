import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppAppBar from './components/AppAppBar';
import LandingBanner from './components/LandingBanner';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
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
        <Page1 />
        <Divider />
        <Page2 />
        <Divider />
        <Page3 />
        <Divider />
        <AboutUS />
        <Footer />
      </div>

    </ThemeProvider>
  );
}
