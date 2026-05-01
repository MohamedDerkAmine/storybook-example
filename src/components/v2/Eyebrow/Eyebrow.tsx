import Box from '@mui/material/Box';
import { type ReactNode } from 'react';

type EyebrowTone = 'brand' | 'muted';

export interface EyebrowProps {
  /** Visual tone. */
  tone?: EyebrowTone;
  /** Show a small accent dot at the start. Defaults to true for 'brand'. */
  withDot?: boolean;
  children: ReactNode;
}

export function Eyebrow({ tone = 'brand', withDot, children }: EyebrowProps) {
  const showDot = withDot ?? tone === 'brand';
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        fontSize: '0.8125rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tone === 'brand' ? 'primary.main' : 'text.secondary',
      }}
    >
      {showDot && (
        <Box
          aria-hidden="true"
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: tone === 'brand' ? 'primary.main' : 'text.secondary',
          }}
        />
      )}
      {children}
    </Box>
  );
}
