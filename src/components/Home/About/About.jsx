import React from "react";
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
} from "@mui/material";
import { School, Work, People, CheckCircle } from "@mui/icons-material";

import styles from "./style";

const achievements = [
  "Traveled to 38+ countries on 5 continents",
  "100K+ YouTube subscribers with immersive vlogs",
  "Featured in Lonely Planet & NatGeo Traveller",
  "Collaborated with 20+ global tourism boards",
  'Launched an eco-travel initiative: "Vlog4Earth"',
];

const About = () => (
  <Box sx={styles.section} id="about">
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.sectionTitle}>
        About Jay the Voyager
      </Typography>
      <Typography variant="h6" sx={styles.sectionSubtitle}>
        Adventure Seeker | Full-time Travel Vlogger | Storyteller
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={8} sx={{ mb: 20 }}>
          <Card sx={styles.card}>
            <CardContent sx={{ p: 4 }}>
              <Typography sx={styles.bioText}>
                Jay is passionate about exploring unique destinations and
                bringing authentic travel experiences to a global audience. With
                a camera in hand and curiosity as his compass, he’s trekked the
                Himalayas, dived in Indonesia, and surfed the beaches of
                Portugal, all while sharing each moment on YouTube.
              </Typography>
              <Typography sx={styles.bioText}>
                Starting with solo backpacking journeys during college, Jay’s
                vlogs evolved into cinematic episodes loved by adventure
                seekers. He focuses on culture, food, hidden gems, and inspiring
                followers to travel more sustainably and fearlessly.
              </Typography>
              <Typography sx={styles.bioText}>
                Jay believes that storytelling can bridge cultures. He loves
                collaborating with local guides, supporting small businesses,
                and building a travel community one story at a time.
              </Typography>

              <Typography variant="h6" sx={{ ...styles.cardTitle, mt: 4 }}>
                Key Achievements
              </Typography>
              <List sx={styles.achievementsList}>
                {achievements.map((achievement, index) => (
                  <ListItem key={index} sx={styles.achievementItem}>
                    <ListItemIcon>
                      <CheckCircle sx={styles.achievementIcon} />
                    </ListItemIcon>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} sx={styles.cards}>
          <Grid container spacing={3}>
            {/* Vlogger Stats */}
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <People sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Vlog Community
                  </Typography>
                  <Typography>
                    100K+ Subscribers
                    <br />
                    Millions of views worldwide
                    <br />
                    Engaged travel family online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Adventures */}
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Work sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Adventures
                  </Typography>
                  <Typography>
                    38+ Countries Explored
                    <br />
                    Group Expeditions Hosted
                    <br />
                    Trekking, Scuba, Food & Culture Vlogs
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Collaborations */}
            <Grid item xs={12}>
              <Card sx={styles.card}>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <CheckCircle sx={styles.cardIcon} />
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Collaborations
                  </Typography>
                  <Typography>
                    Tourism Boards worldwide
                    <br />
                    Featured in magazines & media
                    <br />
                    Partnerships with eco-travel brands
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default About;
