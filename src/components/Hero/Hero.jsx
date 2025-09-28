import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, useTheme } from '@mui/material';
import { heroStyles } from './style';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const styles = heroStyles(theme);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box component="section" sx={styles.section}>
      {/* Parallax Background */}
      <Box
        sx={styles.backgroundImage}
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Overlay */}
      <Box sx={styles.overlay} />
      
      {/* Floating Elements */}
      <Box sx={styles.floatingElement1} />
      <Box sx={styles.floatingElement2} />
      <Box sx={styles.floatingElement3} />

      {/* Content */}
      <Box sx={styles.content}>
        <Typography 
          variant="h1" 
          component="h1" 
          sx={styles.title}
        >
          Rev. Dr. Jegath
          <br />
          <Box 
            component="span" 
            sx={styles.gradientText}
          >
            Gaspar Raj
          </Box>
        </Typography>
        
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ ...styles.subtitle, animationDelay: '0.3s' }}
        >
          Catholic Priest • Social Entrepreneur • Global Tamil Leader
          <br />
          Founder of The RISE Global & Tamil Maiyam
        </Typography>
        
        <Box sx={{ ...styles.buttonContainer, animationDelay: '0.6s' }}>
          <Button 
            variant="contained" 
            size="large" 
            sx={styles.primaryButton}
          >
            Learn About His Vision
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            sx={styles.secondaryButton}
          >
            Explore The RISE
          </Button>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <Box sx={styles.scrollIndicator}>
        <Box sx={styles.scrollContainer}>
          <Box sx={styles.scrollDot} />
        </Box>
      </Box>
    </Box>
  );
};