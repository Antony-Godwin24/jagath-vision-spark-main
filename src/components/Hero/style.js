export const heroStyles = (theme) => ({
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  
  backgroundImage: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to right, ${theme.palette.primary.main}E6, ${theme.palette.secondary.main}E6)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.1s ease-out'
  },
  
  overlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`
  },
  
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    px: 3,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    mb: 4,
    animation: 'fadeInUp 0.8s ease forwards',
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem'
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  },
  
  gradientText: {
    background: `linear-gradient(to right, ${theme.palette.accent.main}, ${theme.palette.primary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'glow 2s ease-in-out infinite alternate',
    '@keyframes glow': {
      from: {
        filter: 'brightness(1)'
      },
      to: {
        filter: 'brightness(1.2)'
      }
    }
  },
  
  subtitle: {
    fontSize: '1.25rem',
    color: theme.palette.primary.contrastText + 'E6',
    mb: 6,
    lineHeight: 1.6,
    animation: 'fadeInUp 0.8s ease forwards',
    opacity: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem'
    }
  },
  
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    justifyContent: 'center',
    animation: 'fadeInUp 0.8s ease forwards',
    opacity: 0,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  
  primaryButton: {
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.accent.contrastText,
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'medium',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.accent.dark,
      transform: 'scale(1.05)',
      boxShadow: '0 6px 25px rgba(0,0,0,0.2)'
    }
  },
  
  secondaryButton: {
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'medium',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      transform: 'scale(1.05)',
      borderColor: theme.palette.primary.contrastText
    }
  },
  
  // Floating Elements
  floatingElement1: {
    position: 'absolute',
    top: 80,
    left: 40,
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: theme.palette.accent.main + '33',
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
    bottom: 128,
    right: 64,
    width: 128,
    height: 128,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main + '1A',
    animation: 'float 6s ease-in-out infinite 2s',
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
    top: 160,
    right: 80,
    width: 64,
    height: 64,
    borderRadius: '50%',
    backgroundColor: theme.palette.accent.main + '4D',
    animation: 'float 6s ease-in-out infinite 4s',
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    }
  },
  
  // Scroll Indicator
  scrollIndicator: {
    position: 'absolute',
    bottom: 32,
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'bounce 2s infinite',
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateX(-50%) translateY(0)'
      },
      '40%': {
        transform: 'translateX(-50%) translateY(-10px)'
      },
      '60%': {
        transform: 'translateX(-50%) translateY(-5px)'
      }
    }
  },
  
  scrollContainer: {
    width: 24,
    height: 40,
    border: `2px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center'
  },
  
  scrollDot: {
    width: 4,
    height: 12,
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '2px',
    marginTop: 8,
    animation: 'pulse 2s infinite',
    '@keyframes pulse': {
      '0%, 100%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.5
      }
    }
  }
});