import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ❌ WRONG: You were importing from ./theme
// import { ThemeProvider } from './theme';

// ✅ RIGHT: Import ThemeProvider from MUI
import { ThemeProvider } from '@mui/material/styles'

// ✅ Import the actual theme from your theme.js
import theme from './theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
