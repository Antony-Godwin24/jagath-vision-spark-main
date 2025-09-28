import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { PlayArrow, HowToReg } from "@mui/icons-material";
// Replace with your travel vlogger portrait
import vloggerPortrait from "../../../assets/vlogger-portrait.jpg";
import styles from "./style";

const Hero = () => {
  return (
    <Box sx={{ ...styles.heroSection, marginTop: "0" }} id="home">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={styles.heroContent}>
              <Typography variant="h1" sx={styles.heroTitle}>
                Explore the World<br />
                <span style={{ color: "#ffd700" }}>With Jay the Voyager</span>
              </Typography>
              <Typography variant="h5" sx={styles.heroSubtitle}>
                Discover adventure, culture, and local stories through immersive travel vlogs. Join a global community of explorers!
              </Typography>
              <Box sx={styles.heroButtons}>
                <Button
                  variant="contained"
                  sx={styles.primaryButton}
                  startIcon={<HowToReg />}
                  size="large"
                >
                  Subscribe on YouTube
                </Button>
                <Button
                  variant="outlined"
                  sx={styles.secondaryButton}
                  startIcon={<PlayArrow />}
                  size="large"
                >
                  Watch Latest Vlog
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <img
                src={vloggerPortrait}
                alt="Jay the Voyager"
                style={styles.profileImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sx={{marginLeft:'100px'}}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>38+</Typography>
                    <Typography sx={styles.statsLabel}>
                      Countries Explored
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>100K+</Typography>
                    <Typography sx={styles.statsLabel}>
                      Subscribers
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>200</Typography>
                    <Typography sx={styles.statsLabel}>
                      Vlogs Produced
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
};

export default Hero;
