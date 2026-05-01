import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { type ComponentProps, type ReactNode } from 'react';

type MuiTextFieldProps = ComponentProps<typeof MuiTextField>;

export interface TextInputProps
  extends Pick<
    MuiTextFieldProps,
    'label' | 'placeholder' | 'disabled' | 'required' | 'fullWidth' | 'type' | 'multiline' | 'rows' | 'onChange' | 'value'
  > {
  /** Error message — when set, the field shows in error state */
  errorMessage?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Icon or element shown at the start of the input */
  startAdornment?: ReactNode;
  /** Icon or element shown at the end of the input */
  endAdornment?: ReactNode;
}

export function TextInput({
  errorMessage,
  helperText,
  startAdornment,
  endAdornment,
  ...props
}: TextInputProps) {
  return (
    <MuiTextField
      {...props}
      error={!!errorMessage}
      helperText={errorMessage || helperText}
      slotProps={{
        input: {
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
}
