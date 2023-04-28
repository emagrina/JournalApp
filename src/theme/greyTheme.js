import { createTheme } from '@mui/material';
import red from '@mui/material/colors/red';

export const greyTheme = createTheme({
    palette: {
        primary: {
            main: '#f8f9fa',
        },
        secondary: {
            main: '#d1d3d4',
        },
        text: {
            main: '#000000',
        },
        error: {
            main: red.A400,
        },
    },
});