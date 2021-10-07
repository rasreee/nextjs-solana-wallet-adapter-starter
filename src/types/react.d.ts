/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react';
import { CSSProp } from 'styled-components';
import { SizeProps, SpaceProps, StylesProps } from 'styled-system';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
