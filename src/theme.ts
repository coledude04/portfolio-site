/**
 * theme.ts — TypeScript constants mirroring CSS custom properties.
 *
 * Use these when you need theme values in JS/TS logic (e.g. canvas,
 * chart colours, dynamic inline styles). For everything else,
 * prefer the CSS variables in theme.css directly.
 */

export const colors = {
  primary:       'var(--color-primary)',
  primaryDark:   'var(--color-primary-dark)',
  primaryLight:  'var(--color-primary-light)',
  secondary:     'var(--color-secondary)',
  accent:        'var(--color-accent)',

  bg:            'var(--color-bg)',
  surface:       'var(--color-surface)',
  surface2:      'var(--color-surface-2)',
  surface3:      'var(--color-surface-3)',

  text:          'var(--color-text)',
  textMuted:     'var(--color-text-muted)',
  textFaint:     'var(--color-text-faint)',

  border:        'var(--color-border)',
  borderLight:   'var(--color-border-light)',

  success:       'var(--color-success)',
  warning:       'var(--color-warning)',
  error:         'var(--color-error)',
} as const;

export const fontFamily = {
  sans: 'var(--font-sans)',
  mono: 'var(--font-mono)',
} as const;

export const fontSize = {
  xs:   'var(--text-xs)',
  sm:   'var(--text-sm)',
  base: 'var(--text-base)',
  lg:   'var(--text-lg)',
  xl:   'var(--text-xl)',
  '2xl':'var(--text-2xl)',
  '3xl':'var(--text-3xl)',
  '4xl':'var(--text-4xl)',
  '5xl':'var(--text-5xl)',
  '6xl':'var(--text-6xl)',
} as const;

export const space = {
  1:  'var(--space-1)',
  2:  'var(--space-2)',
  3:  'var(--space-3)',
  4:  'var(--space-4)',
  5:  'var(--space-5)',
  6:  'var(--space-6)',
  8:  'var(--space-8)',
  10: 'var(--space-10)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  32: 'var(--space-32)',
} as const;

export const radius = {
  sm:   'var(--radius-sm)',
  md:   'var(--radius-md)',
  lg:   'var(--radius-lg)',
  xl:   'var(--radius-xl)',
  '2xl':'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const;

export const transition = {
  fast:   'var(--transition-fast)',
  base:   'var(--transition-base)',
  slow:   'var(--transition-slow)',
  spring: 'var(--transition-spring)',
} as const;

/** Resolved hex/rgb values for use in canvas, charts, etc. */
export const rawColors = {
  primary:      '#6366f1',
  primaryDark:  '#4f46e5',
  primaryLight: '#818cf8',
  secondary:    '#8b5cf6',
  accent:       '#06b6d4',
  bg:           '#0d0d14',
  text:         '#e2e8f0',
} as const;

export type ColorKey     = keyof typeof colors;
export type FontSizeKey  = keyof typeof fontSize;
export type SpaceKey     = keyof typeof space;
export type RadiusKey    = keyof typeof radius;
