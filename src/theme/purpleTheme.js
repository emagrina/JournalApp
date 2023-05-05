import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254',
        },
        secondary: {
            main: '#543884',
        },
        text: {
            fixedDark: '#000000',
            fixedLight: '#ffffff',

            changingPrimary: '#ffffff',
            changingSecondary: '#000000',
        },
        error: {
            main: red.A400,
        },
    },
});