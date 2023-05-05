import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hook';
import { AuthLayout } from '../layout/AuthLayout.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Google from '@mui/icons-material/Google';
import { Alert, Typography } from '@mui/material';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticated = useMemo(() => status === 'checking', [ status ]);

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch(startLoginWithEmailPassword({email, password}));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Sign in">
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={ email }
                onChange={ onInputChange }
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={ password }
                onChange={ onInputChange }
                autoComplete="current-password"
            />
            <Grid
                item
                xs={ 12 }
                display={ errorMessage ? '' : 'none' }
            >
                <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Button
                disabled={ isAuthenticated }
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 1 } }
                onClick={ onGoogleSignIn }
            >

                <Typography sx={ { mr: 1 } }><Google/></Typography>Google
            </Button>
            <Button
                disabled={ isAuthenticated }
                type="submit"
                onClick={ onSubmit }
                fullWidth
                variant="contained"
                sx={ { mt: 1, mb: 2 } }
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                    <Link component={ RouterLink } to="/auth/register" variant="body2">
                        { 'Don\'t have an account? Sign Up' }
                    </Link>
                </Grid>
            </Grid>
        </AuthLayout>
    );
};