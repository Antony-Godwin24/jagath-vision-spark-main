import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { visionStyles } from './style';

export const VisionSection = () => {
  const theme = useTheme();
  const styles = visionStyles(theme);

  const ideals = [
    {
      title: "Democracy & Equity",
      description: "Staunch believer in democratic values and equitable opportunities for all",
      icon: "⚖️"
    },
    {
      title: "Gender Justice",
      description: "Committed to promoting equality and empowerment across all genders",
      icon: "🤝"
    },
    {
      title: "Environmental Peace",
      description: "Advocate for sustainable practices and environmental stewardship",
      icon: "🌱"
    },
    {
      title: "Fearless Voice",
      description: "Uses voice as a crucial instrument of fairness and justice",
      icon: "🗣️"
    },
    {
      title: "Shared Prosperity",
      description: "Believes in collaborative growth and mutual success",
      icon: "🌟"
    },
    {
      title: "Cultural Unity",
      description: "Bridges cultural divides while preserving heritage",
      icon: "🕊️"
    }
  ];

  return (
    <Box component="section" sx={styles.section}>
      {/* Background */}
      <Box sx={styles.backgroundImage} />
      <Box sx={styles.overlay} />

      <Box sx={styles.container}>
        {/* Header Section */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            Vision & <Box component="span" sx={styles.accentText}>Ideals</Box>
          </Typography>
          <Typography variant="h6" component="p" sx={styles.quote}>
            "Fr. Jegath Gaspar Raj fiercely resists ideologies and politics of hate and exclusion. 
            He considers fearless voice as a crucial instrument of fairness and justice."
          </Typography>
        </Box>

        {/* Ideals Grid */}
        <Box sx={styles.idealsGrid}>
          {ideals.map((ideal, index) => (
            <Card 
              key={ideal.title}
              sx={{
                ...styles.idealCard,
                ...styles.animateScaleIn,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent sx={styles.idealContent}>
                <Box 
                  sx={{
                    ...styles.icon,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  {ideal.icon}
                </Box>
                <Typography variant="h5" component="h3" sx={styles.idealTitle}>
                  {ideal.title}
                </Typography>
                <Typography variant="body1" sx={styles.idealDescription}>
                  {ideal.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Mission Statement */}
        <Box sx={{ ...styles.missionContainer, animationDelay: '0.8s' }}>
          <Card sx={styles.missionCard}>
            <CardContent sx={styles.missionContent}>
              <Typography variant="h4" component="h3" sx={styles.missionTitle}>
                Mission Statement
              </Typography>
              <Box component="blockquote" sx={styles.missionQuote}>
                "To inspire and unite Tamil entrepreneurs, professionals, public intellectuals and knowledge resources 
                all over the world; to work hard for the peaceful emergence of Tamils in the 21st century; 
                to excel in all fields of knowledge, innovation, art, culture, media and public good."
              </Box>
              <Box sx={styles.accentLine} />
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Decorative floating elements */}
      <Box sx={styles.floatingElement1} />
      <Box sx={styles.floatingElement2} />
      <Box sx={styles.floatingElement3} />
    </Box>
  );
};