import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';

export const greyTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(165,168,179,0.36)',
        },
        secondary: {
            main: '#a5a8b3',
        },
        text: {
            fixedDark: '#000000',
            fixedLight: '#ffffff',

            changingPrimary: '#000000',
            changingSecondary: '#ffffff',
        },
        error: {
            main: red.A400,
        },
    },
});