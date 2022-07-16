import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: yellow[200],
        },
    },
});

export default theme;