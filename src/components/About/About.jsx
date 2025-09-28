import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  useTheme
} from '@mui/material';
import { aboutStyles } from './style';

export const About = () => {
  const theme = useTheme();
  const styles = aboutStyles(theme);

  const education = [
    "M.A. in Political Science - Madurai Kamaraj University",
    "B.A. in History - University of Madras",
    "B.A. in Philosophy - Urbaniana University, Rome",
    "B.A. in Theology - Sacred Heart College, Chennai",
    "Defence and Strategic Studies - University of Madras"
  ];

  const competencies = [
    "Mass Media & Communication",
    "Dynamic Leadership Development",
    "Human & Organizational Networking",
    "Strategic Policy Planning",
    "Conflict Resolution",
    "International Humanitarian Law"
  ];

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header Section */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            About <Box component="span" sx={styles.gradientText}>Father Jegath</Box>
          </Typography>
          <Typography variant="h6" component="p" sx={styles.subtitle}>
            A visionary leader bridging spirituality and entrepreneurship to create meaningful global impact
          </Typography>
        </Box>

        {/* Biography and Achievements Grid */}
        <Box sx={styles.gridContainer}>
          {/* Biography Card */}
          <Box sx={{ ...styles.animateFadeInUp, animationDelay: '0.2s' }}>
            <Card sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" component="h3" sx={styles.cardTitle}>
                  Biography
                </Typography>
                <Typography variant="body1" sx={styles.paragraph}>
                  Born on January 22, 1966, in Kanjampuram, Kanyakumari District, Tamil Nadu, 
                  Rev. Dr. Jegath Gaspar Raj is a distinguished Catholic priest and social entrepreneur 
                  who has dedicated his life to promoting Tamil culture and fostering global entrepreneurship.
                </Typography>
                <Typography variant="body1" sx={styles.paragraph}>
                  From 1995 to 2001, he served as director of the Tamil service for Radio Veritas Asia in Manila, 
                  Philippines, where he became internationally recognized as an accomplished broadcaster, 
                  humanitarian, and human rights activist.
                </Typography>
                <Typography variant="body1" sx={styles.paragraph}>
                  His work spans cultural preservation, entrepreneurship development, and conflict resolution, 
                  making him a bridge between tradition and innovation in the global Tamil community.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Achievements Card */}
          <Box sx={{ ...styles.animateFadeInUp, animationDelay: '0.4s' }}>
            <Card sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" component="h3" sx={styles.cardTitle}>
                  Key Achievements
                </Typography>
                <Box component="ul" sx={styles.list}>
                  {[
                    "Founded The RISE Global - Network of 7000+ Tamil entrepreneurs across 43+ countries",
                    "Co-created Chennai Sangamam - India's biggest open cultural festival",
                    "Produced Thiruvasagam in Symphony with Maestro Ilaiyaraaja",
                    '"Give Life" project supporting 47,000+ underprivileged children\'s education',
                    "Founded CTACIS - Platform for 500+ Tamil entrepreneurs"
                  ].map((achievement, index) => (
                    <Box key={index} component="li" sx={styles.listItem}>
                      <Box 
                        sx={{ 
                          ...styles.bulletPoint, 
                          backgroundColor: index % 2 === 0 ? 'primary.main' : 'accent.main'
                        }} 
                      />
                      {achievement}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Education and Competencies Grid */}
        <Box sx={styles.bottomGrid}>
          {/* Education Section */}
          <Box sx={{ ...styles.animateSlideInRight, animationDelay: '0.6s' }}>
            <Typography variant="h5" component="h3" sx={styles.sectionTitle}>
              Education
            </Typography>
            <Box sx={styles.chipContainer}>
              {education.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  sx={styles.educationChip}
                  variant="filled"
                />
              ))}
            </Box>
          </Box>

          {/* Competencies Section */}
          <Box sx={{ ...styles.animateSlideInRight, animationDelay: '0.8s' }}>
            <Typography variant="h5" component="h3" sx={styles.sectionTitle}>
              Core Competencies
            </Typography>
            <Box sx={styles.chipContainer}>
              {competencies.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  sx={styles.competencyChip}
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};