import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { v2LightTheme, v2DarkTheme } from './theme/v2';
import { Hero } from './components/v2';

type Mode = 'light' | 'dark';

function App() {
  const [mode, setMode] = useState<Mode>('light');
  const theme = useMemo(() => (mode === 'light' ? v2LightTheme : v2DarkTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100svh', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 10 }}>
          <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
            <IconButton
              onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
              aria-label="Toggle theme"
              sx={{
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                '&:hover': { bgcolor: 'background.paper' },
              }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        <Hero
          eyebrow="What's new"
          badge={{ label: 'v2.0', tone: 'brand' }}
          title="Design systems that move at startup speed."
          highlight="startup speed"
          subtitle="Ship a coherent product without writing CSS twice. A composable React + MUI library tuned for teams that care about craft."
          primaryCta={{
            label: 'Get started',
            onClick: () => console.log('Get started clicked'),
          }}
          secondaryCta={{
            label: 'Read the docs',
            onClick: () => console.log('Read the docs clicked'),
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
