export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 64,
} as const;

export const fontFamily = {
  sans: '"Inter", "Segoe UI", system-ui, sans-serif',
  display: '"Inter", "Segoe UI", system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, monospace',
} as const;

export const colors = {
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    300: '#a5b4fc',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    900: '#312e81',
  },
  violet: {
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
  },
  neutral: {
    0: '#ffffff',
    50: '#fafaf7',
    100: '#f4f3ee',
    200: '#e7e5df',
    300: '#d4d2cc',
    500: '#7a7770',
    700: '#3f3d39',
    800: '#26252a',
    900: '#15151a',
    950: '#0b0b10',
  },
  success: { 500: '#10b981', 600: '#059669' },
  danger: { 500: '#ef4444', 600: '#dc2626' },
  warning: { 500: '#f59e0b', 600: '#d97706' },
} as const;
