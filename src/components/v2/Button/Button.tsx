import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { type ReactNode, type MouseEvent } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';
type Tone = 'brand' | 'neutral' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const variantToMui = {
  solid: 'contained',
  outline: 'outlined',
  ghost: 'text',
} as const;

const toneToColor = {
  brand: 'primary',
  neutral: 'inherit',
  danger: 'error',
} as const;

const sizeToMui = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

export interface ButtonProps {
  /** Visual style. */
  variant?: Variant;
  /** Intent / color tone. */
  tone?: Tone;
  /** Size. */
  size?: Size;
  /** When true, button is disabled and shows a spinner. */
  loading?: boolean;
  /** When true, stretches to fill the container width. */
  fullWidth?: boolean;
  /** Disabled state. */
  disabled?: boolean;
  /** Icon at the start of the button. */
  startIcon?: ReactNode;
  /** Icon at the end of the button. */
  endIcon?: ReactNode;
  /** HTML button type. */
  type?: 'button' | 'submit' | 'reset';
  /** If provided, renders as <a> instead of <button>. */
  href?: string;
  /** Click handler — only fires when not disabled and not loading. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export function Button({
  variant = 'solid',
  tone = 'brand',
  size = 'md',
  loading = false,
  fullWidth,
  disabled,
  startIcon,
  endIcon,
  type = 'button',
  href,
  onClick,
  children,
}: ButtonProps) {
  const isInteractive = !disabled && !loading;
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isInteractive) return;
    onClick?.(e);
  };

  return (
    <MuiButton
      variant={variantToMui[variant]}
      color={toneToColor[tone]}
      size={sizeToMui[size]}
      type={type}
      href={href}
      fullWidth={fullWidth}
      disabled={disabled}
      aria-busy={loading || undefined}
      onClick={handleClick}
      startIcon={loading ? undefined : startIcon}
      endIcon={loading ? undefined : endIcon}
      sx={{
        borderRadius: 999,
        paddingInline: size === 'lg' ? 3.5 : size === 'sm' ? 1.75 : 2.5,
        fontWeight: 600,
        opacity: loading ? 0.85 : 1,
      }}
    >
      {loading ? (
        <CircularProgress
          size={size === 'lg' ? 20 : size === 'sm' ? 14 : 16}
          thickness={5}
          color="inherit"
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </MuiButton>
  );
}
