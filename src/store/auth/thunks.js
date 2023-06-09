import { checkingCredentials, login, logout } from './';
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle,
} from '../../firebase/providers.js';
import { clearNoteLogout } from '../journal/index.js';

export const startGoogleSignIn = () => async(dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if( !result.ok ) dispatch(logout(result.errorMessage));

    dispatch(login(result));
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => async(dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({ email, password, displayName });
    if( !result.ok ) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
};


export const startLoginWithEmailPassword = ({ email, password }) => async(dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if( !result.ok ) return dispatch(logout(result));
    dispatch(login(result));
};

export const startLogout = () => async(dispatch) => {

    await logoutFirebase();

    dispatch(clearNoteLogout());
    dispatch(logout());
};