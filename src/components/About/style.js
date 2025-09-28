export const aboutStyles = (theme) => ({
  section: {
    py: 10,
    px: 3,
    background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.card.main})`,
    [theme.breakpoints.up('md')]: {
      py: 15,
      px: 6
    }
  },
  
  container: {
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
  
  gridContainer: {
    display: 'grid',
    gap: 4,
    mb: 8,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 6,
      mb: 12
    }
  },
  
  bottomGrid: {
    display: 'grid',
    gap: 4,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  },
  
  card: {
    height: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-8px)'
    }
  },
  
  cardContent: {
    p: 4,
    [theme.breakpoints.up('md')]: {
      p: 6
    }
  },
  
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 4
  },
  
  paragraph: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    mb: 3,
    '&:last-of-type': {
      mb: 0
    }
  },
  
  list: {
    listStyle: 'none',
    padding: 0,
    spaceY: 2
  },
  
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    color: theme.palette.text.secondary,
    mb: 2,
    '&:last-of-type': {
      mb: 0
    }
  },
  
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    mt: 1.5,
    mr: 2,
    flexShrink: 0
  },
  
  sectionTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 4
  },
  
  chipContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  
  educationChip: {
    justifyContent: 'flex-start',
    p: 2,
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)',
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)'
    },
    width: '100%',
    height: 'auto',
    '& .MuiChip-label': {
      whiteSpace: 'normal',
      textAlign: 'left'
    }
  },
  
  competencyChip: {
    justifyContent: 'flex-start',
    p: 2,
    borderColor: theme.palette.primary.main + '20',
    color: theme.palette.text.primary,
    '&:hover': {
      borderColor: theme.palette.primary.main
    },
    width: '100%',
    height: 'auto',
    '& .MuiChip-label': {
      whiteSpace: 'normal',
      textAlign: 'left'
    }
  },
  
  // Animation styles
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
  },
  
  animateSlideInRight: {
    opacity: 0,
    transform: 'translateX(30px)',
    animation: 'slideInRight 0.6s ease forwards',
    '@keyframes slideInRight': {
      to: {
        opacity: 1,
        transform: 'translateX(0)'
      }
    }
  }
});