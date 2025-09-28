import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { organizationsStyles } from './style';

export const OrganizationsSection = () => {
  const theme = useTheme();
  const styles = organizationsStyles(theme);

  const organizations = [
    {
      name: "The RISE Global",
      description: "The most expansive and embedded global network of Tamil speaking entrepreneurs, investors, professionals, academia, researchers, artists and public intellectuals.",
      stats: [
        { label: "Global Summits", value: "16+" },
        { label: "Countries", value: "43+" },
        { label: "Members", value: "7000+" },
        { label: "Business Transacted", value: "5000+" }
      ],
      mission: "To inspire and unite Tamil entrepreneurs worldwide for peaceful emergence and excellence in the 21st century.",
      color: "primary"
    },
    {
      name: "Tamil Maiyam",
      description: "A cultural organization founded in 2002 to promote arts, culture and scholarly research in Tamil heritage.",
      highlights: [
        "Historic Thiruvasagam in Symphony project",
        "250+ artists from Hungary, USA, and India",
        "Cultural preservation initiatives",
        "Scholarly research programs"
      ],
      mission: "To preserve and promote Tamil arts, culture, and intellectual heritage on a global scale.",
      color: "accent"
    },
    {
      name: "CTACIS",
      description: "Confederation of Tamil Agriculture, Commerce, Industry and Services - An inclusive platform for Tamil entrepreneurs.",
      highlights: [
        "500+ small-medium entrepreneurs",
        "Regular collaboration meetings",
        "Business enhancement programs",
        "Networking opportunities"
      ],
      mission: "To bring together Tamil-speaking business professionals for mutual growth and collaboration.",
      color: "secondary"
    }
  ];

  const getBadgeLabel = (color) => {
    switch (color) {
      case 'primary': return 'Global Network';
      case 'accent': return 'Cultural Heritage';
      case 'secondary': return 'Business Platform';
      default: return 'Organization';
    }
  };

  const getColorStyles = (color) => {
    return {
      primary: styles.primaryColor,
      accent: styles.accentColor,
      secondary: styles.secondaryColor
    }[color] || {};
  };

  return (
    <Box component="section" sx={styles.section}>
      {/* Background */}
      <Box sx={styles.backgroundImage} />
      <Box sx={styles.overlay} />

      <Box sx={styles.container}>
        {/* Header Section */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            <Box component="span" sx={styles.gradientText}>Organizations</Box> & Impact
          </Typography>
          <Typography variant="h6" component="p" sx={styles.subtitle}>
            Pioneering initiatives that connect, empower, and elevate the global Tamil community
          </Typography>
        </Box>

        {/* Organizations List */}
        <Box sx={styles.organizationsList}>
          {organizations.map((org, index) => (
            <Card 
              key={org.name} 
              sx={{
                ...styles.card,
                ...(index % 2 === 0 ? styles.cardRight : styles.cardLeft),
                ...styles.animateFadeInUp,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardHeader
                title={
                  <Box sx={styles.cardHeader}>
                    <Typography variant="h4" component="h3" sx={styles.orgName}>
                      {org.name}
                    </Typography>
                    <Chip 
                      label={getBadgeLabel(org.color)}
                      sx={{
                        ...styles.badge,
                        ...getColorStyles(org.color)
                      }}
                      variant="outlined"
                    />
                  </Box>
                }
              />
              <CardContent sx={styles.cardContent}>
                {/* Description */}
                <Typography variant="body1" sx={styles.description}>
                  {org.description}
                </Typography>

                {/* Stats Grid */}
                {org.stats && (
                  <Box sx={styles.statsGrid}>
                    {org.stats.map((stat) => (
                      <Box key={stat.label} sx={styles.statItem}>
                        <Typography 
                          variant="h4" 
                          component="div" 
                          sx={{
                            ...styles.statValue,
                            ...getColorStyles(org.color)
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={styles.statLabel}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Highlights */}
                {org.highlights && (
                  <Box sx={styles.highlightsSection}>
                    <Typography variant="h6" component="h4" sx={styles.highlightsTitle}>
                      Key Highlights:
                    </Typography>
                    <Box sx={styles.highlightsGrid}>
                      {org.highlights.map((highlight, idx) => (
                        <Box key={idx} sx={styles.highlightItem}>
                          <Box 
                            sx={{
                              ...styles.bulletPoint,
                              ...getColorStyles(org.color)
                            }} 
                          />
                          <Typography variant="body2" sx={styles.highlightText}>
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Mission */}
                <Box sx={styles.missionBox}>
                  <Typography variant="h6" component="h4" sx={styles.missionTitle}>
                    Mission:
                  </Typography>
                  <Typography variant="body1" sx={styles.missionText}>
                    {org.mission}
                  </Typography>
                </Box>

                {/* Learn More Button */}
                <Button 
                  variant="outlined" 
                  sx={{
                    ...styles.learnMoreButton,
                    ...getColorStyles(org.color)
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};