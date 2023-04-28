import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CheckingAuth } from '../../ui/index.js';

export const AuthLayout = ({ children, title = '' }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid
            container
            component="main"
            sx={ { height: '100vh' } }
        >
            <CssBaseline/>
            <Grid
                item
                xs={ false }
                sm={ 4 }
                md={ 7 }
                sx={ {
                    backgroundImage: 'url(https://images.unsplash.com/photo-1513542992587-cd39ba97057c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'primary.main',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } }
            />
            <Grid
                className="animate__animated animate__fadeIn animated__faster"
                item
                xs={ 12 } sm={ 8 } md={ 5 }
                component={ Paper }
                elevation={ 6 }
                square
            >
                <Box
                    sx={ {
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    } }
                >
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        { title }
                    </Typography>
                    <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
                        { children }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};