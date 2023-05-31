import type {FC} from 'react';
import Head from 'next/head';
import Script from 'next/script';
import type {AppProps} from 'next/app';
import {CssBaseline, GlobalStyles} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from "react-redux";
import {Analytics} from '@vercel/analytics/react';

import store from '../src/store/store';
import theme from '../src/style/theme';

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
                <Analytics/>
                <Head>
                    {/* Basic Meta */}
                    <title>Rubber Duck Debugging Chatbot</title>
                    <meta name="description"
                          content="Rubber duck debugging chatbot. Powered by OpenAI and GPT-3. Sometimes just talking about your problem with present you with the solution. Use Rubber Duck Therapy for all your problem solving needs!"/>
                    <meta name="robots" content="index, follow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    {/* Open Graph  */}
                    <meta property="og:url" content="https://rubberducktherapy.app"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Rubber Duck Therapy"/>
                    <meta property="og:description"
                          content="Rubber duck debugging chatbot. Powered by OpenAI and GPT-3. Sometimes just talking about your problem will present you with the solution. Use Rubber Duck Therapy for all your problem solving needs!"/>
                    <meta property="og:image"
                          content="https://rubberducktherapy.app/rubber-duck-therapist-sm.png"/>
                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:description"
                          content="Rubber duck debugging chatbot. Powered by OpenAI and GPT-3. Sometimes just talking about your problem will present you with the solution. Use Rubber Duck Therapy for all your problem solving needs!"/>
                    <meta name="twitter:title" content="Rubber Duck Therapy"/>
                    <meta name="twitter:site" content="https://rubberducktherapy.app"/>
                    <meta name="twitter:image"
                          content="https://rubberducktherapy.app/rubber-duck-therapist-sm.png"/>
                    <meta name="twitter:creator" content="@funcsandglory"/>
                    {/* Favicon */}
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
