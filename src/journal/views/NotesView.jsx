import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { SaveOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { ImageGallery } from '../components/index.js';

export const NotesView = () => {
    return (
        <Grid
            className="animate__animated animate__fadeIn animated__faster"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={ { mb: 1 } }
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="ligth">
                    { new Date().toLocaleDateString('en-us', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    }) }
                </Typography>
            </Grid>
            <Grid item>
                <Button sx={ { color: 'text.main', padding: 2 } }>
                    <SaveOutlined sx={ { fontSize: 30, mr: 1 } }/>
                    SAVE
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={ { border: 'none', mb: 1, color: 'text.main' } }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    sx={ { border: 'none', mb: 1, color: 'text.main' } }
                    minRows={ 5 }
                />

                <ImageGallery/>
            </Grid>
        </Grid>
    );
};