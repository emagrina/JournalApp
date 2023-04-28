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
            main: '#ffffff',
        },
        error: {
            main: red.A400,
        },
    },
});