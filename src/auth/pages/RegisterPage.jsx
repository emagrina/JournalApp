import { AuthLayout } from '../layout/AuthLayout.jsx';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hook/';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { Alert } from '@mui/material';

const formData = {
    email: '',
    password: '',
    displayName: '',
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const formValidations = {
    email: [ (value) => emailRegex.test(value), 'The email is not correct' ],
    password: [ (value) => value.length >= 6, 'Password must contain at least 6 characters' ],
    displayName: [ (value) => value.length >= 1, 'This field can not be blank' ],
};

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [ formSubmited, setFormSubmited ] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isChekingAuthentication = useMemo(() => status === 'cheking', [ status ]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,

    } = useForm(formData, formValidations);


    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true);

        if( !isFormValid ) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    };

    return (
        <AuthLayout title="Sign up">
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="displayName"
                autoComplete="name"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmited }
                helperText={ displayNameValid }
                autoFocus
            />
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
                error={ !!emailValid && formSubmited }
                helperText={ emailValid }
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmited }
                helperText={ passwordValid }
            />
            <FormControlLabel
                control={ <Checkbox value="remember" color="primary"/> }
                label="Remember me"
            />
            <Grid
                item
                xs={ 12 }
                display={ errorMessage ? '' : 'none' }
            >
                <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            <Button
                disabled={ isChekingAuthentication }
                type="submit"
                onClick={ onSubmit }
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
            >
                Sign Up
            </Button>
            <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                    <Link component={ RouterLink } to="/auth/login" variant="body2">
                        { 'You already have en account? Sign in' }
                    </Link>
                </Grid>
            </Grid>
        </AuthLayout>

    );
};