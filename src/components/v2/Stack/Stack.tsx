import Box from '@mui/material/Box';
import { type ReactNode, type ElementType } from 'react';

type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around';

const alignMap: Record<StackAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};

const justifyMap: Record<StackJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
};

export interface StackProps {
  /** Layout direction. */
  direction?: 'row' | 'column';
  /** Gap between children, in theme spacing units (1 = 8px). */
  gap?: number;
  /** Cross-axis alignment. */
  align?: StackAlign;
  /** Main-axis alignment. */
  justify?: StackJustify;
  /** Allow items to wrap to a new line (only meaningful for row). */
  wrap?: boolean;
  /** Render as a different HTML tag. */
  as?: ElementType;
  children: ReactNode;
}

export function Stack({
  direction = 'column',
  gap = 2,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  as,
  children,
}: StackProps) {
  return (
    <Box
      component={as ?? 'div'}
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap,
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify],
        flexWrap: wrap ? 'wrap' : 'nowrap',
      }}
    >
      {children}
    </Box>
  );
}
