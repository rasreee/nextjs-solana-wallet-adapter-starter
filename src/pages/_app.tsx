import { GlobalStyle, theme, WalletAdapterStyles } from '@styles';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const WalletConnectionProvider = dynamic(() => import('../ui/contexts/WalletConnectionProvider'), {
  ssr: false
});

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WalletAdapterStyles />
      <WalletConnectionProvider>
        <Component {...pageProps} />
      </WalletConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
