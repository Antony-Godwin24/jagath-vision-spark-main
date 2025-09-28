// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'

    // ✅ ADD custom palette entries here
    accent: {
      main: '#FF6F61',
      dark: '#CC554C',
      contrastText: '#FFFFFF',
    },
    card: {
      main: '#F7F9FC', // light background for card sections
    },

    // optional override default colors too
    primary: {
      main: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

export default theme;
