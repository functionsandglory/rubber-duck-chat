import { createTheme } from '@mui/material/styles';
import { yellow, grey, deepPurple } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: yellow[100],
        },
        secondary: {
            main: deepPurple[900],
        }
    },
});

console.log(mainTheme);

export const neutralInputTheme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: grey[500],
        },
    },
});

export default mainTheme;