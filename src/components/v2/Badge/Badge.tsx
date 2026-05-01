import Box from '@mui/material/Box';
import { type ReactNode } from 'react';

type BadgeTone = 'brand' | 'neutral' | 'success' | 'danger' | 'warning';
type BadgeVariant = 'soft' | 'solid';
type BadgeSize = 'sm' | 'md';

const toneStyles: Record<BadgeTone, { soft: { bg: string; fg: string }; solid: string }> = {
  brand:   { soft: { bg: 'primary.main',  fg: 'primary.main' }, solid: 'primary.main' },
  neutral: { soft: { bg: 'text.primary',  fg: 'text.primary' }, solid: 'text.primary' },
  success: { soft: { bg: 'success.main',  fg: 'success.main' }, solid: 'success.main' },
  danger:  { soft: { bg: 'error.main',    fg: 'error.main'   }, solid: 'error.main'   },
  warning: { soft: { bg: 'warning.main',  fg: 'warning.dark' }, solid: 'warning.main' },
};

export interface BadgeProps {
  /** Color/intent. */
  tone?: BadgeTone;
  /** 'soft' (tinted) or 'solid' (full color). */
  variant?: BadgeVariant;
  /** Size. */
  size?: BadgeSize;
  children: ReactNode;
}

export function Badge({
  tone = 'brand',
  variant = 'soft',
  size = 'md',
  children,
}: BadgeProps) {
  const style = toneStyles[tone];
  const isSoft = variant === 'soft';

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        paddingInline: size === 'sm' ? 1 : 1.25,
        paddingBlock: size === 'sm' ? 0.25 : 0.5,
        fontSize: size === 'sm' ? '0.6875rem' : '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        borderRadius: 999,
        ...(isSoft
          ? {
              bgcolor: style.soft.bg,
              color: style.soft.fg,
              opacity: 1,
              backgroundColor: undefined,
              backdropFilter: undefined,
            }
          : {
              bgcolor: style.solid,
              color: 'common.white',
            }),
      }}
      style={
        isSoft
          ? { backgroundColor: 'color-mix(in srgb, currentColor 14%, transparent)' }
          : undefined
      }
    >
      {children}
    </Box>
  );
}
