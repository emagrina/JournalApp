import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/index.js';

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    };

    return (
        <AppBar
            position="fixed"
            sx={ {
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` },
                backgroundColor: 'primary.main',
            } }
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={ { mr: 2, display: { sm: 'none' } } }
                >
                    <MenuIcon/>
                </IconButton>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component="div" sx={ { flexGrow: 1, color: 'text.changingPrimary' } }>
                        JournalApp
                    </Typography>
                    <Button
                        sx={{ color: 'text.changingPrimary'}}
                        onClick={ onLogout }
                    >
                        <LogoutIcon/>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

NavBar.propTypes = {
    drawerWidth: PropTypes.number,
};
