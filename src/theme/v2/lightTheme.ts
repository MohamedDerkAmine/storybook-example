import { createTheme } from '@mui/material/styles';
import { colors, fontFamily, radius } from './tokens';

const v2LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.indigo[600],
      light: colors.indigo[500],
      dark: colors.indigo[700],
      contrastText: colors.neutral[0],
    },
    secondary: {
      main: colors.violet[500],
      light: colors.violet[400],
      dark: colors.violet[600],
      contrastText: colors.neutral[0],
    },
    error: { main: colors.danger[500], dark: colors.danger[600] },
    success: { main: colors.success[500], dark: colors.success[600] },
    warning: { main: colors.warning[500], dark: colors.warning[600] },
    background: {
      default: colors.neutral[50],
      paper: colors.neutral[0],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[500],
    },
    divider: colors.neutral[200],
  },
  typography: {
    fontFamily: fontFamily.sans,
    h1: { fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 },
    h2: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h3: { fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.55 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0' },
  },
  shape: { borderRadius: radius.lg },
});

export default v2LightTheme;
