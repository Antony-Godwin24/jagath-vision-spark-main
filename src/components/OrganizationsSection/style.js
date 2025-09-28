export const organizationsStyles = (theme) => ({
  section: {
    position: 'relative',
    py: 10,
    px: 3,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      py: 15,
      px: 6
    }
  },
  
  backgroundImage: {
    position: 'absolute',
    inset: 0,
    opacity: 0.05,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  
  overlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to bottom, ${theme.palette.card.main}80, ${theme.palette.background.default}CC)`
  },
  
  container: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  
  header: {
    textAlign: 'center',
    mb: 8,
    [theme.breakpoints.up('md')]: {
      mb: 12
    }
  },
  
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 4,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  
  gradientText: {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  
  subtitle: {
    fontSize: '1.125rem',
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  
  organizationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  
  card: {
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.5s ease',
    '&:hover': {
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-12px)'
    }
  },
  
  cardRight: {
    [theme.breakpoints.up('md')]: {
      mr: 6
    }
  },
  
  cardLeft: {
    [theme.breakpoints.up('md')]: {
      ml: 6
    }
  },
  
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    flexWrap: 'wrap'
  },
  
  orgName: {
    fontWeight: 'bold',
    color: theme.palette.text.primary
  },
  
  badge: {
    fontWeight: 'medium'
  },
  
  cardContent: {
    p: 4,
    '&:last-child': {
      pb: 4
    }
  },
  
  description: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    mb: 4,
    fontSize: '1.1rem'
  },
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 3,
    mb: 4,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  
  statItem: {
    textAlign: 'center',
    p: 3,
    borderRadius: 2,
    backgroundColor: theme.palette.action.hover
  },
  
  statValue: {
    fontWeight: 'bold',
    mb: 1
  },
  
  statLabel: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem'
  },
  
  highlightsSection: {
    mb: 4
  },
  
  highlightsTitle: {
    fontWeight: 'semibold',
    color: theme.palette.text.primary,
    mb: 2
  },
  
  highlightsGrid: {
    display: 'grid',
    gap: 2,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  
  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    mt: 0.75,
    mr: 2,
    flexShrink: 0
  },
  
  highlightText: {
    color: theme.palette.text.secondary
  },
  
  missionBox: {
    backgroundColor: theme.palette.action.selected,
    p: 3,
    borderRadius: 2,
    mb: 4
  },
  
  missionTitle: {
    fontWeight: 'semibold',
    color: theme.palette.text.primary,
    mb: 1
  },
  
  missionText: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic'
  },
  
  learnMoreButton: {
    borderWidth: 2,
    fontWeight: 'medium',
    '&:hover': {
      borderWidth: 2,
      transform: 'scale(1.05)'
    }
  },
  
  // Color Styles
  primaryColor: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },
  
  accentColor: {
    color: theme.palette.accent.main,
    borderColor: theme.palette.accent.main,
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      color: theme.palette.accent.contrastText
    }
  },
  
  secondaryColor: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  },
  
  // Animation
  animateFadeInUp: {
    opacity: 0,
    transform: 'translateY(30px)',
    animation: 'fadeInUp 0.6s ease forwards',
    '@keyframes fadeInUp': {
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  }
});