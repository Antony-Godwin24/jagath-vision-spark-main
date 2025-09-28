import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Button,
  Chip,
  useTheme
} from '@mui/material';
import { contactStyles } from './style';

export const Contact = () => {
  const theme = useTheme();
  const styles = contactStyles(theme);

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header Section */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            Connect & <Box component="span" sx={styles.gradientText}>Collaborate</Box>
          </Typography>
          <Typography variant="h6" component="p" sx={styles.subtitle}>
            Join the global movement for Tamil entrepreneurship and cultural preservation
          </Typography>
        </Box>

        {/* Contact Cards Grid */}
        <Box sx={styles.gridContainer}>
          {/* Professional Contact Card */}
          <Card sx={{ ...styles.card, ...styles.animateSlideInRight }}>
            <CardHeader 
              title={
                <Typography variant="h5" component="h3" sx={styles.cardTitlePrimary}>
                  Professional Contact
                </Typography>
              }
            />
            <CardContent sx={styles.cardContent}>
              <Box sx={styles.infoItem}>
                <Chip label="Location" sx={styles.badge} />
                <Typography variant="body1" sx={styles.infoText}>
                  Chennai, Tamil Nadu, India
                </Typography>
              </Box>
              <Box sx={styles.infoItem}>
                <Chip label="Role" sx={styles.badge} />
                <Typography variant="body1" sx={styles.infoText}>
                  Catholic Priest & Social Entrepreneur
                </Typography>
              </Box>
              <Box sx={styles.infoItem}>
                <Chip label="Organizations" sx={styles.badge} />
                <Box sx={styles.organizationList}>
                  <Typography variant="body2" sx={styles.orgItem}>• Founder, The RISE Global</Typography>
                  <Typography variant="body2" sx={styles.orgItem}>• Founder, Tamil Maiyam</Typography>
                  <Typography variant="body2" sx={styles.orgItem}>• Founder, CTACIS</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Get Involved Card */}
          <Card sx={{ 
            ...styles.card, 
            ...styles.animateSlideInRight,
            animationDelay: '0.2s'
          }}>
            <CardHeader 
              title={
                <Typography variant="h5" component="h3" sx={styles.cardTitleAccent}>
                  Get Involved
                </Typography>
              }
            />
            <CardContent sx={styles.cardContent}>
              <Box sx={styles.involveItem}>
                <Typography variant="h6" component="h4" sx={styles.involveTitle}>
                  Join The RISE Global
                </Typography>
                <Typography variant="body2" sx={styles.involveText}>
                  Connect with 7000+ Tamil entrepreneurs across 43+ countries
                </Typography>
              </Box>
              <Box sx={styles.involveItem}>
                <Typography variant="h6" component="h4" sx={styles.involveTitle}>
                  Support Tamil Culture
                </Typography>
                <Typography variant="body2" sx={styles.involveText}>
                  Participate in cultural preservation and promotion initiatives
                </Typography>
              </Box>
              <Box sx={styles.involveItem}>
                <Typography variant="h6" component="h4" sx={styles.involveTitle}>
                  Attend Events
                </Typography>
                <Typography variant="body2" sx={styles.involveText}>
                  Join global summits and Chennai Sangamam celebrations
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Call to Action Card */}
        <Box sx={{ ...styles.ctaContainer, ...styles.animateFadeInUp, animationDelay: '0.4s' }}>
          <Card sx={styles.ctaCard}>
            <CardContent sx={styles.ctaContent}>
              <Typography variant="h4" component="h3" sx={styles.ctaTitle}>
                Ready to Make an Impact?
              </Typography>
              <Typography variant="body1" sx={styles.ctaText}>
                Whether you're an entrepreneur, professional, or cultural enthusiast, 
                there's a place for you in our global Tamil community.
              </Typography>
              <Box sx={styles.buttonContainer}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={styles.primaryButton}
                >
                  Join The RISE Global
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={styles.secondaryButton}
                >
                  Learn More
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};