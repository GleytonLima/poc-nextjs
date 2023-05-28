import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@govbr-ds/core/dist/core.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';
config.autoAddCss = false;

import { useEffect } from 'react';
import Layout from '../components/Layout';
import NoSsr from '../components/NoSsr';
import store from '../store';

export default function LiraaApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const initTerminal = async () => {
            await import('@govbr-ds/core/dist/core-init.js');
        };
        initTerminal();
    }, []);
    return (
        <NoSsr>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </NoSsr>
    );
}
