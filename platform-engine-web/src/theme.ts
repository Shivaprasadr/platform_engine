// Centralized theme for Unknown platform
export const theme = {
  colors: {
    background: '#F3F3F3',
    surface: '#FFFFFF',
    accent: '#4A4A4A',
    accentLight: '#D1D1D1',
    accentDark: '#1A1A1A',
    textPrimary: '#1A1A1A',
    textSecondary: '#4A4A4A',
    border: '#D1D1D1',
    shadow: 'rgba(0,0,0,0.08)',
    gradient: 'linear-gradient(135deg, #F3F3F3 0%, #E8E8E8 100%)',
    gradientDark: 'linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 100%)',
    buttonPrimary: 'linear-gradient(135deg, #1A1A1A, #4A4A4A)',
    buttonSecondary: 'transparent',
    buttonBorder: '#1A1A1A',
  },
  spacing: {
    container: 'max-width: 1400px; margin: 0 auto;',
    sectionPadding: '4rem 0',
    cardPadding: '2rem',
    cardRadius: '2rem',
    cardShadow: '0 4px 16px rgba(0,0,0,0.08)',
  },
  font: {
    headline: 'font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900;',
    subheadline: 'font-size: clamp(1.25rem, 3vw, 2rem); font-weight: 600;',
    cardTitle: 'font-size: 1.5rem; font-weight: 700;',
    cardText: 'font-size: 1rem; color: #4A4A4A;',
  }
};
