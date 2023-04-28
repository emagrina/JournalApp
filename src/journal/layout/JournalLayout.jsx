import Box from '@mui/material/Box';
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

const drawerWidth = 240;
export const JournalLayout = ( { children } ) => {
    return (
        <Box
            className="animate__animated animate__fadeIn animated__faster"
            sx={ { display: 'flex' } }
        >
            <NavBar drawerWidth={ drawerWidth }/>
            <SideBar drawerWidth={ drawerWidth }/>

            <Box
                component="main"
                sx={ { flexGrow: 1, p: 3 } }
            >
                <Toolbar/>
                { children }
            </Box>

        </Box>
    );
};

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired,
};