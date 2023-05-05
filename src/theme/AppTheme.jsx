import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { blueTheme } from './index.js';
import PropTypes from 'prop-types';

export const AppTheme = ( { children } ) => {
    return (
        <ThemeProvider theme={ blueTheme }>
            <CssBaseline/>
            { children }
        </ThemeProvider>
    );
};

AppTheme.propTypes = {
    children: PropTypes.node.isRequired,
};
