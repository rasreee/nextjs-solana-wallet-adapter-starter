export const breakpoint = {
  mobile: {
    small: 'screen and (max-width: 320px)',
    big: 'screen and (max-width: 480px)'
  },
  tablet: { small: 'screen and (min-width: 481px)', big: 'screen and (max-width: 768px)' },
  screen: 'only screen and (min-width: 769px)'
} as const;

export type BreakpointsConfig = typeof breakpoint;
