import MuiButton from '@mui/material/Button';
import { type ComponentProps } from 'react';

type MuiButtonProps = ComponentProps<typeof MuiButton>;

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    'variant' | 'color' | 'size' | 'disabled' | 'startIcon' | 'endIcon' | 'onClick' | 'fullWidth' | 'type' | 'href'
  > {
  /** The button label text */
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return <MuiButton {...props}>{label}</MuiButton>;
}
