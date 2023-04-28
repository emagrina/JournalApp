import { BounceLoader } from 'react-spinners';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export const CheckingAuth = () => {
    return (
        <Grid container component="main" sx={ { height: '100vh' } }>
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
            <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
                <Box
                    sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    } }
                >
                    <BounceLoader color="#a5a8b3"/>
                </Box>
            </Grid>
        </Grid>
    );
};
