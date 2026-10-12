// Design tokens — single source of truth for spacing, colors, typography, etc.
// Components reference these (via CSS variables) instead of hardcoding values.

export const tokens = {
  colors: {
    background: '#ffffff',
    surface: '#f9f9f9',
    border: '#dddddd',
    text: '#111111',
    textMuted: '#666666',
    primary: '#007acc',
    error: '#d32f2f',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
  },
} as const;

export type Tokens = typeof tokens;
