import type {FC} from 'react';
import type {AppProps} from 'next/app';
import {CssBaseline, GlobalStyles} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';
console.log(theme);
const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={{
                'html, body, #__next': {
                    height: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                }
            }}/>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );

}

export default App
