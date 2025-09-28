import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip
} from '@mui/material';
import {
  Flag,
  Group,
  History,
  EmojiEvents,
  People
} from '@mui/icons-material';
import styles from './style';

// Vlog Milestones / Brand Achievements
const milestoneHistory = [
  { year: '2018', event: 'Channel Launched', description: 'Uploaded first adventure vlog from South India' },
  { year: '2020', event: '10K Subscribers', description: 'Hit five-figures & first brand collaboration' },
  { year: '2022', event: 'First Sponsored Expedition', description: 'Invited by a national tourism board for campaign' },
  { year: '2023', event: 'Featured in Top Travel Magazines', description: 'Vlogs spotlighted by Lonely Planet & NatGeo' },
  { year: '2025', event: 'Global Community', description: '100K+ subscribers, group trips on 3 continents' }
];

// Vlogger “Crew” or Collaborators
const vloggerCrew = [
  { name: 'Riya Sharma', position: 'Producer & Editor', avatar: 'RS' },
  { name: 'Arun Ravi', position: 'Drone & Camera', avatar: 'AR' },
  { name: 'Priya Desai', position: 'Travel Planner', avatar: 'PD' },
  { name: 'You!', position: 'Community Explorer', avatar: <EmojiEvents fontSize="large" color="action" /> }
];

const Party = () => (
  <Box sx={styles.section} id='aboutbrand'>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.sectionTitle}>
        Meet the Jay Voyager Brand
      </Typography>
      <Typography variant="h6" sx={styles.sectionSubtitle}>
        A global travel story, a creative crew, and a mission to inspire adventure!
      </Typography>

      {/* Brand Overview */}
      <Card sx={styles.partyCard}>
        <CardContent sx={{ p: 6, textAlign: 'center' }}>
          <Flag sx={styles.partyLogo} />
          <Typography sx={styles.partyName}>
            Jay the Voyager
          </Typography>
          <Typography sx={styles.partyMotto}>
            "Explore. Inspire. Connect."
          </Typography>

          <Grid container spacing={3} sx={styles.statsGrid}>
            <Grid item xs={6} md={3}>
              <Card sx={styles.statCard}>
                <CardContent>
                  <Typography sx={styles.statNumber}>38+</Typography>
                  <Typography sx={styles.statLabel}>Countries Explored</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={styles.statCard}>
                <CardContent>
                  <Typography sx={styles.statNumber}>100K+</Typography>
                  <Typography sx={styles.statLabel}>Subscribers</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={styles.statCard}>
                <CardContent>
                  <Typography sx={styles.statNumber}>200</Typography>
                  <Typography sx={styles.statLabel}>Vlogs Created</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={styles.statCard}>
                <CardContent>
                  <Typography sx={styles.statNumber}>30+</Typography>
                  <Typography sx={styles.statLabel}>Community Meetups</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={4} sx={styles.historyCardX}>
        {/* Milestone/History Section */}
        <Grid item xs={12} md={6}>
          <Card sx={styles.historyCard}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <History sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
                  Brand Milestones
                </Typography>
              </Box>
              <Container sx={styles.hist}>
                <Box>
                  {milestoneHistory.map((item, index) => (
                    <Box key={index} sx={styles.historyItem}>
                      <Typography sx={styles.historyYear}>
                        {item.year}
                      </Typography>
                      <Box sx={styles.historyContent}>
                        <Typography sx={styles.historyTitle}>
                          {item.event}
                        </Typography>
                        <Typography sx={styles.historyDescription}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Container>
            </CardContent>
          </Card>
        </Grid>

        {/* Crew / Leadership Team */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mt:4,mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <People sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
                The Crew & Community
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={3}>
            {vloggerCrew.map((member, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={styles.leaderCard}>
                  <CardContent sx={{ p: 3 }}>
                    <Avatar sx={styles.leaderAvatar}>
                      {typeof member.avatar === "string" ? member.avatar : member.avatar}
                    </Avatar>
                    <Typography sx={styles.leaderName}>
                      {member.name}
                    </Typography>
                    <Typography sx={styles.leaderPosition}>
                      {member.position}
                    </Typography>
                    <Chip
                      label="Vlog Team"
                      color="primary"
                      size="small"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Brand/Channel Values */}
          <Card sx={{ mt: 3, ...styles.historyCard }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1565c0', mb: 2 }}>
                Our Core Values
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {[
                  'Adventure', 'Curiosity', 'Sustainability',
                  'Community', 'Creativity', 'Positivity'
                ].map((value) => (
                  <Chip key={value} label={value} color="primary" variant="outlined" sx={styles.core} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Party;
