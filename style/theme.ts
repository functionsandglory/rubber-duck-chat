import { createTheme } from '@mui/material/styles';
import { yellow, grey, deepPurple } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: yellow[100],
        },
        secondary: {
            main: deepPurple[900],
        }
    },
});

export const neutralInputTheme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: grey[500],
        },
    },
});

export default mainTheme;