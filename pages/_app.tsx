import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';


require('../styles/globals.css');
require('../wallet-adapter-react-ui/styles.css')

const WalletConnectionProvider = dynamic(() => import('../components/WalletConnectionProvider'), {
    ssr: false,
});

function App({ Component, pageProps }: AppProps): ReactElement {
    return (
        <WalletConnectionProvider>
            <Component {...pageProps} />
        </WalletConnectionProvider>
    );
}

export default App;
