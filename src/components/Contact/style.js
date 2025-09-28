export const contactStyles = (theme) => ({
  section: {
    py: 10,
    px: 3,
    background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.action.hover})`,
    [theme.breakpoints.up('md')]: {
      py: 15,
      px: 6
    }
  },
  
  container: {
    maxWidth: '900px',
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
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  
  gridContainer: {
    display: 'grid',
    gap: 4,
    mb: 6,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 6,
      mb: 8
    }
  },
  
  card: {
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-8px)'
    }
  },
  
  cardContent: {
    p: 3,
    '&:last-child': {
      pb: 3
    }
  },
  
  cardTitlePrimary: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  
  cardTitleAccent: {
    color: theme.palette.accent.main,
    fontWeight: 'bold'
  },
  
  infoItem: {
    mb: 3,
    '&:last-child': {
      mb: 0
    }
  },
  
  badge: {
    mb: 1,
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.secondary,
    fontWeight: 'medium'
  },
  
  infoText: {
    color: theme.palette.text.secondary
  },
  
  organizationList: {
    mt: 1
  },
  
  orgItem: {
    color: theme.palette.text.secondary,
    mb: 0.5,
    '&:last-child': {
      mb: 0
    }
  },
  
  involveItem: {
    mb: 3,
    '&:last-child': {
      mb: 0
    }
  },
  
  involveTitle: {
    fontWeight: 'semibold',
    color: theme.palette.text.primary,
    mb: 1,
    fontSize: '1.1rem'
  },
  
  involveText: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem'
  },
  
  ctaContainer: {
    textAlign: 'center'
  },
  
  ctaCard: {
    background: `linear-gradient(to right, ${theme.palette.primary.light}08, ${theme.palette.accent.light}08)`,
    border: `1px solid ${theme.palette.primary.light}20`
  },
  
  ctaContent: {
    p: 4,
    [theme.breakpoints.up('md')]: {
      p: 6
    }
  },
  
  ctaTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2
  },
  
  ctaText: {
    color: theme.palette.text.secondary,
    mb: 4,
    lineHeight: 1.6
  },
  
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  },
  
  primaryButton: {
    backgroundColor: theme.palette.primary.main,
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'medium',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'scale(1.05)',
      boxShadow: '0 6px 25px rgba(0,0,0,0.2)'
    }
  },
  
  secondaryButton: {
    borderColor: theme.palette.accent.main,
    color: theme.palette.accent.main,
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'medium',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      color: theme.palette.accent.contrastText,
      transform: 'scale(1.05)',
      borderColor: theme.palette.accent.main
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