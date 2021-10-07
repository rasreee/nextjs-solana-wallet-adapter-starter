/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { UserConfig } from 'react-match-breakpoints';
import { BreakpointsConfig } from '@styles';

declare module 'react-match-breakpoints' {
  export interface UserConfig extends BreakpointsConfig {}
}
