import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  LinearProgress
} from '@mui/material';
import {
  Work,
  Nature,
  People,
  FlightTakeoff,
  VideoCameraFront,
  CheckCircle,
  TrendingUp
} from '@mui/icons-material';
import styles from './style';

const plans = [
  {
    icon: <FlightTakeoff sx={styles.planIcon} />,
    title: 'New Adventures',
    description: "Exploring untouched places through solo and group trips, cultural immersion, and hidden gems nobody has vlogged before.",
    goals: [
      'Travel to 8 new countries next year',
      'Host community group trips',
      'Discover off-beat destinations',
      'Share local food stories',
      'Eco-friendly travel guides'
    ],
    priority: 'High Priority',
    color: 'error'
  },
  {
    icon: <VideoCameraFront sx={styles.planIcon} />,
    title: 'Content Expansion',
    description: "Bringing cinematic vlogs, immersive stories, and behind-the-scenes edits to inspire fellow explorers worldwide.",
    goals: [
      'Weekly travel vlogs',
      'Podcast episodes with other travelers',
      'Drone footage from new locations',
      'Real-time Instagram stories',
      'Collaborations with top creators'
    ],
    priority: 'High Priority',
    color: 'error'
  },
  {
    icon: <People sx={styles.planIcon} />,
    title: 'Community Building',
    description: "Strengthening the travel family via live Q&As, contests, travel tips, and meetup events for fans and subscribers.",
    goals: [
      'Launch a vlogger forum',
      'Monthly subscriber challenges',
      'Interactive travel map',
      'Fan meetup events globally',
      'Exclusive content on Patreon'
    ],
    priority: 'Medium Priority',
    color: 'warning'
  },
  {
    icon: <Work sx={styles.planIcon} />,
    title: 'Skill Upgrades',
    description: "Investing in digital skills, languages, and new tech to keep pushing boundaries in content and travel storytelling.",
    goals: [
      'Learn Spanish & French',
      'Master cinematic editing',
      'Advanced drone piloting',
      'Photography masterclass',
      'Public speaking workshops'
    ],
    priority: 'Medium Priority',
    color: 'warning'
  }
];

const progressData = [
  { name: 'YouTube Subscribe Milestone', progress: 85 },
  { name: 'Collab Partnership Pipeline', progress: 72 },
  { name: 'Eco-Travel Projects', progress: 60 },
  { name: 'Fan Community Launch', progress: 45 }
];

const Plans = () => {
  return (
    <Box sx={styles.section} id='adventures'>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.sectionTitle}>
          What's Next for Jay the Voyager
        </Typography>
        <Typography variant="h6" sx={styles.sectionSubtitle}>
          Big plans for travel, content, and building an inspiring global community!
        </Typography>

        <Grid container spacing={4} sx={{...styles.plans, mb: 6}}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={styles.planCard}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  {plan.icon}
                  <Typography variant="h5" sx={styles.planTitle}>
                    {plan.title}
                  </Typography>
                  <Typography sx={styles.planDescription}>
                    {plan.description}
                  </Typography>
                  <Chip
                    label={plan.priority}
                    color={plan.color}
                    size="small"
                    sx={styles.priorityChip}
                  />

                  <List sx={styles.goalsList}>
                    {plan.goals.map((goal, goalIndex) => (
                      <ListItem key={goalIndex} sx={styles.goalItem}>
                        <ListItemIcon sx={styles.goalIcon}>
                          <CheckCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={goal}
                          primaryTypographyProps={{ sx: styles.goalText }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Progress Tracking */}
        <Box sx={styles.progressSection}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <TrendingUp sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
            <Typography sx={styles.progressTitle}>
              Channel & Community Progress
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {progressData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={styles.progressItem}>
                  <Box sx={styles.progressLabel}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {item.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={styles.progressBar}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;
