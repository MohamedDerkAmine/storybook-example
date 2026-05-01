import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';

type HeadingSize = 'display' | 'xl' | 'lg' | 'md' | 'sm';
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizeToVariant: Record<HeadingSize, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'> = {
  display: 'h1',
  xl: 'h2',
  lg: 'h3',
  md: 'h4',
  sm: 'h5',
};

const sizeOverride: Partial<Record<HeadingSize, { fontSize: string }>> = {
  display: { fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' },
};

export interface HeadingProps {
  /** The HTML tag to render. Defaults to <h2>. */
  as?: HeadingTag;
  /** The visual size. Independent from `as`. */
  size?: HeadingSize;
  /** Text alignment. */
  align?: 'start' | 'center' | 'end';
  /** When true, fills the text with the brand gradient. */
  gradient?: boolean;
  children: ReactNode;
}

export function Heading({
  as = 'h2',
  size = 'lg',
  align = 'start',
  gradient = false,
  children,
}: HeadingProps) {
  return (
    <Typography
      component={as}
      variant={sizeToVariant[size]}
      sx={{
        textAlign: align === 'start' ? 'left' : align === 'end' ? 'right' : 'center',
        margin: 0,
        ...sizeOverride[size],
        ...(gradient && {
          background: 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }),
      }}
    >
      {children}
    </Typography>
  );
}
