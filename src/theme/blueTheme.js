import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#17263B',
        },
        secondary: {
            main: '#69FEFE',
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