import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { TurnedInNot } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <Box
            component="nav"
            sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
        >
            <Drawer
                variant="permanent"
                open
                sx={ {
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                } }
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo' ].map(text => (
                            <ListItem key={ text } sablep="true">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText sexondary={ '' }/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};

SideBar.propTypes = {
    drawerWidth: PropTypes.number,
};
