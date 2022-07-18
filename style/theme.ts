import { createTheme } from '@mui/material/styles';
import { yellow, grey } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: yellow[100],
        },
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