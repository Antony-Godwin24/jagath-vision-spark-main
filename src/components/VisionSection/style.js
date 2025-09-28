export const visionStyles = (theme) => ({
  section: {
    position: 'relative',
    py: 10,
    px: 3,
    overflow: 'hidden',
    backgroundColor: '#f8f9fa', // Light background to ensure black text is visible
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
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}20, ${theme.palette.primary.main}20)`
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
    color: '#000000', // Changed to black
    mb: 4,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  
  accentText: {
    color: theme.palette.accent.main || '#1976d2' // Fallback color
  },
  
  quote: {
    fontSize: '1.25rem',
    color: '#333333', // Dark gray instead of white
    maxWidth: '1200px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  
  idealsGrid: {
    display: 'grid',
    gap: 4,
    mb: 8,
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  },
  
  idealCard: {
    backgroundColor: '#ffffff', // White background for cards
    backdropFilter: 'blur(10px)',
    border: `1px solid #e0e0e0`, // Light gray border
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5', // Light gray on hover
      transform: 'translateY(-8px) scale(1.05)',
      boxShadow: '0 8px 15px rgba(0,0,0,0.2)'
    }
  },
  
  idealContent: {
    p: 4,
    textAlign: 'center',
    '&:last-child': {
      pb: 4
    }
  },
  
  icon: {
    fontSize: '3rem',
    mb: 3,
    animation: 'float 3s ease-in-out infinite',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-10px)'
      }
    }
  },
  
  idealTitle: {
    fontWeight: 'bold',
    color: '#000000', // Black text
    mb: 2,
    fontSize: '1.25rem'
  },
  
  idealDescription: {
    color: '#666666', // Dark gray text
    lineHeight: 1.6
  },
  
  missionContainer: {
    textAlign: 'center',
    animation: 'fadeInUp 0.6s ease forwards',
    opacity: 0
  },
  
  missionCard: {
    backgroundColor: '#ffffff', // White background
    backdropFilter: 'blur(10px)',
    border: `1px solid #e0e0e0`,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  
  missionContent: {
    p: 6,
    [theme.breakpoints.up('md')]: {
      p: 8
    }
  },
  
  missionTitle: {
    fontWeight: 'bold',
    color: '#000000', // Black text
    mb: 4,
    fontSize: '2rem'
  },
  
  missionQuote: {
    fontSize: '1.25rem',
    color: '#333333', // Dark gray text
    lineHeight: 1.6,
    fontStyle: 'italic',
    mb: 4
  },
  
  accentLine: {
    height: 4,
    width: 128,
    backgroundColor: theme.palette.accent.main || '#1976d2',
    margin: '0 auto',
    borderRadius: 2
  },
  
  // Floating Elements
  floatingElement1: {
    position: 'absolute',
    top: 80,
    left: 40,
    width: 128,
    height: 128,
    borderRadius: '50%',
    backgroundColor: theme.palette.accent.main ? theme.palette.accent.main + '33' : 'rgba(25, 118, 210, 0.2)',
    animation: 'float 6s ease-in-out infinite',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    }
  },
  
  floatingElement2: {
    position: 'absolute',
    bottom: 80,
    right: 64,
    width: 96,
    height: 96,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main ? theme.palette.primary.main + '33' : 'rgba(156, 39, 176, 0.2)',
    animation: 'float 6s ease-in-out infinite 3s',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    }
  },
  
  floatingElement3: {
    position: 'absolute',
    top: '50%',
    right: 40,
    width: 64,
    height: 64,
    borderRadius: '50%',
    backgroundColor: theme.palette.accent.main ? theme.palette.accent.main + '4D' : 'rgba(25, 118, 210, 0.3)',
    animation: 'float 6s ease-in-out infinite 1.5s',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    }
  },
  
  // Animations
  animateScaleIn: {
    opacity: 0,
    transform: 'scale(0.8)',
    animation: 'scaleIn 0.6s ease forwards',
    '@keyframes scaleIn': {
      to: {
        opacity: 1,
        transform: 'scale(1)'
      }
    }
  },
  
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