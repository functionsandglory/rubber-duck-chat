import type {FC} from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import {CssBaseline, GlobalStyles} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from "react-redux";

import store from '../store/store';
import theme from '../style/theme';

const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles styles={{
                    'html, body, #__next': {
                        height: '100%',
                    },
                }}/>
                <CssBaseline/>
                <Head>
                    <title>Rubber Duck Therapy</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );

}

export default App
