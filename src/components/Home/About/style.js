const styles = {
  section: {
    px: { xs: 1, sm: 3, md: 8 },
    py: { xs: 4, sm: 8, md: 10 },
    bgcolor: "#eaf6f6", // soft teal for travel vibe
  },

  sectionTitle: {
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
    fontWeight: "bold",
    textAlign: "center",
    mb: { xs: 3, sm: 4 },
    color: "#388e7c", // teal green, energetic and adventurous
    letterSpacing: 2,
    fontFamily: "Playfair Display, serif"
  },

  sectionSubtitle: {
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
    textAlign: "center",
    color: "#7a7a7a",
    mb: { xs: 3, sm: 4, md: 5 },
    fontStyle: "italic",
    fontFamily: "Open Sans, sans-serif"
  },

  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    boxShadow: "0 2px 8px rgba(56,142,124,0.10)",
    transition: "transform 0.3s",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // clean white for visual contrast
    borderRadius: 8,
    "&:hover": {
      transform: "translateY(-6px) scale(1.04)",
      boxShadow: "0 8px 22px rgba(56,142,124,0.22)"
    },
    my: 1
  },

  cards: {
    display: "flex",
    flexDirection: { xs: "column", md: "column" },
    alignItems: "center",
    gap: { xs: 3, md: 4 },
    width: "100%",
    py: { xs: 1, md: 0 }
  },

  cardIcon: {
    fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
    color: "#ff8c42", // warm orange for accent
    mb: 1
  },

  cardTitle: {
    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
    fontWeight: "bold",
    mb: 1,
    color: "#388e7c",
    letterSpacing: 1,
    fontFamily: "Playfair Display, serif"
  },

  bioText: {
    fontSize: { xs: "1rem", sm: "1.07rem", md: "1.15rem" },
    lineHeight: { xs: 1.65, sm: 1.74, md: 1.88 },
    color: "#434343",
    mb: { xs: 2, sm: 2.5, md: 3 },
    fontFamily: "Open Sans, sans-serif"
  },

  achievementsList: {
    mt: 2,
    pl: { xs: 0.5, sm: 2 }
  },

  achievementItem: {
    py: 0.5,
    px: { xs: 0, sm: 0.5 }
  },

  achievementIcon: {
    color: "#00b284", // bright green as travel success color
    fontSize: { xs: "1.3rem", sm: "1.6rem" }
  },
};

export default styles;
