import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
    return (
        <Grid
            className="animate__animated animate__fadeIn animated__faster"
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={ 0 }
            sx={ { minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2 } }
        >
            <Grid item
                  className="box-shadow"
                  xs={ 12 }
            >
                <StarOutline sx={ { fontSize: 100, color: 'text.main' } }/>
            </Grid>
            <Grid item
                  className="box-shadow"
                  xs={ 12 }
            >
                <Typography color="text.main" variant="h5">Select or create an entry</Typography>
            </Grid>
        </Grid>
    );
};