import type {FC} from 'react';
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
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );

}

export default App
